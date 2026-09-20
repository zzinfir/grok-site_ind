import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Bell,
  Check,
  ClipboardCheck,
  Clock3,
  FileText,
  Phone,
  ShieldCheck,
  Siren,
  Wrench,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { EstimateCalculator } from "@/components/estimate-calculator";
import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div id="top" className="min-h-screen bg-bg text-fg">
      <a
        href="#services"
        className="absolute left-4 top-0 z-50 -translate-y-16 rounded-md bg-fg px-4 py-2 text-sm font-medium text-bg transition-transform duration-150 focus:translate-y-4"
      >
        К содержанию
      </a>
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <WhySection />
        <ServicesSection />
        <IncludedSection />
        <ProcessSection />
        <ObjectsSection />
        <EstimateSection />
        <ComplianceSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}

function SectionLabel({ index, children }: { index: string; children: string }) {
  return (
    <p className="text-xs font-medium uppercase tracking-wider text-subtle">
      <span className="text-accent">{index}</span>
      <span className="mx-2 text-border">/</span>
      {children}
    </p>
  );
}

function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-6xl items-end gap-10 px-4 pb-12 pt-10 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:pb-16 lg:pt-14">
        <div className="lg:col-span-7">
          <p className="rise text-xs font-medium uppercase tracking-wider text-subtle">
            Лицензия МЧС · Москва и область · 24/7
          </p>
          <h1 className="rise rise-2 mt-4 font-display text-3xl font-medium leading-tight tracking-tight sm:text-5xl sm:leading-[1.08]">
            Пожарная сигнализация, которая работает каждый день — не только в день проверки
          </h1>
          <p className="rise rise-3 mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Берём на техническое обслуживание автоматическую пожарную сигнализацию и систему
            оповещения. Регламент, ремонт, журнал, акты и аварийный выезд за два часа.
          </p>
          <div className="rise rise-4 mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#estimate">
                Рассчитать стоимость
                <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Вызвать инженера</a>
            </Button>
          </div>
        </div>
        <div className="lg:col-span-5">
          <figure className="overflow-hidden rounded-3xl">
            <img
              src="/images/hero-panel.jpg"
              alt="Приёмно-контрольный прибор пожарной сигнализации в техническом помещении"
              className="photo-frame aspect-photo w-full object-cover lg:aspect-square"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const stats = [
    { value: "12", unit: "лет", label: "обслуживаем объекты" },
    { value: "840+", unit: "", label: "договоров ТО" },
    { value: "2", unit: "часа", label: "на аварийный выезд" },
    { value: "24/7", unit: "", label: "дежурная смена" },
  ];
  return (
    <section className="border-b border-border bg-bg-elevated">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-border sm:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="bg-bg-elevated px-4 py-6 sm:px-6 sm:py-8">
            <p className="font-display text-2xl font-medium tracking-tight tabular-nums sm:text-3xl">
              {item.value}
              {item.unit ? <span className="ml-1 text-lg text-muted">{item.unit}</span> : null}
            </p>
            <p className="mt-1 text-sm text-muted">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-5">
          <SectionLabel index="01">Зачем это нужно</SectionLabel>
          <h2 className="mt-3 font-display text-2xl font-medium tracking-tight sm:text-3xl">
            Система на стене — ещё не защита
          </h2>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-muted lg:col-span-7">
          <p>
            На многих объектах прибор стоит с 2016 года, монтажная бригада исчезла, журнал пустой,
            а «обслуживание» — подпись в акте за три тысячи. Это не ТО. Это риск: отказ шлейфа,
            севшая АКБ, запылённые извещатели и предписание МЧС.
          </p>
          <p>
            Мы принимаем систему как есть. Снимаем состояние, восстанавливаем работоспособность,
            ведём документы и приезжаем, когда что-то срабатывает не так.
          </p>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <SectionLabel index="02">Услуги</SectionLabel>
        <h2 className="mt-3 max-w-2xl font-display text-2xl font-medium tracking-tight sm:text-3xl">
          Две системы. Одна ответственность
        </h2>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <article className="overflow-hidden rounded-3xl bg-surface">
            <img
              src="/images/aps-detector.jpg"
              alt="Дымовой извещатель на бетонном потолке"
              className="photo-frame aspect-photo w-full object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 text-accent">
                <Siren className="size-4" />
                <p className="text-xs font-medium uppercase tracking-wider">АПС</p>
              </div>
              <h3 className="mt-3 font-display text-xl font-medium tracking-tight">
                Пожарная сигнализация
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Проверка извещателей, шлейфов, приёмно-контрольного прибора, источников питания и
                выходов на СОУЭ. Чистка, замена неисправных элементов, контроль зон.
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-3xl bg-surface">
            <img
              src="/images/soue-corridor.jpg"
              alt="Коридор с настенным оповещателем системы эвакуации"
              className="photo-frame aspect-photo w-full object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 text-accent">
                <Bell className="size-4" />
                <p className="text-xs font-medium uppercase tracking-wider">СОУЭ</p>
              </div>
              <h3 className="mt-3 font-display text-xl font-medium tracking-tight">
                Оповещение и эвакуация
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Речевые оповещатели, сирены, световые табло, усилители и резерв питания.
                Проверяем слышимость, трансляцию и запуск по сигналу АПС.
              </p>
            </div>
          </article>
        </div>

        <div className="mt-4 rounded-3xl bg-bg-elevated p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <h3 className="font-display text-xl font-medium tracking-tight">Комплексный договор</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Один инженер, один график, один комплект документов. Дешевле раздельных договоров
                и без споров, «чья это зона», если сработка не прошла на оповещение.
              </p>
            </div>
            <Button asChild variant="cream">
              <a href="#estimate">
                Сравнить стоимость
                <ArrowRight />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function IncludedSection() {
  const items = [
    { icon: ClipboardCheck, title: "Регламентный обход", text: "Осмотр, проверка сработки, журнал" },
    { icon: Wrench, title: "Мелкий ремонт", text: "Замена извещателей, табло, АКБ в рамках договора" },
    { icon: FileText, title: "Документы", text: "Акты, график ТО, рекомендации по капремонту" },
    { icon: ShieldCheck, title: "Подготовка к МЧС", text: "Комплект к проверке, разбор предписаний" },
    { icon: Clock3, title: "Аварийный выезд", text: "Ложные сработки, отказы, обрывы — 24/7" },
    { icon: Phone, title: "Персональный инженер", text: "Один контакт, знает объект и историю" },
  ];
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <SectionLabel index="03">Состав работ</SectionLabel>
        <h2 className="mt-3 max-w-xl font-display text-2xl font-medium tracking-tight sm:text-3xl">
          Что входит в ежемесячное обслуживание
        </h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.title} className="rounded-2xl bg-surface p-5">
              <item.icon className="size-5 text-accent" />
              <h3 className="mt-4 font-medium">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    { n: "01", title: "Заявка", text: "Телефон, форма или письмо. Согласуем выезд на объект." },
    { n: "02", title: "Аудит", text: "Снимаем состояние АПС и СОУЭ, фиксируем дефекты и состав." },
    { n: "03", title: "Договор", text: "График ТО, стоимость, аварийный регламент, ответственный инженер." },
    { n: "04", title: "Регламент", text: "Ежемесячные работы, акты, журнал. Ремонт — по согласованию." },
  ];
  return (
    <section id="process" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <SectionLabel index="04">Как работаем</SectionLabel>
        <h2 className="mt-3 font-display text-2xl font-medium tracking-tight sm:text-3xl">
          От заявки до журнала ТО
        </h2>
        <ol className="mt-10 grid gap-px overflow-hidden rounded-3xl bg-border sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.n} className="bg-bg-elevated p-6">
              <p className="font-display text-sm text-accent">{step.n}</p>
              <h3 className="mt-4 text-lg font-medium">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ObjectsSection() {
  const tags = [
    "Офисы",
    "Склады",
    "Производство",
    "Торговые центры",
    "Школы и детские сады",
    "Жилые комплексы",
    "Клиники",
    "Гостиницы",
    "Паркинги",
    "Административные здания",
  ];
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-5">
          <SectionLabel index="05">Объекты</SectionLabel>
          <h2 className="mt-3 font-display text-2xl font-medium tracking-tight sm:text-3xl">
            Берём системы, которые уже стоят
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Не важно, кто монтировал. Работаем с адресными и пороговыми АПС, речевым и звуковым
            оповещением 1–4 типов. Если часть оборудования снята с производства — предложим
            замену, а не «не обслуживается».
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex h-9 items-center rounded-full px-3 text-sm text-muted shadow-[var(--shadow-border)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <figure className="overflow-hidden rounded-3xl lg:col-span-7">
          <img
            src="/images/object-building.jpg"
            alt="Современное административное здание в сумерках"
            className="photo-frame aspect-wide h-full w-full object-cover"
          />
        </figure>
      </div>
    </section>
  );
}

function EstimateSection() {
  return (
    <section id="estimate" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <SectionLabel index="06">Стоимость</SectionLabel>
        <h2 className="mt-3 max-w-xl font-display text-2xl font-medium tracking-tight sm:text-3xl">
          Ориентир по договору за минуту
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          Считаем от площади, состава системы и типа объекта. Итоговая цена фиксируется после
          аудита — без скрытых «выездов инженера».
        </p>
        <div className="mt-10">
          <EstimateCalculator />
        </div>
      </div>
    </section>
  );
}

function ComplianceSection() {
  const docs = [
    { title: "123-ФЗ", text: "Технический регламент о требованиях пожарной безопасности" },
    { title: "ПП РФ № 1479", text: "Правила противопожарного режима: исправность и ТО систем" },
    { title: "ГОСТ Р 59638", text: "Руководство по монтажу, ТО и ремонту систем пожарной сигнализации" },
    { title: "СП 484.1311500", text: "Нормы проектирования АПС, которые система должна соблюдать" },
    { title: "СП 3.13130", text: "Системы оповещения и управления эвакуацией людей при пожаре" },
  ];
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:py-20">
        <figure className="overflow-hidden rounded-3xl lg:col-span-5">
          <img
            src="/images/docs-desk.jpg"
            alt="Журнал технического обслуживания и планы объекта"
            className="photo-frame h-full w-full object-cover"
          />
        </figure>
        <div className="lg:col-span-7">
          <SectionLabel index="07">Нормативная база</SectionLabel>
          <h2 className="mt-3 font-display text-2xl font-medium tracking-tight sm:text-3xl">
            Документы, которые выдерживают проверку
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Ведём журнал учёта работ, выдаём акты и график ТО. Если придёт инспектор — пакет
            собирается за вечер, а не «на следующей неделе».
          </p>
          <ul className="mt-6 divide-y divide-border border-y border-border">
            {docs.map((doc) => (
              <li key={doc.title} className="flex gap-4 py-4">
                <span className="w-36 shrink-0 font-medium text-fg">{doc.title}</span>
                <span className="text-sm text-muted">{doc.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const faqs = [
    {
      q: "Как часто нужно обслуживать АПС и СОУЭ?",
      a: "Регламентные работы — ежемесячно, с отметкой в журнале. Отдельные операции (измерения, замена АКБ, комплексные испытания) — по графику производителя и ГОСТ Р 59638. Без договора ТО объект формально не готов к проверке.",
    },
    {
      q: "Что будет, если договора на ТО нет?",
      a: "При проверке МЧС это типичное предписание. Хуже другое: севший резерв питания и запылённые извещатели обнаруживаются уже при пожаре или ложной сработке ночью. Договор фиксирует ответственность и срок реакции.",
    },
    {
      q: "Вы работаете только по Москве?",
      a: "Москва и область в радиусе дежурной смены. Аварийный выезд по городу — ориентир два часа, по области согласуем при заключении договора.",
    },
    {
      q: "Можно ли взять систему, которую ставила другая компания?",
      a: "Да, это основной сценарий. На первом выезде снимаем состав, схемы (если есть), дефекты и предлагаем договор. Если исполнительной документации нет — восстановим по факту.",
    },
    {
      q: "Что входит в аварийный выезд?",
      a: "Ложные сработки, отказ прибора, обрыв шлейфа, пропажа оповещения. Дежурный инженер приезжает, локализует причину, восстанавливает работу. Расходники сверх договора — по согласованию, без сюрпризов в счёте.",
    },
    {
      q: "Выдаёте документы для управляющей компании и МЧС?",
      a: "Журнал ТО, акты выполненных работ, график, рекомендации. При подготовке к проверке собираем пакет и, при необходимости, присутствуем на объекте.",
    },
    {
      q: "Сколько длится ежемесячный выезд?",
      a: "Типовой офис до 1 500 м² — от полутора до трёх часов. Склад или распределённый объект — по зонам, в согласованное окно, без остановки работы площадки, если это возможно.",
    },
    {
      q: "Можно обслуживать только СОУЭ или только АПС?",
      a: "Можно. Комплексный договор обычно выгоднее и снимает спор, на чьей стороне отказ запуска оповещения. В калькуляторе это считается отдельно.",
    },
  ];
  return (
    <section id="faq" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <SectionLabel index="08">Вопросы</SectionLabel>
          <h2 className="mt-3 font-display text-2xl font-medium tracking-tight sm:text-3xl">
            Коротко о договоре и регламенте
          </h2>
        </div>
        <div className="lg:col-span-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-5">
          <SectionLabel index="09">Заявка</SectionLabel>
          <h2 className="mt-3 font-display text-2xl font-medium tracking-tight sm:text-3xl">
            Инженер перезвонит в рабочий день
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Опишите объект — подскажем, нужен ли срочный выезд или достаточно планового аудита.
            По телефону отвечаем сразу.
          </p>
          <div className="mt-8 space-y-4">
            <a href="tel:+74951204590" className="block font-display text-2xl tracking-tight hover:text-fg/80">
              +7 495 120-45-90
            </a>
            <a href="mailto:service@pozhgarant.ru" className="block text-muted hover:text-fg">
              service@pozhgarant.ru
            </a>
            <p className="text-sm text-muted">Москва, ул. Электродная, 12, стр. 1</p>
            <p className="text-sm text-muted">Пн–Пт 9:00–19:00 · авария круглосуточно</p>
          </div>
          <ul className="mt-8 space-y-2 text-sm text-muted">
            {[
              "Выезд на аудит — обычно на следующий рабочий день",
              "Договор можно начать с текущего месяца",
              "Работаем с юрлицами и УК",
            ].map((line) => (
              <li key={line} className="flex gap-2">
                <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                {line}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
