import Container from "../ui/Container";
import { EXPERIENCE } from "@/data/portfolio";
import FadeUp from "../animations/FadeUp";
export default function Experience() {
  return (
    <section
  id="experience"
  className="pt-24 pb-12 lg:pt-32 lg:pb-16"
>
      <Container>

<FadeUp>

<div className="text-center mb-16">
          <p className="tex
          t-violet-400 uppercase tracking-[4px] font-semibold">
            Experience
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold mt-3">
            My Professional Journey
          </h2>
        </div>
</FadeUp>
        <div className="relative border-l-2 border-violet-500 ml-4 lg:ml-10">

{EXPERIENCE.map((item, index) => (
  <FadeUp
    key={`${item.year}-${item.company}`}
    delay={index * 0.2}
  >
    <div className="relative pl-10 pb-12">

              {/* Dot */}

              <div className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-violet-500 border-4 border-[#030712]" />
<div
  className="
  rounded-2xl
  border
  border-white/10
  bg-white/5
  backdrop-blur-md
  p-6
  transition-all
  duration-300
  hover:-translate-y-2
  hover:border-violet-500
  hover:shadow-[0_0_30px_rgba(139,92,246,.25)]
"
>
              <span className="text-violet-400 text-sm font-semibold">
                {item.year}
              </span>

              <h3 className="text-2xl font-bold mt-2">
                {item.role}
              </h3>

              <h4 className="text-gray-300 mt-1">
                {item.company}
              </h4>

              <p className="text-gray-400 leading-8 mt-4">
                {item.description}
              </p>
</div>
            </div>
          </FadeUp>
          ))}

        </div>

      </Container>
    </section>
  );
}