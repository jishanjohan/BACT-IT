import { useMemo, useState } from "react";
import { Navigate } from "react-router-dom";
import { Show, UserButton, useAuth } from "@clerk/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { format } from "date-fns";
import { Download, Inbox, Mail, MessageCircle, Phone } from "lucide-react";
import { toast } from "sonner";
import ClerkAuthProvider from "@/components/auth/ClerkAuthProvider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { apiDownload, apiGet, apiPatch } from "@/lib/api";
import type { AdminMe, ChatTranscriptMessage, InquiryAdmin, InquiryStatus, InquiryStatusUpdate } from "@/lib/admin";

const STATUS_LABELS: Record<InquiryStatus, string> = { new: "New", contacted: "Contacted", closed: "Closed" };
const FILTERS: ("all" | InquiryStatus)[] = ["all", "new", "contacted", "closed"];

const formatDate = (iso: string) => format(new Date(iso), "d MMM yyyy, HH:mm");

function StatusSelect({ inquiry, onChange }: { inquiry: InquiryAdmin; onChange: (s: InquiryStatus) => void }) {
  return (
    <select
      className={`status-select status-${inquiry.status}`}
      value={inquiry.status}
      onChange={(e) => onChange(e.target.value as InquiryStatus)}
      aria-label={`Status for ${inquiry.full_name}`}
      data-testid={`inbox-status-select-${inquiry.id}`}
    >
      {(Object.keys(STATUS_LABELS) as InquiryStatus[]).map((s) => (
        <option key={s} value={s}>
          {STATUS_LABELS[s]}
        </option>
      ))}
    </select>
  );
}

function InboxContent() {
  const { getToken } = useAuth();
  const queryClient = useQueryClient();
  const [filter, setFilter] = useState<"all" | InquiryStatus>("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const me = useQuery({
    queryKey: ["admin-me"],
    queryFn: async () => apiGet<AdminMe>("/admin/me", (await getToken()) ?? undefined),
  });
  const inquiries = useQuery({
    queryKey: ["admin-inquiries"],
    queryFn: async () => apiGet<InquiryAdmin[]>("/admin/inquiries", (await getToken()) ?? undefined),
    enabled: me.data?.is_admin === true,
  });
  const selected = inquiries.data?.find((i) => i.id === selectedId) ?? null;
  const transcript = useQuery({
    queryKey: ["admin-chat", selected?.chat_session_id],
    queryFn: async () =>
      apiGet<ChatTranscriptMessage[]>(`/admin/chats/${selected?.chat_session_id}`, (await getToken()) ?? undefined),
    enabled: !!selected?.chat_session_id,
  });

  const updateStatus = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: InquiryStatus }) =>
      apiPatch<InquiryAdmin>(`/admin/inquiries/${id}`, { status } satisfies InquiryStatusUpdate, (await getToken()) ?? undefined),
    onSuccess: (_, vars) => {
      queryClient.invalidateQueries({ queryKey: ["admin-inquiries"] });
      toast.success(`Marked as ${STATUS_LABELS[vars.status]}`);
    },
    onError: () => toast.error("Couldn’t update the status. Please try again."),
  });

  const download = async () => {
    try {
      const blob = await apiDownload("/admin/inquiries.csv", (await getToken()) ?? undefined);
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `bact-it-enquiries-${format(new Date(), "yyyy-MM-dd")}.csv`;
      link.click();
      URL.revokeObjectURL(url);
    } catch {
      toast.error("Download failed. Please try again.");
    }
  };

  const counts = useMemo(() => {
    const all = inquiries.data ?? [];
    return {
      all: all.length,
      new: all.filter((i) => i.status === "new").length,
      contacted: all.filter((i) => i.status === "contacted").length,
      closed: all.filter((i) => i.status === "closed").length,
    };
  }, [inquiries.data]);
  const rows = (inquiries.data ?? []).filter((i) => filter === "all" || i.status === filter);

  return (
    <section className="section-block inbox-page" data-testid="admin-inbox-page">
      <div className="page-container">
        <div className="inbox-header">
          <div>
            <span className="eyebrow" data-testid="inbox-eyebrow">Team inbox</span>
            <h1 data-testid="inbox-title">Website enquiries</h1>
            {me.data && (
              <p data-testid="inbox-signed-in-as">Signed in as {me.data.email || "your account"}</p>
            )}
          </div>
          <div className="inbox-header-actions">
            {me.data?.is_admin && (
              <Button variant="outline" onClick={() => void download()} data-testid="inbox-download-button">
                <Download size={16} /> Download spreadsheet
              </Button>
            )}
            <UserButton />
          </div>
        </div>

        {me.isLoading && <p className="inbox-empty" data-testid="inbox-loading">Loading…</p>}
        {me.isError && (
          <p className="inbox-empty" data-testid="inbox-error">We couldn’t verify your access. Please refresh the page.</p>
        )}
        {me.data && !me.data.is_admin && (
          <div className="inbox-denied" data-testid="inbox-access-denied">
            <h2>You don’t have access to this inbox.</h2>
            <p>This account isn’t on the approved list. Sign in with an approved BACT IT email, or ask an administrator for access.</p>
          </div>
        )}

        {me.data?.is_admin && (
          <>
            <div className="inbox-filters" role="tablist" data-testid="inbox-filters">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  type="button"
                  role="tab"
                  aria-selected={filter === f}
                  className={filter === f ? "is-active" : ""}
                  onClick={() => setFilter(f)}
                  data-testid={`inbox-filter-${f}-button`}
                >
                  {f === "all" ? "All" : STATUS_LABELS[f]} <span>{counts[f]}</span>
                </button>
              ))}
            </div>

            {inquiries.isLoading && <p className="inbox-empty" data-testid="inbox-list-loading">Loading enquiries…</p>}
            {inquiries.isError && <p className="inbox-empty" data-testid="inbox-list-error">Couldn’t load enquiries.</p>}
            {inquiries.data && rows.length === 0 && (
              <div className="inbox-empty" data-testid="inbox-empty-state">
                <Inbox size={28} /> No enquiries here yet.
              </div>
            )}
            {rows.length > 0 && (
              <div className="inbox-table" data-testid="inbox-table">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Received</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Source</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead />
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {rows.map((i) => (
                      <TableRow key={i.id} data-testid={`inbox-row-${i.id}`}>
                        <TableCell className="inbox-date">{formatDate(i.created_at)}</TableCell>
                        <TableCell>
                          <strong data-testid={`inbox-row-name-${i.id}`}>{i.full_name}</strong>
                          {i.organization && <span className="inbox-sub">{i.organization}</span>}
                        </TableCell>
                        <TableCell>
                          <a href={`mailto:${i.email}`} className="inbox-link">{i.email}</a>
                          {i.phone && <a href={`tel:${i.phone}`} className="inbox-sub inbox-link">{i.phone}</a>}
                        </TableCell>
                        <TableCell>{i.service}</TableCell>
                        <TableCell>
                          <Badge variant={i.source === "chat" ? "default" : "secondary"} data-testid={`inbox-source-${i.id}`}>
                            {i.source === "chat" ? "Chat" : "Form"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <StatusSelect inquiry={i} onChange={(status) => updateStatus.mutate({ id: i.id, status })} />
                        </TableCell>
                        <TableCell>
                          <Button size="sm" variant="ghost" onClick={() => setSelectedId(i.id)} data-testid={`inbox-view-button-${i.id}`}>
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </>
        )}
      </div>

      <Sheet open={!!selected} onOpenChange={(open) => !open && setSelectedId(null)}>
        <SheetContent className="inbox-sheet" data-testid="inbox-detail-sheet">
          {selected && (
            <>
              <SheetHeader>
                <SheetTitle data-testid="inbox-detail-name">{selected.full_name}</SheetTitle>
                <SheetDescription>
                  {selected.service} · {formatDate(selected.created_at)}
                </SheetDescription>
              </SheetHeader>
              <div className="inbox-detail-body">
                <div className="inbox-detail-contacts">
                  <a href={`mailto:${selected.email}`} data-testid="inbox-detail-email"><Mail size={15} /> {selected.email}</a>
                  {selected.phone && <a href={`tel:${selected.phone}`} data-testid="inbox-detail-phone"><Phone size={15} /> {selected.phone}</a>}
                  {selected.organization && <span>{selected.organization}</span>}
                </div>
                <label className="inbox-detail-status">
                  Status
                  <StatusSelect inquiry={selected} onChange={(status) => updateStatus.mutate({ id: selected.id, status })} />
                </label>
                <h3>Message</h3>
                <p className="inbox-detail-message" data-testid="inbox-detail-message">{selected.message}</p>
                {selected.chat_session_id && (
                  <>
                    <h3><MessageCircle size={16} /> Chat conversation</h3>
                    {transcript.isLoading && <p className="inbox-sub">Loading conversation…</p>}
                    {transcript.data?.length === 0 && <p className="inbox-sub">The visitor didn’t ask any questions.</p>}
                    <div className="inbox-transcript" data-testid="inbox-chat-transcript">
                      {transcript.data?.map((m, idx) => (
                        <div key={idx} className={`inbox-bubble inbox-bubble-${m.role}`}>
                          <span>{m.role === "user" ? selected.full_name : "AI assistant"} · {format(new Date(m.created_at), "HH:mm")}</span>
                          <p>{m.content}</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </section>
  );
}

export default function AdminInbox() {
  return (
    <ClerkAuthProvider>
      <Show when="signed-in">
        <InboxContent />
      </Show>
      <Show when="signed-out">
        <Navigate to="/sign-in" replace />
      </Show>
    </ClerkAuthProvider>
  );
}
