import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);
import { useRef } from "react";
import { testimonialPoints } from "../../constants/testimonialPoints";

const Testimonials = () => {
  const testimonialsRef = useRef(null);

  useGSAP(() => {
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#testimonials",
        start: "top 80%",
      },
    });

    scrollTimeline.from(testimonialsRef.current, {
      clipPath: "inset(0 100% 0 0)",
      duration: 2,
      delay: 0.5,
      ease: "power1.inOut",
    });
  });

  return (
    <div id="testimonials" className="mx-20 mb-20">
      <div className="testimonials-header" ref={testimonialsRef}>
        <div className="pt-[150px]">
          <div
            className="bg-black rounded-tl-[0] rounded-br-[0] rounded-tr-[6px] rounded-bl-[0] text-white 
                               h-[30px] w-[150px] text-xs font-semibold tracking-[2px] flex justify-center items-center"
          >
            TESTIMONIALS
          </div>
          <h1 className="text-5xl pt-[30px] leading-[1.2]">
            What our clients are saying
          </h1>
        </div>
      </div>
      <div className="testimonials-body">
        <div className="testimonials-img-section flex justify-around mt-20">
          <div className="testimonial-img-wrap">
            <img src="/testimonial-img1.jpg" />
          </div>
          <div className="testimonial-img-wrap">
            <img src="/testimonial-img2.jpg" />
          </div>
          <div className="testimonial-img-wrap">
            <img src="/testimonial-img3.jpg" />
          </div>
        </div>
        <div className="testimonials-text-section">
          <div className="flex">
            {testimonialPoints.map((point) => (
              <div className="ml-10 mr-10">
                <div className="text-xl text-gray-600 text-center">
                  {point.review}
                </div>
                <h2 className="text-xl mt-5 my-10 text-center">
                  {point.clientName}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
