"use client";

import { Check, Play, MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import Image from "next/image";

const features = [
  { n: "01", t: "Repuestos originales y de contrato en excelente estado" },
  { n: "02", t: "Verificación y control de cada pieza antes de la venta" },
  { n: "03", t: "Selección de repuestos por VIN con garantía de compatibilidad" },
  { n: "04", t: "Todos los repuestos en stock — sin esperas ni pedidos previos" },
];

const formSchema = z.object({
  name: z.string().trim().min(2, "Ingresa tu nombre").max(80),
  phone: z.string().trim().min(6, "Ingresa tu teléfono").max(30),
  vin: z.string().trim().max(40).optional(),
  parts: z.string().trim().max(500).optional(),
});

export default function Home() {
  const [form, setForm] = useState({ name: "", phone: "", vin: "", parts: "" });
  const [fileName, setFileName] = useState("Ningún archivo seleccionado");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = formSchema.safeParse(form);
    if (!r.success) {
      toast.error(r.error.issues[0].message);
      return;
    }
    toast.success("¡Solicitud enviada! Nos pondremos en contacto contigo.");
    setForm({ name: "", phone: "", vin: "", parts: "" });
    setFileName("Ningún archivo seleccionado");
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden mx-3 sm:mx-4 md:mx-6 mt-3 sm:mt-4 md:mt-6 rounded-[2rem] md:rounded-[2.5rem]">
        <Image
          src="/mercedes-hero.jpg"
          alt="Mercedes-Benz AMG"
          width={1920}
          height={1280}
          priority
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative px-5 sm:px-8 md:px-14 pt-8 sm:pt-10 md:pt-16 pb-6 sm:pb-10 md:pb-12 min-h-[460px] sm:min-h-[560px] md:min-h-[680px] flex flex-col">
          <div className="max-w-xl">
            <p className="font-display text-xs sm:text-sm md:text-base tracking-[0.2em] text-foreground/85">
              DESGUACE,<br />TIENDA DE REPUESTOS
            </p>
            <p className="font-display text-[10px] sm:text-xs tracking-[0.2em] text-muted-foreground mt-8 sm:mt-12 md:mt-16">
              REPUESTOS PARA TODOS LOS MODELOS<br />DESDE 2002
            </p>
          </div>
          <h1 className="font-display mt-auto text-[16vw] sm:text-[14vw] md:text-[10rem] leading-[0.85] font-bold tracking-tight">
            MERCEDES-BENZ
          </h1>
        </div>
      </section>

      {/* WHY */}
      <section className="px-5 sm:px-8 md:px-14 py-16 sm:py-20 md:py-32 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight">
              POR QUÉ NOS<br /><span className="text-muted-foreground">ELIGEN</span>
            </h2>
            <div
              className="mt-8 md:mt-10 rounded-[1.75rem] p-4 sm:p-5 flex gap-4 items-center max-w-md"
              style={{ background: "var(--gradient-card)", boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex-1 min-w-0">
                <p className="font-display text-xs sm:text-sm tracking-wider">MIRA EL VIDEO DE NUESTRO TRABAJO</p>
                <p className="text-[11px] sm:text-xs text-muted-foreground mt-2">
                  1 minuto y verás por qué confían en nosotros con su Mercedes
                </p>
              </div>
              <div className="relative shrink-0">
                <Image
                  src="/mercedes-video.jpg"
                  alt="Video de nuestro trabajo"
                  loading="lazy"
                  width={120}
                  height={120}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover"
                />
                <button
                  aria-label="Reproducir"
                  className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition"
                >
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {features.map((f) => (
              <div
                key={f.n}
                className="rounded-[1.25rem] sm:rounded-[1.5rem] p-5 sm:p-6 min-h-[150px] sm:min-h-[170px] flex flex-col justify-between"
                style={{ background: "var(--gradient-card)", boxShadow: "var(--shadow-card)" }}
              >
                <div className="flex justify-between items-start">
                  <div className="w-7 h-7 rounded-md border border-border flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="font-display text-3xl sm:text-4xl text-muted-foreground/40">{f.n}</span>
                </div>
                <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed mt-4">{f.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="px-5 sm:px-8 md:px-14 py-12 md:py-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          <div className="lg:order-2 lg:pt-4">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight">
              DEJA TU SOLICITUD<br />
              <span className="text-muted-foreground">Y NOS PONDREMOS<br />EN CONTACTO</span>
            </h2>
            <p className="text-[11px] sm:text-xs tracking-wider text-muted-foreground mt-6 sm:mt-8 font-display">
              COMPLETA LOS CAMPOS CON TUS DATOS{" "}
              <span className="text-foreground">Y PRESIONA EL BOTÓN &quot;ENVIAR&quot;</span>
            </p>
          </div>

          <form onSubmit={submit} className="space-y-3 lg:order-1">
            {[
              { k: "name", p: "Tu nombre" },
              { k: "phone", p: "Tu teléfono" },
              { k: "vin", p: "Código VIN" },
              { k: "parts", p: "Repuestos de interés" },
            ].map((f) => (
              <input
                key={f.k}
                placeholder={f.p}
                value={form[f.k as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
                className="w-full h-12 px-6 rounded-full bg-input/60 border border-border text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
            ))}
            <p className="text-xs text-muted-foreground pt-3">
              Sube foto del documento técnico, repuesto o lista de repuestos
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <label className="px-5 h-10 rounded-full bg-secondary text-xs flex items-center cursor-pointer hover:bg-accent transition">
                Elegir archivo
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) =>
                    setFileName(e.target.files?.[0]?.name || "Ningún archivo seleccionado")
                  }
                />
              </label>
              <span className="text-xs text-muted-foreground truncate max-w-[200px]">{fileName}</span>
            </div>
            <button
              type="submit"
              className="w-full h-14 mt-6 rounded-full bg-primary text-primary-foreground font-display tracking-[0.2em] text-sm hover:opacity-90 transition"
            >
              ENVIAR
            </button>
          </form>
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-5 sm:px-8 md:px-14 pb-16 max-w-7xl mx-auto">
        <div
          className="rounded-[1.75rem] md:rounded-[2rem] overflow-hidden grid md:grid-cols-3"
          style={{ background: "var(--gradient-card)" }}
        >
          <div className="md:col-span-2 h-56 sm:h-64 md:h-80 bg-muted relative">
            <div
              className="absolute inset-0 opacity-50"
              style={{
                backgroundImage:
                  "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <MapPin className="w-10 h-10 text-foreground" />
            </div>
          </div>
          <div className="p-6 sm:p-8 space-y-5">
            <h3 className="font-display text-2xl">CONTACTO</h3>
            <div className="flex items-center gap-3 text-sm">
              <Phone className="w-4 h-4 shrink-0" /> +34 000 000 000
            </div>
            <div className="flex items-center gap-3 text-sm break-all">
              <Mail className="w-4 h-4 shrink-0" /> info@mercedes-parts.es
            </div>
            <div className="flex items-start gap-3 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" /> C/ Automoción 23, Madrid
            </div>
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-10">
          © 2026 Mercedes Desguace. Todos los derechos reservados.
        </p>
      </section>
    </main>
  );
}
