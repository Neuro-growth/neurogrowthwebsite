import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type ButtonVariant = "green" | "ink" | "white" | "glass" | "outline" | "ghost";
export type ButtonSize = "md" | "lg" | "sm" | "icon" | "icon-sm" | "icon-lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  dot?: boolean;
  href?: string;
  external?: boolean;
  fullWidth?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  green: "bg-green text-green-ink hover:bg-green-hi active:brightness-95",
  ink: "bg-navy text-white hover:bg-navy-3 active:bg-navy-2",
  white: "bg-white text-navy hover:bg-mist active:bg-line",
  glass: "bg-white/[0.08] text-white border border-white/[0.18] backdrop-blur-md hover:bg-white/[0.14] active:bg-white/[0.2]",
  outline: "border border-line text-ink hover:bg-mist/60 active:bg-mist",
  ghost: "bg-transparent text-current hover:bg-white/10 active:bg-white/15",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "h-12 px-6 text-[15px]",
  lg: "h-[52px] px-8 text-[15px]",
  sm: "h-9 px-4 text-[13.5px]",
  icon: "h-12 w-12 p-0",
  "icon-sm": "h-8 w-8 p-0",
  "icon-lg": "h-12 w-12 p-0",
};

export function getButtonClasses({
  variant = "ink",
  size = "md",
  fullWidth = false,
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
}) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors select-none cursor-pointer whitespace-nowrap outline-none focus-visible:outline-2 focus-visible:outline-cyan focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50",
    fullWidth && "w-full",
    variantClasses[variant],
    sizeClasses[size],
    className
  );
}

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(
  {
    variant = "ink",
    size = "md",
    dot,
    href,
    external,
    fullWidth,
    className,
    children,
    type = "button",
    ...props
  },
  ref
) {
  const showDot =
    dot !== undefined ? dot : (variant === "ink" || variant === "white");
  const dotColor = variant === "ink" ? "bg-cyan" : "bg-cyan-deep";

  const content = (
    <>
      <span>{children}</span>
      {showDot && (
        <span
          aria-hidden="true"
          className={cn("w-1.5 h-1.5 rounded-full shrink-0 ml-0.5", dotColor)}
        />
      )}
    </>
  );

  const classes = getButtonClasses({ variant, size, fullWidth, className });

  if (href) {
    const isExt =
      external ||
      href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:");

    if (isExt) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={classes}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={classes}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      className={classes}
      {...props}
    >
      {content}
    </button>
  );
});

export interface IconButtonProps
  extends Omit<ButtonProps, "children" | "dot"> {
  "aria-label": string;
  children: React.ReactNode;
}

export const IconButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  IconButtonProps
>(function IconButton(
  {
    variant = "ink",
    size = "md",
    href,
    external,
    className,
    children,
    type = "button",
    "aria-label": ariaLabel,
    ...props
  },
  ref
) {
  const iconSizeClasses: Record<ButtonSize, string> = {
    md: "h-12 w-12 p-0",
    lg: "h-[52px] w-[52px] p-0",
    sm: "h-9 w-9 p-0",
    icon: "h-12 w-12 p-0",
    "icon-sm": "h-8 w-8 p-0",
    "icon-lg": "h-12 w-12 p-0",
  };

  const classes = cn(
    "inline-flex items-center justify-center rounded-full font-medium transition-colors select-none cursor-pointer outline-none focus-visible:outline-2 focus-visible:outline-cyan focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    iconSizeClasses[size],
    className
  );

  if (href) {
    const isExt =
      external ||
      href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:");

    if (isExt) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          aria-label={ariaLabel}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={classes}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        aria-label={ariaLabel}
        className={classes}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      aria-label={ariaLabel}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
});
