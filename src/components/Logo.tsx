import { Logo as BaseLogo } from "@/components/ui/logo";

export interface LogoProps {
  height?: number;
  iconOnly?: boolean;
  className?: string;
  href?: string | null;
}

export default function Logo({
  height = 48,
  className,
  href = null,
}: LogoProps) {
  const size = height >= 48 ? "footer" : "nav";
  return <BaseLogo size={size} className={className} href={href} />;
}

export { BaseLogo as Logo };
