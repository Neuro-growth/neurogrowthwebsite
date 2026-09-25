import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Button } from "@/components/ui/button";
import { Panel } from "@/components/ui/panel";
import { Eyebrow } from "@/components/ui/eyebrow";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { ContactSplit } from "@/components/blocks/contact-split";
import { StepGrid } from "@/components/blocks/step-grid";
import { FaqBlock } from "@/components/blocks/faq-block";
import { site, waLink } from "@/content/site";
import {
  contactData,
  resolveTopic,
  type ContactChannel,
} from "@/content/contact";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to NeuroGrowth Tech about AI automation, chatbots or analytics for your business. WhatsApp, email or book a free 30-minute call.",
  alternates: { canonical: "/contact" },
};

function ChannelCard({ channel }: { channel: ContactChannel }) {
  const isLink = Boolean(channel.href);
  const Tag = isLink ? "a" : "div";

  const renderIcon = () => {
    switch (channel.id) {
      case "whatsapp":
        return <WhatsAppIcon className="h-5 w-5 text-whatsapp" />;
      case "email":
        return <Mail className="h-5 w-5 text-cyan-deep" />;
      case "phone":
        return <Phone className="h-5 w-5 text-cyan-deep" />;
      case "studio":
        return <MapPin className="h-5 w-5 text-cyan-deep" />;
    }
  };

  return (
    <Tag
      {...(isLink
        ? {
            href: channel.href,
            target: channel.external ? "_blank" : undefined,
            rel: channel.external ? "noopener noreferrer" : undefined,
          }
        : {})}
      className={cn(
        "group flex flex-col rounded-media bg-white p-6 transition-all duration-200",
        isLink
          ? "border border-line hover:border-ink hover:shadow-sm focus-visible:outline-2 focus-visible:outline-cyan"
          : "border border-line"
      )}
    >
      {/* 40px bg-mist tile */}
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-mist">
        {renderIcon()}
      </div>

      <span className="mt-4 text-[13px] text-ink-3">{channel.label}</span>
      <span className="mt-1 text-[16px] font-medium text-ink break-words">
        {channel.value}
      </span>
      <span className="mt-1 text-[13px] text-ink-3">{channel.note}</span>
    </Tag>
  );
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { topic } = await searchParams;
  const defaultTopic = resolveTopic(topic);

  // JSON-LD: ContactPage schema with Organization contactPoint
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      "@type": "Organization",
      name: site.name,
      legalName: site.legalName,
      url: site.url,
      // TODO(client): confirm languages
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: site.phoneE164,
          email: site.email,
          areaServed: "KE",
          availableLanguage: ["English", "Swahili"],
        },
      ],
    },
  };

  return (
    <>
      {/* ContactPage JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* 1. Page Hero */}
      <PageHero
        breadcrumbs={[{ label: "Contact" }]}
        eyebrow={contactData.hero.eyebrow}
        title={contactData.hero.title}
        intro={contactData.hero.intro}
        actions={
          <>
            <Button variant="green" href={waLink()} external>
              <WhatsAppIcon className="h-4 w-4 mr-1.5" />
              <span>WhatsApp us</span>
            </Button>
            <Button variant="glass" href={`mailto:${site.email}`}>
              Email us
            </Button>
          </>
        }
      />

      {/* 2. Form section */}
      <section className="section-y container-site">
        <ContactSplit
          id="form"
          eyebrow="Send a message"
          title="Start a conversation"
          intro="Tell us a little about your business. The more specific, the better our first call."
          defaultTopic={defaultTopic}
        />
      </section>

      {/* 3. Channels Section */}
      <section className="container-site pb-[clamp(64px,8vw,104px)]">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {contactData.channels.map((ch) => (
            <ChannelCard key={ch.id} channel={ch} />
          ))}
        </div>
      </section>

      {/* 4. What happens next Band */}
      <Panel tone="dark" className="mt-3">
        <div className="container-site grid grid-cols-12 gap-6 py-[clamp(64px,8vw,112px)] items-start">
          <div className="col-span-12 lg:col-span-5 flex flex-col items-start">
            <Eyebrow tone="dark">What happens next</Eyebrow>
            <h2 className="t-h2-sm mt-5 text-white font-normal">
              From message to plan in a week.
            </h2>
          </div>
          <div className="col-span-12 lg:col-start-7 lg:col-span-6">
            <StepGrid steps={contactData.nextSteps} tone="dark" />
          </div>
        </div>
      </Panel>

      {/* 5. Contact FAQ */}
      <FaqBlock
        id="faq"
        eyebrow="FAQ"
        title="Before you get in touch."
        items={contactData.contactFaqs}
        background="white"
      />
    </>
  );
}
