# BACT IT website specification

## Purpose

Responsive public website for BACT IT presenting business technology services,
professional IT training, study-abroad guidance, industries served, and a saved
contact enquiry flow.

## Main routes

- `/` — homepage, service overview, differentiators, industries, and contact CTA
- `/about` — BACT IT overview and supplied differentiators
- `/services` — all seven service areas
- `/services/:slug` — service detail and contextual enquiry link
- `/industries` — industries served
- `/courses` — professional training tracks with enquiry links
- `/study-abroad` — Canada and Europe guidance information and enquiry links
- `/portfolio` — capabilities framework; no fabricated projects or testimonials
- `/contact` — contact details and enquiry form

## Data and backend

- `InquiryCreate`: full_name, organization, email, phone, service, message.
- `InquiryCreated`: id, received, created_at.
- `POST /api/inquiries` validates and stores the enquiry in MongoDB. Submitted
  details are not exposed in a public listing endpoint.
- Enquiry service values match the frontend `ServiceInterest` type.

## Key user flow

Visitors browse a service, training track, or study-abroad option; follow a CTA
to `/contact` (service interest preselected when available); submit the enquiry;
then see an on-page confirmation and toast.

## Roles and authentication

The public brochure site and contact form do not require authentication. There is
no admin dashboard or portal in this phase.

## Content constraints

Use supplied service categories, training areas, contact email, and website.
Do not invent portfolio evidence, client claims, endorsements, schedules,
syllabi, admissions details, or study-abroad guarantees. Flagship product area
is not populated because no product details were supplied.