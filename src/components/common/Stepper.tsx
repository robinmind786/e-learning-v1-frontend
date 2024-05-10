import { CheckCircle, CircleCheck } from "lucide-react";
import React from "react";

interface StepperProps {
  active: number;
  options: string[];
}

const Stepper: React.FC<StepperProps> = ({ active, options }) => {
  return (
    <React.Fragment>
      <ol className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
        {options.map((item, index) => (
          <li className="mb-10 ms-6" key={index}>
            <span
              className={`absolute flex items-center justify-center size-6  rounded-full -start-3 dark:ring-gray-900 ${
                active > index ? "bg-green-500" : "bg-gray-100 dark:bg-gray-700"
              }`}
            >
              <svg
                className={`w-3 h-3 ${
                  active > index
                    ? "text-white"
                    : "text-gray-500 dark:text-gray-400"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
            </span>
            <h3 className="font-medium leading-tight">{item}</h3>
          </li>
        ))}
      </ol>
    </React.Fragment>
  );
};

export default Stepper;
