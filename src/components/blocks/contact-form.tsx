"use client";

import * as React from "react";
import Link from "next/link";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactTopics, type ContactTopicKey } from "@/content/contact";
import { waLink } from "@/content/site";
import { cn } from "@/lib/utils";

const FORMSPREE_ID = "mdavdkee";

export interface ContactFormProps {
  defaultTopic?: ContactTopicKey;
  className?: string;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  topic: ContactTopicKey;
  message: string;
  consent: boolean;
  _gotcha: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  topic?: string;
  message?: string;
  consent?: string;
}

export function ContactForm({ defaultTopic = "general", className }: ContactFormProps) {
  const [formData, setFormData] = React.useState<FormState>({
    name: "",
    email: "",
    phone: "",
    topic: defaultTopic,
    message: "",
    consent: false,
    _gotcha: "",
  });

  const [errors, setErrors] = React.useState<FormErrors>({});
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = React.useState(false);
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");

  const nameInputRef = React.useRef<HTMLInputElement>(null);
  const emailInputRef = React.useRef<HTMLInputElement>(null);
  const topicSelectRef = React.useRef<HTMLSelectElement>(null);
  const messageTextareaRef = React.useRef<HTMLTextAreaElement>(null);
  const consentCheckboxRef = React.useRef<HTMLInputElement>(null);
  const successContainerRef = React.useRef<HTMLDivElement>(null);

  const validate = React.useCallback(
    (data: FormState): FormErrors => {
      const newErrors: FormErrors = {};

      if (!data.name.trim()) {
        newErrors.name = "Enter your name.";
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!data.email.trim() || !emailRegex.test(data.email.trim())) {
        newErrors.email = "Enter a valid email address.";
      }

      if (!data.topic.trim()) {
        newErrors.topic = "Choose what you need.";
      }

      if (data.message.trim().length < 10) {
        newErrors.message = "Tell us a little more (at least 10 characters).";
      }

      if (!data.consent) {
        newErrors.consent = "Please accept the privacy policy.";
      }

      return newErrors;
    },
    []
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => {
      const updated = {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };

      if (hasAttemptedSubmit) {
        setErrors(validate(updated));
      }

      return updated;
    });
  };

  const handleBlur = () => {
    if (hasAttemptedSubmit) {
      setErrors(validate(formData));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setHasAttemptedSubmit(true);

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      // Focus the first invalid field
      if (validationErrors.name) {
        nameInputRef.current?.focus();
      } else if (validationErrors.email) {
        emailInputRef.current?.focus();
      } else if (validationErrors.topic) {
        topicSelectRef.current?.focus();
      } else if (validationErrors.message) {
        messageTextareaRef.current?.focus();
      } else if (validationErrors.consent) {
        consentCheckboxRef.current?.focus();
      }
      return;
    }

    // Bot detection check
    if (formData._gotcha) {
      setStatus("success");
      return;
    }

    setStatus("submitting");

    const selectedTopic =
      contactTopics.find((t) => t.key === formData.topic) ?? contactTopics[0];
    const topicLabel = selectedTopic.label;
    const pagePath =
      typeof window !== "undefined" ? window.location.pathname : "";

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          topic: topicLabel,
          message: formData.message,
          _subject: `New website enquiry: ${topicLabel}`,
          page: pagePath,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setTimeout(() => {
          successContainerRef.current?.focus();
        }, 50);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        ref={successContainerRef}
        tabIndex={-1}
        role="status"
        className={cn(
          "flex flex-col items-center justify-center text-center p-8 sm:p-12 rounded-xl bg-mist/40 border border-line outline-none",
          className
        )}
      >
        <CheckCircle2 className="h-12 w-12 text-emerald-600 mb-4" />
        <h3 className="t-h3 font-medium text-ink mb-2">Message received.</h3>
        <p className="text-[15px] text-ink-2 max-w-[40ch] mb-6">
          We&apos;ll reply within one working day. Prefer to chat now?
        </p>
        <Button
          variant="outline"
          href={waLink("Hi! I just sent a message through your website.")}
          external
        >
          WhatsApp us
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={cn("grid grid-cols-1 sm:grid-cols-2 gap-4", className)}
    >
      {/* Honeypot field for bot suppression */}
      <input
        type="text"
        name="_gotcha"
        value={formData._gotcha}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px]"
      />

      {/* Full Name */}
      <div className="flex flex-col">
        <label
          htmlFor="contact-name"
          className="text-[13px] font-medium text-ink mb-1.5"
        >
          Full name <span className="text-danger">*</span>
        </label>
        <input
          ref={nameInputRef}
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "error-name" : undefined}
          placeholder="Jane Doe"
          className={cn(
            "h-12 w-full rounded-[10px] border bg-mist px-3.5 text-[15px] text-ink placeholder:text-placeholder transition-colors focus:bg-white focus:outline-none",
            errors.name
              ? "border-danger focus:border-danger"
              : "border-transparent focus:border-cyan-deep"
          )}
        />
        {errors.name && (
          <p id="error-name" className="mt-1.5 text-[13px] text-danger">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email Address */}
      <div className="flex flex-col">
        <label
          htmlFor="contact-email"
          className="text-[13px] font-medium text-ink mb-1.5"
        >
          Email address <span className="text-danger">*</span>
        </label>
        <input
          ref={emailInputRef}
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "error-email" : undefined}
          placeholder="jane@company.com"
          className={cn(
            "h-12 w-full rounded-[10px] border bg-mist px-3.5 text-[15px] text-ink placeholder:text-placeholder transition-colors focus:bg-white focus:outline-none",
            errors.email
              ? "border-danger focus:border-danger"
              : "border-transparent focus:border-cyan-deep"
          )}
        />
        {errors.email && (
          <p id="error-email" className="mt-1.5 text-[13px] text-danger">
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone Number */}
      <div className="flex flex-col">
        <label
          htmlFor="contact-phone"
          className="text-[13px] font-medium text-ink mb-1.5"
        >
          Phone number
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={formData.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="+254 7xx xxx xxx"
          className="h-12 w-full rounded-[10px] border border-transparent bg-mist px-3.5 text-[15px] text-ink placeholder:text-placeholder transition-colors focus:border-cyan-deep focus:bg-white focus:outline-none"
        />
      </div>

      {/* Topic Selection */}
      <div className="flex flex-col">
        <label
          htmlFor="contact-topic"
          className="text-[13px] font-medium text-ink mb-1.5"
        >
          I&apos;m interested in <span className="text-danger">*</span>
        </label>
        <select
          ref={topicSelectRef}
          id="contact-topic"
          name="topic"
          required
          value={formData.topic}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={!!errors.topic}
          aria-describedby={errors.topic ? "error-topic" : undefined}
          className={cn(
            "h-12 w-full rounded-[10px] border bg-mist px-3.5 text-[15px] text-ink transition-colors focus:bg-white focus:outline-none appearance-auto",
            errors.topic
              ? "border-danger focus:border-danger"
              : "border-transparent focus:border-cyan-deep"
          )}
        >
          {contactTopics.map((opt) => (
            <option key={opt.key} value={opt.key}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.topic && (
          <p id="error-topic" className="mt-1.5 text-[13px] text-danger">
            {errors.topic}
          </p>
        )}
      </div>

      {/* Message Textarea */}
      <div className="col-span-1 sm:col-span-2 flex flex-col">
        <label
          htmlFor="contact-message"
          className="text-[13px] font-medium text-ink mb-1.5"
        >
          Message <span className="text-danger">*</span>
        </label>
        <textarea
          ref={messageTextareaRef}
          id="contact-message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "error-message" : undefined}
          placeholder="Tell us what you're working on and what you'd like to achieve..."
          className={cn(
            "h-auto min-h-28 w-full rounded-[10px] border bg-mist p-3.5 text-[15px] text-ink placeholder:text-placeholder transition-colors focus:bg-white focus:outline-none resize-y",
            errors.message
              ? "border-danger focus:border-danger"
              : "border-transparent focus:border-cyan-deep"
          )}
        />
        {errors.message && (
          <p id="error-message" className="mt-1.5 text-[13px] text-danger">
            {errors.message}
          </p>
        )}
      </div>

      {/* Consent Checkbox */}
      <div className="col-span-1 sm:col-span-2 flex flex-col">
        <div className="flex items-start gap-2.5">
          <input
            ref={consentCheckboxRef}
            id="contact-consent"
            name="consent"
            type="checkbox"
            required
            checked={formData.consent}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? "error-consent" : undefined}
            className="mt-1 h-4 w-4 rounded border-line text-cyan-deep focus:ring-cyan-deep"
          />
          <label htmlFor="contact-consent" className="text-[13.5px] text-ink-2">
            I agree to the{" "}
            <Link
              href="/privacy"
              className="text-cyan-deep underline underline-offset-2 hover:text-navy transition-colors"
            >
              privacy policy
            </Link>
            .
          </label>
        </div>
        {errors.consent && (
          <p id="error-consent" className="mt-1.5 text-[13px] text-danger">
            {errors.consent}
          </p>
        )}
      </div>

      {/* Error Banner */}
      {status === "error" && (
        <div
          role="alert"
          className="col-span-1 sm:col-span-2 rounded-[10px] bg-red-50 px-3.5 py-3 text-sm text-danger"
        >
          Something went wrong. Try again, or{" "}
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-2 hover:text-navy"
          >
            message us on WhatsApp
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          .
        </div>
      )}

      {/* Submit Button */}
      <div className="col-span-1 sm:col-span-2 mt-2">
        <Button
          variant="ink"
          dot
          fullWidth
          size="lg"
          type="submit"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Sending…</span>
            </>
          ) : (
            "Send message"
          )}
        </Button>
      </div>
    </form>
  );
}
