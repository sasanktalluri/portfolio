"use client";



// Component imports
import Social from "@/components/Social";


const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Intro */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Engineer</span>
            <h1 className="h1">
              My name is <br /> <span className="text-accent">Sasank Talluri</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-customColor2">
              Driven by a passion for innovation, I have honed a diverse set of skills enabling me to develop robust software and websites. I am a Software Engineer with 3+ years of experience building scalable full-stack applications, RESTful APIs, and cloud-ready backend services using Java, Spring Boot, .NET, and React.
            </p>
            {/* Social media section */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Home;
