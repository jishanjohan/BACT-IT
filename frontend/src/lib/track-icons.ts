import { BookOpen, Cloud, Code2, Database, FileSpreadsheet, HardDrive, Server, ShieldCheck, Wifi, type LucideIcon } from "lucide-react";

// Icon for each training track, keyed by slug (shared by the Training page and the IT Training service page).
const icons: Record<string, LucideIcon> = {
  "networking-ccna-ccnp-training": Wifi,
  "server-administration-windows-linux-training": Server,
  "cybersecurity-ceh-chfi-soc-training": ShieldCheck,
  "cissp-cisa-cism-lead-auditor-training": BookOpen,
  "data-analytics-power-bi-excel-training": Database,
  "programming-python-java-c-courses": Code2,
  "database-administration-training": HardDrive,
  "cloud-aws-azure-gcp-training": Cloud,
  "microsoft-office-training": FileSpreadsheet,
};

export const trackIcon = (slug: string): LucideIcon => icons[slug] ?? BookOpen;
