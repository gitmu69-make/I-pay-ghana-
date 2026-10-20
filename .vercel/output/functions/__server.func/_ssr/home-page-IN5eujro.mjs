import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Smartphone, f as ArrowRight, i as Store, l as Headset, n as Wallet, o as ShieldCheck, p as ArrowLeftRight, s as ReceiptText, u as Eye } from "../_libs/lucide-react.mjs";
import { a as ButtonLink, f as stories, o as Mark, s as cn } from "./router-BFH_sN-p.mjs";
import { t as InquiryForm } from "./inquiry-form-B57PCNzq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/home-page-IN5eujro.js
var import_jsx_runtime = require_jsx_runtime();
var rows = [
	{
		title: "Payment received",
		meta: "Sample · today",
		amount: "+ GHS 150.00"
	},
	{
		title: "Shop purchase",
		meta: "Sample · yesterday",
		amount: "− GHS 85.50"
	},
	{
		title: "Airtime",
		meta: "Sample · Monday",
		amount: "− GHS 20.00"
	}
];
function PhoneMock({ className, captionClassName }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("mx-auto w-full max-w-xs", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-device border border-paper/20 bg-ink p-2 shadow-lift",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "overflow-hidden rounded-screen bg-foam",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between bg-forest px-4 py-3 text-paper",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { plain: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold tracking-wide",
							children: "I PAY"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-paper/15 px-2 py-1 text-xs",
						children: "Preview"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-4 pb-4 pt-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium text-muted",
							children: "Available balance"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-3xl font-extrabold tracking-tight text-ink tabular-nums",
							children: "GHS 1,250.00"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted",
							children: "Sample figure. Not a live account."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 rounded-2xl bg-paper p-3 shadow-soft",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold text-ink",
									children: "Payment received"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted",
									children: "GHS 150.00 · sample"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-mint px-2 py-1 text-xs font-semibold text-forest",
									children: "Successful"
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 divide-y divide-line",
							children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center justify-between gap-3 py-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold text-ink",
									children: row.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted",
									children: row.meta
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-semibold tabular-nums text-ink",
									children: row.amount
								})]
							}, row.title))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex min-h-11 items-center justify-center rounded-full bg-forest text-sm font-semibold text-paper",
							children: "Sample action"
						})
					]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: cn("mt-3 text-center text-xs text-muted", captionClassName),
			children: "Mock interface only. It is not connected to an account."
		})]
	});
}
var contactSubjects = [
	"General question",
	"Products",
	"Business payments",
	"Support",
	"Something else"
];
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SolutionsSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductRow, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BenefitsSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItWorksSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SecuritySection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentMethodsSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialsSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
	] });
}
function HeroSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-pale",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl lg:min-h-screen lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "order-2 flex flex-col justify-center bg-forest px-5 py-14 text-paper sm:px-10 lg:order-1 lg:px-14 lg:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-widest text-leaf",
						children: "YOUR MONEY. YOUR WAY."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-4 max-w-md text-5xl font-extrabold leading-none tracking-tight sm:text-6xl",
						children: ["Pay smarter.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-2 block",
							children: "Live better."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-md text-base leading-relaxed text-paper/85 sm:text-lg",
						children: "Discover a simpler way to manage everyday payments with I Pay Ghana. Built around the needs of people and businesses in Ghana."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
							to: "/get-started",
							className: "bg-paper text-forest hover:bg-mint",
							children: "Get Started"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
							to: "/",
							hash: "solutions",
							variant: "outlineLight",
							children: "Explore Our Solutions"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-md text-sm leading-relaxed text-paper/75",
						children: "This website does not open accounts or move money. Sample balances elsewhere are illustrations."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "order-1 min-h-80 lg:order-2 lg:min-h-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/hero.jpg",
					alt: "Two young adults in a bright Accra café, one holding a phone while the other passes a paper bag.",
					width: 1792,
					height: 1008,
					className: "h-full w-full object-cover"
				})
			})]
		})
	});
}
function SolutionsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "solutions",
		className: "scroll-mt-20 bg-paper px-4 py-20 sm:px-6 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro, {
				kicker: "Our solutions",
				title: "Payments made simpler.",
				text: "Explore digital payment solutions designed to make everyday financial transactions more convenient."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "flex flex-col rounded-card bg-mint p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneMock, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-8 text-3xl font-extrabold tracking-tight text-ink",
							children: "Make payments with ease"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-md text-base leading-relaxed text-muted",
							children: "Explore a simpler digital payment experience designed to help you manage transactions conveniently."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ButtonLink, {
								to: "/solutions/payments",
								variant: "outlineGreen",
								children: ["Explore Payments", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									className: "size-4",
									"aria-hidden": "true"
								})]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "flex flex-col overflow-hidden rounded-card bg-mint",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/business.jpg",
						alt: "A Ghanaian shop owner checks a phone behind a wooden counter.",
						width: 1728,
						height: 1152,
						className: "h-72 w-full object-cover sm:h-80"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-1 flex-col p-6 sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-3xl font-extrabold tracking-tight text-ink",
								children: "Built for everyday business"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-base leading-relaxed text-muted",
								children: "Discover digital payment experiences designed around the needs of Ghanaian entrepreneurs and growing businesses."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ButtonLink, {
									to: "/solutions/business",
									variant: "outlineGreen",
									children: ["Explore Business Solutions", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
										className: "size-4",
										"aria-hidden": "true"
									})]
								})
							})
						]
					})]
				})]
			})]
		})
	});
}
var productCards = [
	{
		icon: ArrowLeftRight,
		title: "Send money",
		text: "Explore convenient ways to move money between supported accounts.",
		to: "/products/send-money"
	},
	{
		icon: ReceiptText,
		title: "Pay bills",
		text: "Discover digital payment options for everyday bills and expenses.",
		to: "/products/pay-bills"
	},
	{
		icon: Store,
		title: "Business collections",
		text: "Explore payment collection solutions for businesses.",
		to: "/products/business-collections"
	}
];
function ProductRow() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "products",
		className: "scroll-mt-20 bg-foam px-4 py-20 sm:px-6 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro, {
				kicker: "Categories",
				title: "Three ways to look closer.",
				text: "These are proposed service categories, not a list of live products."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 md:grid-cols-3",
				children: productCards.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "flex flex-col rounded-card bg-paper p-6 shadow-soft transition duration-200 hover:-translate-y-1 hover:shadow-lift",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex size-12 items-center justify-center rounded-2xl bg-mint text-forest",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card.icon, {
								className: "size-5",
								"aria-hidden": "true"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 text-xl font-bold text-ink",
							children: card.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 flex-1 text-sm leading-relaxed text-muted",
							children: card.text
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
								to: card.to,
								variant: "outlineGreen",
								children: "Learn more"
							})
						})
					]
				}, card.title))
			})]
		})
	});
}
var benefits = [
	{
		icon: Smartphone,
		title: "Convenient payments",
		text: "Explore simpler ways to handle supported everyday transactions."
	},
	{
		icon: Store,
		title: "Business-friendly solutions",
		text: "Discover payment experiences designed with small businesses in mind."
	},
	{
		icon: Eye,
		title: "Clear transactions",
		text: "Give users a clear, easy-to-understand view of their payment activity."
	},
	{
		icon: Wallet,
		title: "Digital convenience",
		text: "Access digital experiences designed for everyday use."
	},
	{
		icon: Headset,
		title: "Customer support",
		text: "Find the information and assistance you need when using our services."
	}
];
function BenefitsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-mint px-4 py-20 sm:px-6 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro, {
					kicker: "Why I Pay Ghana",
					title: "More convenience. More possibilities.",
					text: "Discover how a thoughtful digital payment experience can help simplify everyday financial activities."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
					to: "/contact",
					variant: "secondary",
					className: "shrink-0 self-start",
					children: "Contact our team"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6",
				children: benefits.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: `rounded-card bg-paper p-5 shadow-soft ${index < 3 ? "lg:col-span-2" : "lg:col-span-3"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
							className: "size-5 text-forest",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-lg font-bold text-ink",
							children: item.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: item.text
						})
					]
				}, item.title))
			})]
		})
	});
}
var steps = [
	{
		n: "01",
		title: "Get started",
		text: "Discover I Pay Ghana and follow the available onboarding instructions."
	},
	{
		n: "02",
		title: "Set up",
		text: "Complete the required setup steps for the service you want to use."
	},
	{
		n: "03",
		title: "Make a payment",
		text: "Follow the instructions for your selected payment method and confirm the transaction details."
	},
	{
		n: "04",
		title: "Track your activity",
		text: "Review available transaction confirmations and activity records."
	}
];
function HowItWorksSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "how-it-works",
		className: "scroll-mt-20 bg-forest px-4 py-20 text-paper sm:px-6 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneMock, { captionClassName: "text-paper/75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-4xl font-extrabold tracking-tight sm:text-5xl",
					children: "How I Pay Ghana works"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-md text-lg text-paper/80",
					children: "Simple experiences. Clear steps. Digital convenience."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-10",
					children: steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: `grid grid-cols-[auto_1fr] gap-4 py-5 ${index > 0 ? "border-t border-paper/15" : ""}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-3xl font-extrabold tabular-nums text-leaf",
							children: step.n
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-bold",
							children: step.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm leading-relaxed text-paper/80",
							children: step.text
						})] })]
					}, step.n))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-paper/70",
					children: "These steps describe the intended journey. Live onboarding is not open on this website."
				})
			] })]
		})
	});
}
var security = [
	{
		icon: ShieldCheck,
		title: "Account security",
		text: "Encourage secure account access and responsible handling of login credentials."
	},
	{
		icon: Eye,
		title: "Payment transparency",
		text: "Help users understand transaction details, applicable charges, and payment confirmations."
	},
	{
		icon: Headset,
		title: "Customer assistance",
		text: "Provide clear guidance on how to contact the appropriate support team."
	}
];
function SecuritySection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "security",
		className: "scroll-mt-20 bg-paper px-4 py-20 sm:px-6 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro, {
					kicker: "Care",
					title: "Your payments deserve care.",
					text: "Clear information, careful handling of account details, and transparent payment processes matter."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-5 md:grid-cols-3",
					children: security.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-card border border-line bg-paper p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex size-12 items-center justify-center rounded-2xl bg-pale text-forest",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
									className: "size-5",
									"aria-hidden": "true"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 text-xl font-bold text-ink",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: item.text
							})
						]
					}, item.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 max-w-3xl text-sm leading-relaxed text-muted",
					children: "I Pay Ghana does not claim a licence, deposit protection, or a fraud guarantee on this website. If regulated activity is offered later, the licensed entity and the applicable terms will be named here."
				})
			]
		})
	});
}
function PaymentMethodsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "payments",
		className: "scroll-mt-20 bg-pale px-4 py-20 sm:px-6 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro, {
				kicker: "Methods",
				title: "Designed for the way Ghana pays.",
				text: "Explore the available payment methods and follow the instructions provided for your selected service."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 space-y-3",
				children: [
					"Mobile money",
					"Bank payments",
					"Other supported digital channels"
				].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-card border border-line bg-paper px-5 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold text-ink",
						children: item
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Shown as a category only. No provider is listed until an integration is confirmed."
					})]
				}, item))
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/hands.jpg",
				alt: "Hands holding a phone over a wooden counter beside cedis and a blank receipt.",
				width: 1600,
				height: 1200,
				className: "h-80 w-full rounded-card object-cover sm:h-96"
			})]
		})
	});
}
function TestimonialsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "stories",
		className: "scroll-mt-20 bg-paper px-4 py-20 sm:px-6 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro, {
				kicker: "Sample stories",
				title: "Built around everyday needs.",
				text: "Digital financial experiences should work for real people and real businesses. The notes below are sample copy for the design, not customer reviews."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 md:grid-cols-3",
				children: stories.map((story) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "overflow-hidden rounded-card bg-foam shadow-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: story.image,
						alt: story.alt,
						width: 1200,
						height: 1600,
						className: "h-72 w-full object-cover object-top"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
						className: "p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm leading-relaxed text-ink",
								children: [
									"“",
									story.quote,
									"”"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 font-semibold text-ink",
								children: story.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: story.role
							})
						]
					})]
				}, story.name))
			})]
		})
	});
}
function ContactSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "scroll-mt-20 bg-foam px-4 py-20 sm:px-6 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-12 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-4xl font-extrabold tracking-tight text-ink sm:text-5xl",
					children: "Let’s talk."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-md text-lg leading-relaxed text-muted",
					children: "Have a question about I Pay Ghana? Get in touch to learn more about our services and available support."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-8 space-y-4 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
							term: "Phone",
							value: "A verified business number has not been published."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
							term: "Email",
							value: "A verified business email has not been published."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
							term: "Office",
							value: "A verified address has not been published."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
							term: "Hours",
							value: "Business hours have not been published."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-md text-sm leading-relaxed text-muted",
					children: "Call, email, and directions stay off this page until those details are confirmed. The form checks what you type, then clears it. It does not send anything."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-card border border-line bg-paper p-5 shadow-soft sm:p-7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InquiryForm, {
					subjects: contactSubjects,
					idPrefix: "home-contact"
				})
			})]
		})
	});
}
function Detail({ term, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-b border-line pb-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "font-semibold text-ink",
			children: term
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "mt-1 text-muted",
			children: value
		})]
	});
}
function FinalCta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-4 py-16 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl overflow-hidden rounded-card bg-forest px-6 py-16 text-paper sm:px-12 md:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute -right-10 -top-16 size-64 rounded-full border border-paper/15",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute right-10 top-10 size-36 rounded-full border border-leaf/50",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute -left-8 bottom-0 size-40 rounded-full border border-paper/10",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative max-w-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-4xl font-extrabold tracking-tight sm:text-5xl",
							children: "Ready to make payments simpler?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-lg leading-relaxed text-paper/80",
							children: "Explore I Pay Ghana and discover a digital payment experience designed around everyday needs."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
								to: "/get-started",
								className: "bg-paper text-forest hover:bg-mint",
								children: "Get Started"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
								to: "/contact",
								variant: "outlineLight",
								children: "Contact Us"
							})]
						})
					]
				})
			]
		})
	});
}
function SectionIntro({ kicker, title, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold tracking-widest text-forest uppercase",
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-lg leading-relaxed text-muted",
				children: text
			})
		]
	});
}
//#endregion
export { HomePage as n, HowItWorksSection as r, ContactSection as t };
