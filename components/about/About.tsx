import Image from "next/image";
import FadeUp from "../animations/FadeUp";
import Container from "../ui/Container";
import { ABOUT, ABOUT_HIGHLIGHTS } from "@/data/portfolio";
export default function About() {
  return (
    <section id="about" className="py-24">
      <Container>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <FadeUp>
<div className="hidden lg:flex justify-center">

  <Image
    src="/images/about.jpg"
    alt="About"
    width={420}
    height={520}
    className="rounded-3xl object-cover shadow-2xl"
  />

</div>
</FadeUp>

          {/* Right */}

         <FadeUp delay={0.2}>
<div className="mx-auto max-w-2xl text-center lg:text-left">

            <p className="text-violet-400 uppercase tracking-[4px] font-semibold">
              {ABOUT.subtitle}
            </p>

            <h2 className="mt-4 max-w-xl text-4xl lg:text-5xl font-bold leading-tight">
              {ABOUT.title}
            </h2>

            <p className="mt-8 max-w-2xl text-gray-400 leading-8">
              {ABOUT.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-10">

  {ABOUT_HIGHLIGHTS.map((item) => (
    <div
      key={item.title}
      className="
rounded-2xl
border
border-white/10
bg-white/5
backdrop-blur-md
p-5
transition-all
duration-300
hover:-translate-y-2
hover:border-violet-500
hover:shadow-[0_0_25px_rgba(139,92,246,.25)]
"
    >
      <h3 className="text-xl font-bold text-white">
        {item.title}
      </h3>

      <p className="text-gray-400 mt-2 text-sm">
        {item.subtitle}
      </p>
    </div>
  ))}

</div>

<div className="mt-10">
  <a
    href="/resume/Kavita-Rohini.pdf"
    download
    className="
inline-flex
items-center
rounded-xl
bg-violet-600
px-6
py-3
font-semibold
text-white
transition-all
duration-300
hover:bg-violet-500
hover:-translate-y-1
hover:shadow-[0_0_20px_rgba(139,92,246,.4)]
"
  >
    Download Resume
  </a>
</div>

          </div>
</FadeUp>
        </div>

      </Container>
    </section>
  );
}