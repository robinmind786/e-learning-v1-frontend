/* eslint-disable react/display-name */
/* eslint-disable react-hooks/exhaustive-deps */
// @ts-nocheck
"use client";
import { Label } from "@/components/ui/label";
import React, { memo, useEffect, useState } from "react";
import dynamic from "next/dynamic";

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

interface EditorProps {
  placeholder: string;
  label: string;
  value: string;
  handleChange: (options: string) => void;
  error?: string;
  touched: boolean | undefined;
}

const Editor: React.FC<EditorProps> = memo(
  ({
    placeholder,
    label,
    value,
    handleChange: onHandleChange,
    error,
    touched,
  }) => {
    const [editorHtml, setEditorHtml] = useState<string>(value ? value : "");

    useEffect(() => {
      onHandleChange(editorHtml);
    }, [editorHtml]);

    const handleChange = (html: string) => {
      setEditorHtml(html);
    };

    return (
      <div className="grid w-full items-center gap-1.5 rounded-lg">
        <Label className="capitalize">{label}</Label>
        <QuillEditor
          theme="snow"
          onChange={handleChange}
          value={editorHtml}
          modules={Editor.modules}
          formats={Editor.formats}
          bounds={".app"}
          placeholder={placeholder}
          className="text-foreground"
        />
        {error && touched && (
          <p className="text-sm text-red-600 mt-2">{error}</p>
        )}
      </div>
    );
  }
);

Editor.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    matchVisual: false,
  },
};

Editor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

export default Editor;
