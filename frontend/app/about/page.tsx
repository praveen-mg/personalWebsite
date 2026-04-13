const SKILLS = [
  { category: "Languages", items: ["Python", "Go", "C++", "Java", "TypeScript", "JavaScript"] },
  { category: "Data & ML", items: ["TensorFlow", "Machine Learning", "Data Analysis", "Jupyter", "MongoDB"] },
  { category: "Graph & Query", items: ["GraphDB", "Cypher", "Neo4j", "XML", "JSON"] },
  { category: "Cloud & DevOps", items: ["Cloud Technologies", "Docker", "Kubernetes", "CI/CD"] },
  { category: "Frontend & Backend", items: ["React", "Next.js", "FastAPI", "REST APIs"] },
];

const CERTIFICATIONS = [
  { name: "Sun Certified Java Programmer", issuer: "Sun Micro Systems", date: "Feb 2009" },
  { name: "Data Analyst Nano Degree", issuer: "Udacity", date: "May 2016" },
];

export const metadata = {
  title: "About | Praveen Kumar Gandhi",
};

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
      <p className="text-gray-500 text-lg mb-12 max-w-2xl">
        A little bit about who I am and what I do.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Bio */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Background</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              I&apos;m a Software Engineer with a passion for Cloud Technologies,
              distributed systems, and machine learning. I enjoy working across the
              full stack — from signal processing and network coding to modern
              cloud-native web applications.
            </p>
            <p>
              My work spans machine learning on Kubernetes, data wrangling and
              analysis, fraud detection with ML, and graph databases. I love
              tackling hard engineering problems with elegant, scalable solutions.
            </p>
            <p>
              I hold a degree from the University of Southern California and have
              contributed to research published at the IEEE International Conference
              on Communications.
            </p>
          </div>

          {/* Certifications */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Certifications</h2>
            <div className="space-y-3">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.name} className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm">
                  <p className="font-medium text-gray-900">{cert.name}</p>
                  <p className="text-sm text-indigo-600">{cert.issuer} · {cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Skills</h2>
          <div className="space-y-4">
            {SKILLS.map((group) => (
              <div key={group.category}>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="bg-indigo-50 text-indigo-700 text-sm px-3 py-1 rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
