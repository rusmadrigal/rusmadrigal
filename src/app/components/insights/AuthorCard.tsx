// src/app/components/insights/AuthorCard.tsx
import Link from "next/link";

type Author = {
  name: string;
  role?: string;
  bio?: string;
  image?: {
    asset?: { url: string };
    alt?: string;
  };
};

export default function AuthorCard({ author }: { author: Author }) {
  return (
    <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
      <div className="flex items-start gap-4">
        {author.image?.asset?.url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={author.image.asset.url}
            alt={author.image.alt || author.name}
            className="h-14 w-14 rounded-2xl object-cover"
          />
        ) : (
          <div className="h-14 w-14 rounded-2xl bg-slate-100" />
        )}

        <div className="flex-1">
          <div className="text-sm font-semibold text-slate-900">{author.name}</div>
          {author.role ? <div className="mt-1 text-sm text-slate-600">{author.role}</div> : null}

          {author.bio ? <p className="mt-4 leading-7 text-slate-700">{author.bio}</p> : null}

          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800"
              href="/#services"
            >
              See services
            </Link>
            <Link
              className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
              href="/#insights"
            >
              More insights
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
