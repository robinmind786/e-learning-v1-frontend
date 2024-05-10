/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useState, useMemo } from "react";
import { Label } from "../ui/label";
import { X } from "lucide-react";
import toast from "react-hot-toast";

export interface Option {
  value: string;
  label: string;
}

interface CustomCreatableSelectProps {
  label: string;
  id: string;
  values: Option[];
  onChange: any;
}

const CustomChoiceSelect: React.FC<CustomCreatableSelectProps> = ({
  label: selectLabel,
  id,
  values,
  onChange,
}) => {
  const [options, setOptions] = useState<Option[]>(values);

  const [inputValue, setInputValue] = useState<Option["value"]>("");

  const memoizedOptions = useMemo(() => options, [options]);

  useEffect(() => {
    onChange("tags", memoizedOptions);
  }, [memoizedOptions]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const newOption: Option = { value: inputValue, label: inputValue };
      if (
        newOption.value &&
        !memoizedOptions.some((option) => option.value === newOption.value) &&
        memoizedOptions.length < 10
      ) {
        setOptions([...memoizedOptions, newOption]);
        setInputValue("");
      } else if (memoizedOptions.length === 10) {
        toast.error("You can only add up to 10 items.");
      } else {
        toast.error("This item already exists");
      }
    }
  };

  const handleRemoveOptions = (itemValue: Option["value"]) => {
    const updatedChoices = memoizedOptions.filter(
      (selectedOption) => selectedOption.value !== itemValue
    );
    setOptions(updatedChoices);
  };

  return (
    <React.Fragment>
      <div className="grid w-full items-center gap-3">
        <Label htmlFor={id} className="capitalize">
          {selectLabel}
        </Label>
        <div className="flex items-center flex-wrap min-h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
          <div className="flex flex-1 flex-wrap gap-2.5">
            {memoizedOptions.map((option, index) => (
              <span
                key={index}
                className="bg-muted px-2 inline-flex items-center rounded gap-2.5"
              >
                {option.label}
                <button
                  title="Remove Tag"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveOptions(option.value);
                  }}
                  className="transition-all hover:text-red-500"
                >
                  <X className="size-4" />
                </button>
              </span>
            ))}
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none w-full"
              placeholder="Type and press Enter to create a new option"
            />
          </div>
        </div>
        {options.length < 0 && (
          <p className="text-sm text-red-600 mt-1.5 hidden max-sm:block">
            Oops! Don&apos;t forget to add some course tags 🏷️
          </p>
        )}
      </div>
    </React.Fragment>
  );
};

export default CustomChoiceSelect;
