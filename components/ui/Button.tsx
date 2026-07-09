interface Props {
  text: string;
  variant?: "primary" | "outline";
}

export default function Button({
  text,
  variant = "primary",
}: Props) {
  return (
    <button
      className={`px-7 py-3 rounded-xl font-semibold transition-all duration-300 ${
        variant === "primary"
          ? "bg-violet-600 hover:bg-violet-700 text-white"
          : "border border-white text-white hover:bg-white hover:text-black"
      }`}
    >
      {text}
    </button>
  );
}