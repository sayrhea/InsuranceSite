import { benefitPoints } from "../../constants/benefitPoints";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);
import { useRef } from "react";

function Benefits() {
  const benefitsRef = useRef(null);

  useGSAP(() => {
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#benefits",
        start: "top 80%",
      },
    });

    scrollTimeline.from(benefitsRef.current, {
      clipPath: "inset(0 100% 0 0)",
      duration: 2,
      delay: 0.5,
      ease: "power1.inOut",
    });
  });

  return (
    <div id="benefits">
      <div className="benefits-header mx-20" ref={benefitsRef}>
        <div className="pt-[150px]">
          <div
            className="bg-black rounded-tl-[0] rounded-br-[0] rounded-tr-[6px] rounded-bl-[0] text-white 
                               h-[30px] w-[100px] text-xs font-semibold tracking-[2px] flex justify-center items-center"
          >
            BENEFITS
          </div>
          <h1 className="text-5xl pt-[30px] leading-[1.2]">
            Strength that speaks for itself
          </h1>
        </div>
      </div>
      <div className="lg:flex">
        {benefitPoints.map((benefit) => (
          <div className="benefits-body ml-20 mt-15 grid">
            <div className="benefits-shape [grid-area:1/1]">
              <svg
                preserveAspectRatio="xMidYMid meet"
                data-bbox="21 20 158.764 160"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="21 20 158.764 160"
                height="400"
                width="400"
                data-type="shape"
                role="presentation"
                aria-hidden="true"
                aria-label=""
                // style={{ fill: "blue" }}
                className="fill-blue-200 stroke-2 stroke-black overflow-visible"
              >
                <g>
                  <path
                    d="M179.764 39.063c0-10.529-9.447-19.063-21.102-19.063H42.103C30.448 20 21 28.534 21 39.063c0 6.486 3.588 12.211 9.066 15.655C24.588 58.162 21 63.888 21 70.373c0 5.982 3.052 11.318 7.825 14.813C24.052 88.681 21 94.018 21 100c0 6.204 3.283 11.714 8.362 15.195-5.079 3.481-8.362 8.991-8.362 15.194 0 6.251 3.33 11.798 8.474 15.275-5.145 3.475-8.474 9.024-8.474 15.273C21 171.466 30.448 180 42.103 180h116.559c11.655 0 21.102-8.534 21.102-19.063 0-6.249-3.329-11.798-8.472-15.273 5.143-3.477 8.472-9.024 8.472-15.275 0-6.203-3.282-11.713-8.362-15.194 5.08-3.481 8.362-8.991 8.362-15.195 0-5.982-3.052-11.319-7.825-14.814 4.773-3.495 7.825-8.831 7.825-14.813 0-6.486-3.588-12.211-9.066-15.655 5.478-3.444 9.066-9.17 9.066-15.655Z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    style={{ vectorEffect: "non-scaling-stroke" }}
                  ></path>
                </g>
              </svg>
            </div>
            <div className="benefits-texts text-black [grid-area:1/1] z-10 mt-20 ml-15 w-[300px]">
              <div className="lg:text-5xl text-3xl mb-25">
                <h3>
                  <span>{benefit.title}</span>
                </h3>
              </div>
              <div>
                <p>
                  <span>{benefit.description}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Benefits;
