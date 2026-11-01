import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "dark";
type ButtonSize = "sm" | "md" | "lg";

type SharedProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type ButtonElementProps = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof SharedProps> & {
    href?: never;
  };

type AnchorElementProps = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof SharedProps> & {
    href: string;
  };

export type ButtonProps = ButtonElementProps | AnchorElementProps;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-blue-600 text-white shadow-[0_1px_2px_rgba(15,23,42,.12),0_8px_22px_rgba(37,99,235,.18)] hover:bg-blue-700 hover:-translate-y-0.5",
  secondary:
    "border border-slate-200 bg-white text-slate-900 shadow-sm hover:border-slate-300 hover:bg-slate-50",
  ghost: "text-slate-600 hover:bg-slate-100 hover:text-slate-950",
  dark: "bg-slate-950 text-white shadow-lg shadow-slate-950/15 hover:bg-slate-800 hover:-translate-y-0.5",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-10 rounded-lg px-4 text-sm",
  md: "h-11 rounded-[10px] px-5 text-sm",
  lg: "h-12 rounded-xl px-6 text-[15px]",
};

export function buttonStyles({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(
    "inline-flex touch-manipulation items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-600/15 disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );
}

export function Button(props: ButtonProps) {
  const { children, className, variant = "primary", size = "md" } = props;
  const classes = buttonStyles({ variant, size, className });

  if ("href" in props && props.href) {
    const anchorProps = props as AnchorElementProps;
    const { href, children: _, className: __, variant: ___, size: ____, ...rest } =
      anchorProps;
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  const nativeButtonProps = props as ButtonElementProps;
  const {
    children: _,
    className: __,
    variant: ___,
    size: ____,
    ...buttonProps
  } = nativeButtonProps;

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
