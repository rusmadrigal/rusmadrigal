"use client";

import { toast } from "sonner";

type Props = {
  className?: string;
  label?: string;
};

export default function CopyLinkButton({ className, label = "Copiar link" }: Props) {
  const handleCopy = async () => {
    if (typeof window === "undefined") return;

    const url = window.location.href;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(url);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = url;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }

      toast.success("Link copiado");
    } catch {
      toast.error("No se pudo copiar el link");
    }
  };

  return (
    <button type="button" className={className} onClick={handleCopy}>
      {label}
    </button>
  );
}
