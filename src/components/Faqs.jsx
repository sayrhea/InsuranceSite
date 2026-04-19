import { useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger.js";
import { useGSAP } from "@gsap/react";
import { faqPoints } from "../../constants/faqPoints";
gsap.registerPlugin(ScrollTrigger);

const Faqs = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const [faqSelectedId, setFaqSelectedId] = useState(2);
  const handleFaqSelection = (id) => {
    if (faqSelectedId != id) {
      setFaqSelectedId(id);
    }
  };

  const faqsHeaderRef = useRef(null);
  useGSAP(() => {
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#faqs",
        start: "top 80%",
      },
    });

    scrollTimeline.from(faqsHeaderRef.current, {
      clipPath: "inset(0 100% 0 0)",
      duration: "2",
      delay: 0.5,
      ease: "power1.inOut",
    });
  });

  const [activeId, setActiveId] = useState(null);

  const handleAccordionClick = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  const [query, setQuery] = useState("");

  // const filteredFaqsGeneral = faqPoints.general.filter((faq) =>
  //   faq.question.toLowerCase().includes(query.toLowerCase()),
  // );

  // const filteredFaqsSetup = faqPoints.setup.filter((faq) =>
  //   faq.question.toLowerCase().includes(query.toLowerCase),
  // );

  const allfaqs = [...faqPoints.general, ...faqPoints.setup];
  const filteredFaqs = allfaqs.filter((faq) =>
    faq.question.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div id="faqs" className="mx-20 mb-20 pt-[150px] flex justify-between">
      <div className="faqs-header" ref={faqsHeaderRef}>
        <div
          className="bg-black rounded-tl-[0] rounded-br-[0] rounded-tr-[6px] rounded-bl-[0] text-white 
                               h-[30px] w-[80px] text-xs font-semibold tracking-[2px] flex justify-center items-center"
        >
          FAQS
        </div>
        <h1 className="text-6xl pt-[30px] leading-[1.4]">
          You're <br />
          probably <br />
          wondering...
        </h1>
      </div>
      <div className="faqs-mid-section w-[40%]">
        <div className="faqs-mid-section-heading flex space-x-5">
          <div className="text-3xl font-semibold">
            Freq <br />
            uently <br />
            asked <br />
            questions
          </div>
          <div className="search-bar border-b-[2px_solid_black]">
            <div className="flex justify-center items-start">
              <input
                type="text"
                placeholder="Looking for something?"
                className="border-none outline-none py-0 text-lg w-70"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <img src="search.png" className="h-7 w-7" />
            </div>
            <div className="border-b-1"></div>
          </div>
        </div>

        {query === "" ? (
          <div className="faq-topics mt-10 flex gap-10 text-lg text-gray-500">
            <button
              id={1}
              onClick={() => handleFaqSelection(1)}
              className={`cursor-pointer ${faqSelectedId === 1 ? "underline decoration-3 decoration-black underline-offset-8" : ""}`}
            >
              General
            </button>
            <button
              id={2}
              onClick={() => handleFaqSelection(2)}
              className={`cursor-pointer ${faqSelectedId === 2 ? "underline decoration-3 decoration-black underline-offset-8" : ""}`}
            >
              Setting up FAQs
            </button>
          </div>
        ) : (
          <div className="mt-10 text-lg text-gray-500">
            Showing results for: {query}
          </div>
        )}
        {query === "" ? (
          <div className="faq-contents">
            <div
              className={`faq-1 ${faqSelectedId === 1 ? "" : "hidden"} mt-12`}
            >
              {faqPoints.general.map((point) => (
                <div
                  key={point.id}
                  className={`${activeId === point.id ? "h-60" : "h-22"} w-[80%] border-gray-500 border-2 mb-3`}
                  onClick={() => handleAccordionClick(point.id)}
                >
                  <div className="faq-1-questions flex items-center cursor-pointer mt-6">
                    <div className="text-lg font-semibold ml-10">
                      {point.question}
                    </div>
                    <img
                      src={`${activeId === point.id ? "arrow-up.png" : "down-arrow.png"}`}
                      className="h-6 w-6 ml-6"
                    />
                  </div>
                  {activeId === point.id ? (
                    <div
                      className={`faq-1-answers ml-10 mt-6 mr-5 text-lg text-gray-600`}
                    >
                      {point.answer}
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              ))}
            </div>
            <div
              className={`faq-2 ${faqSelectedId === 2 ? "" : "hidden"} mt-12 w-[80%]`}
            >
              {faqPoints.setup.map((point) => (
                <div key={point.id} className="border-2 border-gray-500 mb-3">
                  <div
                    className="text-lg font-semibold mb-6 flex items-center max-w-[80%] cursor-pointer"
                    onClick={() => handleAccordionClick(point.id)}
                  >
                    <div className="mx-10 mt-8 max-w-[70%]">
                      {point.question}
                    </div>
                    <img
                      src={`${activeId === point.id ? "arrow-up.png" : "down-arrow.png"}`}
                      className="h-6 w-6"
                    />
                  </div>
                  {activeId === point.id ? (
                    <div className={`mx-10 mb-8 text-lg text-gray-600`}>
                      {point.answer}
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-12">
            {filteredFaqs.map((faq) => (
              <div
                className="border-2 border-gray-600 w-[80%] mb-3"
                key={faq.id}
              >
                <div className="ml-10 my-6 mr-10">
                  <div
                    className="flex justify-between cursor-pointer"
                    onClick={() => handleAccordionClick(faq.id)}
                  >
                    <div className="text-lg font-semibold max-w-[80%]">
                      {faq.question}
                    </div>
                    <img
                      src={`${activeId === faq.id ? "arrow-up.png" : "down-arrow.png"}`}
                      className="w-7 h-7"
                    />
                  </div>
                  {activeId === faq.id ? (
                    <div
                      // className={`text-lg text-gray-600 mt-4 ${activeId === faq.id ? "" : "hidden"}`}
                      className={`text-lg text-gray-600 mt-4`}
                    >
                      {faq.answer}
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="faq-video cursor-pointer w-[360px] h-[470px] overflow-hidden rounded-[20%] relative">
        <video width="380" height="500" ref={videoRef} onClick={togglePlay}>
          <source src="faq.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button
          onClick={togglePlay}
          className="absolute top-[40%] left-[37%] z-10 cursor-pointer"
        >
          {isPlaying ? (
            <img src="pause-button.png" className="h-[80px] w-[80px]" />
          ) : (
            <img src="play-button.png" className="h-[80px] w-[80px]" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Faqs;
