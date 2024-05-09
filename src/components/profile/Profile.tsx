import React, { ReactNode } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookUser, Lock, Settings, SquareUserRound, User } from "lucide-react";
import ProfileInfo from "./ProfileInfo";
import ProfileSettings from "./ProfileSettings";

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
    text: "Personal",
    icon: <BookUser className="mr-2 size-4" />,
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
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/user">User</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Profile</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Tabs defaultValue="Profile">
        <Card>
          <CardHeader>
            <TabsList className="justify-start">
              {tabBtn.map((item: ITabBtn, index: number) => (
                <TabsTrigger value={item.text} key={index}>
                  {item.icon}
                  {item.text}
                </TabsTrigger>
              ))}
            </TabsList>
          </CardHeader>
          <CardContent>
            <TabsContent value="Profile">
              <ProfileInfo />
            </TabsContent>
            <TabsContent value="Settings">
              <ProfileSettings />
            </TabsContent>
          </CardContent>
        </Card>
      </Tabs>
    </>
  );
};

export default Profile;
