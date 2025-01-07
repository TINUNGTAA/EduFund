import { useState } from "react";

function Accordion({ question, answer }) {
  const [accordion, setAccordion] = useState(false);
  return (
    <div
      className={` flex flex-col sm:w-3/4 lg:w-6/12 mx-auto px-2  my-5 ${
        accordion ? "mb-12" : "mb-2"
      }`}
    >
      <button
        className="flex items-center justify-between border-b  border-gray-300 "
        onClick={() => setAccordion(!accordion)}
      >
        <span className="text-gray-700 font-semibold py-2 "> {question}</span>
        {!accordion ? (
          <sp>
            {" "}
            <i className="fas text-edufund-green fa-chevron-down"></i>
          </sp>
        ) : (
          <sp>
            {" "}
            <i className="fas text-edufund-green fa-chevron-up"></i>
          </sp>
        )}
      </button>
      <div
        className={`grid overflow-hidden  transition-all duration-300  ease-in-out  ${
          accordion ? "grid-row-[1fr] opacity-100" : "grid-row-[0fr] opacity-0"
        }`}
      >
        {answer}
      </div>
    </div>
  );
}

export default Accordion;
