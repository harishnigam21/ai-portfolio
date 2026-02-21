import { useState } from "react";
interface Project {
  link: string;
  image: string;
  title: string;
  short: string;
  long: string;
  tech: string;
}
interface ProjectProps {
  info: {
    description: string;
    category: string[];
    MERN: Project[];
    PHP: Project[];
    WordPress: Project[];
  };
}
export default function Project({ info }: ProjectProps) {
  const [more, setMore] = useState(false);
  const [activeCategory, setActiveCategory] = useState<
    "MERN" | "PHP" | "WordPress"
  >("MERN");
  return (
    <section
      id="projects"
      className="flex flex-col gap-8 py-24 px-6 min-h-screen bg-linear-to-br from-black via-gray-900 to-black "
    >
      <div className="max-w-6xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-4xl font-medium text-center mb-10">
          Projects
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
        <div className="flex flex-wrap justify-center gap-6">
          {info.category.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as any)}
              className={`px-6 py-2 rounded-full border transition ${
                activeCategory === cat
                  ? "bg-blue-600 text-white border-blue-600"
                  : "border-gray-600 text-gray-400 hover:bg-gray-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-3 gap-4">
          {info[activeCategory].map((proj, idx) => (
            <div
              key={idx}
              className="bg-gray-900 flex flex-col border border-gray-800 p-6 rounded-xl shadow-lg hover:shadow-blue-900 transition"
            >
              <a href={proj.link} target="_blank">
                <img
                  src={`${import.meta.env.VITE_FRONTEND_HOST}/${proj.image}`}
                  className="rounded-lg mb-4"
                />
              </a>

              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
              <div className="flex flex-col grow">
                <p className="text-gray-400 text-sm mb-3 line-clamp-3">
                  {proj.short}
                </p>

                <p className="text-xs text-gray-500 mb-4 line-clamp-2">
                  <strong>Tech:</strong> {proj.tech}
                </p>
              </div>

              <a
                href={proj.link}
                target="_blank"
                className="text-blue-500 text-sm hover:underline"
              >
                Visit Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
