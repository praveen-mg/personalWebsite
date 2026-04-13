import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      {/* Hero */}
      <section className="flex flex-col items-start gap-6 min-h-[60vh] justify-center">
        <span className="text-indigo-600 font-semibold tracking-wide">
          👋 Hello, I&apos;m
        </span>
        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
          Praveen Kumar Gandhi
        </h1>
        <p className="text-2xl text-gray-500 font-light">
          Software Engineer · Cloud · Machine Learning · Full-Stack
        </p>
        <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
          I build scalable, cloud-native applications and machine learning systems
          with a focus on clean architecture. Passionate about distributed systems,
          graph databases, and intelligent data pipelines.
        </p>
        <div className="flex gap-4 mt-4">
          <Link
            href="/projects"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="/about"
            className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors"
          >
            About Me
          </Link>
        </div>
      </section>

      {/* Quick stats */}
      <section className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: "Publications", value: "1" },
          { label: "Projects", value: "7+" },
          { label: "Technologies", value: "15+" },
          { label: "Certifications", value: "2" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center"
          >
            <div className="text-3xl font-bold text-indigo-600">{stat.value}</div>
            <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </section>
    </div>
  );
}
