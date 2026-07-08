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
      <h2 className="text-4xl font-bold mb-3">
        {title}
      </h2>

      <p className="text-gray-400 max-w-xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
}