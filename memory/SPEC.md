# BACT IT website specification

## Purpose

Responsive public website for BACT IT presenting business technology services,
professional IT training, study-abroad guidance, industries served, and a saved
contact enquiry flow.

## Main routes

- `/` — homepage, service overview, differentiators, industries, and contact CTA
- `/about` — BACT IT overview and supplied differentiators
- `/services` — all seven service areas
- `/services/:slug` — service detail and contextual enquiry link; a sticky "Back to Services"
  button (only back control, no breadcrumbs/tab strip) links to `/#services`, and SiteShell's
  scroll handler scrolls to the Home services section (plain route changes scroll to top)
- `/flagship-product` — BAIDA (Business Automation & AI Integration For Data
  Analytics) flagship product: description + six capabilities, enquiry CTA
- `/industries` — industries served
- `/courses` — professional training tracks with enquiry links
- `/study-abroad` — Canada and Europe guidance information and enquiry links
- `/portfolio` — capabilities framework; no fabricated projects or testimonials
- `/contact` — contact details and enquiry form

## Data and backend

All page content lives in `frontend/src/lib/site-data.ts`: services (each with
`title` display name, sub-items with description + features, and a
`customization` note shown on `/services/:slug`), industries (6, with
descriptions), offices (Bangladesh / USA / Australia, shown in footer and
Contact), socialLinks (Facebook, Instagram, LinkedIn in footer), clients
("Working with" on Home) and partners (Microsoft, Dell, Dahua on Home; text tiles,
no logo files supplied), testimonials (Home + `/courses`), jobPlacement
(`/courses`), leadership ("Authority" section on `/about`). All of this copy was
supplied by the user.

- `InquiryCreate`: full_name, organization, email, phone, service, message.
- `InquiryCreated`: id, received, created_at.
- `POST /api/inquiries` validates and stores the enquiry in MongoDB. Submitted
  details are not exposed in a public listing endpoint.
- Enquiry service values match the frontend `ServiceInterest` type.

## Key user flow

Branding: official Bact IT logos live in `frontend/public/logo-horizontal.png`
(header/footer) and `logo-stacked.png` (homepage brand intro). The full name
"Business Application & Communication Technology" appears in the homepage hero,
brand intro, header (wide screens) and footer.

Homepage Service Finder (`components/ServiceFinder.tsx`, client-only, data in
`lib/site-data.ts` `finderAudiences`): step 1 audience (organization / learner /
student) → step 2 goal → step 3 recommendation with "Send an enquiry" link to
`/contact?service=<ServiceInterest>` and an explore link.

Visitors browse a service, training track, or study-abroad option; follow a CTA
to `/contact` (service interest preselected when available); submit the enquiry;
then see an on-page confirmation and toast.

## AI chat assistant

Floating "Chat with us" button on every page (`components/ChatWidget.tsx`, mounted
in SiteShell). EN / বাংলা toggle translates the scripted questions.
1. Scripted questions (client-side validated): name → phone → email → purpose
   (service chips or free text → "General enquiry").
2. `POST /api/chat/sessions` {full_name, phone, email, service, purpose} → stores an
   enquiry in `inquiries` (source "chat") + a `chat_sessions` doc → {session_id}.
   Bot confirms "we'll get back to you shortly". If a service/BAIDA chip was picked,
   the bot then lists every option under it (training shows all courses) as
   tap-to-ask buttons ("Tell me more about X").
3. `POST /api/chat/sessions/{id}/messages` {text} → SSE stream of `data: {"delta"}`
   frames then `{"done": true}` (or `{"error"}`). Claude Opus 5.5 (`claude-opus-5-5`)
   via Emergent LLM key (`EMERGENT_LLM_KEY` in backend/.env); system prompt in
   `backend/lib/bact_knowledge.py` (answers only BACT IT topics, same language as
   visitor, never invents prices/schedules/guarantees). History in `chat_messages`;
   max 40 user messages per session (429); unknown session → 404.

## Roles and authentication

Public site and chat need no login. Staff inbox at `/admin` (footer "Team login")
uses Emergent-managed auth (Clerk; email+password and Google; pages `/sign-in`,
`/sign-up`; ClerkAuthProvider wraps only these three routes). Backend
`routers/admin.py`: `require_user` (Clerk Bearer token) → `current_staff` caches the
user's verified emails in `users` → admin iff an email is in `ADMIN_EMAIL`
(checked every request). Endpoints (admin only, else 403; no token 401):
GET /api/admin/me, GET /api/admin/inquiries, PATCH /api/admin/inquiries/{id}
{status: new|contacted|closed}, GET /api/admin/chats/{session_id},
GET /api/admin/inquiries.csv. Inbox: status filters with counts, table, detail
sheet with chat transcript, spreadsheet download. Chat widget hidden on staff pages.

Service pages: Call Bangladesh / USA / Australia buttons + WhatsApp
(wa.me/8801990937354). Footer contact: WhatsApp logo + number.

## Content constraints

Use supplied service categories, training areas, contact email, and website.
Do not invent portfolio evidence, client claims, endorsements, schedules,
syllabi, admissions details, or study-abroad guarantees. Flagship product content
(BAIDA) is the user-supplied copy only.
## SEO
- `frontend/src/lib/seo.ts` holds per-route title/description/keywords (Bangladesh-first, then USA/Australia,
  some Bangla phrases), canonical base `https://www.bactit.com`, Organization + Service JSON-LD.
- `components/RouteSeo.tsx` (mounted in SiteShell) upserts title, meta description/keywords/robots, canonical,
  Open Graph/Twitter tags and JSON-LD on each route change. Staff routes (/admin, /sign-in, /sign-up) are noindex.
- `index.html` carries the Home defaults for crawlers that don't run JS; `public/robots.txt` and
  `public/sitemap.xml` (16 URLs) are static — add new routes/service slugs to the sitemap by hand.

## Training page (/courses)
- `trainingTracks` in site-data.ts: 9 tracks (9th = Microsoft Office), each with heading, courses, why, learn[], benefits[], careers[], keywords[].
- Rendered as an accordion (first track open; several can be open): heading button → panel with
  "Why learn", "What you will learn", "Benefits", "Career opportunities", course keyword chips and an enquiry button.
  Panel content stays in the DOM (inert when collapsed) so search engines can read it.
- `/services/it-training` keeps its short list and links to /courses for full details.

## Service cards
- Each service in `services` (site-data.ts) has `image` + `imageAlt` (Unsplash/Pexels photo); ServiceCard shows it as a
  16:9 header with the 2-letter index chip overlaid. The old symbol `icon` field was removed.

## Training track pages (/courses/:slug)
- Each `trainingTracks` entry has `slug` (keyword-rich, e.g. `networking-ccna-ccnp-training`), `seoTitle`, and
  `courseList` (28 courses total): name, hours, span (e.g. "8 weeks"), level, SEO description. Durations are
  industry-standard guides, not confirmed client schedules.
- `pages/TrainingTrackPage.tsx`: sticky "Back to Training" (→ `/courses#training-tracks`), PageIntro (h1 = heading),
  shared `components/TrainingTrackDetails.tsx` (courses & duration cards, why, learn, benefits, careers, keywords,
  enquiry), job placement card, links to the other 7 tracks. Unknown slug → not-found + noindex.
- The /courses accordion renders the same TrainingTrackDetails (h4 headings) plus an "Open full course page" link.
- SEO: per-track title/description/keywords in `lib/seo.ts` + Course JSON-LD with `hasPart` courses (timeRequired).
  The sitemap lists all 9 track URLs.

## Software & AI solutions (lib/solutions-data.ts)
- `softwareSolutions` (11 categories incl. dedicated Learning Management Software (LMS), all available now) and `aiSolutions` (12 features; `availability`
  "Available now" | "Custom project": custom = document processing, predictive analytics, RAG assistants, AI agents).
  Each item: slug, title, heading, seoTitle, short, what, why, features, advantages, problems/audiences (software)
  or example (AI), keywords, icon. `solutionGroups` holds section copy + CTA ("Discuss Your Software Requirements" /
  "Request a Consultation") + enquiry service value; `responsibleAi` holds 5 principles.
- /services/software-solutions and /services/ai-solutions render `SolutionAccordion` (id="solutions") instead of the
  generic item cards, then `WhyChoose`; AI page also renders `ResponsibleAi`.
- `/services/:group/:slug` → `pages/SolutionPage.tsx` (Back to {group} → `/services/<group>#solutions`).
  SEO title/description/keywords + Service JSON-LD in lib/seo.ts; all 23 URLs in the sitemap (47 total).
- "Why Choose BACT IT?" = `components/WhyChoose.tsx` using the 9 `differentiators` in site-data (Home + both pages above).
- Chat bot knowledge (backend/lib/bact_knowledge.py) lists all software categories, AI availability,
  responsible AI and the Why Choose points.
- Visual edit: "VBA" renamed to "VBA Excel" across training content.

## About page: founder message + leader photos
- `Leader` has optional `photo` (path in frontend/public, e.g. /leadership/jishan.jpg) and `featured`.
  `components/LeaderAvatar.tsx` shows the photo or falls back to initials. No photos supplied yet.
- The separate founder feature section was removed (user: it repeated). Each leader card shows a short message, in order Chairman → Vice-Chairman → Co-Founder → Founder & CEO; all four messages were rewritten short and distinct on request (business, new generation, future technology).
- Clients: the "Banking sector" tile is unchanged; real bank names have not been provided.

## IT Training service page (/services/it-training)
- Renders `components/TrainingCatalog.tsx` instead of generic cards: sticky jump chips, then each of the 9 tracks
  stacked vertically (heading, why learn the track, every course via `CourseExplainer`, career paths, track page + enquiry).
- Each `TrackCourse` now has `why`, `topics[]`, `audience` (31 courses). Programming gained C#; Database Administration
  is now SQL & Database Fundamentals, Oracle Database Administration and SQL Server Administration.
- Track pages (/courses/:slug) use the same vertical CourseExplainer (`detailedCourses`); the /courses accordion keeps compact cards.
- SEO: it-training keywords list every major course; its Service JSON-LD carries an OfferCatalog of all courses.
