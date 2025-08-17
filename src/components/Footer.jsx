import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const menuItems = [
    { id: "about", name: "About" },
    { id: "skills", name: "Skills" },
    { id: "projects", name: "Projects" },
    { id: "education", name: "Education" },
    { id: "contact", name: "Contact" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#F9FAFB] text-[#111111] py-8 px-[12vw] md:px-[7vw] lg:px-[10vw] border-t border-[#E5E7EB]">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold text-[#8245EC]">Nitin Lobhiyal</h2>
        <nav className="flex flex-wrap justify-center space-x-4 md:space-x-6 mt-4">
          {menuItems.map((el, i) => (
            <button
              key={i}
              onClick={() => handleScroll(el.id)}
              className="hover:text-[#A78BFA] transition text-sm sm:text-base my-1 text-[#111111]"
            >
              {el.name}
            </button>
          ))}
        </nav>

        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaGithub />, link: "https://github.com/nitin0796" },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/nitin0796/",
            },
            { icon: <FaXTwitter />, link: "https://x.com/nitin_0796" },
          ].map((el, i) => (
            <a
              key={i}
              href={el.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-[#111111] hover:text-[#A78BFA] transition-transform transform hover:scale-110"
            >
              {el.icon}
            </a>
          ))}
        </div>

        <p className="text-sm text-[#6B7280] mt-6">
          © 2025 Nitin Lobhiyal — All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
