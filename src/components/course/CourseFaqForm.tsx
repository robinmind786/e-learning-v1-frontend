"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { FilePenLine, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import * as Yup from "yup";
import { useFormik } from "formik";
import InputField from "../common/InputField";
import TextAreaField from "../common/TextAreaField";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FAQ } from "./courseType";

const courseFaqSchema = Yup.object().shape({
  question: Yup.string().required("Question is required"),
  answer: Yup.string().required("Answer is required"),
});

interface CourseFaqFormProps {
  courseFaq: FAQ[];
  setCourseFaq: React.Dispatch<React.SetStateAction<FAQ[]>>;
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  isCreate?: boolean;
}

const CourseFaqForm: React.FC<CourseFaqFormProps> = ({
  courseFaq,
  setCourseFaq,
  active,
  setActive,
  isCreate,
}) => {
  const [initialValues] = useState<FAQ[]>(courseFaq);
  const [opneFaq, setOpenFaq] = React.useState(false);

  const [editFaq, setEditFaq] = useState<boolean[]>(
    Array(courseFaq.length).fill(false)
  );

  const toggleEditFaq = (index: number) => {
    setEditFaq((prevEditState) => {
      const updatedEditStates = [...editFaq];
      updatedEditStates[index] = !prevEditState[index];
      return updatedEditStates;
    });
  };

  const removeFaq = (index: number) => {
    const updatedData = [...courseFaq];
    updatedData.splice(index, 1);
    setCourseFaq(updatedData);
  };

  const formik = useFormik({
    initialValues: {
      question: "",
      answer: "",
    },
    validationSchema: courseFaqSchema,
    onSubmit: () => {
      setCourseFaq([...courseFaq, values]);

      formik.resetForm();
      setOpenFaq(false);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  const handlePrev = () => {
    setActive(active - 1);
  };

  const handleNext = () => {
    setActive(active + 1);
  };

  return (
    <React.Fragment>
      <div className="grid grid-cols-1 gap-6">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Upload FAQs
        </h4>
        <form onSubmit={handleSubmit}>
          <div className="space-y-5">
            {courseFaq.map((item: FAQ, index: number) => (
              <div key={index} className="grid grid-cols-1 gap-6">
                <div className="border rounded-md p-5">
                  <div className="flex items-center justify-between pb-2.5">
                    {editFaq[index] ? (
                      <Input
                        id={`question-${index}`}
                        value={courseFaq[index].question}
                        className="text-lg font-semibold w-3/4 max-sm:text-xs"
                        onChange={(e) => {
                          const updateData = [...courseFaq];
                          updateData[index].question = e.target.value;
                          setCourseFaq(updateData);
                        }}
                      />
                    ) : (
                      <div className="text-lg font-semibold max-sm:text-xs">
                        {item.question}
                      </div>
                    )}
                    <div className="flex items-center gap-6 max-sm:2.5">
                      <Button
                        type="button"
                        size="icon"
                        variant="outline"
                        className="size-8 py-2.5 max-sm:size-6"
                        onClick={() => toggleEditFaq(index)}
                      >
                        <FilePenLine className="size-4" />
                      </Button>
                      <Button
                        type="button"
                        size="icon"
                        variant="outline"
                        className={`size-8 hover:bg-red-500 py-2.5 max-sm:size-6`}
                        onClick={() => removeFaq(index)}
                      >
                        <Trash2 className="size-4" />
                      </Button>
                    </div>
                  </div>
                  {editFaq[index] ? (
                    <Textarea
                      value={courseFaq[index].answer}
                      name="answer"
                      className="text-sm text-muted-foreground h-44"
                      onChange={(e) => {
                        const updateData = [...courseFaq];
                        updateData[index].answer = e.target.value;
                        setCourseFaq(updateData);
                      }}
                    />
                  ) : (
                    <p className="text-sm text-muted-foreground truncate">
                      {item.answer}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </form>
        <div className="flex items-center justify-end">
          <Dialog open={opneFaq} onOpenChange={setOpenFaq}>
            <DialogTrigger asChild>
              <Button size="sm" type="button">
                Add FAQ
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add FAQ</DialogTitle>
                <DialogDescription>
                  Make changes to your faq here. Click save when you&apos;re
                  done.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit}>
                <div className="space-y-5">
                  <InputField
                    type="text"
                    label="Question"
                    id="question"
                    name={"question"}
                    placeholder="Enter question"
                    error={errors.question}
                    touched={touched.question}
                    value={values.question}
                    handleChange={handleChange}
                  />
                  <TextAreaField
                    label="Answer"
                    id="answer"
                    name="answer"
                    placeholder="Type your answer here."
                    error={errors.answer}
                    touched={touched.answer}
                    value={values.answer}
                    handleChange={handleChange}
                  />

                  <Button variant="outline" type="submit" className="w-full">
                    Add
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        <div className="flex items-center justify-between">
          <Button onClick={handlePrev}>Previous</Button>
          <Button onClick={handleNext}>Next</Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CourseFaqForm;
