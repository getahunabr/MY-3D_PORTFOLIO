import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const ShowcaseSections = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];
    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100", // or adjust as needed
          },
        }
      );
    });

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <section ref={sectionRef} id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* left */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper pl-10">
              <img src="/images/ai.JPG" alt="AI" />
            </div>
            <div className="text-content">
              <h2>
                on-Demand An AI-powered platform for preparing for mock
                interviews
              </h2>
              <p className="text-white-50 md:text-xl">
                Prepwise is a website project designed to help you learn
                integrating AI models with your apps.Built with Next.js for the
                user interface and backend logic, Firebase for authentication
                and data storage, styled with TailwindCSS and using Vapi's voice
                agents.
              </p>
            </div>
          </div>

          {/* right */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/getu.JPG" alt="Library management platform" />
              </div>
              <h2>A Healthcare Patient Management Application</h2>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/project3.png" alt="YC Directory" />
              </div>
              <h2>YC Directory-A startup Showcase App</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSections;
