"use client";
import { useState } from "react";
import toast from "react-hot-toast";
export default function ContactForm() {
    
    const [formData, setFormData] = useState({
  name: "",
  email: "",
  subject: "",
  message: "",
});
const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement
  >
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
const [loading, setLoading] = useState(false);

const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  if (
    !formData.name.trim() ||
    !formData.email.trim() ||
    !formData.subject.trim() ||
    !formData.message.trim()
  ) {
    toast.error("Please fill in all fields.");
    return;
  }

  setLoading(true);


try {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {  
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json();

if (data.success) {
  toast.success(data.message);

  setFormData({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
} else {
  toast.error(data.message);
}

}catch (error) {
  console.error(error);
  toast.error("Something went wrong!");
}finally {
  setLoading(false);
}
};

  return (
    <form
     onSubmit={handleSubmit}    
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-lg
      p-8
      space-y-6
    "
    >
      <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="Your Name"
  className="w-full rounded-xl bg-white/5 border border-white/10 p-4 outline-none focus:border-violet-500"
/>

      <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Email Address"
  className="w-full rounded-xl bg-white/5 border border-white/10 p-4 outline-none focus:border-violet-500"
/>

      <input
  type="text"
  name="subject"
  value={formData.subject}
  onChange={handleChange}
  placeholder="Subject"
  className="w-full rounded-xl bg-white/5 border border-white/10 p-4 outline-none focus:border-violet-500"
/>

     <textarea
  rows={6}
  name="message"
  value={formData.message}
  onChange={handleChange}
  placeholder="Message"
  className="w-full rounded-xl bg-white/5 border border-white/10 p-4 outline-none focus:border-violet-500 resize-none"
/>

      <button
        
type="submit"
disabled={loading}
        className="
w-full
rounded-xl
bg-violet-600
py-4
font-semibold
hover:bg-violet-500
transition
disabled:opacity-50
"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}