import Image from "next/image";
import { ExternalLink, GitBranch } from "lucide-react";
interface Project {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
}

export default function ProjectCard({
  title,
  image,
  description,
  technologies,
  liveLink,
  githubLink,
}: Project) {
  return (
    <div
      className="
      group
      overflow-hidden
      rounded-3xl
      border border-white/10
      bg-white/5
      backdrop-blur-lg
      transition-all
      duration-500
      hover:border-violet-500
      hover:-translate-y-3
      hover:shadow-[0_0_40px_rgba(139,92,246,.25)]
    "
    >
      {/* Image */}
      <div className="relative h-60 overflow-hidden">

  <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80"></div>
        <Image
  src={image}
  alt={title}
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
/>
      </div>

      {/* Content */}
      <div className="p-7">

        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-4 text-gray-400 leading-7">
          {description}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-3 mt-6">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="
px-4
py-2
rounded-full
bg-violet-500/10
border
border-violet-500/20
text-violet-300
text-sm
font-medium
transition-all
duration-300
hover:bg-violet-500
hover:text-white
hover:scale-105
"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">

          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              className="
                flex
                items-center
                gap-2
                rounded-xl
                bg-violet-600
                px-5
                py-3
                text-white
                font-medium
                hover:bg-violet-500
                transition
                hover:scale-105
              "
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}

          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              className="
                flex
                items-center
                gap-2
                rounded-xl
                border
                border-white/20
                px-5
                py-3
                text-white
                hover:border-violet-500
                hover:text-violet-400
                transition
                hover:scale-105
              "
            >
              <GitBranch size={18} />
              GitHub
            </a>
          )}

        </div>

      </div>
    </div>
  );
}