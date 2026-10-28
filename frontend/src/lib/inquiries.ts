export type ServiceInterest =
  | "Software Solutions"
  | "ICT Infrastructure"
  | "Cybersecurity"
  | "AI Solutions"
  | "IT Training"
  | "Study Abroad"
  | "Digital Marketing"
  | "BAIDA Platform"
  | "General enquiry";

export interface InquiryCreate {
  full_name: string;
  organization: string;
  email: string;
  phone: string;
  service: ServiceInterest;
  message: string;
}

export interface InquiryCreated {
  id: string;
  received: boolean;
  created_at: string;
}