import { useEffect, useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { ClerkProvider } from "@clerk/react";

// Brand Clerk once: it styles sign-in, sign-up and the user menu.
const appearance = {
  variables: {
    colorPrimary: "#0B2345",
    colorPrimaryForeground: "#FFFFFF",
    fontFamily: "'DM Sans Variable', sans-serif",
    borderRadius: "0.5rem",
  },
};

// Starts Clerk from the backend's runtime config, so deploy's live keys need no rebuild.
// Must render inside <BrowserRouter> so Clerk navigates without reloading.
export default function ClerkAuthProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const [config, setConfig] = useState<{ publishable_key: string; proxy_url: string } | null>(null);
  const [unavailable, setUnavailable] = useState(false);

  // Retries while the backend restarts: Clerk components crash if they render without <ClerkProvider>.
  useEffect(() => {
    let cancelled = false;
    const load = async (attempt = 0) => {
      try {
        const cfg = await (await fetch("/api/clerk/config")).json();
        if (cfg.enabled) {
          if (!cancelled) setConfig(cfg);
          return;
        }
      } catch {
        // backend not reachable yet
      }
      if (cancelled) return;
      if (attempt >= 20) {
        setUnavailable(true);
        return;
      }
      setTimeout(() => load(attempt + 1), 1500);
    };
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  if (unavailable)
    return (
      <p style={{ padding: 24 }} data-testid="auth-unavailable-message">
        Sign-in is unavailable right now. Refresh the page to try again.
      </p>
    );
  if (!config) return <div className="auth-loading" data-testid="auth-loading" />;
  return (
    <ClerkProvider
      publishableKey={config.publishable_key}
      proxyUrl={config.proxy_url || undefined}
      appearance={appearance}
      routerPush={(to) => navigate(to)}
      routerReplace={(to) => navigate(to, { replace: true })}
      signInUrl="/sign-in"
      signUpUrl="/sign-up"
      signInFallbackRedirectUrl="/admin"
      signUpFallbackRedirectUrl="/admin"
      afterSignOutUrl="/"
    >
      {children}
    </ClerkProvider>
  );
}
