"use client";

import React, { ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface InputFieldProps {
  type?: "text" | "number" | "password" | "email" | "tel" | "url";
  label?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: any;
  error?: string;
  touched: boolean | undefined;
  disabled?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  type = "text",
  label = "Label",
  id = "inputId",
  name = "inputId",
  placeholder = "This is a placeholder",
  handleChange,
  value,
  error,
  touched,
  disabled = false,
}) => {
  return (
    <React.Fragment>
      <div className="grid w-full items-center gap-3">
        <Label htmlFor={id} className="capitalize">
          {label}
        </Label>
        <Input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          disabled={disabled}
        />
        {error && touched && (
          <p className="text-sm text-red-600 -mt-2">{error}</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default InputField;
