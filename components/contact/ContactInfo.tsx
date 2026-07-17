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

      <h3 className="text-3xl font-bold">
        Get In Touch
      </h3>

      <p className="text-gray-400 leading-8">
        I'm always open to discussing new opportunities,
        freelance projects, or full-time roles.
      </p>

      <div className="space-y-6">

        <div className="flex items-center gap-4">
          <Mail className="text-violet-400" size={22} />
          <span>{CONTACT.email}</span>
        </div>

        <div className="flex items-center gap-4">
          <Phone className="text-violet-400" size={22} />
          <span>{CONTACT.phone}</span>
        </div>

        <div className="flex items-center gap-4">
          <MapPin className="text-violet-400" size={22} />
          <span>{CONTACT.location}</span>
        </div>

      </div>

      <div className="flex gap-5 pt-2">

        <a
          href={CONTACT.github}
          target="_blank"
          className="hover:text-violet-400 transition"
        >
       <FaGithub size={26} />
        </a>

        <a
          href={CONTACT.linkedin}
          target="_blank"
          className="hover:text-violet-400 transition"
        >
          <FaLinkedin size={26} />
        </a>

      </div>

    </div>
  );
}