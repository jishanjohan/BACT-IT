// Mirrors backend/models/admin.py
export type InquiryStatus = "new" | "contacted" | "closed";

export interface AdminMe {
  email: string;
  is_admin: boolean;
}

export interface InquiryAdmin {
  id: string;
  full_name: string;
  organization: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  source: string;
  status: InquiryStatus;
  created_at: string;
  chat_session_id: string | null;
}

export interface InquiryStatusUpdate {
  status: InquiryStatus;
}

export interface ChatTranscriptMessage {
  role: "user" | "assistant";
  content: string;
  created_at: string;
}
