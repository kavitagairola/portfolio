import Container from "../ui/Container";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          <div>

            <h2 className="text-3xl font-bold">
              Kavita
              <span className="text-violet-500">.</span>
            </h2>

            <p className="text-gray-400 mt-2">
              Full Stack Developer
            </p>

          </div>

          <div className="flex gap-5">

            <a href="#">
              <FaGithub
                size={25}
                className="hover:text-violet-400 transition"
              />
            </a>

            <a href="#">
              <FaLinkedin
                size={25}
                className="hover:text-violet-400 transition"
              />
            </a>

          </div>

        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-sm">
            © 2025 Kavita Gairola. All Rights Reserved.
          </p>

          <a
            href="#home"
            className="flex items-center gap-2 text-violet-400 hover:text-white transition"
          >
            Back To Top

            <ArrowUp size={18} />

          </a>

        </div>

      </Container>
    </footer>
  );
}