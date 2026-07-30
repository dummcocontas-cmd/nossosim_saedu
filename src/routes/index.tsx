import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { toast } from "sonner";
import {
  MapPin,
  CalendarPlus,
  Calendar,
  Clock,
  Music,
  Pause,
  Heart,
  Send,
  X,
  ChevronDown,
  Sparkles,
  Hand,
  Gift,
  Copy,
} from "lucide-react";

import bouquet from "@/assets/bouquet-main.png";
import cornerTL from "@/assets/corner-tl.png";
import cornerBR from "@/assets/corner-br.png";
import sprigEucalyptus from "@/assets/sprig-eucalyptus.png";
import sprigOlive from "@/assets/sprig-olive.png";
import sprigBlossom from "@/assets/sprig-blossom.png";
import waxSeal from "@/assets/wax-seal.png";
import couple1 from "@/assets/couple-1.jpg";
import couple2 from "@/assets/couple-2.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import g7 from "@/assets/gallery-7.jpg";
import g8 from "@/assets/gallery-8.jpg";
import g9 from "@/assets/gallery-9.jpg";
import g10 from "@/assets/gallery-10.jpg";
import g11 from "@/assets/gallery-11.jpg";
import g12 from "@/assets/gallery-12.jpg";

export const Route = createFileRoute("/")({
  component: Invitation,
  head: () => ({
    meta: [
      { title: "Eduardo & Samira · Convite" },
      {
        name: "description",
        content: "Um convite delicado para celebrar o amor de Eduardo & Samira em 2026.",
      },
      { property: "og:image", content: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200" },
    ],
  }),
});

/* ---------- Wedding data ---------- */
const WEDDING_DATE = new Date("2026-11-13T19:00:00-03:00");
const MAPS_URL = "https://maps.app.goo.gl/5zBmo7CoEmFJLSur6";
const VENUE_NAME = "Vila de São Francisco";
const VENUE_ADDRESS = "Rod. Marechal Rondon · Agudos, SP · 17120-000";
const ICASEI_URL = "https://www.icasei.com.br"; // TODO: substituir pelo link da lista real
const PIX_KEY = "eduardoantr@gmail.com";


const GUEST_MESSAGES: { name: string; text: string }[] = [];


const GALLERY = [
  { src: g1, h: 620 },
  { src: g2, h: 520 },
  { src: g3, h: 380 },
  { src: g4, h: 640 },
  { src: g5, h: 420 },
  { src: g6, h: 560 },
  { src: g7, h: 580 },
  { src: g8, h: 310 },
  { src: g9, h: 510 },
  { src: g10, h: 480 },
  { src: g11, h: 480 },
  { src: g12, h: 480 },
];

/* ---------- Utilities ---------- */
function useCountdown(target: Date) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const diff = Math.max(0, target.getTime() - now.getTime());
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s };
}

function Reveal({ children, delay = 0, y = 30 }: { children: ReactNode; delay?: number; y?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 1.05, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionMark({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center gap-4 mb-6">
      <span className="h-px w-12 bg-gold/60" />
      <span className="eyebrow text-olive">{label}</span>
      <span className="h-px w-12 bg-gold/60" />
    </div>
  );
}

/* ---------- Chapter (page-turn wrapper) ---------- */
const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
function Chapter({
  children,
  className = "",
  number,
}: {
  children: ReactNode;
  className?: string;
  number?: number;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, rotateY: -5, y: 50, scale: 0.98 }}
      whileInView={{ opacity: 1, rotateY: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      style={{
        transformPerspective: 1800,
        transformOrigin: "center center",
        transformStyle: "preserve-3d",
      }}
      className={`chapter-page ${className}`}
    >
      {number !== undefined && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="pointer-events-none absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-3 text-gold/70 text-[0.65rem] tracking-[0.5em] uppercase font-editorial italic z-10"
        >
          <span className="h-px w-6 bg-gold/50" />
          Capítulo {ROMAN[number - 1]}
          <span className="h-px w-6 bg-gold/50" />
        </motion.div>
      )}
      {children}
    </motion.section>
  );
}

/* ---------- Verse — contemplative pause ---------- */
function Verse({
  text,
  reference,
  reflection,
  flip = false,
}: {
  text: string;
  reference: string;
  reflection: string;
  flip?: boolean;
}) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      className="relative py-40 md:py-56 px-6 overflow-hidden"
    >
      <motion.img
        src={flip ? sprigOlive : sprigEucalyptus}
        alt=""
        aria-hidden
        initial={{ opacity: 0, x: flip ? 30 : -30 }}
        whileInView={{ opacity: 0.4, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className={`absolute top-10 ${flip ? "right-0 -scale-x-100" : "left-0"} w-20 md:w-28 opacity-40 pointer-events-none`}
      />
      <motion.img
        src={flip ? sprigBlossom : sprigOlive}
        alt=""
        aria-hidden
        initial={{ opacity: 0, x: flip ? -30 : 30 }}
        whileInView={{ opacity: 0.4, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className={`absolute bottom-10 ${flip ? "left-0" : "right-0 -scale-x-100"} w-20 md:w-28 opacity-40 pointer-events-none`}
      />
      <div className="max-w-2xl mx-auto text-center relative">
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="block h-px w-24 mx-auto bg-gold/60 origin-center mb-10"
        />
        <motion.p
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.35 }}
          className="font-editorial italic text-2xl sm:text-3xl md:text-[2.1rem] leading-[1.5] text-olive"
        >
          <span className="font-display text-gold/70 text-4xl align-top mr-1 leading-none">
            &ldquo;
          </span>
          {text}
          <span className="font-display text-gold/70 text-4xl align-top ml-1 leading-none">
            &rdquo;
          </span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="eyebrow mt-8 text-gold"
        >
          {reference}
        </motion.p>
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.75 }}
          className="block h-px w-16 mx-auto bg-gold/50 origin-center my-10"
        />
        <motion.p
          initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="font-serif-c italic text-lg md:text-xl text-ink-soft leading-relaxed max-w-xl mx-auto"
        >
          {reflection}
        </motion.p>
      </div>
    </motion.section>
  );
}

/* ---------- Golden Sparkles ---------- */
function Sparkles8() {
  const items = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        left: Math.random() * 100,
        delay: Math.random() * 6,
        duration: 12 + Math.random() * 10,
        size: 3 + Math.random() * 4,
      })),
    [],
  );
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden z-[5]">
      {items.map((s, i) => (
        <span
          key={i}
          className="absolute bottom-[-10vh] rounded-full animate-drift"
          style={{
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            background: "radial-gradient(circle, rgba(198,168,106,0.9), rgba(198,168,106,0))",
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
            boxShadow: "0 0 8px rgba(198,168,106,0.5)",
          }}
        />
      ))}
    </div>
  );
}

/* ---------- Landing / Wax seal ---------- */
function Landing({ onEnter }: { onEnter: () => void }) {
  return (
    <motion.div
      key="landing"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 bg-cream overflow-hidden flex items-center justify-center"
    >
      {/* Corner watercolors */}
      <motion.img
        src={cornerTL}
        alt=""
        aria-hidden
        initial={{ opacity: 0, x: -50, y: -50, scale: 0.95 }}
        animate={{ opacity: 0.85, x: 0, y: 0, scale: 1 }}
        transition={{ duration: 2.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 z-0 w-[38vw] max-w-[340px] select-none pointer-events-none"
      />
      <motion.img
        src={cornerTL}
        alt=""
        aria-hidden
        initial={{ opacity: 0, x: 50, y: 50, scale: 0.95 }}
        animate={{ opacity: 0.85, x: 0, y: 0, scale: 1 }}
        transition={{ duration: 2.2, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 right-0 z-0 w-[38vw] max-w-[340px] rotate-180 select-none pointer-events-none"
      />


      {/* Center bouquet + seal */}
      <div className="relative z-10 flex flex-col items-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <motion.img
            src={bouquet}
            alt="Buquê de flores brancas"
            className="w-[280px] sm:w-[360px] md:w-[420px] h-auto animate-sway"
            style={{ filter: "drop-shadow(0 30px 40px rgba(95,104,71,0.15))" }}
          />
          {/* Wax seal */}
          <motion.button
            onClick={onEnter}
            initial={{ scale: 0, rotate: -30, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 1, type: "spring", stiffness: 110, damping: 12 }}
            whileHover={{ scale: 1.08, rotate: -3 }}
            whileTap={{ scale: 0.94, rotate: 2 }}
            aria-label="Abrir convite"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group"
          >
            {/* halos pulsando */}
            <motion.span
              aria-hidden
              className="pointer-events-none absolute inset-[-8%] rounded-full border border-gold/40"
              animate={{ scale: [1, 1.5], opacity: [0.45, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut", delay: 2.2 }}
            />
            <motion.span
              aria-hidden
              className="pointer-events-none absolute inset-[-8%] rounded-full border border-gold/30"
              animate={{ scale: [1, 1.5], opacity: [0.35, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut", delay: 3.6 }}
            />
            {/* brilho no hover */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-[-18%] rounded-full bg-gold/20 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
            <motion.img
              src={waxSeal}
              alt="Selo de cera com as iniciais S & E"
              className="relative w-[170px] h-[170px] sm:w-[210px] sm:h-[210px] md:w-[240px] md:h-[240px] object-contain select-none"
              style={{ filter: "drop-shadow(0 18px 32px rgba(63,72,48,0.38))" }}
              animate={{ scale: [1, 1.035, 1], rotate: [0, 1, 0, -1, 0] }}
              transition={{
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2.2 },
                rotate: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2.2 },
              }}
            />
          </motion.button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 1.7, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 text-center"
        >
          <span className="block eyebrow mb-3">um convite para você</span>
          <span className="font-display text-5xl sm:text-6xl md:text-7xl text-olive leading-none">
            Eduardo
          </span>
          <span className="block font-editorial italic text-gold text-xl my-1">&</span>
          <span className="block font-display text-5xl sm:text-6xl md:text-7xl text-olive leading-none">
            Samira
          </span>
        </motion.p>

        <motion.button
          onClick={onEnter}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.9 }}
          className="mt-4 flex flex-col items-center gap-1 text-ink-soft group"
        >
          <span className="font-serif-c italic text-lg group-hover:text-olive transition-colors duration-300">Toque para entrar</span>
          <Hand className="w-5 h-5 text-olive animate-handTap group-hover:scale-110 transition-transform duration-300" strokeWidth={1.2} />
        </motion.button>
      </div>
    </motion.div>
  );
}

/* ---------- Ambient music ---------- */
function MusicToggle() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    audioRef.current = new Audio(
      "https://cdn.pixabay.com/audio/2022/10/25/audio_5ea20cb6b0.mp3",
    );
    audioRef.current.loop = true;
    audioRef.current.volume = 0.35;
    return () => {
      audioRef.current?.pause();
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
  return (
    <button
      onClick={toggle}
      aria-label={playing ? "Pausar música" : "Tocar música"}
      className="fixed bottom-5 right-5 z-40 w-12 h-12 rounded-full bg-cream/90 backdrop-blur border border-border shadow-card flex items-center justify-center text-olive hover:scale-105 transition"
    >
      {playing ? <Pause className="w-4 h-4" /> : <Music className="w-4 h-4" />}
    </button>
  );
}

/* ---------- Countdown ---------- */
function Countdown() {
  const { d, h, m, s } = useCountdown(WEDDING_DATE);
  const items = [
    { l: "Dias", v: d },
    { l: "Horas", v: h },
    { l: "Minutos", v: m },
    { l: "Segundos", v: s },
  ];
  return (
    <div className="grid grid-cols-4 gap-3 sm:gap-6 max-w-2xl mx-auto">
      {items.map((it) => (
        <div key={it.l} className="text-center group">
          <div className="relative bg-parchment/60 border border-border rounded-sm py-5 sm:py-8 overflow-hidden shadow-soft group-hover:shadow-card transition-shadow duration-500">
            <span className="absolute inset-x-4 top-2 h-px bg-gold/40" />
            <span className="absolute inset-x-4 bottom-2 h-px bg-gold/40" />
            <AnimatePresence mode="popLayout">
              <motion.div
                key={it.v}
                initial={{ y: 18, opacity: 0, filter: "blur(4px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -18, opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="font-editorial text-3xl sm:text-5xl text-olive tabular-nums"
              >
                {String(it.v).padStart(2, "0")}
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="eyebrow mt-2">{it.l}</div>
        </div>
      ))}
    </div>
  );
}

/* ---------- Gallery ---------- */
function Gallery() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <>
      <div className="columns-2 md:columns-3 gap-4 sm:gap-6 [column-fill:_balance]">
        {GALLERY.map((it, i) => (
          <motion.button
            key={i}
            onClick={() => setOpen(it.src)}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.85, delay: (i % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="mb-4 sm:mb-6 block w-full overflow-hidden rounded-sm bg-parchment group relative shadow-soft hover:shadow-card transition-shadow duration-500"
            style={{ breakInside: "avoid" }}
          >
            <img
              src={it.src}
              alt=""
              loading="lazy"
              className="w-full h-auto object-cover transition-all duration-[1200ms] ease-out group-hover:scale-110"
              style={{ minHeight: it.h / 3 }}
            />
            <span className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="absolute inset-0 ring-1 ring-inset ring-cream/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-cream/90 font-editorial italic text-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
              ver
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] bg-ink/85 backdrop-blur flex items-center justify-center p-4"
            onClick={() => setOpen(null)}
          >
            <button
              onClick={() => setOpen(null)}
              className="absolute top-6 right-6 text-cream/80 hover:text-cream transition-colors duration-200"
              aria-label="Fechar"
            >
              <X />
            </button>
            <motion.img
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 10 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              src={open}
              alt=""
              className="max-w-[92vw] max-h-[86vh] rounded-sm shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ---------- Message Wall ---------- */
type GuestMessage = { name: string; text: string };

const RECADOS_URL =
  "https://script.google.com/macros/s/AKfycbzeRVQHdZl9b1GoOFuhVIRhON-uydKmCIXLUy-5n4rQ-UGDOeXQnX6SzTNyLDTskXqq/exec";

function MessageWall() {
  const [messages, setMessages] = useState<GuestMessage[]>(GUEST_MESSAGES);
  const [form, setForm] = useState({ name: "", text: "" });
  const [justSent, setJustSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(RECADOS_URL, { method: "GET" });
        const json = await res.json();
        if (cancelled || !json?.success || !Array.isArray(json.recados)) return;
        const remote: GuestMessage[] = json.recados.map((r: { nome: string; recado: string }) => ({
          name: r.nome,
          text: r.recado,
        }));
        setMessages(remote);
      } catch {
        // silencioso — mantém mensagens locais
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const name = form.name.trim();
    const text = form.text.trim();
    if (!name || !text || sending) return;

    setSending(true);
    setErrorMsg(null);
    try {
      // text/plain evita preflight CORS no Apps Script
      await fetch(RECADOS_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ nome: name, recado: text }),
      });
      // não adiciona localmente — o recado só aparece após aprovação na planilha
      setForm({ name: "", text: "" });
      setJustSent(true);
      setTimeout(() => setJustSent(false), 4000);
    } catch {
      setErrorMsg("Não foi possível enviar agora. Tente novamente em instantes.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10">
      <Reveal>
        <form
          onSubmit={submit}
          className="bg-cream border border-border p-8 sm:p-10 relative h-full"
        >
          <span className="absolute top-3 left-3 right-3 h-px bg-gold/40" />
          <span className="absolute bottom-3 left-3 right-3 h-px bg-gold/40" />
          <span className="eyebrow">Deixe seu recado</span>
          <h3 className="font-editorial text-2xl text-olive mt-3 mb-6">
            Uma palavra que ficará com a gente
          </h3>

          <label className="block mb-5">
            <span className="eyebrow block mb-2">Nome</span>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              placeholder="Seu nome"
              className="w-full bg-transparent border-b border-border focus:border-olive outline-none py-2 font-serif-c italic text-ink placeholder:text-ink-soft/60"
              required
            />
          </label>

          <label className="block mb-6">
            <span className="eyebrow block mb-2">Mensagem</span>
            <textarea
              value={form.text}
              onChange={(e) => setForm((f) => ({ ...f, text: e.target.value }))}
              placeholder="Escreva com o coração…"
              rows={4}
              className="w-full bg-transparent border border-border focus:border-olive outline-none p-3 font-serif-c italic text-ink placeholder:text-ink-soft/60 resize-none"
              required
            />
          </label>

          <button
            type="submit"
            disabled={sending}
            className="inline-flex items-center gap-2 px-6 py-3 bg-olive text-cream hover:bg-ink transition font-editorial tracking-wider text-sm uppercase disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4" /> {sending ? "Enviando…" : "Enviar mensagem"}
          </button>

          <AnimatePresence>
            {justSent && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 font-serif-c italic text-olive"
              >
                Recebido com carinho. Seu recado será publicado após aprovação.
              </motion.p>
            )}
            {errorMsg && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 font-serif-c italic text-red-700"
              >
                {errorMsg}
              </motion.p>
            )}
          </AnimatePresence>
        </form>
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-6 content-start">
        <AnimatePresence initial={false}>
          {messages.map((m, i) => (
            <motion.div
              key={`${m.name}-${i}`}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: i < 3 ? i * 0.08 : 0 }}
              className="bg-cream border border-border p-8 relative"
            >
              <span className="absolute top-3 left-3 right-3 h-px bg-gold/40" />
              <span className="absolute bottom-3 left-3 right-3 h-px bg-gold/40" />
              <span className="font-display text-6xl text-gold/50 leading-none block">"</span>
              <p className="font-serif-c italic text-lg text-ink-soft leading-relaxed -mt-4">
                {m.text}
              </p>
              <p className="mt-6 font-editorial text-olive">— {m.name}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ---------- RSVP ---------- */
function RSVP() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", count: "1", message: "" });
  const submit = async (e: React.FormEvent) => {
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
          mensagem: form.message.trim(),
        }),
      });
      setSent(true);
    } catch {
      setErrorMsg("Não foi possível enviar agora. Tente novamente em instantes.");
    } finally {
      setSending(false);
    }
  };
  return (
    <div className="max-w-xl mx-auto">
      <AnimatePresence mode="wait">
        {!sent ? (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={submit}
            className="space-y-5"
          >
            {[
              { label: "Nome completo", key: "name", type: "text", placeholder: "Como devemos te chamar" },
              { label: "Telefone", key: "phone", type: "tel", placeholder: "(00) 00000-0000" },
            ].map((f) => (
              <div key={f.key}>
                <label className="eyebrow block mb-2">{f.label}</label>
                <input
                  required
                  type={f.type}
                  value={(form as any)[f.key]}
                  onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                  placeholder={f.placeholder}
                  className="w-full bg-transparent border-b border-border focus:border-olive outline-none py-3 font-serif-c text-lg text-ink placeholder:text-ink-soft/50 transition"
                />
              </div>
            ))}
            <div>
              <label className="eyebrow block mb-2">Nº de convidados</label>
              <select
                value={form.count}
                onChange={(e) => setForm({ ...form, count: e.target.value })}
                className="w-full bg-transparent border-b border-border focus:border-olive outline-none py-3 font-serif-c text-lg text-ink"
              >
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "pessoa" : "pessoas"}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="eyebrow block mb-2">Mensagem para os noivos</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Escreva algo bonito..."
                className="w-full bg-transparent border-b border-border focus:border-olive outline-none py-3 font-serif-c text-lg text-ink placeholder:text-ink-soft/50 resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-olive text-cream font-editorial tracking-wider text-sm uppercase hover:bg-ink transition rounded-sm disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {sending ? "Enviando..." : "Confirmar presença"}
              <Send className="w-4 h-4 group-hover:translate-x-1 transition" />
            </button>
            {errorMsg && (
              <p className="font-serif-c italic text-sm text-red-700/80 mt-3">{errorMsg}</p>
            )}
          </motion.form>
        ) : (
          <motion.div
            key="ok"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center py-10"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="mx-auto w-20 h-20 rounded-full border border-gold flex items-center justify-center mb-6"
            >
              <Heart className="w-8 h-8 text-gold" fill="currentColor" />
            </motion.div>
            <h3 className="font-display text-5xl text-olive mb-3">Obrigado!</h3>
            <p className="font-serif-c italic text-lg text-ink-soft max-w-md mx-auto">
              A sua presença faz este dia ainda mais luminoso. Mal podemos esperar para
              celebrar juntos.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------- Main ---------- */
function Invitation() {
  const [entered, setEntered] = useState(false);
  const { scrollYProgress } = useScroll();
  const parallax = useTransform(scrollYProgress, [0, 1], [0, -80]);

  useEffect(() => {
    if (entered) document.body.style.overflow = "auto";
    else document.body.style.overflow = "hidden";
  }, [entered]);

  const addToCalendar = () => {
    // 13 Nov 2026, 19:00 BRT = 22:00 UTC
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      "Casamento Eduardo & Samira",
    )}&dates=20261113T220000Z/20261114T030000Z&details=${encodeURIComponent(
      "Celebre conosco este dia inesquecível.",
    )}&location=${encodeURIComponent(`${VENUE_NAME} — ${VENUE_ADDRESS}`)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-cream text-ink relative overflow-x-hidden">
      <AnimatePresence>{!entered && <Landing onEnter={() => setEntered(true)} />}</AnimatePresence>

      {entered && (
        <>
          <Sparkles8 />
          <MusicToggle />

          {/* Floating botanical elements (scroll with the page, não ficam presos na tela) */}
          <motion.img
            src={sprigEucalyptus}
            alt=""
            aria-hidden
            style={{ y: parallax }}
            className="absolute top-24 -left-16 md:-left-20 w-28 md:w-32 opacity-30 animate-floaty pointer-events-none z-0"
          />
          <motion.img
            src={sprigBlossom}
            alt=""
            aria-hidden
            style={{ y: parallax, scaleX: -1 }}
            className="absolute bottom-32 -right-16 md:-right-24 w-32 md:w-40 opacity-25 animate-floaty pointer-events-none z-0"
          />


          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10"
          >
            {/* ===== SECTION 1 — Welcome ===== */}
            <Chapter number={1} className="min-h-screen flex items-center justify-center px-6 py-24 relative">
              <img
                src={cornerTL}
                alt=""
                aria-hidden
                className="absolute top-0 left-0 w-[36vw] max-w-[340px] opacity-90 pointer-events-none"
              />
              <img
                src={cornerBR}
                alt=""
                aria-hidden
                className="absolute bottom-0 right-0 w-[36vw] max-w-[340px] opacity-90 pointer-events-none"
              />
              <div className="max-w-2xl text-center relative">
                <Reveal>
                  <h1 className="font-display text-6xl sm:text-7xl md:text-8xl text-olive leading-[0.9]">
                    Eduardo
                    <span className="block font-editorial italic text-gold text-3xl my-2">&</span>
                    Samira
                  </h1>
                </Reveal>
                <Reveal delay={0.25}>
                  <span className="eyebrow mt-8 inline-block">Com imensa alegria, convidamos você</span>
                </Reveal>
                <Reveal delay={0.4}>
                  <div className="gold-rule w-40 mx-auto my-8" />
                </Reveal>
                <Reveal delay={0.5}>
                  <p className="font-serif-c italic text-xl sm:text-2xl text-ink-soft leading-relaxed">
                    Algumas histórias são escritas pelo tempo. Outras, pela providência de Deus. A nossa é fruto de ambos. Com alegria e gratidão, convidamos você para testemunhar e celebrar conosco o início de um novo capítulo das nossas vidas.
                  </p>
                </Reveal>
                <Reveal delay={0.8}>
                  <div className="mt-10 flex flex-col items-center gap-2">
                    <span className="font-editorial text-olive tracking-[0.4em] text-sm">
                      13 · NOVEMBRO · 2026
                    </span>
                    <ChevronDown className="w-5 h-5 text-gold mt-6 animate-handTap" strokeWidth={1} />
                  </div>
                </Reveal>
              </div>
            </Chapter>

            {/* ===== SECTION 2 — Wedding Info ===== */}
            <Verse
              flip
              text="Assim, eles já não são dois, mas sim uma só carne. Portanto, o que Deus uniu, ninguém separe."
              reference="Mateus 19:6"
              reflection="Diante de Deus, de nossa família e de nossos amigos, celebraremos a aliança que marcará o início da nossa vida como uma só família."
            />

            <Chapter number={2} className="py-28 px-6 relative">
              <img src={sprigOlive} alt="" aria-hidden loading="lazy" className="absolute top-10 right-0 w-28 opacity-25 rotate-6" />
              <div className="max-w-5xl mx-auto">
                <Reveal>
                  <SectionMark label="Os Detalhes" />
                  <h2 className="text-center font-editorial text-4xl sm:text-5xl text-olive mb-4">
                    Onde e quando
                  </h2>
                </Reveal>

                <div className="mt-16 grid sm:grid-cols-3 gap-6">
                  {[
                    {
                      icon: Calendar,
                      eyebrow: "A Data",
                      title: "13 · 11 · 2026",
                      subtitle: "Sexta-feira",
                    },
                    {
                      icon: Clock,
                      eyebrow: "O Horário",
                      title: "19h00",
                      subtitle: "Recepção a partir das 18h30",
                    },
                    {
                      icon: MapPin,
                      eyebrow: "O Lugar",
                      title: VENUE_NAME,
                      subtitle: VENUE_ADDRESS,
                    },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <Reveal key={item.eyebrow} delay={i * 0.12}>
                        <motion.div
                          whileHover={{ y: -6, scale: 1.01 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="border border-border p-10 bg-cream/60 backdrop-blur-sm relative h-full text-center shadow-soft hover:shadow-card transition-shadow duration-500 group"
                        >
                          <div className="absolute top-4 left-4 right-4 h-px bg-gold/40" />
                          <div className="absolute bottom-4 left-4 right-4 h-px bg-gold/40" />
                          <div className="mx-auto w-12 h-12 rounded-full border border-gold/50 flex items-center justify-center text-gold mb-5 group-hover:bg-gold/10 transition-colors duration-300">
                            <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.2} />
                          </div>
                          <span className="eyebrow">{item.eyebrow}</span>
                          <h3 className="font-editorial text-2xl text-olive mt-3">{item.title}</h3>
                          <div className="gold-rule w-16 mx-auto my-4" />
                          <p className="font-serif-c italic text-ink-soft leading-relaxed">
                            {item.subtitle}
                          </p>
                        </motion.div>
                      </Reveal>
                    );
                  })}
                </div>

                <Reveal delay={0.25}>
                  <div className="mt-10 border border-border bg-cream/60 p-3 relative">
                    <div className="absolute inset-3 border border-gold/20 pointer-events-none" />
                    <iframe
                      title={`Mapa — ${VENUE_NAME}`}
                      src={`https://www.google.com/maps?q=${encodeURIComponent(
                        `${VENUE_NAME}, ${VENUE_ADDRESS}`
                      )}&output=embed`}
                      width="100%"
                      height="360"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="block w-full grayscale-[15%] contrast-95"
                      style={{ border: 0 }}
                    />
                  </div>
                </Reveal>


                <Reveal delay={0.3}>
                  <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 border border-olive text-olive hover:bg-olive hover:text-cream transition font-editorial tracking-wider text-sm uppercase"
                    >
                      <MapPin className="w-4 h-4" /> Abrir no Google Maps
                    </a>
                    <button
                      onClick={addToCalendar}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-olive text-cream hover:bg-ink transition font-editorial tracking-wider text-sm uppercase"
                    >
                      <CalendarPlus className="w-4 h-4" /> Salvar no calendário
                    </button>
                  </div>
                </Reveal>

              </div>
            </Chapter>

            {/* ===== SECTION 4 — Countdown ===== */}
            <Chapter number={3} className="py-28 px-6 bg-parchment/50 relative overflow-hidden">
              <img src={cornerTL} alt="" aria-hidden className="absolute -top-10 -left-10 w-64 opacity-40" />
              <img src={cornerBR} alt="" aria-hidden className="absolute -bottom-10 -right-10 w-64 opacity-40" />
              <div className="max-w-3xl mx-auto text-center relative">
                <Reveal>
                  <SectionMark label="A Contagem" />
                  <h2 className="font-editorial text-4xl sm:text-5xl text-olive mb-4">
                    Faltam apenas
                  </h2>
                  <p className="font-serif-c italic text-lg text-ink-soft mb-14">
                    ... para o começo de sempre.
                  </p>
                </Reveal>
                <Reveal delay={0.2}>
                  <Countdown />
                </Reveal>
                <Reveal delay={0.4}>
                  <Sparkles className="w-5 h-5 text-gold mx-auto mt-12 animate-sparkle" />
                </Reveal>
              </div>
            </Chapter>

            {/* ===== SECTION 5 — Gallery ===== */}
            <Chapter number={4} className="py-28 px-6">
              <div className="max-w-6xl mx-auto">
                <Reveal>
                  <SectionMark label="Memórias" />
                  <h2 className="text-center font-editorial text-4xl sm:text-5xl text-olive mb-4">
                    Nossos momentos
                  </h2>
                  <p className="text-center font-serif-c italic text-lg text-ink-soft max-w-xl mx-auto mb-16">
                    Um pedacinho da nossa história, guardado com carinho.
                  </p>
                </Reveal>
                <Gallery />
              </div>
            </Chapter>

            {/* ===== SECTION 6 — Gifts ===== */}
            <Chapter number={5} className="py-28 md:py-36 px-6 bg-parchment/40 relative">
              <img src={sprigBlossom} alt="" aria-hidden loading="lazy" className="absolute top-16 right-0 w-32 opacity-20 -scale-x-100" />
              <img src={sprigEucalyptus} alt="" aria-hidden loading="lazy" className="absolute bottom-20 left-0 w-24 opacity-25 -rotate-12" />
              <div className="max-w-[760px] mx-auto">
                <Reveal>
                  <SectionMark label="Com Gratidão" />
                  <h2 className="text-center font-editorial text-4xl sm:text-5xl text-olive mb-8">
                    Um gesto de carinho
                  </h2>
                  <div className="space-y-5 text-center font-serif-c italic text-lg md:text-xl text-ink-soft leading-relaxed mb-12">
                    <p>
                      Somos gratos a Deus por cada pessoa que fará parte desse momento
                      tão especial.
                    </p>
                    <p>
                      O maior presente será compartilhar esse dia com vocês.
                      Mas, se Deus colocar em seu coração o desejo de nos presentear,
                      disponibilizamos duas formas simples e seguras para isso.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={0.15}>
                  <div className="flex justify-center mb-12">
                    <span className="font-editorial text-gold/60 text-xl tracking-[0.35em] select-none">
                      ══════════════════════════════════════
                    </span>
                  </div>
                </Reveal>

                {/* iCasei list */}
                <Reveal delay={0.25}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-cream border border-border shadow-card rounded-sm p-8 sm:p-10 text-center mb-8"
                  >
                    <div className="w-14 h-14 mx-auto rounded-full bg-olive/10 text-olive flex items-center justify-center mb-6">
                      <Gift className="w-6 h-6" strokeWidth={1.3} />
                    </div>
                    <h3 className="font-editorial text-2xl sm:text-3xl text-olive mb-4">
                      Lista de Presentes
                    </h3>
                    <p className="font-serif-c italic text-ink-soft text-lg leading-relaxed max-w-lg mx-auto mb-8">
                      Nossa lista foi preparada com carinho no iCasei.
                      Lá você encontrará opções de diferentes valores para nos ajudar a iniciar essa nova etapa da nossa vida.
                    </p>
                    <a
                      href={ICASEI_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center w-full sm:w-auto min-w-[260px] px-8 py-4 bg-olive text-cream font-body uppercase tracking-[0.25em] text-xs rounded-sm shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all duration-300"
                    >
                      Acessar Lista de Presentes
                    </a>
                  </motion.div>
                </Reveal>

                <Reveal delay={0.35}>
                  <div className="flex items-center gap-4 my-10">
                    <span className="h-px flex-1 bg-border" />
                    <span className="font-serif-c italic text-ink-soft/80 text-base">
                      ou, se preferir...
                    </span>
                    <span className="h-px flex-1 bg-border" />
                  </div>
                </Reveal>

                {/* Pix */}
                <Reveal delay={0.45}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-cream border border-border shadow-card rounded-sm p-8 sm:p-10 text-center"
                  >
                    <div className="w-14 h-14 mx-auto rounded-full bg-gold/15 text-gold flex items-center justify-center mb-6">
                      <Heart className="w-6 h-6" strokeWidth={1.3} />
                    </div>
                    <h3 className="font-editorial text-2xl sm:text-3xl text-olive mb-4">
                      Presentear via Pix
                    </h3>
                    <p className="font-serif-c italic text-ink-soft text-lg leading-relaxed max-w-lg mx-auto mb-8">
                      Caso prefira, você também pode nos presentear diretamente através da chave Pix abaixo.
                    </p>
                    <div className="max-w-md mx-auto">
                      <div className="flex items-center justify-between gap-3 px-5 py-4 bg-parchment/60 border border-border rounded-sm mb-4">
                        <span className="font-editorial text-olive text-lg truncate">
                          {PIX_KEY}
                        </span>
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(PIX_KEY).then(() => {
                              toast.success("Chave Pix copiada com sucesso!");
                            });
                          }}
                          className="shrink-0 inline-flex items-center gap-2 px-4 py-2 border border-gold/60 text-olive hover:bg-gold/10 hover:border-gold rounded-sm transition-colors duration-200"
                        >
                          <Copy className="w-4 h-4" strokeWidth={1.4} />
                          <span className="font-body uppercase tracking-[0.15em] text-[0.65rem]">
                            Copiar
                          </span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </Reveal>
              </div>
            </Chapter>

            {/* ===== SECTION 7 — RSVP ===== */}
            <Chapter number={6} className="py-28 px-6 relative">
              <div className="max-w-4xl mx-auto">
                <Reveal>
                  <SectionMark label="Confirmação" />
                  <h2 className="text-center font-editorial text-4xl sm:text-5xl text-olive mb-4">
                    Você virá?
                  </h2>
                  <p className="text-center font-serif-c italic text-lg text-ink-soft max-w-xl mx-auto mb-14">
                    Nos ajude a preparar tudo com carinho, confirmando sua presença
                    até 14 de setembro de 2026.
                  </p>
                </Reveal>
                <Reveal delay={0.2}>
                  <RSVP />
                </Reveal>
              </div>
            </Chapter>

            {/* ===== SECTION 8 — Guest messages ===== */}
            <Verse
              text="O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha. Tudo sofre, tudo crê, tudo espera, tudo suporta."
              reference="1 Coríntios 13:4–7"
              reflection="Que o amor seja sempre o alicerce da nossa família e que Deus continue guiando cada capítulo da nossa história."
            />
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl mx-auto text-center px-6 pb-32 font-editorial italic text-2xl md:text-3xl text-olive leading-relaxed"
            >
              Com alegria e gratidão a Deus, esperamos por você para celebrar o dia mais especial das nossas vidas.
            </motion.p>

            <Chapter number={7} className="py-28 px-6 bg-parchment/40">
              <div className="max-w-5xl mx-auto">
                <Reveal>
                  <SectionMark label="Recadinhos" />
                  <h2 className="text-center font-editorial text-4xl sm:text-5xl text-olive mb-4">
                    Palavras de carinho
                  </h2>
                  <p className="text-center font-serif-c italic text-ink-soft max-w-xl mx-auto mb-14">
                    Deixe uma mensagem para guardarmos como lembrança deste dia.
                  </p>
                </Reveal>
                <MessageWall />
              </div>
            </Chapter>


            {/* ===== Footer ===== */}
            <footer className="py-24 px-6 text-center relative overflow-hidden">
              <img src={sprigBlossom} alt="" aria-hidden loading="lazy" className="mx-auto w-24 opacity-70 mb-8" />
              <p className="eyebrow">Com todo nosso amor</p>
              <h3 className="font-display text-5xl sm:text-6xl text-olive mt-4">
                Eduardo & Samira
              </h3>
              <p className="font-serif-c italic text-ink-soft mt-4">
                Obrigado por fazer parte da nossa história.
              </p>
              <div className="gold-rule w-32 mx-auto my-8" />
              <p className="font-editorial tracking-[0.4em] text-sm text-olive">2026</p>
            </footer>
          </motion.main>
        </>
      )}
    </div>
  );
}
