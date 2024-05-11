import React, { useState } from "react";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  ChevronDown,
  ChevronUp,
  File,
  PenIcon,
  Plus,
  Trash,
  X,
} from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import dynamic from "next/dynamic";
import { Label } from "../ui/label";
import { Lecture } from "./courseType";
const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

interface CourseLecturesFormProps {
  courseLectres: Lecture[];
  setCourseLectures: React.Dispatch<React.SetStateAction<Lecture[]>>;
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
}

const CourseLecturesForm: React.FC<CourseLecturesFormProps> = ({
  courseLectres,
  setCourseLectures,
  active,
  setActive,
}) => {
  const [value, setValue] = useState("");
  const [openSection, setOpenSection] = useState<boolean>(false);
  const [openLecture, setOpenLecture] = useState<boolean>(false);
  const [openUtils, setOpenUtils] = useState<boolean>(false);
  const [openDescription, setOpenDescription] = useState<boolean>(false);
  const [openContent, setOpenContent] = useState<boolean>(false);
  const [openResource, setOpenResource] = useState<boolean>(false);

  return (
    <>
      <CardHeader className="pb-3">
        <CardTitle>Curriculum</CardTitle>
        <CardDescription>
          Start putting together your course by creating sections, lectures and
          practice (quizzes, coding exercises and assignments).
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-5">
        {courseLectres.map((item: Lecture, index: number) => (
          <div className="border p-4" key={index}>
            <div className="pt-0 pb-8">
              <div
                className={`items-center ${openSection ? "hidden" : "flex"}`}
              >
                <h6 className="text-base font-bold self-start">Section:</h6>
                <div className="ml-4 flex items-center gap-1">
                  <File className="size-4 mr-1" />
                  <h6 className="text-base">Introduction</h6>
                  <Button
                    size="sm"
                    className="h-7 bg-background border hover:no-underline border-none"
                    variant="ghost"
                    onClick={() => setOpenSection(true)}
                  >
                    <PenIcon className="h-3.5 w-3.5" />
                  </Button>
                  <Button
                    size="sm"
                    className="h-7 bg-background border hover:no-underline border-none"
                    variant="ghost"
                  >
                    <Trash className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
              <div
                className={`flex-col gap-y-4  ${
                  openSection ? "flex" : "hidden"
                }`}
              >
                <div className="flex items-center">
                  <h6 className="text-base font-bold self-start">Section:</h6>
                  <div className="flex-1 ml-4">
                    <div className="w-full">
                      <Input
                        type="text"
                        placeholder="Enter a title"
                        className="flex-1"
                      />
                      {/* <span className="text-xs text-red-500">Error</span> */}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-2">
                  <Button
                    className="border-none"
                    size="sm"
                    variant="ghost"
                    onClick={() => setOpenSection(false)}
                  >
                    Cancel
                  </Button>
                  <Button className="" size="sm" variant="outline">
                    Save Section
                  </Button>
                </div>
              </div>
            </div>
            <div className="border p-4 pb-0 px-0 w-[95%] ml-auto">
              {/* Lectures Header */}
              <div
                className={`items-center justify-between pb-4 px-4 ${
                  openLecture ? "hidden" : "flex"
                }`}
              >
                <div className={`items-center flex`}>
                  <h6 className="text-base font-bold self-start">Lecture:</h6>
                  <div className="ml-4 flex items-center gap-1">
                    <File className="size-4 mr-1" />
                    <h6 className="text-base">Introduction</h6>
                    <Button
                      size="sm"
                      className="h-7 bg-background border hover:no-underline border-none"
                      variant="ghost"
                      onClick={() => {
                        setOpenLecture(true);
                        setOpenUtils(false);
                        setOpenContent(false);
                      }}
                    >
                      <PenIcon className="h-3.5 w-3.5" />
                    </Button>
                    <Button
                      size="sm"
                      className="h-7 bg-background border hover:no-underline border-none"
                      variant="ghost"
                    >
                      <Trash className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Button
                    size="sm"
                    className="h-7 gap-1"
                    onClick={() => {
                      setOpenContent(!openContent);
                      setOpenUtils(false);
                    }}
                  >
                    {openContent ? (
                      <X className="h-3.5 w-3.5" />
                    ) : (
                      <Plus className="h-3.5 w-3.5" />
                    )}
                    <span className="sm:whitespace-nowrap">Content</span>
                  </Button>
                  <Button
                    size="icon"
                    className="border-none size-7"
                    variant="outline"
                    onClick={() => {
                      setOpenUtils(!openUtils);
                      setOpenContent(false);
                    }}
                  >
                    {openUtils ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </div>
              </div>
              {/* Lectures Edit */}
              <div
                className={`flex-col gap-4 px-4  ${
                  openLecture ? "flex" : "hidden"
                }`}
              >
                <div className="flex items-center">
                  <h6 className="text-base font-bold self-start">Section:</h6>
                  <div className="flex-1 ml-4">
                    <div className="w-full">
                      <Input
                        type="text"
                        placeholder="Enter a title"
                        className="flex-1"
                      />
                      {/* <span className="text-xs text-red-500">Error</span> */}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-2">
                  <Button
                    className="border-none"
                    size="sm"
                    variant="ghost"
                    onClick={() => setOpenLecture(false)}
                  >
                    Cancel
                  </Button>
                  <Button className="" size="sm" variant="outline">
                    Save Section
                  </Button>
                </div>
              </div>
              {/* Content */}
              <div
                className={`p-2 border-t ${openContent ? "block" : "hidden"}`}
              >
                <div className="grid grid-cols-1 gap-4">
                  <div className="grid w-full items-center gap-3 rounded-lg">
                    <Label className="capitalize">Video Url</Label>
                    <Input type="text" placeholder="Enter video url" />
                    <p className="text-xs text-foreground -mt-2">
                      Please add the video URL generated from vdocipher.
                    </p>
                  </div>
                  <div className="grid w-full items-center gap-3 rounded-lg">
                    <Label className="capitalize">Video Length</Label>
                    <Input type="text" placeholder="Enter video length" />
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <Button
                      className="border-none"
                      size="sm"
                      variant="ghost"
                      onClick={() => setOpenContent(false)}
                    >
                      Cancel
                    </Button>
                    <Button className="" size="sm" variant="outline">
                      Save Section
                    </Button>
                  </div>
                </div>
              </div>
              {/* Lecures Description and Resources */}
              <div className={`p-2 border-t ${openUtils ? "block" : "hidden"}`}>
                <div
                  className={`flex-col gap-2 ${
                    openDescription || openResource ? "hidden" : "flex"
                  }`}
                >
                  <Button
                    variant="outline"
                    className="self-start"
                    onClick={() => {
                      setOpenDescription(true);
                    }}
                  >
                    <Plus className="size-4 mr-2" />
                    Description
                  </Button>
                  <Button
                    variant="outline"
                    className="self-start"
                    onClick={() => {
                      setOpenResource(true);
                    }}
                  >
                    <Plus className="size-4 mr-2" />
                    Resource
                  </Button>
                </div>
                {/* Description */}
                <div
                  className={`gap-4 flex-col ${
                    openDescription ? "flex" : "hidden"
                  }`}
                >
                  <div className="grid w-full items-center gap-3 rounded-lg">
                    <Label className="capitalize">Lecture Description</Label>
                    <QuillEditor
                      theme="snow"
                      value={value}
                      onChange={setValue}
                    />
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <Button
                      className="border-none"
                      size="sm"
                      variant="ghost"
                      onClick={() => setOpenDescription(false)}
                    >
                      Cancel
                    </Button>
                    <Button className="" size="sm" variant="outline">
                      Save Section
                    </Button>
                  </div>
                </div>
                {/* Resource */}
                <div
                  className={`gap-4 flex-col ${
                    openResource ? "flex" : "hidden"
                  }`}
                >
                  <div className="grid w-full items-center gap-3 rounded-lg">
                    <Label className="capitalize">Video Resource</Label>
                    <Input type="text" placeholder="Enter resoruce title" />
                    <Input type="text" placeholder="Enter resoruce url" />
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <Button
                      className="border-none"
                      size="sm"
                      variant="ghost"
                      onClick={() => setOpenResource(false)}
                    >
                      Cancel
                    </Button>
                    <Button className="" size="sm" variant="outline">
                      Save Section
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </>
  );
};

export default CourseLecturesForm;
