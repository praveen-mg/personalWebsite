"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("http://localhost:8000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact</h1>
      <p className="text-gray-500 text-lg mb-12">
        Have a question or want to work together? Drop me a message.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Info */}
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-2">Get in Touch</h2>
            <p className="text-gray-600 leading-relaxed">
              I&apos;m currently open to new opportunities. Whether you have a
              project in mind, a question, or just want to say hi — my inbox
              is always open.
            </p>
          </div>
          <div className="space-y-3 text-gray-600">
            <p>📧 <a href="mailto:you@example.com" className="text-indigo-600 hover:underline">you@example.com</a></p>
            <p>🔗 <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">LinkedIn</a></p>
            <p>🐙 <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">GitHub</a></p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              placeholder="Your message..."
            />
          </div>

          {status === "success" && (
            <p className="text-green-600 font-medium">✅ Message sent! I&apos;ll get back to you soon.</p>
          )}
          {status === "error" && (
            <p className="text-red-600 font-medium">❌ Something went wrong. Please try again.</p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
