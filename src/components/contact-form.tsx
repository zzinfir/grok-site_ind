import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const schema = z.object({
  name: z.string().trim().min(2, "Укажите имя"),
  phone: z.string().trim().min(10, "Укажите телефон"),
  objectType: z.string().min(1, "Выберите тип объекта"),
  address: z.string().optional(),
  message: z.string().optional(),
  consent: z
    .boolean()
    .refine((v) => v, { message: "Нужно согласие на обработку данных" }),
});

type FormValues = z.infer<typeof schema>;

const STORAGE_KEY = "pozhgarant-requests";

export function ContactForm() {
  const [ticket, setTicket] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      objectType: "",
      address: "",
      message: "",
      consent: false,
    },
  });

  const onSubmit = (values: FormValues) => {
    const id = `ПГ-${new Date().toISOString().slice(0, 10).replaceAll("-", "")}-${Math.floor(
      1000 + Math.random() * 9000,
    )}`;
    const entry = { id, ...values, createdAt: new Date().toISOString() };
    try {
      const prev = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]") as unknown[];
      localStorage.setItem(STORAGE_KEY, JSON.stringify([entry, ...prev].slice(0, 20)));
    } catch {
      /* ignore quota */
    }
    setTicket(id);
    form.reset();
  };

  if (ticket) {
    return (
      <div className="rounded-3xl bg-surface p-6 sm:p-8">
        <div className="flex size-11 items-center justify-center rounded-full bg-fg text-bg">
          <Check className="size-5" />
        </div>
        <h3 className="mt-5 font-display text-2xl font-medium tracking-tight">Заявка принята</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Номер обращения{" "}
          <span className="font-medium text-fg tabular-nums">{ticket}</span>. Инженер свяжется
          в рабочие часы, чтобы согласовать выезд на объект.
        </p>
        <Button type="button" variant="outline" className="mt-6" onClick={() => setTicket(null)}>
          Отправить ещё одну
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="rounded-3xl bg-surface p-5 sm:p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Имя" error={form.formState.errors.name?.message}>
          <Input placeholder="Анна Ковалёва" autoComplete="name" {...form.register("name")} />
        </Field>
        <Field label="Телефон" error={form.formState.errors.phone?.message}>
          <Input
            type="tel"
            placeholder="+7 900 000-00-00"
            autoComplete="tel"
            {...form.register("phone")}
          />
        </Field>
      </div>

      <Field className="mt-4" label="Тип объекта" error={form.formState.errors.objectType?.message}>
        <select
          className="flex h-11 w-full rounded-md border border-border bg-bg px-3 text-sm text-fg focus-visible:border-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
          {...form.register("objectType")}
        >
          <option value="">Выберите</option>
          <option value="office">Офис</option>
          <option value="warehouse">Склад / производство</option>
          <option value="mall">Торговля / ТЦ</option>
          <option value="education">Образование</option>
          <option value="residential">ЖК / жилой дом</option>
          <option value="medical">Медицина</option>
          <option value="other">Другое</option>
        </select>
      </Field>

      <Field className="mt-4" label="Адрес объекта" error={form.formState.errors.address?.message}>
        <Input placeholder="Город, улица, дом" autoComplete="street-address" {...form.register("address")} />
      </Field>

      <Field className="mt-4" label="Комментарий" error={form.formState.errors.message?.message}>
        <Textarea
          placeholder="Что установлено, когда последний раз обслуживали, срочность"
          {...form.register("message")}
        />
      </Field>

      <label className="mt-4 flex min-h-11 cursor-pointer items-start gap-3 text-sm leading-snug text-muted">
        <input
          type="checkbox"
          className="mt-1 size-4 rounded border-border accent-accent"
          {...form.register("consent")}
        />
        <span>
          Соглашаюсь на обработку персональных данных для связи по заявке.
          {form.formState.errors.consent ? (
            <span className="mt-1 block text-accent">{form.formState.errors.consent.message}</span>
          ) : null}
        </span>
      </label>

      <Button type="submit" size="lg" className="mt-5 w-full sm:w-auto" disabled={form.formState.isSubmitting}>
        Отправить заявку
      </Button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
  className,
}: {
  label: string;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <Label className="mb-2 block">{label}</Label>
      {children}
      {error ? <p className="mt-1.5 text-xs text-accent">{error}</p> : null}
    </div>
  );
}
