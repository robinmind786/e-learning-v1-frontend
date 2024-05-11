"use client";

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
  Edit,
  File,
  MessageSquareX,
  Pen,
  PenIcon,
  PlayIcon,
  Plus,
  Trash,
  Trash2,
  X,
} from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import dynamic from "next/dynamic";
import { Label } from "../ui/label";
import { Lecture } from "./courseType";
const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import toast from "react-hot-toast";

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
  const [openSection, setOpenSection] = useState<boolean[]>(
    courseLectres.map(() => true)
  );
  const [editLecture, setEditLecture] = useState<boolean[][]>(
    courseLectres.map((item) => item.videoUrl.map(() => true))
  );

  const toggleSection = (index: number) => {
    const updatedOpenSection = [...openSection];
    updatedOpenSection[index] = !updatedOpenSection[index];
    setOpenSection(updatedOpenSection);
  };

  const toggleEditLecture = (sectionIndex: number, lectureIndex: number) => {
    const updatedEditLecture = [...editLecture];
    updatedEditLecture[sectionIndex][lectureIndex] =
      !updatedEditLecture[sectionIndex][lectureIndex];
    setEditLecture(updatedEditLecture);
  };

  const handleNewLecture = () => {
    const lastLecture = courseLectres[courseLectres.length - 1];

    if (
      lastLecture.videoUrl[0].title === "" ||
      lastLecture.videoUrl[0].description === "" ||
      lastLecture.videoUrl[0].videoLenth === "" ||
      lastLecture.videoUrl[0].url === "" ||
      lastLecture.videoUrl[0].links[0].title === ""
    ) {
      toast.error(
        "Whoops! Looks like you missed something. Please fill in all fields for the previous lecture."
      );
    } else {
      const newContent = {
        videoUrl: [
          {
            title: "Editing in progress. Make changes as needed! -->",
            description: "",
            videoLenth: "",
            url: "",
            links: [
              {
                title: "",
                url: "",
              },
            ],
          },
        ],
        videoSection: "Module " + `${courseLectres.length + 1}: `,
        suggestions: "",
      };

      setCourseLectures([...courseLectres, newContent]);
      toast.success("New lecture added successfully! 🚀");
    }
  };

  const handleAddTopic = (index: number) => {
    const updateData = [...courseLectres];

    const lastTopic =
      updateData[index].videoUrl[updateData[index].videoUrl.length - 1];

    if (
      lastTopic.title === "" ||
      lastTopic.description === "" ||
      lastTopic.videoLenth === "" ||
      lastTopic.url === "" ||
      lastTopic.links[0].title === ""
    ) {
      toast.error(
        "Hold on! Looks like you missed something. Please fill in all fields for the previous topic."
      );
    } else {
      updateData[index].videoUrl.push({
        title: "Editing in progress. Make changes as needed! -->",
        description: "",
        videoLenth: "",
        url: "",
        links: [
          {
            title: "",
            url: "",
          },
        ],
      });

      setCourseLectures(updateData);
      toast.success("New topic added successfully! 🎉");
    }
  };

  const handleRemoveTopic = (index: number, vIdx: number) => {
    const updatedData = [...courseLectres];
    updatedData[index].videoUrl.splice(vIdx, 1);
    setCourseLectures(updatedData);
  };

  const handleRemoveLink = (index: number, vIdx: number) => {
    const updatedData = [...courseLectres];
    updatedData[index].videoUrl[vIdx].links.splice(vIdx, 1);
    setCourseLectures(updatedData);
  };

  const handleAddLink = (index: number, vIdx: number) => {
    const updatedData = [...courseLectres];
    updatedData[index].videoUrl[vIdx].links.push({ title: "", url: "" });
    setCourseLectures(updatedData);
  };

  const handleDeleteLecture = (index: number) => {
    if (index > 0) {
      const updateData = [...courseLectres];
      updateData.splice(index, 1);
      setCourseLectures(updateData);
    }
  };

  const handlePrev = () => {
    setActive(active - 1);
  };

  const handleNext = () => {
    const lastCurriculum = courseLectres[courseLectres.length - 1];
    const lastVideoUrl =
      lastCurriculum.videoUrl[lastCurriculum.videoUrl.length - 1];

    if (
      !lastVideoUrl.title ||
      !lastVideoUrl.description ||
      !lastVideoUrl.videoLenth ||
      !lastVideoUrl.url ||
      !lastVideoUrl.links[0].title
    ) {
      toast.error(
        "Oops! Looks like something is missing. Please fill in all fields for the last lecture."
      );
    } else {
      setActive(active + 1);
      toast.success("Moving to the next step. Let's keep going! 🚀");
    }
  };

  return (
    <>
      <CardHeader className="pb-3">
        <CardTitle>Curriculum</CardTitle>
        <CardDescription>
          Start putting together your course by creating sections, lectures and
          practice (quizzes, coding exercises and assignments).
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-4">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {courseLectres.map((item: Lecture, index: number) => (
            <div key={index}>
              <div className="flex items-center gap-4">
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => toggleSection(index)}
                  className="self-start"
                >
                  <Pen className="size-4" />
                </Button>
                <AccordionItem
                  value={`item-${index}`}
                  className="flex-1 border-none"
                >
                  {openSection[index] && (
                    <AccordionTrigger className="bg-muted/40 rounded-md hover:no-underline w-full px-4 py-2 h-10 border">
                      {item.videoSection}
                    </AccordionTrigger>
                  )}
                  {!openSection[index] && (
                    <Input
                      value={item.videoSection}
                      onChange={(e) => {
                        const updatedData = [...courseLectres];
                        updatedData[index].videoSection = e.target.value;
                        setCourseLectures(updatedData);
                      }}
                      placeholder="Enter section name"
                    />
                  )}
                  <AccordionContent className="py-2 px-1.5">
                    {item.videoUrl.map((url, vIdx) => (
                      <div key={vIdx}>
                        <div className="flex items-center justify-between border-b py-2">
                          {editLecture[index][vIdx] ? (
                            <div className="flex items-center gap-4 h-10">
                              <span className="inline-flex size-8 bg-red-500/40 items-center justify-center rounded-full">
                                <PlayIcon className="size-4 text-red-500" />
                              </span>
                              <h6 className="scroll-m-20 text-base font-semibold tracking-tight">
                                <span className="mr-2">
                                  {(vIdx + 1).toString().padStart(2, "0")}
                                </span>
                                {url.title}
                              </h6>
                            </div>
                          ) : (
                            <Tabs
                              defaultValue="videoContent"
                              className="w-full"
                            >
                              <TabsList>
                                <TabsTrigger value="videoContent">
                                  Video Content
                                </TabsTrigger>
                                <TabsTrigger value="description">
                                  Description
                                </TabsTrigger>
                                <TabsTrigger value="sourceCode">
                                  Soruce Code
                                </TabsTrigger>
                              </TabsList>
                              <TabsContent value="videoContent">
                                <div className="flex-1 self-start gap-4 grid">
                                  <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="vdoTitle">
                                      Add Video Title
                                    </Label>
                                    <Input
                                      type="text"
                                      id="vdoTitle"
                                      className="w-full"
                                      placeholder="Enter video title"
                                      value={item.videoUrl[vIdx].title}
                                      onChange={(e) => {
                                        const updatedData = [...courseLectres];
                                        updatedData[index].videoUrl[
                                          vIdx
                                        ].title = e.target.value;
                                        setCourseLectures(updatedData);
                                      }}
                                    />
                                  </div>
                                  <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="vdoLength">
                                      Add Video length
                                    </Label>
                                    <Input
                                      type="text"
                                      placeholder="Enter video length"
                                      value={item.videoUrl[vIdx].videoLenth}
                                      onChange={(e) => {
                                        const updatedData = [...courseLectres];
                                        updatedData[index].videoUrl[
                                          vIdx
                                        ].videoLenth = e.target.value;
                                        setCourseLectures(updatedData);
                                      }}
                                    />
                                  </div>
                                  <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="vdoUrl">Video URL</Label>
                                    <Input
                                      type="text"
                                      id="vdoUrl"
                                      placeholder="Enter video url"
                                      value={item.videoUrl[vIdx].url}
                                      onChange={(e) => {
                                        const updatedData = [...courseLectres];
                                        updatedData[index].videoUrl[vIdx].url =
                                          e.target.value;
                                        setCourseLectures(updatedData);
                                      }}
                                    />
                                  </div>
                                </div>
                              </TabsContent>
                              <TabsContent value="description">
                                <div className="grid w-full items-center gap-3 rounded-lg">
                                  <Label className="capitalize">
                                    Lecture Description
                                  </Label>
                                  <QuillEditor
                                    theme="snow"
                                    value={value}
                                    onChange={setValue}
                                  />
                                </div>
                              </TabsContent>
                              <TabsContent value="sourceCode">
                                <div className="relative space-y-2 mt-6 mx-1">
                                  {url.links.map((_, lIdx) => (
                                    <React.Fragment key={lIdx}>
                                      <div className="grid w-full items-center gap-1.5">
                                        <div className="flex items-center justify-between">
                                          <Label htmlFor={`source-${lIdx}`}>
                                            Link {lIdx + 1}
                                          </Label>
                                          <Button
                                            type="button"
                                            variant="outline"
                                            size="icon"
                                            className={`size-5 ${
                                              lIdx === 0
                                                ? "cursor-no-drop"
                                                : "cursor-pointer"
                                            }`}
                                            onClick={() =>
                                              lIdx === 0
                                                ? null
                                                : handleRemoveLink(index, vIdx)
                                            }
                                          >
                                            <MessageSquareX />
                                          </Button>
                                        </div>
                                        <Input
                                          type="text"
                                          id={`source-${lIdx}`}
                                          placeholder="Enter video source title"
                                          value={
                                            item.videoUrl[vIdx].links[lIdx]
                                              .title
                                          }
                                          onChange={(e) => {
                                            const updatedData = [
                                              ...courseLectres,
                                            ];
                                            updatedData[index].videoUrl[
                                              vIdx
                                            ].links[lIdx].title =
                                              e.target.value;
                                            setCourseLectures(updatedData);
                                          }}
                                        />
                                        <Input
                                          type="text"
                                          id={`soruceUrl-${lIdx}`}
                                          placeholder="Enter video source url"
                                          value={
                                            item.videoUrl[vIdx].links[lIdx].url
                                          }
                                          onChange={(e) => {
                                            const updatedData = [
                                              ...courseLectres,
                                            ];
                                            updatedData[index].videoUrl[
                                              vIdx
                                            ].links[lIdx].url = e.target.value;
                                            setCourseLectures(updatedData);
                                          }}
                                        />
                                      </div>
                                    </React.Fragment>
                                  ))}
                                  <div className="flex items-center justify-between mb-6">
                                    <div className="self-start">
                                      <Button
                                        size="icon"
                                        type="button"
                                        onClick={() =>
                                          handleAddLink(index, vIdx)
                                        }
                                        className="size-4"
                                      >
                                        <Plus />
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </TabsContent>
                            </Tabs>
                          )}
                          <div className="flex items-center gap-4 ml-4 self-start">
                            <Button
                              variant="outline"
                              size="icon"
                              type="button"
                              className="py-2.5 max-sm:size-6"
                              onClick={() => toggleEditLecture(index, vIdx)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              type="button"
                              size="icon"
                              variant="outline"
                              className={`hover:bg-red-500  ${
                                vIdx === 0 ? "cursor-no-drop" : "cursor-pointer"
                              }`}
                              onClick={() =>
                                vIdx === 0
                                  ? null
                                  : handleRemoveTopic(index, vIdx)
                              }
                            >
                              <Trash2 className="size-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </div>
            </div>
          ))}
        </Accordion>
        <div className="flex items-center justify-end">
          <Button size="sm" onClick={handleNewLecture} type="button">
            Add Lecture
          </Button>
        </div>
      </CardContent>
    </>
  );
};

export default CourseLecturesForm;
