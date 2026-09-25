import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, site } from "@/content";
import {
  ProductHero,
  ProductStage,
  ProductProblem,
  ProductFeatures,
  ProductGallery,
  ProductHow,
  ProductSample,
  ProductIntegrations,
  ProductOther,
} from "@/components/blocks/product";
import { CtaBand } from "@/components/blocks/cta-band";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

function trimSummary(text: string, maxLen = 160): string {
  if (text.length <= maxLen) return text;
  const sub = text.slice(0, maxLen);
  const lastSpace = sub.lastIndexOf(" ");
  return lastSpace > 0 ? `${sub.slice(0, lastSpace)}...` : `${sub}...`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};

  const description = trimSummary(product.summary, 160);

  return {
    title: product.name,
    description,
    alternates: {
      canonical: `/products/${slug}`,
    },
    openGraph: {
      title: `${product.name} | ${site.name}`,
      description,
      url: `/products/${slug}`,
      images: [
        {
          url: product.heroImage.src,
          width: product.heroImage.width,
          height: product.heroImage.height,
          alt: product.heroImage.alt,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    description: product.summary,
    applicationCategory: product.applicationCategory,
    operatingSystem: "Web",
    url: product.liveUrl,
    sameAs: [product.liveUrl],
    image: `${site.url}${product.heroImage.src}`,
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": site.url,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Products",
        "item": `${site.url}/products`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": product.name,
        "item": `${site.url}/products/${product.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* 1. Hero with logo, category, and live chip */}
      <ProductHero product={product} />

      {/* 2. Framed Main Screenshot */}
      <ProductStage heroImage={product.heroImage} liveLabel={product.liveLabel} />

      {/* 3. Problem Statement */}
      <ProductProblem
        problemTitle={product.problemTitle}
        problem={product.problem}
      />

      {/* 4. 6 Features with Icons */}
      <ProductFeatures
        summary={product.summary}
        features={product.features}
      />

      {/* 5. Gallery */}
      <ProductGallery
        productName={product.name}
        gallery={product.gallery}
      />

      {/* 6. Dark "How it works" */}
      <ProductHow
        howTitle={product.howTitle}
        steps={product.howItWorks}
      />

      {/* 7. Phrasebook Samples (self-hiding if no sampleContent) */}
      <ProductSample samples={product.sampleContent} />

      {/* 8. Built With Chips */}
      <ProductIntegrations integrations={product.integrations} />

      {/* 9. Cross-link to other product */}
      <ProductOther currentSlug={product.slug} />

      {/* 10. CTA Band */}
      <div className="section-y pb-0">
        <CtaBand
          eyebrow="Get started"
          title={product.cta.title}
          intro={product.cta.intro}
          primary={{
            label: product.cta.primaryLabel,
            href: `/contact?topic=${product.slug}`,
          }}
          showWhatsApp
        />
      </div>
    </>
  );
}
