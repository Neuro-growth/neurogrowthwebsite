import type { TeamMember } from "./types";

export const team: TeamMember[] = [
  {
    slug: "shilla",
    name: "Shilla Swanapole",
    role: "Founder & CEO",
    photo: {
      src: "/images/team/shilla-duotone.webp",
      alt: "Shilla Swanapole",
      width: 900,
      height: 1035,
    },
    initials: "SS",
    linkedin: "https://www.linkedin.com/company/neurogrowthtech/",
  },
  {
    slug: "eric",
    name: "Eric Cecil",
    role: "ML Engineering",
    // TODO(client): photo
    initials: "EC",
  },
  {
    slug: "lenny",
    name: "Lenny Kidavi",
    role: "Marketing Engineering",
    photo: {
      src: "/images/team/lenny-duotone.webp",
      alt: "Lenny Kidavi",
      width: 900,
      height: 846,
    },
    initials: "LK",
  },
  {
    slug: "racheal",
    name: "Racheal Ngochi",
    role: "CX & Personalization",
    // TODO(client): photo
    initials: "RN",
  },
];

export const teamMembers = team;
