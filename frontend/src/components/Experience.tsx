interface ExperienceProps {
  info: {
    role: string;
    company: string;
    period: string;
    points: string[];
  }[];
}
export default function Experience({ info }:ExperienceProps) {
  return (
    <section id="experience" className="py-24 px-6 bg-linear-to-tr from-black via-gray-900 to-black min-h-screen ">
      <div className="max-w-5xl mx-auto space-y-10">
        <h2 className="text-3xl md:text-4xl font-medium text-center">Experience</h2>
        {info.map((exp, idx) => (
          <div
            key={idx}
            className="bg-gray-900 border border-gray-800 p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-semibold">
              {exp.role} — <span className="text-blue-500">{exp.company}</span>
            </h3>
            <p className="text-sm text-gray-400 mb-3">{exp.period}</p>

            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
