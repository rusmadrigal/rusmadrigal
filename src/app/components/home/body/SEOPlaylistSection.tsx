import { Youtube } from "lucide-react";
import { getPlaylistVideos } from "@/lib/youtube/getPlaylistVideos";
import SEOPlaylistGridClient from "./SEOPlaylistGridClient";

function formatDate(iso?: string) {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleDateString("es-CR", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

export default async function SEOPlaylistSection() {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const playlistId = process.env.YOUTUBE_PLAYLIST_ID;

  const videos =
    apiKey && playlistId ? await getPlaylistVideos({ apiKey, playlistId, maxResults: 8 }) : [];

  const shouldFallbackEmbed = !videos?.length && playlistId;

  const videosForUI = videos.map((v) => ({
    ...v,
    publishedLabel: formatDate(v.publishedAt),
  }));

  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      {/* ⬇️ MISMO ANCHO QUE LOOKER */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
        {/* Header */}
        <div className="relative px-8 pb-6 pt-8">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-white" />
          <div className="relative flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
                SEO técnico en video
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                Micro-lecciones y casos reales: auditorías, Core Web Vitals, JavaScript SEO,
                dashboards y automatizaciones.{" "}
                <strong className="font-semibold text-slate-700">Sin humo.</strong>
              </p>
            </div>

            {playlistId ? (
              <a
                href={`https://www.youtube.com/playlist?list=${playlistId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/40"
              >
                <Youtube className="h-4 w-4" />
                Ver playlist
              </a>
            ) : null}
          </div>
        </div>

        {/* Body */}
        <div className="px-8 pb-8">
          {shouldFallbackEmbed ? (
            <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200">
              <div className="aspect-video bg-slate-50">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/videoseries?list=${playlistId}`}
                  title="YouTube playlist"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ) : (
            <SEOPlaylistGridClient videos={videosForUI} />
          )}
        </div>
      </div>
    </section>
  );
}
