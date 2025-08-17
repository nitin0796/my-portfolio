import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import profileImage from "../assets/Profile.jpg";
import RotatingText from "./RotatingText";
// import TextLoop from "./TextLoop";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[10vw] font-sans mt-16 md:mt-24 lg:mt-24 bg-white"
    >
      <div className="flex flex-col md:flex-row justify-around items-center">
        <div className="md:w-1/3 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[20rem] md:h-[20rem] rounded-full shadow-md"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.1}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="profile image"
              className="w-full h-full rounded-full object-cover drop-shadow-2xl"
            />
          </Tilt>
        </div>
        <div className="md:w-1/2 justify-center text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111] mb-2  leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#111111] mb-4 leading-tight">
            Nitin Lobhiyal
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight text-center md:text-left flex justify-center items-center md:justify-start ">
            <span className="text-[#111111]">I am a &nbsp;</span>
            <span className="text-[#8245EC]">
              <RotatingText
                texts={[
                  "Fullstack Developer",
                  "Frontend Developer",
                  "Backend Developer",
                  "Coder",
                ]}
                mainClassName="px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 md:py-3 bg-[#8245ec]/90 backdrop-blur-sm text-white font-semibold rounded-2xl font-medium shadow-xl"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={3000}
              />
            </span>
          </h3>
          <p className="text-base sm:text-lg md:text-lg text-[#6B7280] mb-10 mt-8 leading-relaxed">
            I'm a developer who turns ideas into user-friendly web apps using
            the MERN stack. I build clean, scalable solutions with a focus on
            readable code and intuitive design. Always curious, I explore new
            tools, and keep improving my skills.
          </p>
          <a
            // {google drive link}
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec ,#a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 24px, 0 0 40px #8245ec",
            }}
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
