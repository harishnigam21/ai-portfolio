import { useState } from "react";

interface Certificate {
  id: number;
  name: string;
  image: string;
}
interface AchievementsProps {
  info: {
    description: string;
    certificate: Certificate[];
  };
}
export default function Achievements({ info }: AchievementsProps) {
  const [more, setMore] = useState(false);
  return (
    <section
      id="achievements"
      className="py-24 px-6 bg-black flex flex-col gap-8 min-h-screen bg-linear-to-tr from-black via-gray-900 to-black"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-4xl font-medium text-center">
          Achievements
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

        <div className="grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-3 gap-8">
          {info.certificate.map((cert) => (
            <div
              key={cert.id}
              className="bg-gray-900 border border-gray-800 p-4 rounded-lg hover:scale-105 transition"
            >
              <img
                src={`${import.meta.env.VITE_FRONTEND_HOST}/certificates/${cert.image}`}
                className="rounded-lg"
              />
              <p className="mt-3 text-center">{cert.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
