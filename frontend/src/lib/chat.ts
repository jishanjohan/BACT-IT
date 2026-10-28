import type { ServiceInterest } from "@/lib/inquiries";

// Mirrors backend/models/chat.py
export interface ChatSessionCreate {
  full_name: string;
  phone: string;
  email: string;
  service: ServiceInterest;
  purpose: string;
}

export interface ChatSessionCreated {
  session_id: string;
}

export interface ChatMessageCreate {
  text: string;
}

// One server-sent event from POST /api/chat/sessions/{id}/messages
export interface ChatStreamEvent {
  delta?: string;
  done?: boolean;
  error?: string;
}
