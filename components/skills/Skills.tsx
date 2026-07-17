import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import SkillCard from "./SkillCard";
import { SKILLS } from "@/data/portfolio";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 lg:py-28"
    >
      <Container>

        {/* Heading */}
        <SectionTitle
          subtitle="SKILLS"
          title="Technologies I Work With"
        />

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mt-14">
          {SKILLS.map((category) => (
            <SkillCard
              key={category.title}
              title={category.title}
              items={category.items}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}