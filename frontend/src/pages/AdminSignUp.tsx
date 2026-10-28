import { SignUp } from "@clerk/react";
import ClerkAuthProvider from "@/components/auth/ClerkAuthProvider";

export default function AdminSignUp() {
  return (
    <section className="auth-page" data-testid="admin-sign-up-page">
      <div className="page-container auth-page-inner">
        <div className="auth-copy">
          <span className="eyebrow" data-testid="admin-sign-up-eyebrow">Team access</span>
          <h1 data-testid="admin-sign-up-title">Create your team account.</h1>
          <p data-testid="admin-sign-up-description">
            Only approved BACT IT email addresses can open the enquiries inbox.
          </p>
        </div>
        <div className="auth-card" data-testid="admin-sign-up-card">
          <ClerkAuthProvider>
            <SignUp routing="path" path="/sign-up" signInUrl="/sign-in" />
          </ClerkAuthProvider>
        </div>
      </div>
    </section>
  );
}
