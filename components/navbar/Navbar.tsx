"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import useActiveSection from "@/hooks/useActiveSection";
import useScroll from "@/hooks/useScroll";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { NAV_LINKS } from "@/data/navLinks";
import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
const activeSection = useActiveSection();
const scrolled = useScroll();
  return (
    <header
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
 scrolled
  ? "bg-white dark:bg-[#030712] backdrop-blur-xl shadow-lg border-b border-gray-200 dark:border-white/10"
  : "bg-transparent"
  }`}
>
      <Container>
       <nav className="flex items-center justify-between h-20">

  {/* Logo */}
  <h1 className="text-3xl font-bold text-black dark:text-white">
    Kavita<span className="text-violet-500">.</span>
  </h1>

  {/* Desktop Menu */}
 <ul className="hidden md:flex items-center gap-10 text-gray-700 dark:text-gray-300 font-medium">

  {NAV_LINKS.map((item) => (

    <li key={item.id}>

     <a
  href={`#${item.id}`}
  className={`transition duration-300 ${
    activeSection === item.id
  ? "text-violet-500"
  : "text-gray-700 dark:text-gray-300 hover:text-violet-500"
  }`}
>
        {item.label}
      </a>

    </li>

  ))}

</ul>

  {/* Right Side */}
  <div className="flex items-center gap-4">
  <ThemeToggle />

  <div className="hidden md:block">
    <a href="#contact">
      <Button text="Hire Me" />
    </a>
  </div>

  <button
    onClick={() => setIsOpen(!isOpen)}
    className="md:hidden text-gray-900 dark:text-white"
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
      bg-white dark:bg-[#030712]
      border-t
      border-gray-300 dark:border-white/10
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
  ? "text-violet-500"
  : "text-gray-700 dark:text-gray-300 hover:text-violet-500"
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