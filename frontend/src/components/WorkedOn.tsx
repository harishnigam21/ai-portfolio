interface WorkedOnProps {
  info: {
    id: number;
    image: string;
    link: string;
  }[];
}
export default function WorkedOn({ info }: WorkedOnProps) {
  return (
    <section className="py-24 px-6 bg-linear-to-b from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium text-center mb-10">
          Redesigned/Contributed on Company Website's
        </h2>
        <div className="grid grid-cols-2 min-[420px]:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
          {info.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              className="bg-gray-900 border border-gray-800 overflow-hidden rounded-lg hover:scale-105 transition"
            >
              <img
                src={`${import.meta.env.VITE_FRONTEND_HOST}/workedOn/${item.image}.webp`}
                className="w-full object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
