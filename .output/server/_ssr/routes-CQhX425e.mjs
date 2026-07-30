import { a as __toESM } from "../_runtime.mjs";
import { i as AnimatePresence, n as useScroll, t as useTransform } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { a as Music, c as Hand, d as Clock, f as ChevronDown, i as Pause, l as Gift, m as CalendarPlus, n as Sparkles, o as MapPin, p as Calendar, r as Send, s as Heart, t as X, u as Copy } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CQhX425e.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var music_default = "/assets/music-C5DzIoet.mp3";
var bouquet_main_default = "/assets/bouquet-main-Cc6TcYPy.png";
var corner_tl_default = "/assets/corner-tl-BnIuxa4n.png";
var sprig_eucalyptus_default = "/assets/sprig-eucalyptus-c51-iFi2.png";
var sprig_olive_default = "/assets/sprig-olive-ClERFs2A.png";
var sprig_blossom_default = "/assets/sprig-blossom-B2ye_Q7-.png";
var wax_seal_default = "/assets/wax-seal-JqJcZ9hm.png";
var gallery_1_default = "/assets/gallery-1-DZU-G15i.jpg";
var gallery_2_default = "/assets/gallery-2-BwySCNAC.jpg";
var gallery_3_default = "/assets/gallery-3-ZmrpDuqy.jpg";
var gallery_4_default = "/assets/gallery-4-BaCERNZu.jpg";
var gallery_5_default = "/assets/gallery-5-CojnOEl0.jpg";
var gallery_6_default = "/assets/gallery-6-DSjyuKKf.jpg";
var gallery_7_default = "/assets/gallery-7-BSYpiTh1.jpg";
var gallery_8_default = "/assets/gallery-8-C4uDhhgl.jpg";
var gallery_9_default = "/assets/gallery-9-BnDKtxN0.jpg";
var gallery_10_default = "/assets/gallery-10-Bv_UZejn.jpg";
var gallery_11_default = "/assets/gallery-11-BVvwL-CU.jpg";
var gallery_12_default = "/assets/gallery-12-Ben9wrqY.jpg";
var WEDDING_DATE = /* @__PURE__ */ new Date("2026-11-13T19:00:00-03:00");
var MAPS_URL = "https://maps.app.goo.gl/5zBmo7CoEmFJLSur6";
var VENUE_NAME = "Vila de São Francisco";
var VENUE_ADDRESS = "Rod. Marechal Rondon · Agudos, SP · 17120-000";
var ICASEI_URL = "https://www.icasei.com.br";
var PIX_KEY = "eduardoantr@gmail.com";
var GUEST_MESSAGES = [];
var GALLERY = [
	{
		src: gallery_1_default,
		h: 620
	},
	{
		src: gallery_2_default,
		h: 520
	},
	{
		src: gallery_3_default,
		h: 380
	},
	{
		src: gallery_4_default,
		h: 640
	},
	{
		src: gallery_5_default,
		h: 420
	},
	{
		src: gallery_6_default,
		h: 560
	},
	{
		src: gallery_7_default,
		h: 580
	},
	{
		src: gallery_8_default,
		h: 310
	},
	{
		src: gallery_9_default,
		h: 510
	},
	{
		src: gallery_10_default,
		h: 480
	},
	{
		src: gallery_11_default,
		h: 480
	},
	{
		src: gallery_12_default,
		h: 480
	}
];
function useCountdown(target) {
	const [now, setNow] = (0, import_react.useState)(() => /* @__PURE__ */ new Date());
	(0, import_react.useEffect)(() => {
		const t = setInterval(() => setNow(/* @__PURE__ */ new Date()), 1e3);
		return () => clearInterval(t);
	}, []);
	const diff = Math.max(0, target.getTime() - now.getTime());
	return {
		d: Math.floor(diff / 864e5),
		h: Math.floor(diff / 36e5 % 24),
		m: Math.floor(diff / 6e4 % 60),
		s: Math.floor(diff / 1e3 % 60)
	};
}
function Reveal({ children, delay = 0, y = 30 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y,
			filter: "blur(8px)"
		},
		whileInView: {
			opacity: 1,
			y: 0,
			filter: "blur(0px)"
		},
		viewport: {
			once: true,
			amount: .25
		},
		transition: {
			duration: 1.05,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children
	});
}
function SectionMark({ label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-center gap-4 mb-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-12 bg-gold/60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "eyebrow text-olive",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-12 bg-gold/60" })
		]
	});
}
var ROMAN = [
	"I",
	"II",
	"III",
	"IV",
	"V",
	"VI",
	"VII",
	"VIII",
	"IX"
];
function Chapter({ children, className = "", number }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
		initial: {
			opacity: 0,
			rotateY: -5,
			y: 50,
			scale: .98
		},
		whileInView: {
			opacity: 1,
			rotateY: 0,
			y: 0,
			scale: 1
		},
		viewport: {
			once: true,
			amount: .2
		},
		transition: {
			duration: 1.2,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		style: {
			transformPerspective: 1800,
			transformOrigin: "center center",
			transformStyle: "preserve-3d"
		},
		className: `chapter-page ${className}`,
		children: [number !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: -10
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: { once: true },
			transition: {
				duration: .8,
				delay: .3
			},
			className: "pointer-events-none absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-3 text-gold/70 text-[0.65rem] tracking-[0.5em] uppercase font-editorial italic z-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-6 bg-gold/50" }),
				"Capítulo ",
				ROMAN[number - 1],
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-6 bg-gold/50" })
			]
		}), children]
	});
}
function Verse({ text, reference, reflection, flip = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
		initial: { opacity: 0 },
		whileInView: { opacity: 1 },
		viewport: {
			once: true,
			amount: .3
		},
		transition: {
			duration: 1.4,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: "relative py-40 md:py-56 px-6 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
				src: flip ? sprig_olive_default : sprig_eucalyptus_default,
				alt: "",
				"aria-hidden": true,
				initial: {
					opacity: 0,
					x: flip ? 30 : -30
				},
				whileInView: {
					opacity: .4,
					x: 0
				},
				viewport: { once: true },
				transition: {
					duration: 1.2,
					delay: .2
				},
				className: `absolute top-10 ${flip ? "right-0 -scale-x-100" : "left-0"} w-20 md:w-28 opacity-40 pointer-events-none`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
				src: flip ? sprig_blossom_default : sprig_olive_default,
				alt: "",
				"aria-hidden": true,
				initial: {
					opacity: 0,
					x: flip ? -30 : 30
				},
				whileInView: {
					opacity: .4,
					x: 0
				},
				viewport: { once: true },
				transition: {
					duration: 1.2,
					delay: .4
				},
				className: `absolute bottom-10 ${flip ? "left-0" : "right-0 -scale-x-100"} w-20 md:w-28 opacity-40 pointer-events-none`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl mx-auto text-center relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
						initial: { scaleX: 0 },
						whileInView: { scaleX: 1 },
						viewport: { once: true },
						transition: {
							duration: 1.2,
							delay: .2
						},
						className: "block h-px w-24 mx-auto bg-gold/60 origin-center mb-10"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
						initial: {
							opacity: 0,
							y: 18,
							filter: "blur(6px)"
						},
						whileInView: {
							opacity: 1,
							y: 0,
							filter: "blur(0px)"
						},
						viewport: { once: true },
						transition: {
							duration: 1.2,
							delay: .35
						},
						className: "font-editorial italic text-2xl sm:text-3xl md:text-[2.1rem] leading-[1.5] text-olive",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-gold/70 text-4xl align-top mr-1 leading-none",
								children: "“"
							}),
							text,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-gold/70 text-4xl align-top ml-1 leading-none",
								children: "”"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 10
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: 1.2,
							delay: .6
						},
						className: "eyebrow mt-8 text-gold",
						children: reference
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
						initial: { scaleX: 0 },
						whileInView: { scaleX: 1 },
						viewport: { once: true },
						transition: {
							duration: 1.2,
							delay: .75
						},
						className: "block h-px w-16 mx-auto bg-gold/50 origin-center my-10"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 14,
							filter: "blur(4px)"
						},
						whileInView: {
							opacity: 1,
							y: 0,
							filter: "blur(0px)"
						},
						viewport: { once: true },
						transition: {
							duration: 1.2,
							delay: .9
						},
						className: "font-serif-c italic text-lg md:text-xl text-ink-soft leading-relaxed max-w-xl mx-auto",
						children: reflection
					})
				]
			})
		]
	});
}
function Sparkles8() {
	const items = (0, import_react.useMemo)(() => Array.from({ length: 18 }).map((_, i) => ({
		left: Math.random() * 100,
		delay: Math.random() * 6,
		duration: 12 + Math.random() * 10,
		size: 3 + Math.random() * 4
	})), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": true,
		className: "pointer-events-none fixed inset-0 overflow-hidden z-[5]",
		children: items.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute bottom-[-10vh] rounded-full animate-drift",
			style: {
				left: `${s.left}%`,
				width: s.size,
				height: s.size,
				background: "radial-gradient(circle, rgba(198,168,106,0.9), rgba(198,168,106,0))",
				animationDuration: `${s.duration}s`,
				animationDelay: `${s.delay}s`,
				boxShadow: "0 0 8px rgba(198,168,106,0.5)"
			}
		}, i))
	});
}
function Landing({ onEnter }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: { opacity: 1 },
		exit: { opacity: 0 },
		transition: {
			duration: 1.2,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: "fixed inset-0 z-50 bg-cream overflow-hidden flex items-center justify-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
				src: corner_tl_default,
				alt: "",
				"aria-hidden": true,
				initial: {
					opacity: 0,
					x: -50,
					y: -50,
					scale: .95
				},
				animate: {
					opacity: .85,
					x: 0,
					y: 0,
					scale: 1
				},
				transition: {
					duration: 2.2,
					delay: .2,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				className: "absolute top-0 left-0 z-0 w-[38vw] max-w-[340px] select-none pointer-events-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
				src: corner_tl_default,
				alt: "",
				"aria-hidden": true,
				initial: {
					opacity: 0,
					x: 50,
					y: 50,
					scale: .95
				},
				animate: {
					opacity: .85,
					x: 0,
					y: 0,
					scale: 1
				},
				transition: {
					duration: 2.2,
					delay: .45,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				className: "absolute bottom-0 right-0 z-0 w-[38vw] max-w-[340px] rotate-180 select-none pointer-events-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex flex-col items-center px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							scale: .9,
							y: 20
						},
						animate: {
							opacity: 1,
							scale: 1,
							y: 0
						},
						transition: {
							duration: 1.6,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
							src: bouquet_main_default,
							alt: "Buquê de flores brancas",
							className: "w-[280px] sm:w-[360px] md:w-[420px] h-auto animate-sway",
							style: { filter: "drop-shadow(0 30px 40px rgba(95,104,71,0.15))" }
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
							onClick: onEnter,
							initial: {
								scale: 0,
								rotate: -30,
								opacity: 0
							},
							animate: {
								scale: 1,
								rotate: 0,
								opacity: 1
							},
							transition: {
								delay: 1.1,
								duration: 1,
								type: "spring",
								stiffness: 110,
								damping: 12
							},
							whileHover: {
								scale: 1.08,
								rotate: -3
							},
							whileTap: {
								scale: .94,
								rotate: 2
							},
							"aria-label": "Abrir convite",
							className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									"aria-hidden": true,
									className: "pointer-events-none absolute inset-[-8%] rounded-full border border-gold/40",
									animate: {
										scale: [1, 1.5],
										opacity: [.45, 0]
									},
									transition: {
										duration: 2.8,
										repeat: Infinity,
										ease: "easeOut",
										delay: 2.2
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									"aria-hidden": true,
									className: "pointer-events-none absolute inset-[-8%] rounded-full border border-gold/30",
									animate: {
										scale: [1, 1.5],
										opacity: [.35, 0]
									},
									transition: {
										duration: 2.8,
										repeat: Infinity,
										ease: "easeOut",
										delay: 3.6
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": true,
									className: "pointer-events-none absolute inset-[-18%] rounded-full bg-gold/20 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
									src: wax_seal_default,
									alt: "Selo de cera com as iniciais S & E",
									className: "relative w-[170px] h-[170px] sm:w-[210px] sm:h-[210px] md:w-[240px] md:h-[240px] object-contain select-none",
									style: { filter: "drop-shadow(0 18px 32px rgba(63,72,48,0.38))" },
									animate: {
										scale: [
											1,
											1.035,
											1
										],
										rotate: [
											0,
											1,
											0,
											-1,
											0
										]
									},
									transition: {
										scale: {
											duration: 4,
											repeat: Infinity,
											ease: "easeInOut",
											delay: 2.2
										},
										rotate: {
											duration: 8,
											repeat: Infinity,
											ease: "easeInOut",
											delay: 2.2
										}
									}
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
						initial: {
							opacity: 0,
							y: 24,
							filter: "blur(8px)"
						},
						animate: {
							opacity: 1,
							y: 0,
							filter: "blur(0px)"
						},
						transition: {
							delay: 1.7,
							duration: 1.1,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "mt-8 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block eyebrow mb-3",
								children: "um convite para você"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-5xl sm:text-6xl md:text-7xl text-olive leading-none",
								children: "Eduardo"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-editorial italic text-gold text-xl my-1",
								children: "&"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-display text-5xl sm:text-6xl md:text-7xl text-olive leading-none",
								children: "Samira"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
						onClick: onEnter,
						initial: {
							opacity: 0,
							y: 10
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: 2.4,
							duration: .9
						},
						className: "mt-4 flex flex-col items-center gap-1 text-ink-soft group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-serif-c italic text-lg group-hover:text-olive transition-colors duration-300",
							children: "Toque para entrar"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hand, {
							className: "w-5 h-5 text-olive animate-handTap group-hover:scale-110 transition-transform duration-300",
							strokeWidth: 1.2
						})]
					})
				]
			})
		]
	}, "landing");
}
var MUSIC_URL = Object.values(/* @__PURE__ */ Object.assign({ "/src/assets/music.mp3": music_default }))[0];
function MusicToggle() {
	const [playing, setPlaying] = (0, import_react.useState)(false);
	const audioRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!MUSIC_URL) return;
		const audio = new Audio(MUSIC_URL);
		audio.loop = true;
		audio.volume = .15;
		audioRef.current = audio;
		audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
		return () => {
			audio.pause();
			audioRef.current = null;
		};
	}, []);
	const toggle = () => {
		if (!audioRef.current) return;
		if (playing) {
			audioRef.current.pause();
			setPlaying(false);
		} else {
			audioRef.current.play().catch(() => {});
			setPlaying(true);
		}
	};
	if (!MUSIC_URL) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick: toggle,
		"aria-label": playing ? "Pausar música" : "Tocar música",
		className: "fixed bottom-5 right-5 z-40 w-12 h-12 rounded-full bg-cream/90 backdrop-blur border border-border shadow-card flex items-center justify-center text-olive hover:scale-105 transition",
		children: playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "w-4 h-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music, { className: "w-4 h-4" })
	});
}
function Countdown() {
	const { d, h, m, s } = useCountdown(WEDDING_DATE);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-4 gap-3 sm:gap-6 max-w-2xl mx-auto",
		children: [
			{
				l: "Dias",
				v: d
			},
			{
				l: "Horas",
				v: h
			},
			{
				l: "Minutos",
				v: m
			},
			{
				l: "Segundos",
				v: s
			}
		].map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center group",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative bg-parchment/60 border border-border rounded-sm py-5 sm:py-8 overflow-hidden shadow-soft group-hover:shadow-card transition-shadow duration-500",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-x-4 top-2 h-px bg-gold/40" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-x-4 bottom-2 h-px bg-gold/40" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "popLayout",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								y: 18,
								opacity: 0,
								filter: "blur(4px)"
							},
							animate: {
								y: 0,
								opacity: 1,
								filter: "blur(0px)"
							},
							exit: {
								y: -18,
								opacity: 0,
								filter: "blur(4px)"
							},
							transition: {
								duration: .45,
								ease: [
									.22,
									1,
									.36,
									1
								]
							},
							className: "font-editorial text-3xl sm:text-5xl text-olive tabular-nums",
							children: String(it.v).padStart(2, "0")
						}, it.v)
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "eyebrow mt-2",
				children: it.l
			})]
		}, it.l))
	});
}
function Gallery() {
	const [open, setOpen] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "columns-2 md:columns-3 gap-4 sm:gap-6 [column-fill:_balance]",
		children: GALLERY.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
			onClick: () => setOpen(it.src),
			initial: {
				opacity: 0,
				y: 40,
				scale: .98
			},
			whileInView: {
				opacity: 1,
				y: 0,
				scale: 1
			},
			viewport: {
				once: true,
				amount: .1
			},
			transition: {
				duration: .85,
				delay: i % 3 * .12,
				ease: [
					.22,
					1,
					.36,
					1
				]
			},
			whileHover: { y: -4 },
			className: "mb-4 sm:mb-6 block w-full overflow-hidden rounded-sm bg-parchment group relative shadow-soft hover:shadow-card transition-shadow duration-500",
			style: { breakInside: "avoid" },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: it.src,
					alt: "",
					loading: "lazy",
					className: "w-full h-auto object-cover transition-all duration-[1200ms] ease-out group-hover:scale-110",
					style: { minHeight: it.h / 3 }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 ring-1 ring-inset ring-cream/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute bottom-4 left-1/2 -translate-x-1/2 text-cream/90 font-editorial italic text-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500",
					children: "ver"
				})
			]
		}, i))
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: .35 },
		className: "fixed inset-0 z-[60] bg-ink/85 backdrop-blur flex items-center justify-center p-4",
		onClick: () => setOpen(null),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: () => setOpen(null),
			className: "absolute top-6 right-6 text-cream/80 hover:text-cream transition-colors duration-200",
			"aria-label": "Fechar",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
			initial: {
				scale: .92,
				opacity: 0,
				y: 20
			},
			animate: {
				scale: 1,
				opacity: 1,
				y: 0
			},
			exit: {
				scale: .96,
				opacity: 0,
				y: 10
			},
			transition: {
				duration: .45,
				ease: [
					.22,
					1,
					.36,
					1
				]
			},
			src: open,
			alt: "",
			className: "max-w-[92vw] max-h-[86vh] rounded-sm shadow-2xl",
			onClick: (e) => e.stopPropagation()
		})]
	}) })] });
}
var RECADOS_URL = "https://script.google.com/macros/s/AKfycbzeRVQHdZl9b1GoOFuhVIRhON-uydKmCIXLUy-5n4rQ-UGDOeXQnX6SzTNyLDTskXqq/exec";
function MessageWall() {
	const [messages, setMessages] = (0, import_react.useState)(GUEST_MESSAGES);
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		text: ""
	});
	const [justSent, setJustSent] = (0, import_react.useState)(false);
	const [sending, setSending] = (0, import_react.useState)(false);
	const [errorMsg, setErrorMsg] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		(async () => {
			try {
				const json = await (await fetch(RECADOS_URL, { method: "GET" })).json();
				if (cancelled || !json?.success || !Array.isArray(json.recados)) return;
				const remote = json.recados.map((r) => ({
					name: r.nome,
					text: r.recado
				}));
				setMessages(remote);
			} catch {}
		})();
		return () => {
			cancelled = true;
		};
	}, []);
	const submit = async (e) => {
		e.preventDefault();
		const name = form.name.trim();
		const text = form.text.trim();
		if (!name || !text || sending) return;
		setSending(true);
		setErrorMsg(null);
		try {
			await fetch(RECADOS_URL, {
				method: "POST",
				headers: { "Content-Type": "text/plain;charset=utf-8" },
				body: JSON.stringify({
					nome: name,
					recado: text
				})
			});
			setForm({
				name: "",
				text: ""
			});
			setJustSent(true);
			setTimeout(() => setJustSent(false), 4e3);
		} catch {
			setErrorMsg("Não foi possível enviar agora. Tente novamente em instantes.");
		} finally {
			setSending(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid lg:grid-cols-[1fr_1.2fr] gap-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: submit,
			className: "bg-cream border border-border p-8 sm:p-10 relative h-full",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-3 left-3 right-3 h-px bg-gold/40" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute bottom-3 left-3 right-3 h-px bg-gold/40" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow",
					children: "Deixe seu recado"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-editorial text-2xl text-olive mt-3 mb-6",
					children: "Uma palavra que ficará com a gente"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block mb-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow block mb-2",
						children: "Nome"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						value: form.name,
						onChange: (e) => setForm((f) => ({
							...f,
							name: e.target.value
						})),
						placeholder: "Seu nome",
						className: "w-full bg-transparent border-b border-border focus:border-olive outline-none py-2 font-serif-c italic text-ink placeholder:text-ink-soft/60",
						required: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow block mb-2",
						children: "Mensagem"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						value: form.text,
						onChange: (e) => setForm((f) => ({
							...f,
							text: e.target.value
						})),
						placeholder: "Escreva com o coração…",
						rows: 4,
						className: "w-full bg-transparent border border-border focus:border-olive outline-none p-3 font-serif-c italic text-ink placeholder:text-ink-soft/60 resize-none",
						required: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "submit",
					disabled: sending,
					className: "inline-flex items-center gap-2 px-6 py-3 bg-olive text-cream hover:bg-ink transition font-editorial tracking-wider text-sm uppercase disabled:opacity-60 disabled:cursor-not-allowed",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "w-4 h-4" }),
						" ",
						sending ? "Enviando…" : "Enviar mensagem"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatePresence, { children: [justSent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: {
						opacity: 0,
						y: 8
					},
					animate: {
						opacity: 1,
						y: 0
					},
					exit: { opacity: 0 },
					className: "mt-4 font-serif-c italic text-olive",
					children: "Recebido com carinho. Seu recado será publicado após aprovação."
				}), errorMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: {
						opacity: 0,
						y: 8
					},
					animate: {
						opacity: 1,
						y: 0
					},
					exit: { opacity: 0 },
					className: "mt-4 font-serif-c italic text-red-700",
					children: errorMsg
				})] })
			]
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid sm:grid-cols-2 gap-6 content-start",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				initial: false,
				children: messages.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					layout: true,
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					exit: { opacity: 0 },
					transition: {
						duration: .6,
						delay: i < 3 ? i * .08 : 0
					},
					className: "bg-cream border border-border p-8 relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-3 left-3 right-3 h-px bg-gold/40" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute bottom-3 left-3 right-3 h-px bg-gold/40" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-6xl text-gold/50 leading-none block",
							children: "\""
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif-c italic text-lg text-ink-soft leading-relaxed -mt-4",
							children: m.text
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 font-editorial text-olive",
							children: ["— ", m.name]
						})
					]
				}, `${m.name}-${i}`))
			})
		})]
	});
}
function RSVP() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const [sending, setSending] = (0, import_react.useState)(false);
	const [errorMsg, setErrorMsg] = (0, import_react.useState)(null);
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		phone: "",
		count: "1",
		message: ""
	});
	const submit = async (e) => {
		e.preventDefault();
		if (sending) return;
		const nome = form.name.trim();
		if (nome.length < 3) {
			setErrorMsg("Por favor, informe seu nome completo.");
			return;
		}
		setSending(true);
		setErrorMsg(null);
		try {
			await fetch(RECADOS_URL, {
				method: "POST",
				headers: { "Content-Type": "text/plain;charset=utf-8" },
				body: JSON.stringify({
					tipo: "rsvp",
					nome,
					telefone: form.phone.trim(),
					convidados: Number(form.count) || 1,
					mensagem: form.message.trim()
				})
			});
			setSent(true);
		} catch {
			setErrorMsg("Não foi possível enviar agora. Tente novamente em instantes.");
		} finally {
			setSending(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "max-w-xl mx-auto",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
			mode: "wait",
			children: !sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				onSubmit: submit,
				className: "space-y-5",
				children: [
					[{
						label: "Nome completo",
						key: "name",
						type: "text",
						placeholder: "Como devemos te chamar"
					}, {
						label: "Telefone",
						key: "phone",
						type: "tel",
						placeholder: "(00) 00000-0000"
					}].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "eyebrow block mb-2",
						children: f.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						required: true,
						type: f.type,
						value: form[f.key],
						onChange: (e) => setForm({
							...form,
							[f.key]: e.target.value
						}),
						placeholder: f.placeholder,
						className: "w-full bg-transparent border-b border-border focus:border-olive outline-none py-3 font-serif-c text-lg text-ink placeholder:text-ink-soft/50 transition"
					})] }, f.key)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "eyebrow block mb-2",
						children: "Nº de convidados"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						value: form.count,
						onChange: (e) => setForm({
							...form,
							count: e.target.value
						}),
						className: "w-full bg-transparent border-b border-border focus:border-olive outline-none py-3 font-serif-c text-lg text-ink",
						children: [
							1,
							2,
							3,
							4,
							5
						].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
							value: n,
							children: [
								n,
								" ",
								n === 1 ? "pessoa" : "pessoas"
							]
						}, n))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "eyebrow block mb-2",
						children: "Mensagem para os noivos"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						rows: 4,
						value: form.message,
						onChange: (e) => setForm({
							...form,
							message: e.target.value
						}),
						placeholder: "Escreva algo bonito...",
						className: "w-full bg-transparent border-b border-border focus:border-olive outline-none py-3 font-serif-c text-lg text-ink placeholder:text-ink-soft/50 resize-none"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						disabled: sending,
						className: "group inline-flex items-center gap-3 px-8 py-4 bg-olive text-cream font-editorial tracking-wider text-sm uppercase hover:bg-ink transition rounded-sm disabled:opacity-60 disabled:cursor-not-allowed",
						children: [sending ? "Enviando..." : "Confirmar presença", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "w-4 h-4 group-hover:translate-x-1 transition" })]
					}),
					errorMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif-c italic text-sm text-red-700/80 mt-3",
						children: errorMsg
					})
				]
			}, "form") : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					scale: .9
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				transition: { duration: .8 },
				className: "text-center py-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: { scale: 0 },
						animate: { scale: 1 },
						transition: {
							delay: .2,
							type: "spring"
						},
						className: "mx-auto w-20 h-20 rounded-full border border-gold flex items-center justify-center mb-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
							className: "w-8 h-8 text-gold",
							fill: "currentColor"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-5xl text-olive mb-3",
						children: "Obrigado!"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif-c italic text-lg text-ink-soft max-w-md mx-auto",
						children: "A sua presença faz este dia ainda mais luminoso. Mal podemos esperar para celebrar juntos."
					})
				]
			}, "ok")
		})
	});
}
function Invitation() {
	const [entered, setEntered] = (0, import_react.useState)(false);
	const { scrollYProgress } = useScroll();
	const parallax = useTransform(scrollYProgress, [0, 1], [0, -80]);
	(0, import_react.useEffect)(() => {
		if (entered) document.body.style.overflow = "auto";
		else document.body.style.overflow = "hidden";
	}, [entered]);
	const addToCalendar = () => {
		const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("Casamento Eduardo & Samira")}&dates=20261113T220000Z/20261114T030000Z&details=${encodeURIComponent("Celebre conosco este dia inesquecível.")}&location=${encodeURIComponent(`${VENUE_NAME} — ${VENUE_ADDRESS}`)}`;
		window.open(url, "_blank");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-cream text-ink relative overflow-x-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: !entered && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Landing, { onEnter: () => setEntered(true) }) }), entered && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles8, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MusicToggle, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
				src: "/assets/sprig-eucalyptus-c51-iFi2.png",
				alt: "",
				"aria-hidden": true,
				style: { y: parallax },
				className: "absolute top-24 -left-16 md:-left-20 w-28 md:w-32 opacity-30 animate-floaty pointer-events-none z-0"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
				src: "/assets/sprig-blossom-B2ye_Q7-.png",
				alt: "",
				"aria-hidden": true,
				style: {
					y: parallax,
					scaleX: -1
				},
				className: "absolute bottom-32 -right-16 md:-right-24 w-32 md:w-40 opacity-25 animate-floaty pointer-events-none z-0"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.main, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: {
					duration: 1.4,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				className: "relative z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chapter, {
						number: 1,
						className: "min-h-screen flex items-center justify-center px-6 py-24 relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/assets/corner-tl-BnIuxa4n.png",
								alt: "",
								"aria-hidden": true,
								className: "absolute top-0 left-0 w-[36vw] max-w-[340px] opacity-90 pointer-events-none"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/assets/corner-br-BMENKy5T.png",
								alt: "",
								"aria-hidden": true,
								className: "absolute bottom-0 right-0 w-[36vw] max-w-[340px] opacity-90 pointer-events-none"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-2xl text-center relative",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
										className: "font-display text-6xl sm:text-7xl md:text-8xl text-olive leading-[0.9]",
										children: [
											"Eduardo",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block font-editorial italic text-gold text-3xl my-2",
												children: "&"
											}),
											"Samira"
										]
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
										delay: .25,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "eyebrow mt-8 inline-block",
											children: "Com imensa alegria, convidamos você"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
										delay: .4,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule w-40 mx-auto my-8" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
										delay: .5,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-serif-c italic text-xl sm:text-2xl text-ink-soft leading-relaxed",
											children: "Algumas histórias são escritas pelo tempo. Outras, pela providência de Deus. A nossa é fruto de ambos. Com alegria e gratidão, convidamos você para testemunhar e celebrar conosco o início de um novo capítulo das nossas vidas."
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
										delay: .8,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-10 flex flex-col items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-editorial text-olive tracking-[0.4em] text-sm",
												children: "13 · NOVEMBRO · 2026"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
												className: "w-5 h-5 text-gold mt-6 animate-handTap",
												strokeWidth: 1
											})]
										})
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Verse, {
						flip: true,
						text: "Assim, eles já não são dois, mas sim uma só carne. Portanto, o que Deus uniu, ninguém separe.",
						reference: "Mateus 19:6",
						reflection: "Diante de Deus, de nossa família e de nossos amigos, celebraremos a aliança que marcará o início da nossa vida como uma só família."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chapter, {
						number: 2,
						className: "py-28 px-6 relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/assets/sprig-olive-ClERFs2A.png",
							alt: "",
							"aria-hidden": true,
							loading: "lazy",
							className: "absolute top-10 right-0 w-28 opacity-25 rotate-6"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-5xl mx-auto",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionMark, { label: "Os Detalhes" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-center font-editorial text-4xl sm:text-5xl text-olive mb-4",
									children: "Onde e quando"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-16 grid sm:grid-cols-3 gap-6",
									children: [
										{
											icon: Calendar,
											eyebrow: "A Data",
											title: "13 · 11 · 2026",
											subtitle: "Sexta-feira"
										},
										{
											icon: Clock,
											eyebrow: "O Horário",
											title: "19h00",
											subtitle: "Recepção a partir das 18h30"
										},
										{
											icon: MapPin,
											eyebrow: "O Lugar",
											title: VENUE_NAME,
											subtitle: VENUE_ADDRESS
										}
									].map((item, i) => {
										const Icon = item.icon;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
											delay: i * .12,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
												whileHover: {
													y: -6,
													scale: 1.01
												},
												transition: {
													duration: .35,
													ease: [
														.22,
														1,
														.36,
														1
													]
												},
												className: "border border-border p-10 bg-cream/60 backdrop-blur-sm relative h-full text-center shadow-soft hover:shadow-card transition-shadow duration-500 group",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-4 left-4 right-4 h-px bg-gold/40" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-4 left-4 right-4 h-px bg-gold/40" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "mx-auto w-12 h-12 rounded-full border border-gold/50 flex items-center justify-center text-gold mb-5 group-hover:bg-gold/10 transition-colors duration-300",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
															className: "w-5 h-5 group-hover:scale-110 transition-transform duration-300",
															strokeWidth: 1.2
														})
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "eyebrow",
														children: item.eyebrow
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
														className: "font-editorial text-2xl text-olive mt-3",
														children: item.title
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule w-16 mx-auto my-4" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-serif-c italic text-ink-soft leading-relaxed",
														children: item.subtitle
													})
												]
											})
										}, item.eyebrow);
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: .25,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-10 border border-border bg-cream/60 p-3 relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-3 border border-gold/20 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
											title: `Mapa — ${VENUE_NAME}`,
											src: `https://www.google.com/maps?q=${encodeURIComponent(`${VENUE_NAME}, ${VENUE_ADDRESS}`)}&output=embed`,
											width: "100%",
											height: "360",
											loading: "lazy",
											referrerPolicy: "no-referrer-when-downgrade",
											className: "block w-full grayscale-[15%] contrast-95",
											style: { border: 0 }
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: .3,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-10 flex flex-wrap justify-center gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: MAPS_URL,
											target: "_blank",
											rel: "noreferrer",
											className: "inline-flex items-center gap-2 px-6 py-3 border border-olive text-olive hover:bg-olive hover:text-cream transition font-editorial tracking-wider text-sm uppercase",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-4 h-4" }), " Abrir no Google Maps"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: addToCalendar,
											className: "inline-flex items-center gap-2 px-6 py-3 bg-olive text-cream hover:bg-ink transition font-editorial tracking-wider text-sm uppercase",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarPlus, { className: "w-4 h-4" }), " Salvar no calendário"]
										})]
									})
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chapter, {
						number: 3,
						className: "py-28 px-6 bg-parchment/50 relative overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/assets/corner-tl-BnIuxa4n.png",
								alt: "",
								"aria-hidden": true,
								className: "absolute -top-10 -left-10 w-64 opacity-40"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/assets/corner-br-BMENKy5T.png",
								alt: "",
								"aria-hidden": true,
								className: "absolute -bottom-10 -right-10 w-64 opacity-40"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-3xl mx-auto text-center relative",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionMark, { label: "A Contagem" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "font-editorial text-4xl sm:text-5xl text-olive mb-4",
											children: "Faltam apenas"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-serif-c italic text-lg text-ink-soft mb-14",
											children: "... para o começo de sempre."
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
										delay: .2,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Countdown, {})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
										delay: .4,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-5 h-5 text-gold mx-auto mt-12 animate-sparkle" })
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chapter, {
						number: 4,
						className: "py-28 px-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-6xl mx-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionMark, { label: "Memórias" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-center font-editorial text-4xl sm:text-5xl text-olive mb-4",
									children: "Nossos momentos"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-center font-serif-c italic text-lg text-ink-soft max-w-xl mx-auto mb-16",
									children: "Um pedacinho da nossa história, guardado com carinho."
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chapter, {
						number: 5,
						className: "py-28 md:py-36 px-6 bg-parchment/40 relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/assets/sprig-blossom-B2ye_Q7-.png",
								alt: "",
								"aria-hidden": true,
								loading: "lazy",
								className: "absolute top-16 right-0 w-32 opacity-20 -scale-x-100"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/assets/sprig-eucalyptus-c51-iFi2.png",
								alt: "",
								"aria-hidden": true,
								loading: "lazy",
								className: "absolute bottom-20 left-0 w-24 opacity-25 -rotate-12"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-[760px] mx-auto",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionMark, { label: "Com Gratidão" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "text-center font-editorial text-4xl sm:text-5xl text-olive mb-8",
											children: "Um gesto de carinho"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-5 text-center font-serif-c italic text-lg md:text-xl text-ink-soft leading-relaxed mb-12",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Somos gratos a Deus por cada pessoa que fará parte desse momento tão especial." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "O maior presente será compartilhar esse dia com vocês. Mas, se Deus colocar em seu coração o desejo de nos presentear, disponibilizamos duas formas simples e seguras para isso." })]
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
										delay: .15,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex justify-center mb-12",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-editorial text-gold/60 text-xl tracking-[0.35em] select-none",
												children: "══════════════════════════════════════"
											})
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
										delay: .25,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
											whileHover: { y: -3 },
											transition: {
												duration: .4,
												ease: [
													.22,
													1,
													.36,
													1
												]
											},
											className: "bg-cream border border-border shadow-card rounded-sm p-8 sm:p-10 text-center mb-8",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "w-14 h-14 mx-auto rounded-full bg-olive/10 text-olive flex items-center justify-center mb-6",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, {
														className: "w-6 h-6",
														strokeWidth: 1.3
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "font-editorial text-2xl sm:text-3xl text-olive mb-4",
													children: "Lista de Presentes"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-serif-c italic text-ink-soft text-lg leading-relaxed max-w-lg mx-auto mb-8",
													children: "Nossa lista foi preparada com carinho no iCasei. Lá você encontrará opções de diferentes valores para nos ajudar a iniciar essa nova etapa da nossa vida."
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: ICASEI_URL,
													target: "_blank",
													rel: "noreferrer",
													className: "inline-flex items-center justify-center w-full sm:w-auto min-w-[260px] px-8 py-4 bg-olive text-cream font-body uppercase tracking-[0.25em] text-xs rounded-sm shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all duration-300",
													children: "Acessar Lista de Presentes"
												})
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
										delay: .35,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-4 my-10",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-serif-c italic text-ink-soft/80 text-base",
													children: "ou, se preferir..."
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border" })
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
										delay: .45,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
											whileHover: { y: -3 },
											transition: {
												duration: .4,
												ease: [
													.22,
													1,
													.36,
													1
												]
											},
											className: "bg-cream border border-border shadow-card rounded-sm p-8 sm:p-10 text-center",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "w-14 h-14 mx-auto rounded-full bg-gold/15 text-gold flex items-center justify-center mb-6",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
														className: "w-6 h-6",
														strokeWidth: 1.3
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "font-editorial text-2xl sm:text-3xl text-olive mb-4",
													children: "Presentear via Pix"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-serif-c italic text-ink-soft text-lg leading-relaxed max-w-lg mx-auto mb-8",
													children: "Caso prefira, você também pode nos presentear diretamente através da chave Pix abaixo."
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "max-w-md mx-auto",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center justify-between gap-3 px-5 py-4 bg-parchment/60 border border-border rounded-sm mb-4",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-editorial text-olive text-lg truncate",
															children: PIX_KEY
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
															onClick: () => {
																navigator.clipboard.writeText(PIX_KEY).then(() => {
																	toast.success("Chave Pix copiada com sucesso!");
																});
															},
															className: "shrink-0 inline-flex items-center gap-2 px-4 py-2 border border-gold/60 text-olive hover:bg-gold/10 hover:border-gold rounded-sm transition-colors duration-200",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
																className: "w-4 h-4",
																strokeWidth: 1.4
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "font-body uppercase tracking-[0.15em] text-[0.65rem]",
																children: "Copiar"
															})]
														})]
													})
												})
											]
										})
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chapter, {
						number: 6,
						className: "py-28 px-6 relative",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-4xl mx-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionMark, { label: "Confirmação" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-center font-editorial text-4xl sm:text-5xl text-olive mb-4",
									children: "Você virá?"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-center font-serif-c italic text-lg text-ink-soft max-w-xl mx-auto mb-14",
									children: "Nos ajude a preparar tudo com carinho, confirmando sua presença até 14 de setembro de 2026."
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .2,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RSVP, {})
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Verse, {
						text: "O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha. Tudo sofre, tudo crê, tudo espera, tudo suporta.",
						reference: "1 Coríntios 13:4–7",
						reflection: "Que o amor seja sempre o alicerce da nossa família e que Deus continue guiando cada capítulo da nossa história."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 12
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							amount: .5
						},
						transition: {
							duration: 1.6,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "max-w-2xl mx-auto text-center px-6 pb-32 font-editorial italic text-2xl md:text-3xl text-olive leading-relaxed",
						children: "Com alegria e gratidão a Deus, esperamos por você para celebrar o dia mais especial das nossas vidas."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chapter, {
						number: 7,
						className: "py-28 px-6 bg-parchment/40",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-5xl mx-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionMark, { label: "Recadinhos" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-center font-editorial text-4xl sm:text-5xl text-olive mb-4",
									children: "Palavras de carinho"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-center font-serif-c italic text-ink-soft max-w-xl mx-auto mb-14",
									children: "Deixe uma mensagem para guardarmos como lembrança deste dia."
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageWall, {})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
						className: "py-24 px-6 text-center relative overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/assets/sprig-blossom-B2ye_Q7-.png",
								alt: "",
								"aria-hidden": true,
								loading: "lazy",
								className: "mx-auto w-24 opacity-70 mb-8"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "Com todo nosso amor"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-5xl sm:text-6xl text-olive mt-4",
								children: "Eduardo & Samira"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-serif-c italic text-ink-soft mt-4",
								children: "Obrigado por fazer parte da nossa história."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule w-32 mx-auto my-8" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-editorial tracking-[0.4em] text-sm text-olive",
								children: "2026"
							})
						]
					})
				]
			})
		] })]
	});
}
//#endregion
export { Invitation as component };
