import { list } from "../assets/myFunc/navlist";
import { useEffect, useRef, useState } from "react";
import { useScreenSize } from "../hooks/useScreenSize";

export default function Header() {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const NavRef = useRef<HTMLDivElement>(null);
  const screenSize = useScreenSize();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!NavRef.current) return;

    if (openNav) {
      NavRef.current.classList.add("myNav");
    } else {
      NavRef.current.classList.remove("myNav");
    }
  }, [openNav]);

  const lastScrollY = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        navRef.current.style.transform = "translateY(-100%)";
      } else {
        navRef.current.style.transform = "translateY(0)";
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return screenSize.width <= 1024 ? (
    <header className="fixed top-0 w-full py-2 px-4 flex gap-8 items-center justify-between border-b border-b-gray-800 z-40 bg-black backdrop-blur-xl text-white">
      <div
        ref={NavRef}
        className="relative flex flex-col justify-center w-8 h-8 gap-2 cursor-pointer animate-[visibleIn_1s_ease] px-2"
        onClick={() => setOpenNav(!openNav)}
      >
        <p
          id="first"
          className="w-8 border-b-4 border-[#2d3382] rounded-r-md transition-all duration-500"
        ></p>
        <p
          id="second"
          className="w-6 border-b-4 border-[#eaae46] rounded-r-md transition-all duration-500"
        ></p>
        <p
          id="third"
          className="w-8 border-b-4 border-[#409b55] rounded-r-md transition-all duration-500"
        ></p>
      </div>
      <img
        className="rounded-full w-16 h-16"
        src={`${import.meta.env.VITE_FRONTEND_HOST}/preimg.jpeg`}
        alt="proimg"
      />
      {openNav && (
        <article className="fixed top-20 min-h-full left-0 bg-black text-white flex flex-col py-8 px-6 gap-10 rounded-br-xl animate-[fromLeft_0.5s_ease] border-b border-r border-r-gray-800 border-b-gray-500 min-w-48 max-w-fit overflow-y-scroll noscrollbar">
          {list.map((item, index) => (
            <a
              className=" whitespace-nowrap"
              href={item.path}
              key={`min/navlist/${index}`}
            >
              {item.name}
            </a>
          ))}
        </article>
      )}
    </header>
  ) : (
    <header
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 transition-transform duration-500 backdrop-blur-lg bg-black/60 border-b border-gray-800"
    >
      <div className="flex justify-between items-center px-6 py-4">
        <div className="flex gap-4 items-center">
          <img
            className="rounded-full w-10 h-10"
            src={`${import.meta.env.VITE_FRONTEND_HOST}/preimg.jpeg`}
            alt="proimg"
          />
          <h1 className="font-bold text-xl tracking-wide">Harish Nigam</h1>
        </div>
        <div className="flex gap-8">
          {list.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className="hover:text-blue-500 transition"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
