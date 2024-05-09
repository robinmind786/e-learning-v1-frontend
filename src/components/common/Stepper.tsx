import React from "react";

interface StepperProps {
  active: number;
  options: string[];
}

const Stepper: React.FC<StepperProps> = ({ active, options }) => {
  return (
    <React.Fragment>
      <div className="w-[95%] max-lg:w-full mx-auto px-4 md:px-0">
        <ul
          aria-label="Steps"
          className="items-center text-primary/50 font-medium md:flex"
        >
          {options.map((item, idx) => (
            <li
              key={idx}
              aria-current={active == idx + 1 ? "step" : false}
              className="flex gap-x-3 md:flex-col md:flex-1 md:gap-x-0"
            >
              <div className="flex flex-col items-center md:flex-row md:flex-1">
                <hr
                  className={`w-full border hidden md:block ${
                    idx == 0
                      ? "border-none"
                      : "" || active >= idx + 1
                      ? "border-green-500"
                      : ""
                  }`}
                />
                <div
                  className={`size-6 rounded-full border-2 flex-none flex items-center justify-center ${
                    active > idx + 1
                      ? "bg-green-500 border-green-500"
                      : "" || active == idx + 1
                      ? "border-green-500"
                      : ""
                  }`}
                >
                  <span
                    className={`size-2 rounded-full bg-green-500 ${
                      active != idx + 1 ? "hidden" : ""
                    }`}
                  ></span>
                  {active > idx + 1 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  ) : (
                    ""
                  )}
                </div>
                <hr
                  className={`h-12 border md:w-full md:h-auto ${
                    idx + 1 == options.length
                      ? "border-none"
                      : "" || active > idx + 1
                      ? "border-green-500"
                      : ""
                  }`}
                />
              </div>
              <div className="h-8 flex justify-center items-center md:mt-3 md:h-auto">
                <h3
                  className={`text-sm ${
                    active == idx + 1 ? "text-green-500" : ""
                  }`}
                >
                  <div className="max-[900px]:hidden">{item}</div>
                  <div className="hidden max-[900px]:block">{idx + 1}</div>
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Stepper;
