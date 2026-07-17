import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@/data/portfolio";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 lg:py-32"
    >
      <Container>

        <SectionTitle
          subtitle="PROJECTS"
          title="Featured Projects"
        />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}