import Image from "next/image";
import { HERO_CONTENT } from "@/constants";
import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center"
    >
      <Container>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">

          {/* Left */}

          <div className="max-w-xl">

            <p className="text-violet-400 text-lg font-medium mb-4">
              {HERO_CONTENT.greeting}
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              {HERO_CONTENT.name}
            </h1>

            <h2 className="mt-5 text-2xl md:text-3xl text-gray-300 font-semibold">
              {HERO_CONTENT.role}
            </h2>

            <p className="mt-6 text-gray-400 text-lg leading-8">
              {HERO_CONTENT.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Button text="Hire Me" />

              <Button
                text="Download CV"
                variant="outline"
              />

            </div>

          </div>

          {/* Right */}

          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute inset-0 bg-violet-600 blur-[120px] opacity-20 rounded-full"></div>

              <Image
                src="/images/profile.png"
                alt="Profile"
                width={420}
                height={420}
                priority
                className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] rounded-full object-cover border-4 border-violet-500 shadow-2xl"
              />

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}