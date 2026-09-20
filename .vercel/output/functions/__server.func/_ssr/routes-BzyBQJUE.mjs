import { i as __toESM } from "../_runtime.mjs";
import { n as useForm, r as require_react, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { a as Trigger2, c as Slot, i as Root2, l as require_jsx_runtime, n as Header, r as Item, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as ShieldCheck, c as FileText, d as ChevronDown, f as Check, i as Siren, l as Clock3, m as ArrowRight, n as Wrench, o as Phone, p as Bell, s as Menu, t as X, u as ClipboardCheck } from "../_libs/lucide-react.mjs";
import { a as string, i as object, t as boolean } from "../_libs/zod.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BzyBQJUE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatRub(value) {
	return new Intl.NumberFormat("ru-RU").format(value);
}
function Logo({ className, markClassName }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-2.5", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 32 32",
			className: cn("size-8 shrink-0", markClassName),
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "32",
					height: "32",
					rx: "8",
					className: "fill-fg"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "16",
					cy: "16",
					r: "7.25",
					className: "fill-none stroke-bg",
					strokeWidth: "1.5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "16",
					cy: "16",
					r: "2.4",
					className: "fill-accent"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-lg font-medium tracking-tight text-fg",
			children: "ПожГарант"
		})]
	});
}
var buttonVariants = cva("pressable inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-accent text-accent-fg hover:bg-accent/90",
			cream: "bg-fg text-bg hover:bg-fg/90",
			outline: "shadow-[var(--shadow-border)] text-fg hover:shadow-[var(--shadow-border-hover)] hover:bg-fg/5",
			ghost: "text-fg hover:bg-fg/5"
		},
		size: {
			default: "h-11 px-5",
			sm: "h-9 px-3",
			lg: "h-12 px-6 text-base",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var NAV = [
	{
		href: "#services",
		label: "Услуги"
	},
	{
		href: "#process",
		label: "Регламент"
	},
	{
		href: "#estimate",
		label: "Расчёт"
	},
	{
		href: "#faq",
		label: "Вопросы"
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("sticky top-0 z-50 border-b transition-[background-color,border-color] duration-200", scrolled ? "border-border bg-bg/95" : "border-transparent bg-bg/80"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					className: "shrink-0",
					"aria-label": "ПожГарант — наверх",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 lg:flex",
					"aria-label": "Разделы",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: "text-sm font-medium text-muted transition-colors duration-150 hover:text-fg",
						children: item.label
					}, item.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "tel:+74951204590",
							className: "hidden items-center gap-2 pr-2 text-sm font-medium text-fg sm:inline-flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 text-accent" }), "+7 495 120-45-90"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "hidden sm:inline-flex",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								children: "Оставить заявку"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "lg:hidden",
							"aria-label": open ? "Закрыть меню" : "Открыть меню",
							"aria-expanded": open,
							onClick: () => setOpen((v) => !v),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
						})
					]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border bg-bg lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4",
				"aria-label": "Мобильное меню",
				children: [
					NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: "flex min-h-11 items-center text-base font-medium text-fg",
						onClick: () => setOpen(false),
						children: item.label
					}, item.href)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "tel:+74951204590",
						className: "flex min-h-11 items-center gap-2 text-base font-medium text-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 text-accent" }), "+7 495 120-45-90"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "mt-2 w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contact",
							onClick: () => setOpen(false),
							children: "Оставить заявку"
						})
					})
				]
			})
		}) : null]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-bg-elevated",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-sm text-sm leading-relaxed text-muted",
						children: "Техническое обслуживание автоматической пожарной сигнализации и систем оповещения. Москва и Московская область."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-wider text-subtle",
						children: "Компания"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-3 space-y-2 text-sm text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#services",
								className: "hover:text-fg",
								children: "Услуги"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#process",
								className: "hover:text-fg",
								children: "Регламент"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#estimate",
								className: "hover:text-fg",
								children: "Стоимость"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#faq",
								className: "hover:text-fg",
								children: "Вопросы"
							}) })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-wider text-subtle",
						children: "Контакты"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-3 space-y-2 text-sm text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "tel:+74951204590",
								className: "hover:text-fg",
								children: "+7 495 120-45-90"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:service@pozhgarant.ru",
								className: "hover:text-fg",
								children: "service@pozhgarant.ru"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Москва, ул. Электродная, 12, стр. 1" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Пн–Пт 9:00–19:00, авария — круглосуточно" })
						]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ООО «ПожГарант». Лицензия МЧС на монтаж, ТО и ремонт СПС."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Ориентиры стоимости не являются офертой." })]
			})
		})]
	});
}
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn("text-sm font-medium leading-none text-fg", className),
	...props
}));
Label.displayName = Root.displayName;
var SYSTEMS = [
	{
		id: "aps",
		title: "АПС",
		hint: "Пожарная сигнализация"
	},
	{
		id: "soue",
		title: "СОУЭ",
		hint: "Оповещение и эвакуация"
	},
	{
		id: "both",
		title: "Комплекс",
		hint: "АПС + СОУЭ"
	}
];
var OBJECTS = [
	{
		id: "office",
		title: "Офис"
	},
	{
		id: "warehouse",
		title: "Склад / производство"
	},
	{
		id: "mall",
		title: "Торговля"
	},
	{
		id: "education",
		title: "Образование"
	},
	{
		id: "residential",
		title: "ЖК / жилой дом"
	},
	{
		id: "medical",
		title: "Медицина"
	}
];
var RATES = {
	aps: {
		perM2: 18,
		min: 9e3
	},
	soue: {
		perM2: 14,
		min: 7500
	},
	both: {
		perM2: 26,
		min: 14e3
	}
};
var TYPE_MULT = {
	office: 1,
	warehouse: 1.12,
	mall: 1.18,
	education: 1.08,
	residential: .92,
	medical: 1.22
};
function EstimateCalculator() {
	const [system, setSystem] = (0, import_react.useState)("both");
	const [objectKind, setObjectKind] = (0, import_react.useState)("office");
	const [area, setArea] = (0, import_react.useState)(1200);
	const [detectors, setDetectors] = (0, import_react.useState)(48);
	const [speakers, setSpeakers] = (0, import_react.useState)(16);
	const result = (0, import_react.useMemo)(() => {
		const rate = RATES[system];
		const areaCost = area * rate.perM2 * TYPE_MULT[objectKind];
		const extras = detectors * 35 + (system === "aps" ? 0 : speakers * 45);
		const monthly = Math.max(rate.min, areaCost) + extras;
		const rounded = Math.round(monthly / 100) * 100;
		return {
			mid: rounded,
			low: Math.round(rounded * .92 / 100) * 100,
			high: Math.round(rounded * 1.08 / 100) * 100
		};
	}, [
		system,
		objectKind,
		area,
		detectors,
		speakers
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-3xl bg-surface p-5 sm:p-6 lg:col-span-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
					className: "space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
						className: "text-sm font-medium text-fg",
						children: "Система"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-2 sm:grid-cols-3",
						children: SYSTEMS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setSystem(item.id),
							"aria-pressed": system === item.id,
							className: cn("pressable min-h-16 rounded-xl px-4 py-3 text-left transition-[box-shadow,background-color] duration-150", system === item.id ? "bg-fg text-bg" : "bg-bg text-fg shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-display text-sm",
								children: item.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("mt-0.5 block text-xs", system === item.id ? "text-bg/70" : "text-muted"),
								children: item.hint
							})]
						}, item.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
					className: "mt-6 space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
						className: "text-sm font-medium text-fg",
						children: "Тип объекта"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: OBJECTS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setObjectKind(item.id),
							"aria-pressed": objectKind === item.id,
							className: cn("pressable h-11 rounded-full px-4 text-sm font-medium transition-[background-color,color] duration-150", objectKind === item.id ? "bg-fg text-bg" : "bg-bg text-muted shadow-[var(--shadow-border)] hover:text-fg"),
							children: item.title
						}, item.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RangeField, {
							id: "area",
							label: "Площадь объекта",
							value: area,
							min: 150,
							max: 15e3,
							step: 50,
							onChange: setArea,
							display: `${formatRub(area)}\u00a0м²`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RangeField, {
							id: "detectors",
							label: "Извещатели",
							value: detectors,
							min: 0,
							max: 400,
							step: 1,
							onChange: setDetectors,
							display: `${detectors}\u00a0шт.`
						}),
						system !== "aps" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RangeField, {
							id: "speakers",
							label: "Оповещатели",
							value: speakers,
							min: 0,
							max: 200,
							step: 1,
							onChange: setSpeakers,
							display: `${speakers}\u00a0шт.`
						}) : null
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "flex flex-col justify-between rounded-3xl bg-fg p-5 text-bg sm:p-6 lg:col-span-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-wider text-bg/55",
					children: "Ориентир в месяц"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 font-display text-3xl font-medium leading-tight tracking-tight tabular-nums sm:text-4xl",
					children: [
						formatRub(result.low),
						"–",
						formatRub(result.high),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-1 text-lg text-bg/55",
							children: "₽"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-sm leading-relaxed text-bg/65",
					children: [
						"Средняя оценка ",
						formatRub(result.mid),
						" ₽/мес. Точная сумма — после аудита системы: состояние прибора, извещателей и кабельных линий."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-6 space-y-2 text-sm text-bg/75",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Регламентные работы по графику" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Журнал ТО и акты" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Аварийный выезд 24/7" })
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "default",
				size: "lg",
				className: "mt-8 w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#contact",
					children: ["Заказать договор", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
				})
			})]
		})]
	});
}
function RangeField({ id, label, value, min, max, step, onChange, display }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-2 flex items-end justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			htmlFor: id,
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm tabular-nums text-muted",
			children: display
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		id,
		type: "range",
		min,
		max,
		step,
		value,
		onChange: (e) => onChange(Number(e.target.value)),
		className: "h-11 w-full"
	})] });
}
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-md border border-border bg-bg px-3 text-sm text-fg shadow-none transition-[box-shadow,border-color] duration-150 placeholder:text-subtle focus-visible:border-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 disabled:cursor-not-allowed disabled:opacity-50", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-28 w-full rounded-md border border-border bg-bg px-3 py-2.5 text-sm text-fg placeholder:text-subtle focus-visible:border-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 disabled:cursor-not-allowed disabled:opacity-50", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var schema = object({
	name: string().trim().min(2, "Укажите имя"),
	phone: string().trim().min(10, "Укажите телефон"),
	objectType: string().min(1, "Выберите тип объекта"),
	address: string().optional(),
	message: string().optional(),
	consent: boolean().refine((v) => v, { message: "Нужно согласие на обработку данных" })
});
var STORAGE_KEY = "pozhgarant-requests";
function ContactForm() {
	const [ticket, setTicket] = (0, import_react.useState)(null);
	const form = useForm({
		resolver: u(schema),
		defaultValues: {
			name: "",
			phone: "",
			objectType: "",
			address: "",
			message: "",
			consent: false
		}
	});
	const onSubmit = (values) => {
		const id = `ПГ-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10).replaceAll("-", "")}-${Math.floor(1e3 + Math.random() * 9e3)}`;
		const entry = {
			id,
			...values,
			createdAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		try {
			const prev = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
			localStorage.setItem(STORAGE_KEY, JSON.stringify([entry, ...prev].slice(0, 20)));
		} catch {}
		setTicket(id);
		form.reset();
	};
	if (ticket) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-3xl bg-surface p-6 sm:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex size-11 items-center justify-center rounded-full bg-fg text-bg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-5 font-display text-2xl font-medium tracking-tight",
				children: "Заявка принята"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted",
				children: [
					"Номер обращения",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium text-fg tabular-nums",
						children: ticket
					}),
					". Инженер свяжется в рабочие часы, чтобы согласовать выезд на объект."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				variant: "outline",
				className: "mt-6",
				onClick: () => setTicket(null),
				children: "Отправить ещё одну"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: form.handleSubmit(onSubmit),
		className: "rounded-3xl bg-surface p-5 sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Имя",
					error: form.formState.errors.name?.message,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						placeholder: "Анна Ковалёва",
						autoComplete: "name",
						...form.register("name")
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Телефон",
					error: form.formState.errors.phone?.message,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "tel",
						placeholder: "+7 900 000-00-00",
						autoComplete: "tel",
						...form.register("phone")
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				className: "mt-4",
				label: "Тип объекта",
				error: form.formState.errors.objectType?.message,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					className: "flex h-11 w-full rounded-md border border-border bg-bg px-3 text-sm text-fg focus-visible:border-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40",
					...form.register("objectType"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "Выберите"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "office",
							children: "Офис"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "warehouse",
							children: "Склад / производство"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "mall",
							children: "Торговля / ТЦ"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "education",
							children: "Образование"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "residential",
							children: "ЖК / жилой дом"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "medical",
							children: "Медицина"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "other",
							children: "Другое"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				className: "mt-4",
				label: "Адрес объекта",
				error: form.formState.errors.address?.message,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					placeholder: "Город, улица, дом",
					autoComplete: "street-address",
					...form.register("address")
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				className: "mt-4",
				label: "Комментарий",
				error: form.formState.errors.message?.message,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					placeholder: "Что установлено, когда последний раз обслуживали, срочность",
					...form.register("message")
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-4 flex min-h-11 cursor-pointer items-start gap-3 text-sm leading-snug text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "checkbox",
					className: "mt-1 size-4 rounded border-border accent-accent",
					...form.register("consent")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Соглашаюсь на обработку персональных данных для связи по заявке.", form.formState.errors.consent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-1 block text-accent",
					children: form.formState.errors.consent.message
				}) : null] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				size: "lg",
				className: "mt-5 w-full sm:w-auto",
				disabled: form.formState.isSubmitting,
				children: "Отправить заявку"
			})
		]
	});
}
function Field({ label, error, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				className: "mb-2 block",
				children: label
			}),
			children,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1.5 text-xs text-accent",
				children: error
			}) : null
		]
	});
}
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b border-border", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between gap-4 py-5 text-left text-base font-medium text-fg transition-colors duration-150 hover:text-fg/80 [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4 shrink-0 text-muted transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm text-muted data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-5 leading-relaxed", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		className: "min-h-screen bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#services",
				className: "absolute left-4 top-0 z-50 -translate-y-16 rounded-md bg-fg px-4 py-2 text-sm font-medium text-bg transition-transform duration-150 focus:translate-y-4",
				children: "К содержанию"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustBar, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhySection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicesSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IncludedSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ObjectsSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EstimateSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComplianceSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function SectionLabel({ index, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "text-xs font-medium uppercase tracking-wider text-subtle",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-accent",
				children: index
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mx-2 text-border",
				children: "/"
			}),
			children
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl items-end gap-10 px-4 pb-12 pt-10 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:pb-16 lg:pt-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rise text-xs font-medium uppercase tracking-wider text-subtle",
						children: "Лицензия МЧС · Москва и область · 24/7"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "rise rise-2 mt-4 font-display text-3xl font-medium leading-tight tracking-tight sm:text-5xl sm:leading-[1.08]",
						children: "Пожарная сигнализация, которая работает каждый день — не только в день проверки"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rise rise-3 mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg",
						children: "Берём на техническое обслуживание автоматическую пожарную сигнализацию и систему оповещения. Регламент, ремонт, журнал, акты и аварийный выезд за два часа."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rise rise-4 mt-8 flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#estimate",
								children: ["Рассчитать стоимость", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								children: "Вызвать инженера"
							})
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
					className: "overflow-hidden rounded-3xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/hero-panel.jpg",
						alt: "Приёмно-контрольный прибор пожарной сигнализации в техническом помещении",
						className: "photo-frame aspect-photo w-full object-cover lg:aspect-square"
					})
				})
			})]
		})
	});
}
function TrustBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border bg-bg-elevated",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-6xl grid-cols-2 gap-px bg-border sm:grid-cols-4",
			children: [
				{
					value: "12",
					unit: "лет",
					label: "обслуживаем объекты"
				},
				{
					value: "840+",
					unit: "",
					label: "договоров ТО"
				},
				{
					value: "2",
					unit: "часа",
					label: "на аварийный выезд"
				},
				{
					value: "24/7",
					unit: "",
					label: "дежурная смена"
				}
			].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-bg-elevated px-4 py-6 sm:px-6 sm:py-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-display text-2xl font-medium tracking-tight tabular-nums sm:text-3xl",
					children: [item.value, item.unit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-1 text-lg text-muted",
						children: item.unit
					}) : null]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: item.label
				})]
			}, item.label))
		})
	});
}
function WhySection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
					index: "01",
					children: "Зачем это нужно"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-2xl font-medium tracking-tight sm:text-3xl",
					children: "Система на стене — ещё не защита"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-5 text-base leading-relaxed text-muted lg:col-span-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "На многих объектах прибор стоит с 2016 года, монтажная бригада исчезла, журнал пустой, а «обслуживание» — подпись в акте за три тысячи. Это не ТО. Это риск: отказ шлейфа, севшая АКБ, запылённые извещатели и предписание МЧС." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Мы принимаем систему как есть. Снимаем состояние, восстанавливаем работоспособность, ведём документы и приезжаем, когда что-то срабатывает не так." })]
			})]
		})
	});
}
function ServicesSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "scroll-mt-20 border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
					index: "02",
					children: "Услуги"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-2xl font-display text-2xl font-medium tracking-tight sm:text-3xl",
					children: "Две системы. Одна ответственность"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid gap-4 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "overflow-hidden rounded-3xl bg-surface",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/aps-detector.jpg",
							alt: "Дымовой извещатель на бетонном потолке",
							className: "photo-frame aspect-photo w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-accent",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Siren, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-medium uppercase tracking-wider",
										children: "АПС"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 font-display text-xl font-medium tracking-tight",
									children: "Пожарная сигнализация"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted",
									children: "Проверка извещателей, шлейфов, приёмно-контрольного прибора, источников питания и выходов на СОУЭ. Чистка, замена неисправных элементов, контроль зон."
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "overflow-hidden rounded-3xl bg-surface",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/soue-corridor.jpg",
							alt: "Коридор с настенным оповещателем системы эвакуации",
							className: "photo-frame aspect-photo w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-accent",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-medium uppercase tracking-wider",
										children: "СОУЭ"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 font-display text-xl font-medium tracking-tight",
									children: "Оповещение и эвакуация"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted",
									children: "Речевые оповещатели, сирены, световые табло, усилители и резерв питания. Проверяем слышимость, трансляцию и запуск по сигналу АПС."
								})
							]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 rounded-3xl bg-bg-elevated p-6 sm:p-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-2xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl font-medium tracking-tight",
								children: "Комплексный договор"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: "Один инженер, один график, один комплект документов. Дешевле раздельных договоров и без споров, «чья это зона», если сработка не прошла на оповещение."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "cream",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#estimate",
								children: ["Сравнить стоимость", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
							})
						})]
					})
				})
			]
		})
	});
}
function IncludedSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
					index: "03",
					children: "Состав работ"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-xl font-display text-2xl font-medium tracking-tight sm:text-3xl",
					children: "Что входит в ежемесячное обслуживание"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: [
						{
							icon: ClipboardCheck,
							title: "Регламентный обход",
							text: "Осмотр, проверка сработки, журнал"
						},
						{
							icon: Wrench,
							title: "Мелкий ремонт",
							text: "Замена извещателей, табло, АКБ в рамках договора"
						},
						{
							icon: FileText,
							title: "Документы",
							text: "Акты, график ТО, рекомендации по капремонту"
						},
						{
							icon: ShieldCheck,
							title: "Подготовка к МЧС",
							text: "Комплект к проверке, разбор предписаний"
						},
						{
							icon: Clock3,
							title: "Аварийный выезд",
							text: "Ложные сработки, отказы, обрывы — 24/7"
						},
						{
							icon: Phone,
							title: "Персональный инженер",
							text: "Один контакт, знает объект и историю"
						}
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-2xl bg-surface p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-5 text-accent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-medium",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-relaxed text-muted",
								children: item.text
							})
						]
					}, item.title))
				})
			]
		})
	});
}
function ProcessSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "process",
		className: "scroll-mt-20 border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
					index: "04",
					children: "Как работаем"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-2xl font-medium tracking-tight sm:text-3xl",
					children: "От заявки до журнала ТО"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-10 grid gap-px overflow-hidden rounded-3xl bg-border sm:grid-cols-2 lg:grid-cols-4",
					children: [
						{
							n: "01",
							title: "Заявка",
							text: "Телефон, форма или письмо. Согласуем выезд на объект."
						},
						{
							n: "02",
							title: "Аудит",
							text: "Снимаем состояние АПС и СОУЭ, фиксируем дефекты и состав."
						},
						{
							n: "03",
							title: "Договор",
							text: "График ТО, стоимость, аварийный регламент, ответственный инженер."
						},
						{
							n: "04",
							title: "Регламент",
							text: "Ежемесячные работы, акты, журнал. Ремонт — по согласованию."
						}
					].map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "bg-bg-elevated p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-sm text-accent",
								children: step.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-lg font-medium",
								children: step.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: step.text
							})
						]
					}, step.n))
				})
			]
		})
	});
}
function ObjectsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
						index: "05",
						children: "Объекты"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-2xl font-medium tracking-tight sm:text-3xl",
						children: "Берём системы, которые уже стоят"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-muted",
						children: "Не важно, кто монтировал. Работаем с адресными и пороговыми АПС, речевым и звуковым оповещением 1–4 типов. Если часть оборудования снята с производства — предложим замену, а не «не обслуживается»."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex flex-wrap gap-2",
						children: [
							"Офисы",
							"Склады",
							"Производство",
							"Торговые центры",
							"Школы и детские сады",
							"Жилые комплексы",
							"Клиники",
							"Гостиницы",
							"Паркинги",
							"Административные здания"
						].map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex h-9 items-center rounded-full px-3 text-sm text-muted shadow-[var(--shadow-border)]",
							children: tag
						}, tag))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
				className: "overflow-hidden rounded-3xl lg:col-span-7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/object-building.jpg",
					alt: "Современное административное здание в сумерках",
					className: "photo-frame aspect-wide h-full w-full object-cover"
				})
			})]
		})
	});
}
function EstimateSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "estimate",
		className: "scroll-mt-20 border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
					index: "06",
					children: "Стоимость"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-xl font-display text-2xl font-medium tracking-tight sm:text-3xl",
					children: "Ориентир по договору за минуту"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-sm leading-relaxed text-muted",
					children: "Считаем от площади, состава системы и типа объекта. Итоговая цена фиксируется после аудита — без скрытых «выездов инженера»."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EstimateCalculator, {})
				})
			]
		})
	});
}
function ComplianceSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
				className: "overflow-hidden rounded-3xl lg:col-span-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/docs-desk.jpg",
					alt: "Журнал технического обслуживания и планы объекта",
					className: "photo-frame h-full w-full object-cover"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
						index: "07",
						children: "Нормативная база"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-2xl font-medium tracking-tight sm:text-3xl",
						children: "Документы, которые выдерживают проверку"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-muted",
						children: "Ведём журнал учёта работ, выдаём акты и график ТО. Если придёт инспектор — пакет собирается за вечер, а не «на следующей неделе»."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 divide-y divide-border border-y border-border",
						children: [
							{
								title: "123-ФЗ",
								text: "Технический регламент о требованиях пожарной безопасности"
							},
							{
								title: "ПП РФ № 1479",
								text: "Правила противопожарного режима: исправность и ТО систем"
							},
							{
								title: "ГОСТ Р 59638",
								text: "Руководство по монтажу, ТО и ремонту систем пожарной сигнализации"
							},
							{
								title: "СП 484.1311500",
								text: "Нормы проектирования АПС, которые система должна соблюдать"
							},
							{
								title: "СП 3.13130",
								text: "Системы оповещения и управления эвакуацией людей при пожаре"
							}
						].map((doc) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-4 py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-36 shrink-0 font-medium text-fg",
								children: doc.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted",
								children: doc.text
							})]
						}, doc.title))
					})
				]
			})]
		})
	});
}
function FaqSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		className: "scroll-mt-20 border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
					index: "08",
					children: "Вопросы"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-2xl font-medium tracking-tight sm:text-3xl",
					children: "Коротко о договоре и регламенте"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
					type: "single",
					collapsible: true,
					className: "w-full",
					children: [
						{
							q: "Как часто нужно обслуживать АПС и СОУЭ?",
							a: "Регламентные работы — ежемесячно, с отметкой в журнале. Отдельные операции (измерения, замена АКБ, комплексные испытания) — по графику производителя и ГОСТ Р 59638. Без договора ТО объект формально не готов к проверке."
						},
						{
							q: "Что будет, если договора на ТО нет?",
							a: "При проверке МЧС это типичное предписание. Хуже другое: севший резерв питания и запылённые извещатели обнаруживаются уже при пожаре или ложной сработке ночью. Договор фиксирует ответственность и срок реакции."
						},
						{
							q: "Вы работаете только по Москве?",
							a: "Москва и область в радиусе дежурной смены. Аварийный выезд по городу — ориентир два часа, по области согласуем при заключении договора."
						},
						{
							q: "Можно ли взять систему, которую ставила другая компания?",
							a: "Да, это основной сценарий. На первом выезде снимаем состав, схемы (если есть), дефекты и предлагаем договор. Если исполнительной документации нет — восстановим по факту."
						},
						{
							q: "Что входит в аварийный выезд?",
							a: "Ложные сработки, отказ прибора, обрыв шлейфа, пропажа оповещения. Дежурный инженер приезжает, локализует причину, восстанавливает работу. Расходники сверх договора — по согласованию, без сюрпризов в счёте."
						},
						{
							q: "Выдаёте документы для управляющей компании и МЧС?",
							a: "Журнал ТО, акты выполненных работ, график, рекомендации. При подготовке к проверке собираем пакет и, при необходимости, присутствуем на объекте."
						},
						{
							q: "Сколько длится ежемесячный выезд?",
							a: "Типовой офис до 1 500 м² — от полутора до трёх часов. Склад или распределённый объект — по зонам, в согласованное окно, без остановки работы площадки, если это возможно."
						},
						{
							q: "Можно обслуживать только СОУЭ или только АПС?",
							a: "Можно. Комплексный договор обычно выгоднее и снимает спор, на чьей стороне отказ запуска оповещения. В калькуляторе это считается отдельно."
						}
					].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
						value: `item-${i}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, { children: item.q }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: item.a })]
					}, item.q))
				})
			})]
		})
	});
}
function ContactSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "scroll-mt-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
						index: "09",
						children: "Заявка"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-2xl font-medium tracking-tight sm:text-3xl",
						children: "Инженер перезвонит в рабочий день"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-muted",
						children: "Опишите объект — подскажем, нужен ли срочный выезд или достаточно планового аудита. По телефону отвечаем сразу."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "tel:+74951204590",
								className: "block font-display text-2xl tracking-tight hover:text-fg/80",
								children: "+7 495 120-45-90"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:service@pozhgarant.ru",
								className: "block text-muted hover:text-fg",
								children: "service@pozhgarant.ru"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: "Москва, ул. Электродная, 12, стр. 1"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: "Пн–Пт 9:00–19:00 · авария круглосуточно"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 space-y-2 text-sm text-muted",
						children: [
							"Выезд на аудит — обычно на следующий рабочий день",
							"Договор можно начать с текущего месяца",
							"Работаем с юрлицами и УК"
						].map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-accent" }), line]
						}, line))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})
			})]
		})
	});
}
//#endregion
export { Home as component };
