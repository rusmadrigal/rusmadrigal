import Link from "next/link";
import Header from "./components/home/header/Header";
import Hero from "./components/home/hero/Hero";
import HomeAbout from "@/app/components/home/HomeAbout";
import ServicesSection from "./components/home/ServicesSection";

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

      <Hero />
      <HomeAbout />
      <ServicesSection />

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
