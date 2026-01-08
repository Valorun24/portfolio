import { useState } from "react";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzhLkv21yzdvPmSx1Pet-4jZKhKEnsk5WLmGYBKPd45NJL0iwNqbFejWrNh0CJThCL9fA/exec";

export default function () {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(data),
      });

      setSuccess(true);
      form.reset();
    } catch (error) {
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-24 bg-linear-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex items-center gap-6 mb-16">
          <span className="flex-1 h-px bg-blue-500/60"></span>

          <h2 className="text-4xl font-bold whitespace-nowrap">
            Contact <span className="text-blue-500">Me</span>
          </h2>

          <span className="flex-1 h-px bg-blue-500/60"></span>
        </div>

        <div className="grid md: grid-cols-2 ">
          <div>
            <h3 className="text-2xl font-semibold mb-4"> Let's Work Together</h3>
            <p className="text-gray-400 mb-8">Feel free to reach out if you have a project in mind, want to collaborate, or just want to say hello.</p>
          </div>

          {/* contact info */}

          <div className="space-y-2">
            <p>
              📧 Email: {""}
              <a href="mailto:fajarwn474@gmail.com" className="text-blue-500 hover:underline">
                fajarwn474@gmail.com
              </a>
            </p>

            <p className="text-gray-300">
              Linkedin:{" "}
              <a href="https://www.linkedin.com/in/fajar-wahyu-nugraha-856552270/" className="text-blue-500 hover:underline">
                Fajar Wahyu Nugraha
              </a>
            </p>

            <p className="text-gray-300">
              💻 GitHub:{" "}
              <a href="https://github.com/Valorun24" target="_blank" className="text-blue-500 hover:underline">
                github.com/Valorun24
              </a>
            </p>
          </div>
        </div>

        {/* Right Form */}
        <form onSubmit={handleSubmit} className="bg-gray-800/70 p-8 rounded-xl space-y-6">
          <div>
            <label className="block mb-2 text-sm">Name</label>
            <input name="name" type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-blue-500 focus:outline-none" />
          </div>

          <div>
            <label className="block mb-2 text-sm">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Your email"
              className="
                  w-full
                  px-4 py-3
                  rounded-lg
                  bg-gray-900
                  border border-gray-700
                  focus:border-blue-500
                  focus:outline-none
                "
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Message</label>
            <textarea
              name="message"
              rows={3}
              placeholder="Your message"
              className="
                  w-full
                  px-4 py-3
                  rounded-lg
                  bg-gray-900
                  border border-gray-700
                  focus:border-blue-500
                  focus:outline-none
                  resize-none
                "
            />
          </div>
          {/* Button */}
          <button type="submit" disabled={loading} className="w-full py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition">
            {loading ? "Sending..." : "Send Message"}
            {success && <p className="text-green-400 text-center">Message sent successfully!</p>}
          </button>
        </form>
      </div>
    </section>
  );
}
