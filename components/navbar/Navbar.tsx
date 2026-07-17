"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import useActiveSection from "@/hooks/useActiveSection";
import useScroll from "@/hooks/useScroll";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { NAV_LINKS } from "@/data/navLinks";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
const activeSection = useActiveSection();
const scrolled = useScroll();
  return (
    <header
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    scrolled
      ? "bg-[#030712]/90 backdrop-blur-xl shadow-lg border-b border-white/10"
      : "bg-transparent"
  }`}
>
      <Container>
       <nav className="flex items-center justify-between h-20">

  {/* Logo */}
  <h1 className="text-3xl font-bold">
    Kavita<span className="text-violet-500">.</span>
  </h1>

  {/* Desktop Menu */}
 <ul className="hidden md:flex items-center gap-10 text-gray-300 font-medium">

  {NAV_LINKS.map((item) => (

    <li key={item.id}>

     <a
  href={`#${item.id}`}
  className={`transition duration-300 ${
    activeSection === item.id
      ? "text-violet-400"
      : "text-gray-300 hover:text-violet-400"
  }`}
>
        {item.label}
      </a>

    </li>

  ))}

</ul>

  {/* Right Side */}
  <div className="flex items-center gap-4">

    {/* Desktop Button */}
    <div className="hidden md:block">
      <Button text="Hire Me" />
    </div>

    {/* Mobile Menu Button */}
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="md:hidden"
    >
      {isOpen ? <X size={30} /> : <Menu size={30} />}
    </button>

  </div>

</nav>
      </Container>
      {
  isOpen && (
    <div
      className="
      md:hidden
      fixed
      top-20
      left-0
      w-full
      bg-[#030712]
      border-t
      border-white/10
      px-6
      py-8
      z-40
    "
    >
     <ul className="flex flex-col gap-6 text-lg">

  {NAV_LINKS.map((item) => (

    <li key={item.id}>

      <a
  href={`#${item.id}`}
  onClick={() => setIsOpen(false)}
  className={`transition ${
    activeSection === item.id
      ? "text-violet-400"
      : "text-gray-300 hover:text-violet-400"
  }`}
>
        {item.label}
      </a>

    </li>

  ))}

</ul>
    </div>
  )
}
    </header>
  );
}