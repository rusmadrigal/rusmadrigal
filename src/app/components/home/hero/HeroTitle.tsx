type HeroTitleProps = {
  lines: string[];
};

export default function HeroTitle({ lines }: HeroTitleProps) {
  return (
    <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
      {lines.map((line, idx) => (
        <span key={`${line}-${idx}`}>
          {line}
          {idx < lines.length - 1 ? <br /> : null}
        </span>
      ))}
    </h1>
  );
}
