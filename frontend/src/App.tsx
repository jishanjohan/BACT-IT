import { Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { SiteShell } from "@/components/SiteShell";
import About from "@/pages/About";
import AdminInbox from "@/pages/AdminInbox";
import AdminSignIn from "@/pages/AdminSignIn";
import AdminSignUp from "@/pages/AdminSignUp";
import Contact from "@/pages/Contact";
import Courses from "@/pages/Courses";
import FlagshipProduct from "@/pages/FlagshipProduct";
import Industries from "@/pages/Industries";
import Home from "@/pages/Home";
import Portfolio from "@/pages/Portfolio";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import StudyAbroad from "@/pages/StudyAbroad";

// One <Route> per page in src/pages; BrowserRouter already wraps this in main.tsx.
export default function App() {
  return (
    <SiteShell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/flagship-product" element={<FlagshipProduct />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/study-abroad" element={<StudyAbroad />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminInbox />} />
        <Route path="/sign-in/*" element={<AdminSignIn />} />
        <Route path="/sign-up/*" element={<AdminSignUp />} />
      </Routes>
      <Toaster richColors offset={{ bottom: 96, right: 24 }} mobileOffset={{ bottom: 88 }} />
    </SiteShell>
  );
}
