import * as React from "react";
import { SectionHead } from "@/components/ui/section-head";
import { TestimonialRail } from "@/components/blocks/testimonial-rail";
import { testimonials } from "@/content/testimonials";
import { home } from "@/content/home";

export function TestimonialsSection() {
  const verifiedTestimonials = testimonials.filter((t) => t.permission);

  if (verifiedTestimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="scroll-mt-24 section-y container-site">
      <SectionHead
        tone="light"
        eyebrow={home.testimonials.eyebrow}
        title={home.testimonials.title}
      />

      <TestimonialRail items={verifiedTestimonials} />
    </section>
  );
}
