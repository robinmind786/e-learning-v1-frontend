import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { ChangeEvent } from "react";

interface TextAreaFieldProps {
  label?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  value: any;
  error?: string;
  touched: boolean | undefined;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label = "Label",
  id = "inputId",
  name = "inputId",
  placeholder = "This is a placeholder",
  handleChange,
  value,
  error,
  touched,
}) => {
  return (
    <React.Fragment>
      <div className="grid w-full gap-3">
        <Label htmlFor={id}>{label}</Label>
        <Textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
        {error && touched && (
          <p className="text-sm text-red-600 -mt-2">{error}</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default TextAreaField;
