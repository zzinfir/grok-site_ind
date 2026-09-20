import { Logo } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-bg-elevated">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            Техническое обслуживание автоматической пожарной сигнализации и систем
            оповещения. Москва и Московская область.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs font-medium uppercase tracking-wider text-subtle">Компания</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <a href="#services" className="hover:text-fg">
                Услуги
              </a>
            </li>
            <li>
              <a href="#process" className="hover:text-fg">
                Регламент
              </a>
            </li>
            <li>
              <a href="#estimate" className="hover:text-fg">
                Стоимость
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-fg">
                Вопросы
              </a>
            </li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="text-xs font-medium uppercase tracking-wider text-subtle">Контакты</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <a href="tel:+74951204590" className="hover:text-fg">
                +7 495 120-45-90
              </a>
            </li>
            <li>
              <a href="mailto:service@pozhgarant.ru" className="hover:text-fg">
                service@pozhgarant.ru
              </a>
            </li>
            <li>Москва, ул. Электродная, 12, стр. 1</li>
            <li>Пн–Пт 9:00–19:00, авария — круглосуточно</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} ООО «ПожГарант». Лицензия МЧС на монтаж, ТО и ремонт СПС.</p>
          <p>Ориентиры стоимости не являются офертой.</p>
        </div>
      </div>
    </footer>
  );
}
