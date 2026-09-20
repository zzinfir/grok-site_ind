import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn, formatRub } from "@/lib/utils";

type SystemKind = "aps" | "soue" | "both";
type ObjectKind = "office" | "warehouse" | "mall" | "education" | "residential" | "medical";

const SYSTEMS: { id: SystemKind; title: string; hint: string }[] = [
  { id: "aps", title: "АПС", hint: "Пожарная сигнализация" },
  { id: "soue", title: "СОУЭ", hint: "Оповещение и эвакуация" },
  { id: "both", title: "Комплекс", hint: "АПС + СОУЭ" },
];

const OBJECTS: { id: ObjectKind; title: string }[] = [
  { id: "office", title: "Офис" },
  { id: "warehouse", title: "Склад / производство" },
  { id: "mall", title: "Торговля" },
  { id: "education", title: "Образование" },
  { id: "residential", title: "ЖК / жилой дом" },
  { id: "medical", title: "Медицина" },
];

const RATES: Record<SystemKind, { perM2: number; min: number }> = {
  aps: { perM2: 18, min: 9000 },
  soue: { perM2: 14, min: 7500 },
  both: { perM2: 26, min: 14000 },
};

const TYPE_MULT: Record<ObjectKind, number> = {
  office: 1,
  warehouse: 1.12,
  mall: 1.18,
  education: 1.08,
  residential: 0.92,
  medical: 1.22,
};

export function EstimateCalculator() {
  const [system, setSystem] = useState<SystemKind>("both");
  const [objectKind, setObjectKind] = useState<ObjectKind>("office");
  const [area, setArea] = useState(1200);
  const [detectors, setDetectors] = useState(48);
  const [speakers, setSpeakers] = useState(16);

  const result = useMemo(() => {
    const rate = RATES[system];
    const areaCost = area * rate.perM2 * TYPE_MULT[objectKind];
    const extras = detectors * 35 + (system === "aps" ? 0 : speakers * 45);
    const monthly = Math.max(rate.min, areaCost) + extras;
    const rounded = Math.round(monthly / 100) * 100;
    return {
      mid: rounded,
      low: Math.round((rounded * 0.92) / 100) * 100,
      high: Math.round((rounded * 1.08) / 100) * 100,
    };
  }, [system, objectKind, area, detectors, speakers]);

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <div className="rounded-3xl bg-surface p-5 sm:p-6 lg:col-span-7">
        <fieldset className="space-y-3">
          <legend className="text-sm font-medium text-fg">Система</legend>
          <div className="grid gap-2 sm:grid-cols-3">
            {SYSTEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSystem(item.id)}
                aria-pressed={system === item.id}
                className={cn(
                  "pressable min-h-16 rounded-xl px-4 py-3 text-left transition-[box-shadow,background-color] duration-150",
                  system === item.id
                    ? "bg-fg text-bg"
                    : "bg-bg text-fg shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
                )}
              >
                <span className="block font-display text-sm">{item.title}</span>
                <span
                  className={cn("mt-0.5 block text-xs", system === item.id ? "text-bg/70" : "text-muted")}
                >
                  {item.hint}
                </span>
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="mt-6 space-y-3">
          <legend className="text-sm font-medium text-fg">Тип объекта</legend>
          <div className="flex flex-wrap gap-2">
            {OBJECTS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setObjectKind(item.id)}
                aria-pressed={objectKind === item.id}
                className={cn(
                  "pressable h-11 rounded-full px-4 text-sm font-medium transition-[background-color,color] duration-150",
                  objectKind === item.id
                    ? "bg-fg text-bg"
                    : "bg-bg text-muted shadow-[var(--shadow-border)] hover:text-fg",
                )}
              >
                {item.title}
              </button>
            ))}
          </div>
        </fieldset>

        <div className="mt-6 space-y-6">
          <RangeField
            id="area"
            label="Площадь объекта"
            value={area}
            min={150}
            max={15000}
            step={50}
            onChange={setArea}
            display={`${formatRub(area)}\u00a0м²`}
          />
          <RangeField
            id="detectors"
            label="Извещатели"
            value={detectors}
            min={0}
            max={400}
            step={1}
            onChange={setDetectors}
            display={`${detectors}\u00a0шт.`}
          />
          {system !== "aps" ? (
            <RangeField
              id="speakers"
              label="Оповещатели"
              value={speakers}
              min={0}
              max={200}
              step={1}
              onChange={setSpeakers}
              display={`${speakers}\u00a0шт.`}
            />
          ) : null}
        </div>
      </div>

      <aside className="flex flex-col justify-between rounded-3xl bg-fg p-5 text-bg sm:p-6 lg:col-span-5">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-bg/55">Ориентир в месяц</p>
          <p className="mt-3 font-display text-3xl font-medium leading-tight tracking-tight tabular-nums sm:text-4xl">
            {formatRub(result.low)}–{formatRub(result.high)}
            <span className="ml-1 text-lg text-bg/55">₽</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-bg/65">
            Средняя оценка {formatRub(result.mid)} ₽/мес. Точная сумма — после аудита
            системы: состояние прибора, извещателей и кабельных линий.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-bg/75">
            <li>Регламентные работы по графику</li>
            <li>Журнал ТО и акты</li>
            <li>Аварийный выезд 24/7</li>
          </ul>
        </div>
        <Button asChild variant="default" size="lg" className="mt-8 w-full">
          <a href="#contact">
            Заказать договор
            <ArrowRight />
          </a>
        </Button>
      </aside>
    </div>
  );
}

function RangeField({
  id,
  label,
  value,
  min,
  max,
  step,
  onChange,
  display,
}: {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  display: string;
}) {
  return (
    <div>
      <div className="mb-2 flex items-end justify-between gap-3">
        <Label htmlFor={id}>{label}</Label>
        <span className="text-sm tabular-nums text-muted">{display}</span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-11 w-full"
      />
    </div>
  );
}
