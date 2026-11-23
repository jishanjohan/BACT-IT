import { useState } from "react";
import { useAuth } from "@clerk/react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { apiGet, apiUpload } from "@/lib/api";
import { services } from "@/lib/site-data";

export type ServiceOverride = {
  slug: string;
  title?: string;
  short?: string;
  image?: string;
};

function EditorRow({ slug, current }: { slug: string; current: { title: string; short: string; image: string } }) {
  const { getToken } = useAuth();
  const queryClient = useQueryClient();
  const [title, setTitle] = useState(current.title);
  const [short, setShort] = useState(current.short);
  const [file, setFile] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);

  const preview = file ? URL.createObjectURL(file) : current.image;

  const save = async () => {
    const form = new FormData();
    if (title !== current.title) form.append("title", title);
    if (short !== current.short) form.append("short", short);
    if (file) form.append("image", file);
    if (![...form.keys()].length) {
      toast.info("Nothing changed");
      return;
    }
    setSaving(true);
    try {
      await apiUpload("PUT", `/content/services/${slug}`, form, (await getToken()) ?? undefined);
      await queryClient.invalidateQueries({ queryKey: ["service-content"] });
      setFile(null);
      toast.success("Saved");
    } catch {
      toast.error("Couldn’t save. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div style={{ border: "1px solid #ddd", borderRadius: 12, padding: 16, display: "grid", gap: 10 }}>
      <img src={preview} alt="" style={{ width: "100%", aspectRatio: "16 / 9", objectFit: "cover", borderRadius: 8 }} />
      <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
      <label style={{ display: "grid", gap: 4 }}>
        Title
        <input value={title} onChange={(e) => setTitle(e.target.value)} style={{ padding: 8, border: "1px solid #ccc", borderRadius: 6 }} />
      </label>
      <label style={{ display: "grid", gap: 4 }}>
        Short description
        <textarea value={short} onChange={(e) => setShort(e.target.value)} rows={3} style={{ padding: 8, border: "1px solid #ccc", borderRadius: 6 }} />
      </label>
      <Button onClick={() => void save()} disabled={saving}>
        {saving ? "Saving…" : "Save"}
      </Button>
    </div>
  );
}

export function useServiceOverrides() {
  return useQuery({
    queryKey: ["service-content"],
    queryFn: () => apiGet<ServiceOverride[]>("/content/services"),
    staleTime: 60_000,
  });
}

export default function ServiceContentEditor() {
  const overrides = useServiceOverrides();
  if (overrides.isLoading) return <p>Loading services…</p>;

  return (
    <section style={{ marginTop: 48 }} data-testid="service-content-editor">
      <h2 style={{ marginBottom: 16 }}>Service images &amp; text</h2>
      <div style={{ display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
        {services.map((s) => {
          const o = overrides.data?.find((x) => x.slug === s.slug);
          return (
            <EditorRow
              key={`${s.slug}-${o?.image ?? ""}`}
              slug={s.slug}
              current={{
                title: o?.title ?? s.title,
                short: o?.short ?? s.short,
                image: o?.image ?? s.image,
              }}
            />
          );
        })}
      </div>
    </section>
  );
}