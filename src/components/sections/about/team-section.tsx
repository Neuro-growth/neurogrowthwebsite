import * as React from "react";
import { SectionHead } from "@/components/ui/section-head";
import { TeamCard } from "@/components/blocks/team-card";
import { aboutPage } from "@/content/about-page";
import { team } from "@/content/team";

export function TeamSection() {
  return (
    <section className="bg-white section-y">
      <div className="container-site">
        <SectionHead
          eyebrow={aboutPage.team.eyebrow}
          title={aboutPage.team.title}
          aside={aboutPage.team.aside}
        />

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {team.map((member) => (
            <TeamCard key={member.slug} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
