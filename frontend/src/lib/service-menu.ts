import { services, trainingTracks } from "@/lib/site-data";
import { aiSolutions, softwareSolutions } from "@/lib/solutions-data";

export interface MenuLink {
  title: string;
  to: string;
}

export interface ServiceMenuItem extends MenuLink {
  slug: string;
  children: MenuLink[];
}

// Every service with its solutions/tracks, shared by the desktop dropdown and the mobile menu.
const childrenFor = (slug: string): MenuLink[] => {
  if (slug === "software-solutions") {
    return softwareSolutions.map((item) => ({ title: item.title, to: `/services/software-solutions/${item.slug}` }));
  }
  if (slug === "ai-solutions") {
    return aiSolutions.map((item) => ({ title: item.title, to: `/services/ai-solutions/${item.slug}` }));
  }
  if (slug === "it-training") {
    return trainingTracks.map((track) => ({ title: track.title, to: `/courses/${track.slug}` }));
  }
  return [];
};

export const serviceMenu: ServiceMenuItem[] = services.map((service) => ({
  slug: service.slug,
  title: service.title,
  to: `/services/${service.slug}`,
  children: childrenFor(service.slug),
}));
