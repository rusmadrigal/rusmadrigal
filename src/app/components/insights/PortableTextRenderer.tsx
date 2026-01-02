import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

type PortableTextValue = PortableTextBlock[];

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-10 scroll-mt-24 text-2xl font-semibold tracking-tight text-slate-900">
        {children}
      </h2>
    ),
    normal: ({ children }) => <p className="mt-4 leading-7 text-slate-700">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-700">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="mt-4 list-disc pl-6 text-slate-700">{children}</ul>,
  },
  listItem: {
    bullet: ({ children }) => <li className="mt-2">{children}</li>,
  },
};

export default function PortableTextRenderer({ value }: { value: PortableTextValue }) {
  return <PortableText value={value} components={components} />;
}
