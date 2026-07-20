import Image from "next/image";
import { HERO_CONTENT } from "@/constants";
import Button from "../ui/Button";
import Container from "../ui/Container";
import FadeUp from "../animations/FadeUp";
export default function Hero() {
  return (
<section
  id="home"
  className="min-h-screen flex items-center pt-20"
>
      <Container>
       <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">

          {/* Left */}
<FadeUp>
          <div className="max-w-xl text-center lg:text-left">

            <p className="text-violet-400 text-lg font-medium mb-2">
              {HERO_CONTENT.greeting}
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              {HERO_CONTENT.name}
            </h1>

            <h2 className="mt-5 text-2xl md:text-3xl text-gray-300 font-semibold">
              {HERO_CONTENT.role}
            </h2>

            <p className="mt-6 text-gray-400 leading-8 max-w-xl mx-auto lg:mx-0">
              {HERO_CONTENT.description}
            </p>

            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">

              <button>
                <a href="#contact"  
                className="px-6 py-3 rounded-lg border border-gray-500 bg-purple-500 transition hover:shadow-lg"
                >
  Hire Me
</a>
              </button>

              <a
  href="/resume/resume.pdf"
  download
  className="px-6 py-3 rounded-lg border border-gray-500 hover:border-purple-500 transition"
>
  Download CV
</a>

            </div>

          </div>
          </FadeUp>

          {/* Right */}
<FadeUp delay={0.2}>
            <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">

            <div className="relative">

              <div className="absolute inset-0 bg-violet-600 blur-[120px] opacity-20 rounded-full"></div>

              <Image
                src="/images/profile.png"
                alt="Profile"
                width={430}
                height={430}
                priority
className="relative rounded-full object-cover border-4 border-violet-500 shadow-[0_0_60px_rgba(124,58,237,.45)] w-[260px] h-[260px]
sm:w-[320px] sm:h-[320px]
lg:w-[420px] lg:h-[420px]"              />

            </div>

          </div>
</FadeUp>
        </div>

      </Container>
    </section>
  );
}