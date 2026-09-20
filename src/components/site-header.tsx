import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "#services", label: "Услуги" },
  { href: "#process", label: "Регламент" },
  { href: "#estimate", label: "Расчёт" },
  { href: "#faq", label: "Вопросы" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,border-color] duration-200",
        scrolled ? "border-border bg-bg/95" : "border-transparent bg-bg/80",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="shrink-0" aria-label="ПожГарант — наверх">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Разделы">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors duration-150 hover:text-fg"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+74951204590"
            className="hidden items-center gap-2 pr-2 text-sm font-medium text-fg sm:inline-flex"
          >
            <Phone className="size-4 text-accent" />
            +7 495 120-45-90
          </a>
          <Button asChild className="hidden sm:inline-flex">
            <a href="#contact">Оставить заявку</a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-bg lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4" aria-label="Мобильное меню">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex min-h-11 items-center text-base font-medium text-fg"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:+74951204590"
              className="flex min-h-11 items-center gap-2 text-base font-medium text-fg"
            >
              <Phone className="size-4 text-accent" />
              +7 495 120-45-90
            </a>
            <Button asChild className="mt-2 w-full">
              <a href="#contact" onClick={() => setOpen(false)}>
                Оставить заявку
              </a>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
