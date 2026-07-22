import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";


import { CONTACT } from "@/data/portfolio";

export default function ContactInfo() {
  return (
    <div className="space-y-8">

      <h3 className="text-3xl font-bold text-[var(--text)] transition-colors duration-300">
        Get In Touch
      </h3>

      <p className="text-[var(--paragraph)] leading-8 transition-colors duration-300">
        I'm always open to discussing new opportunities,
        freelance projects, or full-time roles.
      </p>

      <div className="space-y-6">

        <div className="flex items-center gap-4">
          <Mail className="text-violet-400" size={22} />
          <span className="text-[var(--text)]">
  {CONTACT.email}
</span>
        </div>

        <div className="flex items-center gap-4">
          <Phone className="text-violet-400" size={22} />
         <span className="text-[var(--text)]">
  {CONTACT.phone}
</span>
        </div>

        <div className="flex items-center gap-4">
          <MapPin className="text-violet-400" size={22} />
          <span className="text-[var(--text)]">
  {CONTACT.location}
</span>
        </div>

      </div>

      <div className="flex gap-5 pt-2">

        <a
          href={CONTACT.github}
          target="_blank"
         className="text-[var(--text)] hover:text-violet-400 transition-colors duration-300"
        >
       <FaGithub size={26} />
        </a>

        <a
          href={CONTACT.linkedin}
          target="_blank"
         className="text-[var(--text)] hover:text-violet-400 transition-colors duration-300"
        >
          <FaLinkedin size={26} />
        </a>

      </div>

    </div>
  );
}