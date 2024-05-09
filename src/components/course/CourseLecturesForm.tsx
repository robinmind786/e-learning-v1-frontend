"use client";

import React from "react";
import { Lecture } from "./courseType";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";
import { Edit, MessageSquareX, PlayIcon, Plus, Trash2 } from "lucide-react";

import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import toast from "react-hot-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

  const [openSection, setOpenSection] = React.useState<boolean>(false);
  const [openCourseVideoDialog, setOpenCourseVideoDialog] =
    React.useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpenSection(false);
    toast.success("Section submitted successfully! 🎉");
  };

  const handleVideoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpenCourseVideoDialog(false);
    toast.success("Video details saved successfully! 📹");
  };

  return (
    <>
      <React.Fragment>
        <div className="grid grid-cols-1 gap-5">
          <form>
            <Accordion type="single" collapsible className="w-full space-y-5 ">
              {courseLectres.map((item: Lecture, index: number) => (
                <React.Fragment key={index}>
                  <div className="flex items-center">
                    <div className="self-start">
                      <Dialog open={openSection} onOpenChange={setOpenSection}>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            type="button"
                            className="py-2.5 max-sm:size-6"
                          >
                            <Edit className="size-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px] max-sm:w-11/12 rounded-lg">
                          <DialogHeader>
                            <DialogTitle>Add Video Section</DialogTitle>
                            <DialogDescription>
                              Make changes video section here. Click save when
                              you&apos;re done.
                            </DialogDescription>
                          </DialogHeader>
                          <form onSubmit={handleSubmit}>
                            <div className="grid gap-4 py-4">
                              <div className="grid grid-cols-1 items-center gap-4">
                                <Label htmlFor="name">Section Name</Label>
                                <Input
                                  id="name"
                                  value={item.videoSection}
                                  onChange={(e) => {
                                    const updatedData = [...courseLectres];
                                    updatedData[index].videoSection =
                                      e.target.value;
                                    setCourseLectures(updatedData);
                                  }}
                                  className="col-span-3"
                                />
                              </div>
                            </div>
                            <DialogFooter>
                              <Button type="submit">Save changes</Button>
                            </DialogFooter>
                          </form>
                        </DialogContent>
                      </Dialog>
                    </div>
                    <AccordionItem
                      value={`item-${index + 1}`}
                      key={index}
                      className="flex-1 ml-2 border-none"
                    >
                      <AccordionTrigger className="bg-muted/40 px-5 py-2.5 rounded-md hover:no-underline w-full max-sm:text-sm max-sm:px-2.5">
                        {item.videoSection}
                      </AccordionTrigger>
                      <AccordionContent className="space-y-5 p-5 max-sm:p-2.5 max-sm:space-y-2.5">
                        {item.videoUrl.map((url, vIdx) => (
                          <React.Fragment key={vIdx}>
                            <div className="flex items-center justify-between border-b pb-5 max-sm:pb-2.5">
                              <div className="flex items-center gap-5 max-sm:gap-2.5">
                                <span className="inline-flex size-7 bg-red-500/40 items-center justify-center rounded-full max-sm:size-6">
                                  <PlayIcon className="size-4 text-red-500 max-sm:size-3" />
                                </span>
                                <h6 className="scroll-m-20 text-base font-semibold tracking-tight max-sm:text-xs">
                                  <span className="mr-2">
                                    {(vIdx + 1).toString().padStart(2, "0")}
                                  </span>
                                  {url.title}
                                </h6>
                              </div>
                              <div className="flex items-center gap-5 max-sm:2.5">
                                <Dialog
                                  open={openCourseVideoDialog}
                                  onOpenChange={setOpenCourseVideoDialog}
                                >
                                  <DialogTrigger>
                                    <Button
                                      variant="outline"
                                      size="icon"
                                      type="button"
                                      className="py-2.5 max-sm:size-6"
                                    >
                                      <Edit className="h-4 w-4" />
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent className="sm:max-w-[425px] max-sm:w-11/12 rounded-lg">
                                    <DialogHeader>
                                      <DialogTitle>
                                        Add New Course Video
                                      </DialogTitle>
                                      <DialogDescription>
                                        Fill in the details below to add a new
                                        video to your course content.
                                      </DialogDescription>
                                    </DialogHeader>
                                    <form
                                      onSubmit={handleVideoSubmit}
                                      className="space-y-5 h-full"
                                    >
                                      <Tabs defaultValue="videoUrl">
                                        <TabsList className="grid w-full grid-cols-2">
                                          <TabsTrigger value="videoUrl">
                                            Video Details
                                          </TabsTrigger>
                                          <TabsTrigger value="soruceCode">
                                            Soruce Code
                                          </TabsTrigger>
                                        </TabsList>
                                        <TabsContent value="videoUrl">
                                          <div className="grid grid-cols-1 gap-6">
                                            <div className="grid w-full items-center gap-1.5">
                                              <Label htmlFor="vdoTitle">
                                                Add Video Title
                                              </Label>
                                              <Input
                                                type="text"
                                                id="vdoTitle"
                                                placeholder="Enter video title"
                                                value={
                                                  item.videoUrl[vIdx].title
                                                }
                                                onChange={(e) => {
                                                  const updatedData = [
                                                    ...courseLectres,
                                                  ];
                                                  updatedData[index].videoUrl[
                                                    vIdx
                                                  ].title = e.target.value;
                                                  setCourseLectures(
                                                    updatedData
                                                  );
                                                }}
                                              />
                                            </div>
                                            <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
                                              <div className="grid w-full items-center gap-1.5">
                                                <Label htmlFor="vdoLength">
                                                  Add Video length
                                                </Label>
                                                <Input
                                                  type="text"
                                                  id="vdoLength"
                                                  placeholder="Enter video length"
                                                  value={
                                                    item.videoUrl[vIdx]
                                                      .videoLenth
                                                  }
                                                  onChange={(e) => {
                                                    const updatedData = [
                                                      ...courseLectres,
                                                    ];
                                                    updatedData[index].videoUrl[
                                                      vIdx
                                                    ].videoLenth =
                                                      e.target.value;
                                                    setCourseLectures(
                                                      updatedData
                                                    );
                                                  }}
                                                />
                                              </div>
                                              <div className="grid w-full items-center gap-1.5">
                                                <Label htmlFor="vdoUrl">
                                                  Video URL
                                                </Label>
                                                <Input
                                                  type="text"
                                                  id="vdoUrl"
                                                  placeholder="Enter video url"
                                                  value={
                                                    item.videoUrl[vIdx].url
                                                  }
                                                  onChange={(e) => {
                                                    const updatedData = [
                                                      ...courseLectres,
                                                    ];
                                                    updatedData[index].videoUrl[
                                                      vIdx
                                                    ].url = e.target.value;
                                                    setCourseLectures(
                                                      updatedData
                                                    );
                                                  }}
                                                />
                                              </div>
                                            </div>
                                            <div className="grid w-full items-center gap-1.5">
                                              <Label htmlFor="vdoDescription">
                                                Add Video Description
                                              </Label>
                                              <Textarea
                                                placeholder="Type your video description here."
                                                value={
                                                  item.videoUrl[vIdx]
                                                    .description
                                                }
                                                onChange={(e) => {
                                                  const updatedData = [
                                                    ...courseLectres,
                                                  ];
                                                  updatedData[index].videoUrl[
                                                    vIdx
                                                  ].description =
                                                    e.target.value;
                                                  setCourseLectures(
                                                    updatedData
                                                  );
                                                }}
                                              />
                                            </div>
                                          </div>
                                        </TabsContent>

                                        <div
                                          className="max-h-[50vh] h-full overflow-y-auto
  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-muted
  dark:[&::-webkit-scrollbar-thumb]:bg-muted-foreground"
                                        >
                                          <TabsContent value="soruceCode">
                                            <div className="relative space-y-2 mt-6 mx-1">
                                              {url.links.map((_, lIdx) => (
                                                <React.Fragment key={lIdx}>
                                                  <div className="grid w-full items-center gap-1.5">
                                                    <div className="flex items-center justify-between">
                                                      <Label
                                                        htmlFor={`source-${lIdx}`}
                                                      >
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
                                                            : handleRemoveLink(
                                                                index,
                                                                vIdx
                                                              )
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
                                                        item.videoUrl[vIdx]
                                                          .links[lIdx].title
                                                      }
                                                      onChange={(e) => {
                                                        const updatedData = [
                                                          ...courseLectres,
                                                        ];
                                                        updatedData[
                                                          index
                                                        ].videoUrl[vIdx].links[
                                                          lIdx
                                                        ].title =
                                                          e.target.value;
                                                        setCourseLectures(
                                                          updatedData
                                                        );
                                                      }}
                                                    />
                                                    <Input
                                                      type="text"
                                                      id={`soruceUrl-${lIdx}`}
                                                      placeholder="Enter video source url"
                                                      value={
                                                        item.videoUrl[vIdx]
                                                          .links[lIdx].url
                                                      }
                                                      onChange={(e) => {
                                                        const updatedData = [
                                                          ...courseLectres,
                                                        ];
                                                        updatedData[
                                                          index
                                                        ].videoUrl[vIdx].links[
                                                          lIdx
                                                        ].url = e.target.value;
                                                        setCourseLectures(
                                                          updatedData
                                                        );
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
                                        </div>
                                      </Tabs>
                                      <DialogFooter>
                                        <Button type="submit">
                                          Save changes
                                        </Button>
                                      </DialogFooter>
                                    </form>
                                  </DialogContent>
                                </Dialog>
                                <Button
                                  type="button"
                                  size="icon"
                                  variant="outline"
                                  className={`py-2.5 max-sm:size-6 hover:bg-red-500  ${
                                    vIdx === 0
                                      ? "cursor-no-drop"
                                      : "cursor-pointer"
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
                          </React.Fragment>
                        ))}
                        <div className="flex items-center gap-5">
                          <Button
                            onClick={() => handleAddTopic(index)}
                            type="button"
                            size="sm"
                          >
                            Add Topic
                          </Button>
                          <Button
                            onClick={() => handleDeleteLecture(index)}
                            type="button"
                            size="sm"
                            variant="destructive"
                            className={`${
                              index > 0 ? "cursor-pointer" : "cursor-no-drop"
                            }`}
                          >
                            Delete this Lecture
                          </Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </div>
                </React.Fragment>
              ))}
            </Accordion>
          </form>
          <div className="flex items-center justify-end">
            <Button size="sm" onClick={handleNewLecture} type="button">
              Add Lecture
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <Button onClick={handlePrev}>Previous</Button>
            <Button onClick={handleNext}>Next</Button>
          </div>
        </div>
      </React.Fragment>
    </>
  );
};

export default CourseLecturesForm;
