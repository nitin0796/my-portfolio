import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  const handleMenuItemClick = (id) => {
    setActive(id);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[10vw] ${
        isScrolled ? "bg-white/70 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="text-[#111111] py-5 flex justify-between items-center">
        <div className="text-xl font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-[#111111]">Nitin</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-[#111111]">Lobhiyal</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        <div
          className={`hidden md:flex space-x-8 text-[#111111] px-4 py-2 ${
            isScrolled ? "" : "border rounded-full shadow-sm"
          }`}
        >
          {menuItems.map((el) => (
            <a
              key={el.id}
              href={`#${el.id}`}
              className={`hover:text-[#A78BFA]  ${
                active === el.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button
                className="cursor-pointer"
                onClick={() => handleMenuItemClick(el.id)}
              >
                {el.label}
              </button>
            </a>
          ))}
        </div>

        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/nitin0796"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#111111] hover:text-[#A78BFA]"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/nitin0796/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#111111] hover:text-[#A78BFA]"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href="https://x.com/nitin_0796"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#111111] hover:text-[#A78BFA]"
          >
            <FaXTwitter size={20} />
          </a>
        </div>

        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className={"text-3xl text-[#8245ec] cursor-pointer"}
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {isOpen && (
        <div
          className={
            "absolute top-20 left-1/2 transform -translate-x-1/2 w-4/5 bg-white/80 backdrop-filter backdrop-blur-md z-50 rounded-lg shadow-lg md:hidden"
          }
        >
          <div
            className={`flex flex-col items-center space-y-4 py-4 text-[#111111]`}
          >
            {menuItems.map((el) => (
              <a
                href={`#${el.id}`}
                key={el.id}
                className={`cursor-pointer hover:text-[#A78BFA] ${
                  active === el.id ? "text-[#8245ec]" : ""
                }`}
                onClick={() => handleMenuItemClick(el.id)}
              >
                {el.label}
              </a>
            ))}
            <div className="flex space-x-6 pt-2">
              <a
                href="https://github.com/nitin0796"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#111111] hover:text-[#A78BFA]"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/nitin0796/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#111111] hover:text-[#A78BFA]"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="https://x.com/nitin_0796"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#111111] hover:text-[#A78BFA]"
              >
                <FaXTwitter size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
