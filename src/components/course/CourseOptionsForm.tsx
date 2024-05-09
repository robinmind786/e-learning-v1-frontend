import React from "react";
import { toast } from "react-hot-toast";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Delete, Plus, PlusCircle } from "lucide-react";
import { Benefit } from "./courseType";

interface CourseOptionsFormProps {
  benefits: Benefit[];
  setBenefits: React.Dispatch<React.SetStateAction<Benefit[]>>;
  prerequisite: { title: string }[];
  setPrerequisite: React.Dispatch<React.SetStateAction<{ title: string }[]>>;
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  handleCourseSubmit: () => void;
}

const CourseOptionsForm: React.FC<CourseOptionsFormProps> = ({
  benefits,
  setBenefits,
  prerequisite,
  setPrerequisite,
  active,
  setActive,
  handleCourseSubmit,
}) => {
  const handleBenefitChange = (index: number, value: string) => {
    const updatedBenefits = [...benefits];
    updatedBenefits[index].title = value;
    setBenefits(updatedBenefits);
  };

  const handleAddBenefit = () => {
    setBenefits([...benefits, { title: "" }]);
    toast.success("New benefit added! 🎉");
  };

  const handleRemoveBenefit = (index: number) => {
    const updatedBenefits = [...benefits];
    updatedBenefits.splice(index, 1);
    setBenefits(updatedBenefits);
    toast.success("Benefit removed successfully! ✨");
  };

  const handlePrerequisiteChange = (index: number, value: string) => {
    const updatePrerequisite = [...prerequisite];
    updatePrerequisite[index].title = value;
    setPrerequisite(updatePrerequisite);
  };

  const handleAddPrerequisite = () => {
    setPrerequisite([...prerequisite, { title: "" }]);
    toast.success("New prerequisite added! 🚀");
  };

  const handleRemovePrerequisite = (index: number) => {
    const updatedPrerequisite = [...prerequisite];
    updatedPrerequisite.splice(index, 1);
    setPrerequisite(updatedPrerequisite);
    toast.success("Prerequisite removed successfully! 💡");
  };

  const handlePrev = () => {
    setActive(active - 1);
  };

  const handleNext = () => {
    if (
      benefits[benefits.length - 1]?.title !== "" &&
      prerequisite[prerequisite.length - 1]?.title !== ""
    ) {
      setActive(active + 1);
      handleCourseSubmit();
      toast.success("Moving to the next step. Keep up the great work! 🌟");
    } else {
      toast.error("Please fill in all fields to proceed to the next step! ⚠️");
    }
  };

  return (
    <React.Fragment>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-2.5 self-start max-lg:col-span-2">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="benefit">
              What are the benefits of this course?
            </Label>
            {benefits.map((item: Benefit, index: number) => (
              <React.Fragment key={index}>
                <div className="flex items-center gap-2.5">
                  <Input
                    type="text"
                    id={`benefit-${index}`}
                    placeholder="Enter benefit..."
                    className="w-full max-sm:text-xs"
                    value={item.title}
                    onChange={(e) => handleBenefitChange(index, e.target.value)}
                  />

                  <Button
                    title="Remove item"
                    onClick={() =>
                      index === 0 ? null : handleRemoveBenefit(index)
                    }
                    className={`py-2.5 max-sm:size-6 ${
                      index > 0 ? "cursor-pointer" : "cursor-no-drop"
                    }`}
                    variant="outline"
                    size="icon"
                  >
                    <Delete className="size-4" />
                  </Button>
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className="flex justify-start">
            <Button
              onClick={handleAddBenefit}
              type="button"
              size="icon"
              variant="outline"
              className="py-2.5 max-sm:size-6"
            >
              <PlusCircle className="size-4" />
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-2 self-start max-lg:col-span-2">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="prerequisite">
              What are the prerequisite for students in this courses
            </Label>
            {prerequisite.map((item: any, index: number) => (
              <React.Fragment key={index}>
                <div className="flex items-center gap-2">
                  <Input
                    type="text"
                    id={`prerequisite-${index}`}
                    placeholder="Enter benefit..."
                    className="w-full"
                    value={item.title}
                    onChange={(e) =>
                      handlePrerequisiteChange(index, e.target.value)
                    }
                  />

                  <Button
                    title="Remove item"
                    onClick={() =>
                      index === 0 ? null : handleRemovePrerequisite(index)
                    }
                    variant="outline"
                    size="icon"
                    className={`${
                      index > 0 ? "cursor-pointer" : "cursor-no-drop"
                    }`}
                  >
                    <Delete className="size-4" />
                  </Button>
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className="flex justify-start">
            <Button
              onClick={handleAddPrerequisite}
              type="button"
              size="icon"
              variant="outline"
            >
              <PlusCircle className="size-4" />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-5">
        <Button onClick={handlePrev}>Previous</Button>
        <Button onClick={handleNext}>Next</Button>
      </div>
    </React.Fragment>
  );
};

export default CourseOptionsForm;
