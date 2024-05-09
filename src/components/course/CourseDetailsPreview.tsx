"use client";

import React from "react";
import {
  Benefit,
  CourseData,
  FAQ,
  Lecture,
  Prerequisite,
  Tag,
} from "./courseType";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { formatNumber } from "@/utils/formatNumber";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PlayIcon, Share2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import Review from "../common/Review";

interface CourseDetailsPreview {
  data: CourseData | undefined;
  isPreview?: boolean;
  active?: number | undefined;
  setActive?: React.Dispatch<React.SetStateAction<number>> | undefined;
}

const CourseDetailsPreview: React.FC<CourseDetailsPreview> = ({
  data,
  isPreview,
  active = 1,
  setActive,
}) => {
  return (
    <>
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 max-lg:col-span-3">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <h2 className="prose-h2 mb-2">{data?.courseDetails.title}</h2>
                  <p className="prose-desc text-muted-foreground mb-1">
                    Satisfied conveying a dependent contented he gentleman
                    agreeable do be. Warrant private blushes removed an in
                    equally totally if. Delivered dejection necessary objection
                    do Mr prevailed. Mr feeling does chiefly cordial in do.
                  </p>
                  <ul className="flex flex-wrap items-center ">
                    <li className="mr-5 inline-flex prose-list">
                      <i className="fa-solid fa-star mr-2.5 !text-yellow-500" />
                      <span>
                        {data?.courseDetails.avgReview
                          ? data.courseDetails.avgReview
                          : 0}
                        /5.0
                      </span>
                    </li>
                    <li className="mr-5 inline-flex prose-list">
                      <i className="fa-solid fa-user-graduate mr-2.5 !text-orange-500" />
                      <span>
                        {data?.courseDetails.purchased
                          ? formatNumber(data?.courseDetails.purchased)
                          : 0}{" "}
                        Enrolled
                      </span>
                    </li>
                    <li className="mr-5 inline-flex prose-list">
                      <i className="fa-solid fa-signal mr-2.5 !text-green-500" />
                      <span>{data?.courseDetails.level}</span>
                    </li>
                    <li className="mr-5 inline-flex prose-list">
                      <i className="fa-solid fa-seal-exclamation mr-2.5 !text-red-500" />
                      <span>
                        Last updated{" "}
                        {/* {data?.updatedAt
                          ? Dateformatter(data?.updatedAt)
                          : "yyyy-MM-dd"} */}
                      </span>
                    </li>

                    <li className="mr-5 inline-flex prose-list">
                      <i className="fa-solid fa-globe mr-2.5 !text-teal-500" />
                      <span>{data?.courseDetails.language}</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <video width="100%" height="100%" controls preload="none">
                    <source
                      src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                      type="video/mp4"
                    />
                    <track
                      src="/path/to/captions.vtt"
                      kind="subtitles"
                      srcLang="en"
                      label="English"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <Card>
                  <CardHeader className="border-b max-sm:p-3">
                    <h3 className="prose-h3">Curriculum</h3>
                  </CardHeader>
                  <CardContent className="pt-6 max-sm:px-3 max-sm:pt-3">
                    <Accordion
                      type="single"
                      collapsible
                      className="w-full space-y-5"
                    >
                      {data?.lectures.map((item: Lecture, index: number) => (
                        <AccordionItem
                          value={`item-${index + 1}`}
                          className="flex-1 border-none"
                          key={index}
                        >
                          <AccordionTrigger className="bg-muted/40 px-6 rounded-md hover:no-underline w-full font-heebo max-sm:px-3">
                            {item.videoSection}
                          </AccordionTrigger>
                          <AccordionContent className="space-y-6 py-6 px-6 max-sm:space-y-3 max-sm:py-3 max-sm:px-3">
                            {item.videoUrl.map((videoItem, index) => (
                              <div
                                className="flex items-center justify-between border-b pb-5"
                                key={index}
                              >
                                <div className="flex items-center gap-2.5">
                                  <span className="inline-flex size-7 bg-red-500/40 items-center justify-center rounded-full max-sm:size-6">
                                    <PlayIcon className="size-3.5 text-red-500" />
                                  </span>
                                  <h6 className="prose-h6 font-semibold max-sm:text-sm">
                                    {videoItem.title}
                                  </h6>
                                </div>
                                <span className="text-base text-muted-foreground">
                                  {videoItem.videoLenth}
                                </span>
                              </div>
                            ))}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="border-b max-sm:p-3">
                    <h3 className="prose-h3">Course description</h3>
                  </CardHeader>
                  <CardContent className="pt-6 max-sm:px-3 space-y-6 max-sm:pt-3 max-sm:space-y-3">
                    {data && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data?.courseDetails.description,
                        }}
                      ></div>
                    )}
                    <div className="mb-6 max-sm:mb-3">
                      <h4 className="text-xl font-semibold mb-5">
                        What you’ll learn
                      </h4>
                      <ul className="mb-6 max-sm:mb-3">
                        {data?.prerequisites.map(
                          (item: Prerequisite, index: number) => (
                            <li className="font-noraml flex py-1" key={index}>
                              <i className="fa-solid fa-check-circle !text-green-500 mr-2" />
                              {item.title}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                    <div className="mb-6 max-sm:mb-3">
                      <h4 className="text-xl font-semibold mb-5">
                        What is the benefits
                      </h4>
                      <ul className="mb-6 max-sm:mb-3">
                        {data?.benefits.map((item: Benefit, index: number) => (
                          <li className="font-noraml flex py-1" key={index}>
                            <i className="fa-solid fa-check-circle !text-green-500 mr-2" />
                            {item.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="border-b max-sm:p-3">
                    <h3 className="prose-h3">Frequently Asked Questions</h3>
                  </CardHeader>
                  <CardContent className="pt-6 max-sm:px-3 max-sm:pt-3">
                    <div className="space-y-6 max-sm:space-y-3">
                      {data?.faq.map((item: FAQ, index: number) => (
                        <div key={index}>
                          <h6 className="prose-h6 mb-2">{item.question}</h6>
                          <p className="prose-desc text-muted-foreground">
                            {item.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="col-span-1 self-start sticky top-20 max-lg:col-span-3">
              <div className="grid grid-cols-1 gap-6 max-sm:gap-3">
                <Card className={`bg-muted/40`}>
                  <CardHeader className="max-sm:p-3">
                    <div className="border-b pb-6 max-sm:pb-3">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-3">
                          <h3 className="prose-h3">
                            ${data?.courseDetails.price}
                          </h3>
                          <h5 className="prose-h5 font-normal text-muted-foreground">
                            <del>${data?.courseDetails.disPrice}</del>
                          </h5>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10">
                            <Share2 />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="mr-20">
                            <DropdownMenuItem className="text-base">
                              <i className="fa-brands fa-facebook mr-2" />{" "}
                              Facebook
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-base">
                              <i className="fa-brands fa-twitter mr-2" />{" "}
                              Twitter
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-base">
                              <i className="fa-brands fa-linkedin mr-2" />{" "}
                              Linkedin
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-base">
                              <i className="fa-brands fa-youtube mr-2" />{" "}
                              Youtube
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        <Button
                          variant="outline"
                          className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                        >
                          Add to cart
                        </Button>
                        <Button
                          variant="outline"
                          className="bg-green-500 hover:bg-green-600"
                        >
                          Buy now
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="max-sm:p-3">
                    <div className="border-b pb-6 max-sm:pb-3">
                      <h5 className="prose-h5 mb-6 max-sm:mb-3">
                        This course includes
                      </h5>
                      <ul className="space-y-3">
                        <li className="flex items-center justify-between">
                          <div className="flex items-center">
                            <i className="fa-solid fa-book-open !text-blue-500 mr-1.5" />
                            <h5 className="text-base font-heebo">Lectures</h5>
                          </div>
                          <p className="text-muted-foreground text-base font-heebo">
                            {data?.courseDetails.totalLecture}
                          </p>
                        </li>
                        <li className="flex items-center justify-between">
                          <div className="flex items-center">
                            <i className="fa-solid fa-clock !text-blue-500 mr-1.5" />
                            <h5 className="text-base font-heebo">Duration</h5>
                          </div>
                          <p className="text-muted-foreground text-base font-heebo">
                            {data?.courseDetails.duration}
                          </p>
                        </li>
                        <li className="flex items-center justify-between">
                          <div className="flex items-center">
                            <i className="fa-solid fa-signal !text-blue-500 mr-1.5" />
                            <h5 className="text-base font-heebo">Level</h5>
                          </div>
                          <p className="text-muted-foreground text-base font-heebo">
                            {data?.courseDetails.level}
                          </p>
                        </li>
                        <li className="flex items-center justify-between">
                          <div className="flex items-center">
                            <i className="fa-solid fa-globe !text-blue-500 mr-1.5" />
                            <h5 className="text-base font-heebo">Language</h5>
                          </div>
                          <p className="text-muted-foreground text-base font-heebo">
                            {data?.courseDetails.language}
                          </p>
                        </li>
                        <li className="flex items-center justify-between">
                          <div className="flex items-center">
                            <i className="fa-solid fa-user-clock !text-blue-500 mr-1.5" />
                            <h5 className="text-base font-heebo">Deadline</h5>
                          </div>
                          <p className="text-muted-foreground text-base font-heebo">
                            Nov 30 2021
                          </p>
                        </li>
                        <li className="flex items-center justify-between">
                          <div className="flex items-center">
                            <i className="fa-solid fa-medal !text-blue-500 mr-1.5" />
                            <h5 className="text-base font-heebo">
                              Certificate
                            </h5>
                          </div>
                          <p className="text-muted-foreground text-base font-heebo">
                            Yes
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="pt-6 space-y-6 max-sm:pt-3 max-sm:space-y-3">
                      <div className="flex items-center">
                        <Avatar className="size-16">
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="Instructor"
                          />
                          <AvatarFallback>Instructor</AvatarFallback>
                        </Avatar>
                        <div className="ml-6 max-sm:ml-3">
                          <Link href="#" passHref>
                            <h5 className="prose-h5 mb-0">Robin Mind</h5>
                            <p className="text-muted-foreground text-sm">
                              Founder Eduport company
                            </p>
                          </Link>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <Review
                          rating={data?.courseDetails.avgReview}
                          isStar={true}
                          totalReview={45}
                        />
                        <Button
                          className="bg-blue-500 text-white hover:bg-blue-600"
                          size="sm"
                        >
                          Follow
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="max-sm:p-3">
                    <h3 className="prose-h3">Popular Tags</h3>
                  </CardHeader>
                  <CardContent className="max-sm:p-3">
                    <div className="flex flex-wrap gap-3">
                      {data?.courseDetails.tags.map(
                        (item: Tag, index: number) => (
                          <Button key={index} variant="outline" size="sm">
                            {item.value}
                          </Button>
                        )
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isPreview && setActive && (
        <div className="flex items-center justify-between">
          <Button onClick={() => setActive(active - 1)}>Previous</Button>
          <Button>Create</Button>
        </div>
      )}
    </>
  );
};

export default CourseDetailsPreview;
