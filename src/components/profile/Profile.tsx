"use client";

import React, { ReactNode } from "react";
import { Edit, Lock, Settings, SquareUserRound, User } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileInfo from "./ProfileInfo";

interface ITabBtn {
  id: number;
  text: string;
  icon: ReactNode;
}

const tabBtn: ITabBtn[] = [
  {
    id: 0,
    text: "Profile",
    icon: <User className="mr-2 size-4" />,
  },
  {
    id: 1,
    text: "Edit Profile",
    icon: <Edit className="mr-2 size-4" />,
  },
  {
    id: 2,
    text: "Account",
    icon: <SquareUserRound className="mr-2 size-4" />,
  },
  {
    id: 3,
    text: "Change Password",
    icon: <Lock className="mr-2 size-4" />,
  },
  {
    id: 4,
    text: "Settings",
    icon: <Settings className="mr-2 size-4" />,
  },
];

const Profile = () => {
  return (
    <>
      <Breadcrumb className="hidden md:flex">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="#">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="#">Orders</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Recent Orders</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Tabs defaultValue="Profile">
        <div className="flex items-center">
          <TabsList>
            {tabBtn.map((item: ITabBtn, index: number) => (
              <TabsTrigger value={item.text} key={index}>
                {item.text}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        <TabsContent value="Profile">
          <ProfileInfo />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default Profile;
