import React from "react";
import TitleHeader from "../components/TitleHeader";
import { testimonials } from "../assets/constants";
import GlowCard from "../components/GlowCard";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding ">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What people say about me?"
          sub="⭐Client Feedback Highlight"
        />
        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials.map((testimonial, index) => (
            <GlowCard card={testimonial} key={index} index={index}>
              <div className="flex items-center gap-3">
                <div>
                  <img src={testimonial.imgPath} alt={testimonial.img} />
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-white-50">{testimonial.mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
