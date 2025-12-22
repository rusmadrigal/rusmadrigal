import Link from "next/link";
import Header from "./components/home/header/Header";

const SERVICES = [
  {
    title: "Search Strategy",
    desc: "Nulla porttitor accumsan tincidunt. Pellentesque adipiscing elit.",
  },
  {
    title: "Social Marketing",
    desc: "Nulla porttitor accumsan tincidunt. Pellentesque adipiscing elit.",
  },
  {
    title: "Business Planning",
    desc: "Nulla porttitor accumsan tincidunt. Pellentesque adipiscing elit.",
  },
  {
    title: "Link Building",
    desc: "Nulla porttitor accumsan tincidunt. Pellentesque adipiscing elit.",
  },
  {
    title: "Report Analysis",
    desc: "Nulla porttitor accumsan tincidunt. Pellentesque adipiscing elit.",
  },
  {
    title: "CPA Marketing",
    desc: "Nulla porttitor accumsan tincidunt. Pellentesque adipiscing elit.",
  },
];

const FAQ = [
  {
    q: "WHAT HARSH TRUTHS DO YOU PREFER TO IGNORE?",
    a: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical Latin literature from 45 BC.",
  },
  {
    q: "WHAT HARSH TRUTHS DO YOU PREFER TO IGNORE?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    q: "WHAT HARSH TRUTHS DO YOU PREFER TO IGNORE?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    q: "WHAT HARSH TRUTHS DO YOU PREFER TO IGNORE?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    q: "WHAT HARSH TRUTHS DO YOU PREFER TO IGNORE?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const TESTIMONIALS = [
  {
    name: "Tusha Chowdhury",
    role: "CEO at betano",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text...",
  },
  {
    name: "Andriyko Podliynk",
    role: "CEO at betano",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text...",
  },
  {
    name: "Courtney Cook",
    role: "CEO at betano",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text...",
  },
  {
    name: "Hiam Oliveira",
    role: "CEO at betano",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text...",
  },
  {
    name: "Guilherme Stacanella",
    role: "CEO at betano",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text...",
  },
];

const BLOG = [
  {
    title: "Startup Marketing Solution For Business Owner",
    date: "March 27, 2024",
  },
  {
    title: "How To Boost Your Digital Marketing Agency",
    date: "March 27, 2024",
  },
  {
    title: "Startup Marketing Solution For Business Owner",
    date: "March 27, 2024",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fbfbf6] text-slate-900">
      {/* Header */}
      <Header />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-4">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
              Get Your <br />
              Business To The <br />
              Top Of The <br />
              Search Engines
            </h1>

            <p className="mt-5 max-w-md text-sm leading-6 text-slate-600">
              Nulla porttitor accumsan tincidunt. Pellentesque adipiscing elit. Integer eget felis
              porttitor volutpat.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link
                href="#"
                className="rounded-md bg-slate-900 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white hover:bg-slate-800"
              >
                Contact Me
              </Link>

              <button
                type="button"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-800"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-300 text-slate-900 shadow-sm">
                  ▶
                </span>
                Watch The Video
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute right-0 top-1/2 -z-10 h-64 w-64 -translate-y-1/2 rounded-full bg-amber-200/70 blur-3xl" />
            <div className="relative mx-auto h-[320px] w-[320px] overflow-hidden rounded-2xl bg-white shadow-[0_25px_60px_rgba(15,23,42,0.15)] md:ml-auto">
              {/* Placeholder “person” */}
              <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50" />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-amber-100" />
              <div className="absolute left-1/2 top-1/2 h-56 w-40 -translate-x-1/2 -translate-y-1/2 rounded-[2rem] bg-amber-500/80" />
              <div className="absolute left-1/2 top-[42%] h-12 w-12 -translate-x-1/2 rounded-full bg-slate-200" />
            </div>
          </div>
        </div>

        {/* Partner strip */}
        <div className="mt-10 grid gap-3 rounded-xl bg-white p-4 shadow-sm md:grid-cols-4">
          {["Mail Chimp", "Slack", "Instagram", "Twitter"].map((x) => (
            <div key={x} className="flex items-center gap-3 rounded-lg border border-slate-100 p-3">
              <div className="h-9 w-9 rounded-full bg-slate-100" />
              <div className="leading-tight">
                <div className="text-xs font-semibold">{x}</div>
                <div className="text-[10px] uppercase tracking-wide text-slate-500">News Feed</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="grid gap-4">
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm">
              <div className="aspect-[16/10] bg-slate-100" />
              <div className="absolute left-4 top-4 rounded-md bg-emerald-600 px-3 py-2 text-xs font-bold text-white">
                300+ <div className="text-[10px] font-semibold opacity-90">Success Project</div>
              </div>
              <div className="absolute bottom-4 left-4 rounded-md bg-amber-300 px-3 py-2 text-xs font-bold text-slate-900">
                100+ <div className="text-[10px] font-semibold opacity-90">Award Win</div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold">Something Know About Me</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
              piece of classical Latin literature from 45 BC, it is over 2000 years old.
            </p>
            <Link
              href="#"
              className="mt-6 inline-flex rounded-md bg-slate-900 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white hover:bg-slate-800"
            >
              Know More
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-center text-3xl font-extrabold">What Services I Provide You</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <div className="h-10 w-10 rounded-lg bg-amber-100" />
              <h3 className="mt-4 font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{s.desc}</p>
              <div className="mt-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200">
                →
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-center text-3xl font-extrabold">
          Frequently <br /> Asked <br /> Questions
        </h2>

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {FAQ.map((f, idx) => (
            <details
              key={`${f.q}-${idx}`}
              className={`group overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-slate-100 ${
                idx === 1 ? "border-l-4 border-slate-800" : ""
              }`}
              open={idx === 1}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3 text-xs font-bold uppercase tracking-wide text-slate-800">
                {f.q}
                <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-amber-200 text-slate-900">
                  +
                </span>
              </summary>
              <div className="px-4 pb-4 text-sm leading-6 text-slate-600">{f.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold">Clients Feedback</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 max-w-md">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100"
              >
                <p className="text-sm leading-6 text-slate-600">{t.text}</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-slate-200" />
                  <div className="leading-tight">
                    <div className="text-sm font-bold">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-center text-3xl font-extrabold">
          Read My Latest <br /> Blog Post
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {BLOG.map((b) => (
            <article
              key={b.title}
              className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100"
            >
              <div className="aspect-[16/10] bg-slate-100" />
              <div className="p-5">
                <h3 className="font-bold leading-snug">{b.title}</h3>
                <p className="mt-2 text-xs text-slate-500">{b.date}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Nulla porttitor accumsan tincidunt. Pellentesque adipiscing elit.
                </p>
                <Link href="#" className="mt-4 inline-block text-sm font-semibold text-slate-900">
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-100">
          <h2 className="text-3xl font-extrabold">Sing Up To Newsletter</h2>
          <p className="mt-2 text-sm text-slate-600">
            receive latest news, updates, and many other things every week.
          </p>

          <form className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              className="h-11 w-full rounded-md border border-slate-200 bg-white px-4 text-sm outline-none focus:border-slate-400"
              placeholder="Your Email Address"
              type="email"
            />
            <button
              className="h-11 rounded-md bg-emerald-600 px-6 text-xs font-semibold uppercase tracking-wide text-white hover:bg-emerald-700"
              type="button"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0c2b32] text-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-10 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </span>
                <span className="text-sm font-semibold tracking-wide">Rus Marigal</span>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                Contrary to popular belief, Lorem Ipsum is not simply random text.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold">Important Links</h4>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {["Home", "About Me", "Services", "FAQ", "Blog", "Contact"].map((x) => (
                  <li key={x}>
                    <Link href="#" className="hover:text-white">
                      {x}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold">Featured Service</h4>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {[
                  "search strategy",
                  "social marketing",
                  "business planning",
                  "link building",
                  "report analysis",
                  "CPA marketing",
                ].map((x) => (
                  <li key={x}>
                    <Link href="#" className="hover:text-white">
                      {x}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold">Contact Me</h4>
              <div className="mt-4 space-y-2 text-sm text-slate-300">
                <div>Address: 15 Division Street, New York, NY 10203, United States</div>
                <div>Phone: +1 (123) 456789</div>
                <div>Email: info@yourdomain.com</div>
              </div>
              <div className="mt-5 flex gap-3">
                {["f", "t", "in"].map((x) => (
                  <div key={x} className="h-9 w-9 rounded-full bg-white/10" />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
            <div>Copyright © 2025. All Rights Reserved</div>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-white">
                Terms &amp; Conditions
              </Link>
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
