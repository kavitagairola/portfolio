import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg border-b border-white/10 bg-[#030712]/70">
      <Container>
        <nav className="flex items-center justify-between h-20 pt-20">

          {/* Logo */}
          <h1 className="text-2xl font-bold">
          Kavita<span className="text-violet-500">.</span>
          </h1>

          {/* Menu */}
          <ul className="hidden md:flex items-center gap-8 text-gray-300">

            <li className="cursor-pointer hover:text-white duration-300">
              Home
            </li>

            <li className="cursor-pointer hover:text-white duration-300">
              About
            </li>

            <li className="cursor-pointer hover:text-white duration-300">
              Skills
            </li>

            <li className="cursor-pointer hover:text-white duration-300">
              Projects
            </li>

            <li className="cursor-pointer hover:text-white duration-300">
              Contact
            </li>

          </ul>

          {/* Button */}
          <Button text="Hire Me" />

        </nav>
      </Container>
    </header>
  );
}