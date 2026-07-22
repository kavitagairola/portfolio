interface SkillCardProps {
  title: string;
  items: string[];
}

export default function SkillCard({
  title,
  items,
}: SkillCardProps) {
  return (
    <div
      className="
      rounded-2xl
      border border-[var(--border)]
bg-[var(--surface)]
      backdrop-blur-md
      p-8
      transition-all
      duration-300
      hover:border-violet-500
      hover:-translate-y-2
      hover:shadow-[0_0_35px_rgba(139,92,246,.25)]
    "
    >
      {/* Title */}
      <h3 className="text-2xl font-bold text-[var(--text)]">
        {title}
      </h3>

      {/* Divider */}
      <div className="w-16 h-1 bg-violet-500 rounded-full mt-3 mb-6"></div>

      {/* Skills */}
      <div className="grid grid-cols-2 gap-3">
  {items.map((skill) => (
    <div
      key={skill}
      className="
        flex
        items-center
        justify-center
        rounded-xl
        border
        border-violet-500/20
        bg-violet-500/5
        py-3
        text-sm
        font-medium
        text-[var(--paragraph)]
        transition-all
        duration-300
        hover:bg-violet-500
        hover:text-white
        hover:scale-105
      "
    >
      {skill}
    </div>
  ))}
</div>
    </div>
  );
}