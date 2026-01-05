// app/home/lp/seo/data.ts

export type Service = {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  icon: "gear" | "chart" | "puzzle" | "arrows" | "nodes" | "map";
};

export const SERVICES: Service[] = [
  {
    id: "auditoria",
    title: "Auditoría de SEO Técnico",
    description:
      "Diagnóstico profundo de rastreo, indexación, arquitectura, canónicos, hreflang, status codes y renderizado (incl. JS SEO).",
    bullets: [
      "Backlog priorizado por impacto/esfuerzo",
      "Riesgos críticos y quick wins",
      "Criterios de QA para dev",
    ],
    icon: "gear",
  },
  {
    id: "cwv",
    title: "Core Web Vitals y Performance",
    description:
      "Mejoras reales en LCP/INP/CLS: carga crítica, imágenes, JS, fuentes y third-party, con impacto en SEO y conversión.",
    bullets: [
      "Análisis CrUX + datos de campo (si existen)",
      "Plan de fixes por prioridad",
      "Validación antes/después",
    ],
    icon: "chart",
  },
  {
    id: "dev",
    title: "Soporte técnico a Desarrollo",
    description:
      "Acompañamiento a equipos dev para implementar fixes sin romper SEO: SSR/Next.js, routing, sitemaps, robots, canonicals y schema.",
    bullets: [
      "Soporte en PRs/tickets",
      "QA técnico pre/post release",
      "Checklists y guías de implementación",
    ],
    icon: "puzzle",
  },
  {
    id: "migraciones",
    title: "Migraciones y Rediseños SEO-safe",
    description:
      "Plan de migración, mapeo de URLs, redirecciones, QA técnico y monitoreo post-launch para minimizar caída orgánica.",
    bullets: [
      "Inventario + mapeo de URLs",
      "Redirecciones y validación",
      "Monitoreo post-launch + fixes",
    ],
    icon: "arrows",
  },
  {
    id: "analitica",
    title: "Analítica para SEO (GA4 + GSC)",
    description:
      "Medición clara: eventos clave, segmentación y dashboards accionables. Menos métricas de vanidad, más decisiones.",
    bullets: [
      "Eventos y conversiones útiles",
      "Segmentación por landings/mercados",
      "Dashboards accionables",
    ],
    icon: "nodes",
  },
  {
    id: "roadmap",
    title: "Roadmap y Estrategia Técnica",
    description:
      "Priorización trimestral, KPIs realistas y coordinación con stakeholders. Estrategia ejecutable, no teórica.",
    bullets: [
      "Roadmap por trimestre/sprint",
      "Priorización impacto/esfuerzo",
      "Alineación con objetivos de negocio",
    ],
    icon: "map",
  },
];
