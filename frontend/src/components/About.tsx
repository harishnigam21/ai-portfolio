import { useState } from "react";

interface AboutProps {
  info: {
    name: string;
    title: string;
    description: string[];
    tagline: string;
  };
}
export default function About({ info }: AboutProps) {
  const [more, setMore] = useState(false);
  return (
    <section
      id="about"
      className="py-24 px-6 min-h-screen bg-linear-to-tr from-black via-gray-900 to-black"
    >
      <div className="max-w-5xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-4xl font-medium text-center">
          About Me
        </h2>

        <div className="min-[480px]:hidden flex flex-col gap-8">
          {info.description.slice(0, 2).map((para, index) => (
            <p key={index} className="text-gray-300 leading-relaxed lg:text-xl">
              {para}
            </p>
          ))}

          {more &&
            info.description.slice(2).map((para, index) => (
              <p
                key={index}
                className="text-gray-300 leading-relaxed lg:text-xl"
              >
                {para}
              </p>
            ))}

          {info.description.length > 2 && (
            <strong onClick={() => setMore(!more)}>
              Show {more ? "less" : "more"} ----
            </strong>
          )}
        </div>
        <div className="hidden min-[480px]:flex flex-col gap-8">
          {info.description.map((para, index) => (
            <p key={index} className="text-gray-300 leading-relaxed lg:text-xl">
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
