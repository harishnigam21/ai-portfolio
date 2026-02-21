import { useState } from "react";

interface EducationProps {
  info: {
    description: string;
    details: {
      from: string;
      type: string;
      institute: string;
      board: string;
      stream: string;
    }[];
  };
}
export default function Education({ info }: EducationProps) {
  const [more, setMore] = useState(false);
  return (
    <section
      id="education"
      className="py-24 px-6 min-h-screen bg-linear-to-br from-black via-gray-900 to-black"
    >
      <div className="max-w-5xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-4xl font-medium text-center">
          Education
        </h2>
        <div className="min-[480px]:hidden">
          <span className="text-gray-400 text-center lg:text-xl">
            {info.description.slice(0, 50)}
          </span>

          {more && (
            <span className="text-gray-400 text-center lg:text-xl">
              {info.description.slice(50)}
            </span>
          )}

          {info.description.length > 2 && (
            <strong className="px-2" onClick={() => setMore(!more)}>
              {more ? "less" : "more"}...
            </strong>
          )}
        </div>
        <div className="hidden min-[480px]:block">
          <span className="text-gray-400 text-center lg:text-xl">
            {info.description}
          </span>
        </div>

        {info.details.map((edu, idx) => (
          <div
            key={idx}
            className="bg-gray-900 border border-gray-800 p-6 rounded-lg"
          >
            <p>
              <strong>{edu.type}</strong> ({edu.from})
            </p>
            <p>{edu.institute}</p>
            <p>
              {edu.board} — {edu.stream}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
