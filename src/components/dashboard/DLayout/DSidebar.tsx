"use client";

import React, { ReactNode, useState } from "react";
import Link from "next/link";
import {
  Book,
  Bot,
  Code2,
  LifeBuoy,
  Settings2,
  SquareTerminal,
  SquareUser,
  Triangle,
  Bell,
  Package2,
  User,
  List,
  FileVideo2,
  ListVideo,
  ListPlus,
  ListChecks,
  Globe,
  Languages,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

export interface ILinks {
  id: number;
  text: string;
  link: string;
  icon: ReactNode;
}

export interface ISidebarLink {
  id: number;
  title: string;
  links: ILinks[];
}

export const sidebarLink: ISidebarLink[] = [
  {
    id: 0,
    title: "Profile",
    links: [
      {
        id: 0.1,
        text: "User profile",
        link: "/dashboard/profile",
        icon: <User className="mr-2 h-4 w-4" />,
      },
      {
        id: 0.2,
        text: "User Account",
        link: "/dashboard/account",
        icon: <List className="mr-2 h-4 w-4" />,
      },
    ],
  },
  {
    id: 1,
    title: "Course",
    links: [
      {
        id: 1.1,
        text: "Course List",
        link: "/dashboard/course",
        icon: <ListVideo className="mr-2 h-4 w-4" />,
      },
      {
        id: 1.2,
        text: "Course Create",
        link: "/dashboard/course/create",
        icon: <FileVideo2 className="mr-2 h-4 w-4" />,
      },
      {
        id: 1.3,
        text: "Category List",
        link: "/dashboard/course/category",
        icon: <ListChecks className="mr-2 h-4 w-4" />,
      },
      {
        id: 1.4,
        text: "Category Create",
        link: "/dashboard/course/category/create",
        icon: <ListPlus className="mr-2 h-4 w-4" />,
      },
      {
        id: 1.5,
        text: "Lanuage List",
        link: "/dashboard/course/language",
        icon: <Languages className="mr-2 h-4 w-4" />,
      },
      {
        id: 1.6,
        text: "Lanuage Create",
        link: "/dashboard/course/language/create",
        icon: <Globe className="mr-2 h-4 w-4" />,
      },
    ],
  },
];

const DSidebar = () => {
  const [activeLink, setActiveLink] = useState<string>("User profile");
  return (
    <>
      <div className="w-14 lg:w-64 self-start h-screen flex max-sm:hidden">
        <div className="w-14">
          <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
            <div className="border-b p-2 h-14">
              <Button variant="outline" size="icon" aria-label="Home">
                <Triangle className="size-5 fill-foreground" />
              </Button>
            </div>
            <nav className="grid gap-1 p-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-lg bg-muted"
                    aria-label="Playground"
                  >
                    <SquareTerminal className="size-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={5}>
                  Playground
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-lg"
                    aria-label="Models"
                  >
                    <Bot className="size-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={5}>
                  Models
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-lg"
                    aria-label="API"
                  >
                    <Code2 className="size-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={5}>
                  API
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-lg"
                    aria-label="Documentation"
                  >
                    <Book className="size-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={5}>
                  Documentation
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-lg"
                    aria-label="Settings"
                  >
                    <Settings2 className="size-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={5}>
                  Settings
                </TooltipContent>
              </Tooltip>
            </nav>
            <nav className="mt-auto grid gap-1 p-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="mt-auto rounded-lg"
                    aria-label="Help"
                  >
                    <LifeBuoy className="size-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={5}>
                  Help
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="mt-auto rounded-lg"
                    aria-label="Account"
                  >
                    <SquareUser className="size-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={5}>
                  Account
                </TooltipContent>
              </Tooltip>
            </nav>
          </aside>
        </div>
        <div className="flex-1 hidden fixed ml-14 lg:w-[200px] lg:block">
          <div className="hidden border-r bg-muted/40 md:block">
            <div className="flex flex-col gap-2">
              <div className="flex h-14 items-center border-b px-4 lg:px-6">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="">Acme Inc</span>
                </Link>
                <Button
                  variant="outline"
                  size="icon"
                  className="ml-auto h-8 w-8"
                >
                  <Bell className="h-4 w-4" />
                  <span className="sr-only">Toggle notifications</span>
                </Button>
              </div>
              <ScrollArea className="h-screen">
                <div className="space-y-2 pb-2">
                  {sidebarLink.map((item: ISidebarLink, index: number) => (
                    <div className="px-3 pb-2" key={index}>
                      <h2 className="mb-2 px-4 text-xs font-semibold tracking-tight">
                        {item.title}
                      </h2>
                      <div className="space-y-1">
                        {item.links.map((link: ILinks, LIdx: number) => (
                          <Link
                            key={LIdx}
                            href={link.link}
                            onClick={() => setActiveLink(link.text)}
                            className={`inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 w-full justify-start ${
                              link.text === activeLink
                                ? "bg-secondary/80"
                                : "bg-transparent"
                            }`}
                          >
                            {link.icon}
                            {link.text}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DSidebar;
