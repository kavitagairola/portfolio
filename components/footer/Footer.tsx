import Container from "../ui/Container";
import { FaGithub, FaLinkedin ,FaEnvelope} from "react-icons/fa";
import { ArrowUp } from "lucide-react";
export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)] py-10 transition-colors duration-300">
      <Container>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          <div>

            <h2 className="text-3xl font-bold text-[var(--text)]">
              Kavita
              <span className="text-violet-500">.</span>
            </h2>

            <p className="text-[var(--paragraph)] mt-2">
              Full Stack Developer
            </p>

          </div>

          <div className="flex gap-5">

            <a   href="https://github.com/kavitagairola"
  target="_blank"
  rel="noopener noreferrer">
              <FaGithub
                size={25}
                className="text-[var(--text)] hover:text-violet-400 hover:scale-110 transition duration-300"
              />
            </a>

            <a href="https://www.linkedin.com/in/kavita-gairola-79981a351/"
             target="_blank"
  rel="noopener noreferrer"
            >
              <FaLinkedin
                size={25}
                className=" text-[var(--text)] hover:text-violet-400 hover:scale-110 transition duration-300"
              />
            </a>

            <a
  href="mailto:kavitagairola507@gmail.com"
  className="hover:text-violet-400 hover:scale-110 transition duration-300"
>
  <FaEnvelope size={25} />
</a>

          </div>

        </div>

        <div className="border-t border-[var(--border)] mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-[var(--paragraph)] text-sm">
  © {new Date().getFullYear()} Kavita Gairola. All Rights Reserved.
</p>
<p className="text-[var(--paragraph)] text-sm mt-2">
  Built with ❤️ using Next.js, TypeScript & Tailwind CSS
</p>
          <a
            href="#home"
            className="flex items-center gap-2 text-violet-500 hover:text-violet-400 transition-colors duration-300"
          >
            Back To Top

            <ArrowUp size={18} />

          </a>

        </div>

      </Container>
    </footer>
  );
}