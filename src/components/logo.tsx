import { cn } from "@/lib/utils";

export function Logo({ className, markClassName }: { className?: string; markClassName?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 32 32"
        className={cn("size-8 shrink-0", markClassName)}
        aria-hidden="true"
      >
        <rect width="32" height="32" rx="8" className="fill-fg" />
        <circle cx="16" cy="16" r="7.25" className="fill-none stroke-bg" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="2.4" className="fill-accent" />
      </svg>
      <span className="font-display text-lg font-medium tracking-tight text-fg">ПожГарант</span>
    </span>
  );
}
