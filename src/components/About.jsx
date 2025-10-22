import Tilt from "react-parallax-tilt";
import profileImage from "../assets/Profile.jpg";
import BlurText from "./BlurText";
import TextType from "./TextType";

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
          <BlurText
            text={"Hi, I am\nNitin Lobhiyal"}
            delay={150}
            animateBy="letters"
            direction="top"
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#111111] mb-4 leading-tight"
          />

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight text-center md:text-left flex justify-center md:justify-start ">
            <span className="text-[#111111]">
              I am a &nbsp;
              <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#8245ec] leading-tight">
                <TextType
                  text={[
                    "Fullstack Developer",
                    "Frontend Developer",
                    "Backend Developer",
                    "Coder",
                  ]}
                  typingSpeed={150}
                  pauseDuration={1500}
                  showCursor={false}
                  cursorCharacter="_"
                  textColors={["#8245ec"]}
                />
              </span>
            </span>
          </h3>
          <p className="text-base sm:text-lg md:text-lg text-[#6B7280] mb-10 leading-relaxed">
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
