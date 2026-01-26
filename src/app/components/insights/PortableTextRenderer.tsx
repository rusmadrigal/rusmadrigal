"use client";

import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

import { urlFor } from "@/lib/sanityImage";

type PortableTextValue = PortableTextBlock[];

/* ---------------- helpers ---------------- */

function slugify(input: string) {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function extractText(node: React.ReactNode): string {
  if (node == null || typeof node === "boolean") return "";

  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(extractText).join("");
  }

  if (React.isValidElement(node)) {
    const props = node.props as { children?: React.ReactNode };
    return extractText(props.children);
  }

  return "";
}

function uniqueSlug(base: string, used: Map<string, number>) {
  if (!base) return "";
  const count = used.get(base) ?? 0;
  used.set(base, count + 1);
  return count === 0 ? base : `${base}-${count + 1}`;
}

/* ---------------- component ---------------- */

type SanityImageValue = {
  asset?: { _ref?: string; _type?: string };
  alt?: string;
  caption?: string;
};

export default function PortableTextRenderer({ value }: { value: PortableTextValue }) {
  const usedSlugs = new Map<string, number>();

  const components: PortableTextComponents = {
    block: {
      h2: ({ children }) => {
        const text = extractText(children).trim();
        const id = uniqueSlug(slugify(text), usedSlugs);

        return (
          <h2
            id={id}
            className="mt-10 scroll-mt-24 text-2xl font-semibold tracking-tight text-slate-900"
          >
            {children}
          </h2>
        );
      },

      h3: ({ children }) => {
        const text = extractText(children).trim();
        const id = uniqueSlug(slugify(text), usedSlugs);

        return (
          <h3
            id={id}
            className="mt-8 scroll-mt-24 text-xl font-semibold tracking-tight text-slate-900"
          >
            {children}
          </h3>
        );
      },

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

    // ✅ Inline images (con zoom al hacer clic)
    types: {
      inlineImage: ({ value }) => {
        const img = value as SanityImageValue;

        const src = img?.asset ? urlFor(img).width(1600).fit("max").auto("format").url() : "";

        if (!src) return null;

        const alt = (img?.alt || "").trim();

        return (
          <figure className="my-8 overflow-hidden rounded-2xl bg-white ring-1 ring-slate-100">
            <Zoom>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={alt}
                className="h-auto w-full cursor-zoom-in object-cover"
                loading="lazy"
              />
            </Zoom>

            {img?.caption ? (
              <figcaption className="px-5 py-3 text-sm text-slate-500">{img.caption}</figcaption>
            ) : null}
          </figure>
        );
      },
    },
  };

  return <PortableText value={value} components={components} />;
}
