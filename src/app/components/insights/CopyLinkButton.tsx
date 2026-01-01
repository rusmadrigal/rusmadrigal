"use client";

type Props = {
  className?: string;
};

export default function CopyLinkButton({ className }: Props) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        if (typeof window === "undefined") return;
        navigator.clipboard?.writeText(window.location.href);
      }}
    >
      Copy link.
    </button>
  );
}
