import { useEffect, useRef, useState, type FormEvent } from "react";
import { useMutation } from "@tanstack/react-query";
import { MessageCircle, SendHorizontal, X } from "lucide-react";
import { apiPost, apiStream } from "@/lib/api";
import type { ChatSessionCreate, ChatSessionCreated, ChatStreamEvent } from "@/lib/chat";
import type { ServiceInterest } from "@/lib/inquiries";
import { services } from "@/lib/site-data";

type Lang = "en" | "bn";
type Step = "name" | "phone" | "email" | "purpose" | "submitting" | "chat";

const copy = {
  en: {
    intro: "Hi! I’m the BACT IT assistant. Before we start, may I have your name?",
    askPhone: "Thanks, {name}! What’s the best phone number to reach you?",
    askEmail: "And your email address?",
    askPurpose: "What are you contacting us about? Pick an option below or type your own.",
    done: "Thank you, {name}! Your details have been sent to our team and we’ll get back to you shortly. Meanwhile, ask me anything about BACT IT’s services.",
    badName: "Please enter your name.",
    badPhone: "Please enter a valid phone number.",
    badEmail: "That email doesn’t look right. Please try again.",
    submitError: "Sorry, we couldn’t send your details. Please try again or email info@bactit.com.",
    aiError: "Sorry, I couldn’t answer just now. Please try again in a moment.",
    placeholder: "Type your message…",
    placeholderName: "Your name",
    placeholderPhone: "Phone number",
    placeholderEmail: "Email address",
    subtitle: "AI assistant · English & বাংলা",
    note: "AI answers can be imperfect. Our team will confirm details with you.",
    launcher: "Chat with us",
    suggestions: ["What services do you offer?", "Tell me about BAIDA", "Which IT courses are available?"],
  },
  bn: {
    intro: "হ্যালো! আমি BACT IT সহকারী। শুরু করার আগে, আপনার নামটি বলবেন?",
    askPhone: "ধন্যবাদ, {name}! আপনার সাথে যোগাযোগের জন্য ফোন নম্বরটি দিন।",
    askEmail: "আপনার ইমেইল ঠিকানাটি দিন।",
    askPurpose: "আপনি কী বিষয়ে যোগাযোগ করছেন? নিচের একটি অপশন বেছে নিন অথবা নিজে লিখুন।",
    done: "ধন্যবাদ, {name}! আপনার তথ্য আমাদের টিমের কাছে পাঠানো হয়েছে, আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব। এর মধ্যে BACT IT-এর সেবা সম্পর্কে যেকোনো প্রশ্ন করুন।",
    badName: "অনুগ্রহ করে আপনার নাম লিখুন।",
    badPhone: "অনুগ্রহ করে একটি সঠিক ফোন নম্বর দিন।",
    badEmail: "ইমেইলটি সঠিক মনে হচ্ছে না। আবার চেষ্টা করুন।",
    submitError: "দুঃখিত, তথ্য পাঠানো যায়নি। আবার চেষ্টা করুন অথবা info@bactit.com-এ ইমেইল করুন।",
    aiError: "দুঃখিত, এই মুহূর্তে উত্তর দিতে পারছি না। একটু পরে আবার চেষ্টা করুন।",
    placeholder: "আপনার বার্তা লিখুন…",
    placeholderName: "আপনার নাম",
    placeholderPhone: "ফোন নম্বর",
    placeholderEmail: "ইমেইল ঠিকানা",
    subtitle: "এআই সহকারী · English ও বাংলা",
    note: "এআই উত্তরে ভুল থাকতে পারে। আমাদের টিম আপনার সাথে বিস্তারিত নিশ্চিত করবে।",
    launcher: "চ্যাট করুন",
    suggestions: ["আপনারা কী কী সেবা দেন?", "BAIDA সম্পর্কে বলুন", "কোন কোন আইটি কোর্স আছে?"],
  },
} as const;

type ScriptKey =
  | "intro"
  | "askPhone"
  | "askEmail"
  | "askPurpose"
  | "done"
  | "badName"
  | "badPhone"
  | "badEmail"
  | "submitError"
  | "aiError";

interface ChatLine {
  id: number;
  role: "bot" | "user";
  text?: string; // free text (visitor input or AI reply)
  key?: ScriptKey; // scripted bot line, translated live
  pending?: boolean;
}

const purposeOptions: { label: string; service: ServiceInterest }[] = [
  ...services.map((s) => ({ label: s.title, service: s.name })),
  { label: "BAIDA (flagship product)", service: "BAIDA Platform" },
];

const PHONE_RE = /^\+?[\d\s()-]{7,20}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

let nextId = 1;

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("en");
  const [step, setStep] = useState<Step>("name");
  const [lines, setLines] = useState<ChatLine[]>([{ id: nextId++, role: "bot", key: "intro" }]);
  const [input, setInput] = useState("");
  const [details, setDetails] = useState({ name: "", phone: "", email: "" });
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [streaming, setStreaming] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const t = copy[lang];

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [lines, open]);

  const push = (...items: Omit<ChatLine, "id">[]) =>
    setLines((prev) => [...prev, ...items.map((item) => ({ ...item, id: nextId++ }))]);

  const createSession = useMutation({
    mutationFn: (payload: ChatSessionCreate) => apiPost<ChatSessionCreated>("/chat/sessions", payload),
    onSuccess: (data) => {
      setSessionId(data.session_id);
      setStep("chat");
      push({ role: "bot", key: "done" });
    },
    onError: () => {
      setStep("purpose");
      push({ role: "bot", key: "submitError" });
    },
  });

  const askAssistant = async (text: string) => {
    if (!sessionId) return;
    const replyId = nextId++;
    setLines((prev) => [
      ...prev,
      { id: nextId++, role: "user", text },
      { id: replyId, role: "bot", text: "", pending: true },
    ]);
    setStreaming(true);
    const update = (fn: (line: ChatLine) => ChatLine) =>
      setLines((prev) => prev.map((line) => (line.id === replyId ? fn(line) : line)));
    let failed = false;
    try {
      for await (const event of apiStream<ChatStreamEvent>(`/chat/sessions/${sessionId}/messages`, { text })) {
        if (event.delta) {
          const delta = event.delta;
          update((line) => ({ ...line, text: (line.text ?? "") + delta, pending: false }));
        }
        if (event.error) failed = true;
      }
    } catch {
      failed = true;
    }
    update((line) =>
      failed && !line.text ? { id: line.id, role: "bot", key: "aiError" } : { ...line, pending: false },
    );
    setStreaming(false);
  };

  const submitPurpose = (purpose: string, service: ServiceInterest) => {
    push({ role: "user", text: purpose });
    setStep("submitting");
    createSession.mutate({
      full_name: details.name,
      phone: details.phone,
      email: details.email,
      service,
      purpose,
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const value = input.trim();
    if (!value || streaming || step === "submitting") return;
    setInput("");

    if (step === "name") {
      if (value.length < 2) return push({ role: "user", text: value }, { role: "bot", key: "badName" });
      setDetails((d) => ({ ...d, name: value }));
      push({ role: "user", text: value }, { role: "bot", key: "askPhone" });
      setStep("phone");
    } else if (step === "phone") {
      if (!PHONE_RE.test(value) || value.replace(/\D/g, "").length < 7)
        return push({ role: "user", text: value }, { role: "bot", key: "badPhone" });
      setDetails((d) => ({ ...d, phone: value }));
      push({ role: "user", text: value }, { role: "bot", key: "askEmail" });
      setStep("email");
    } else if (step === "email") {
      if (!EMAIL_RE.test(value)) return push({ role: "user", text: value }, { role: "bot", key: "badEmail" });
      setDetails((d) => ({ ...d, email: value }));
      push({ role: "user", text: value }, { role: "bot", key: "askPurpose" });
      setStep("purpose");
    } else if (step === "purpose") {
      submitPurpose(value, "General enquiry");
    } else {
      void askAssistant(value);
    }
  };

  const renderText = (line: ChatLine) =>
    line.key ? t[line.key].replace("{name}", details.name) : (line.text ?? "");

  const placeholder =
    step === "name"
      ? t.placeholderName
      : step === "phone"
        ? t.placeholderPhone
        : step === "email"
          ? t.placeholderEmail
          : t.placeholder;

  const doneIndex = lines.findIndex((line) => line.key === "done");
  const hasAskedAssistant = doneIndex !== -1 && lines.slice(doneIndex + 1).some((line) => line.role === "user");

  return (
    <>
      {!open && (
        <button
          type="button"
          className="chat-launcher"
          onClick={() => setOpen(true)}
          aria-label="Open BACT IT chat assistant"
          data-testid="chat-launcher-button"
        >
          <span className="chat-launcher-icon" aria-hidden="true">
            <MessageCircle size={22} />
          </span>
          <span className="chat-launcher-label">{t.launcher}</span>
        </button>
      )}

      {open && (
        <section className="chat-panel" role="dialog" aria-label="BACT IT chat assistant" data-testid="chat-panel">
          <header className="chat-header">
            <img src="/apple-touch-icon.png" alt="" className="chat-avatar" />
            <div className="chat-header-copy">
              <strong data-testid="chat-title">BACT IT Assistant</strong>
              <span data-testid="chat-subtitle">{t.subtitle}</span>
            </div>
            <div className="chat-lang" role="group" aria-label="Language" data-testid="chat-language-toggle">
              <button
                type="button"
                className={lang === "en" ? "is-active" : ""}
                onClick={() => setLang("en")}
                data-testid="chat-language-en-button"
              >
                EN
              </button>
              <button
                type="button"
                className={lang === "bn" ? "is-active" : ""}
                onClick={() => setLang("bn")}
                data-testid="chat-language-bn-button"
              >
                বাংলা
              </button>
            </div>
            <button
              type="button"
              className="chat-close"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              data-testid="chat-close-button"
            >
              <X size={18} />
            </button>
          </header>

          <div className="chat-body" data-testid="chat-messages">
            {lines.map((line) => (
              <div
                key={line.id}
                className={`chat-line chat-line-${line.role}`}
                data-testid={`chat-message-${line.role}`}
              >
                {line.pending ? (
                  <span className="chat-typing" aria-label="Assistant is typing" data-testid="chat-typing-indicator">
                    <i />
                    <i />
                    <i />
                  </span>
                ) : (
                  <p>{renderText(line)}</p>
                )}
              </div>
            ))}

            {step === "purpose" && (
              <div className="chat-chips" data-testid="chat-purpose-options">
                {purposeOptions.map((option) => (
                  <button
                    key={option.service}
                    type="button"
                    onClick={() => submitPurpose(option.label, option.service)}
                    data-testid={`chat-purpose-${option.service.toLowerCase().replaceAll(" ", "-")}-button`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}

            {step === "chat" && !hasAskedAssistant && !streaming && (
              <div className="chat-chips" data-testid="chat-suggestions">
                {t.suggestions.map((question, i) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => void askAssistant(question)}
                    data-testid={`chat-suggestion-${i + 1}-button`}
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            {step === "submitting" && (
              <div className="chat-line chat-line-bot" data-testid="chat-submitting-indicator">
                <span className="chat-typing" aria-label="Sending">
                  <i />
                  <i />
                  <i />
                </span>
              </div>
            )}
            <div ref={endRef} />
          </div>

          <form className="chat-input" onSubmit={handleSubmit} data-testid="chat-input-form">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder={placeholder}
              type={step === "email" ? "email" : step === "phone" ? "tel" : "text"}
              autoComplete={step === "name" ? "name" : step === "phone" ? "tel" : step === "email" ? "email" : "off"}
              maxLength={1000}
              disabled={streaming || step === "submitting"}
              aria-label={placeholder}
              data-testid="chat-input"
            />
            <button
              type="submit"
              disabled={!input.trim() || streaming || step === "submitting"}
              aria-label="Send message"
              data-testid="chat-send-button"
            >
              <SendHorizontal size={18} />
            </button>
          </form>
          <p className="chat-note" data-testid="chat-disclaimer">{t.note}</p>
        </section>
      )}
    </>
  );
}
