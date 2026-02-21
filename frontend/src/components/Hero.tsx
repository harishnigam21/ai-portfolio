interface heroInfoType {
  info: {
    name: string;
    title: string;
    description: string[];
    tagline: string;
  };
  img: string;
}
export default function Hero({ info, img }: heroInfoType) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-linear-to-br from-black via-gray-900 to-black px-6 py-24 md:py-0"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-4 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold">{info.name}</h1>

          <h2 className="text-xl text-blue-500">{info.title}</h2>

          <p className="text-gray-400 max-w-lg">{info.tagline}</p>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex h-full items-center justify-center">
          <img
            src={`${import.meta.env.VITE_FRONTEND_HOST}/${img}`}
            className="object-cover object-center h-3/4"
          />
        </div>
      </div>
    </section>
  );
}
