// app/home/lp/seo/ui.tsx

export function Divider() {
  return <div className="my-5 h-px w-full bg-slate-200/70" />;
}

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
      {children}
    </span>
  );
}
