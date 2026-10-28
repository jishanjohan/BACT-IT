import { SignIn } from "@clerk/react";
import ClerkAuthProvider from "@/components/auth/ClerkAuthProvider";

export default function AdminSignIn() {
  return (
    <section className="auth-page" data-testid="admin-sign-in-page">
      <div className="page-container auth-page-inner">
        <div className="auth-copy">
          <span className="eyebrow" data-testid="admin-sign-in-eyebrow">Team access</span>
          <h1 data-testid="admin-sign-in-title">Sign in to the enquiries inbox.</h1>
          <p data-testid="admin-sign-in-description">
            For BACT IT staff only. Use your approved company email to read and manage website enquiries.
          </p>
        </div>
        <div className="auth-card" data-testid="admin-sign-in-card">
          <ClerkAuthProvider>
            <SignIn routing="path" path="/sign-in" signUpUrl="/sign-up" withSignUp />
          </ClerkAuthProvider>
        </div>
      </div>
    </section>
  );
}
