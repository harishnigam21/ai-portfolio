import type { IconType } from "react-icons";
interface ContactProps {
  info: {
    description: string;
    phone: string[];
    email: string;
    website: string;
    address: string;
    googlemapIframe: string;
    links: { name: string; icon: IconType; link: string }[];
  };
}
export default function Contact({ info }: ContactProps) {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gray-950 bg-linear-to-b from-black via-gray-900 to-black"
    >
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-medium">Contact Me</h2>

        <p className="text-gray-400 lg:text-xl">{info.description}</p>
        <div className="flex gap-4 justify-center">
          {info.links.map((item, index) => (
            <a
              key={`contact/icon/${index}`}
              className="flex items-center aspect-square rounded-full p-3 bg-black/90"
              href={item.link}
              target="_blank"
            >
              <item.icon className="text-3xl" />
            </a>
          ))}
        </div>

        <div className="space-y-2">
          <p>Email: {info.email}</p>
          <div className="flex flex-wrap items-center gap-2 justify-center">
            Phone:{" "}
            {info.phone.map((item, index) => (
              <div key={`phone_number_${index}`} className="flex flex-nowrap gap-2">
                <span>{item}</span>
                {index != info.phone.length-1 && <span>,</span>}
              </div>
            ))}
          </div>
          <p>Address: {info.address}</p>
        </div>
      </div>
    </section>
  );
}
