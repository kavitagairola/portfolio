interface Props {
  text: string;
}

export default function Button({ text }: Props) {
  return (
    <button className="px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 transition-all duration-300 font-medium">
      {text}
    </button>
  );
}