import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    title: "Email",
    value: "rohangupta989769@gmail.com",
  },
  {
    title: "Location",
    value: "Aligarh, Uttar Pradesh, India",
  },
  {
    title: "Availability",
    value: "Open to Full-Time & Freelance",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      setStatus("❌ Please fill all fields.");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      await emailjs.send(
        "service_7213hxp",
        "template_sv81p1i",
        {
          name: name,
          email: email,
          title: subject,
          message: message,
        },
        "jct1A3hFrZ7NCb62m"
      );

      await emailjs.send(
  "service_7213hxp",
  "template_l3m4c27",
  {
    name: name,
    email: email,
    title: subject,
    message: message,
  },
  "jct1A3hFrZ7NCb62m"
);

      setStatus("✅ Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      setStatus("❌ Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-slate-900 py-20 sm:py-24 lg:py-28 text-white"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 xl:px-10">

        {/* Heading */}

        <div className="mb-14 sm:mb-16 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
            Get In Touch
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Let's Build Something
            <span className="text-emerald-400"> Great</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-8 text-slate-400">
            Have a project, internship opportunity or just want to connect?
            Feel free to reach out. I'll get back to you as soon as possible.
          </p>

        </div>

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-8
            lg:gap-12
          "
        >

          {/* Contact Info */}

          <div
           className="
  rounded-2xl
  border
  border-slate-800
  bg-slate-950
  p-6
  sm:p-8
  transition-all
  duration-300
  cursor-pointer
  hover:-translate-y-2
  hover:border-emerald-500
  hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]
  active:-translate-y-2
  active:border-emerald-500
  active:shadow-[0_0_30px_rgba(16,185,129,0.15)]
  active:scale-[0.98]
"
          >

            <h3 className="mb-8 text-2xl sm:text-3xl font-semibold">
              Contact Information
            </h3>

            <div className="space-y-6">

              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="border-b border-slate-800 pb-5"
                >
                  <p className="font-medium text-emerald-400">
                    {item.title}
                  </p>

                  <p className="mt-2 break-words text-slate-300">
                    {item.value}
                  </p>
                </div>
              ))}

            </div>

          </div>
                    {/* Contact Form */}

          <div
            className="
  rounded-2xl
  border
  border-slate-800
  bg-slate-950
  p-6
  sm:p-8
  transition-all
  duration-300
  cursor-pointer
  hover:-translate-y-2
  hover:border-emerald-500
  hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]
  active:-translate-y-2
  active:border-emerald-500
  active:shadow-[0_0_30px_rgba(16,185,129,0.15)]
  active:scale-[0.98]
"
            
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label className="mb-2 block text-slate-300">
                  Full Name
                </label>

                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 outline-none transition focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-slate-300">
                  Email
                </label>

                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 outline-none transition focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-slate-300">
                  Subject
                </label>

                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  type="text"
                  placeholder="Project / Job Opportunity"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 outline-none transition focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-slate-300">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 outline-none transition focus:border-emerald-500"
                />
              </div>

              {status && (
                <p
                  className={`text-sm ${
                    status.includes("✅")
                      ? "text-emerald-400"
                      : "text-red-400"
                  }`}
                >
                  {status}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  rounded-xl
                  bg-emerald-500
                  py-3
                  font-semibold
                  transition
                  hover:bg-emerald-600
                  active:scale-95
                  disabled:opacity-60
                  disabled:cursor-not-allowed
                "
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;