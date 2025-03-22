import { motion } from "framer-motion";
import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
import profilePic from "../assets/profile.jpg"; // Add your profile picture in the assets folder

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
  className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-10`}
>
  {/* Animated Line & Dot */}
  <div className="flex flex-col justify-center items-center mt-10">
    <div className="w-5 h-5 rounded-full bg-[#915eff]" />
    <div className="w-1 sm:h-[40vh] h-[10vh] violet-gradient" />
  </div>

  {/* Name, Intro & Profile Picture */}
  <div className="flex flex-row items-center gap-11 mt-5">
    {/* Text Section */}
    <div className="flex flex-col">
      <h1 className={`${styles.heroHeadText} mt-8`}>
        Hi, I'm <span className="text-[#915eff]">Rachit</span>
      </h1>
      <p className={`${styles.heroSubText} mt-2 text-white-100 leading-relaxed`}>
      "I'm a Full-Stack Developer <br />
      skilled in building scalable, <br />
        user-friendly web and mobile applications. <br />
        With expertise in React, 
        Node.js, databases, and APIs."
      </p>
    </div>

    {/* Profile Picture with Circular Shape */}
    <motion.div
      animate={{
        boxShadow: [
          "0px 0px 20px #915eff",
          "0px 0px 40px #915eff",
          "0px 0px 20px #915eff",
        ],
      }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      className="w-65 h-60 rounded-full border-4 border-[#915eff] overflow-hidden shadow-lg flex-shrink-0"
    >
      <img
        src={profilePic}
        alt="Rachit Chandekar"
        className="w-full h-full object-cover"
      />
    </motion.div>
  </div>
</div>


      {/* Scroll Down Animation */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
