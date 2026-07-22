interface Props {
  title: string;
  subtitle: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-3 text-[var(--text)] transition-colors duration-300">
        {title}
      </h2>

      <p className="text-[var(--paragraph)] max-w-xl mx-auto transition-colors duration-300">
        {subtitle}
      </p>
    </div>
  );
}