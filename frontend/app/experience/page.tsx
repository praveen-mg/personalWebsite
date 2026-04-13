export const metadata = {
  title: "Experience | My Portfolio",
};

interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  start: string;
  end: string | null;
  current: boolean;
  location: string;
  description: string;
  highlights: string[];
}

async function getExperience(): Promise<ExperienceItem[]> {
  try {
    const res = await fetch("http://localhost:8000/api/experience", {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
  } catch {
    return [];
  }
}

function formatDate(dateStr: string) {
  const [year, month] = dateStr.split("-");
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export default async function Experience() {
  const experience = await getExperience();

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Experience</h1>
      <p className="text-gray-500 text-lg mb-12">My professional journey.</p>

      {experience.length === 0 ? (
        <p className="text-gray-400 italic">No experience data available. Make sure the backend is running.</p>
      ) : (
        <div className="relative border-l-2 border-indigo-200 ml-4 space-y-10">
          {experience.map((item) => (
            <div key={item.id} className="relative pl-8">
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-indigo-600 border-2 border-white shadow" />

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">{item.role}</h2>
                    <p className="text-indigo-600 font-medium">{item.company}</p>
                  </div>
                  <div className="text-right text-sm text-gray-400">
                    <p>{formatDate(item.start)} — {item.current ? "Present" : item.end ? formatDate(item.end) : ""}</p>
                    <p>{item.location}</p>
                  </div>
                </div>
                <p className="text-gray-600 mt-3 mb-4">{item.description}</p>
                <ul className="space-y-1">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                      <span className="text-indigo-400 mt-0.5">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
