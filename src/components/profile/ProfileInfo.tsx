"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LocateFixed, LocateIcon, Mail, Phone, UserSearch } from "lucide-react";
import useUser from "@/hooks/useUser";

const ProfileInfo = () => {
  const user = useUser();

  return (
    <>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-1 self-start">
          <Card>
            <CardHeader className="flex items-center justify-center">
              <Avatar className="size-14">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <CardTitle className="text-base">{user?.fname}</CardTitle>
              <CardDescription>{user?.role}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center justify-between">
                  <Mail className="size-4" />
                  <h6 className="text-sm font-medium leading-none">
                    {user?.email}
                  </h6>
                </li>
                <li className="flex items-center justify-between">
                  <Phone className="size-4" />
                  <h6 className="text-sm font-medium leading-none">
                    {user?.phone}
                  </h6>
                </li>
                <li className="flex items-center justify-between">
                  <LocateFixed className="size-4" />
                  <h6 className="text-sm font-medium leading-none">
                    Bangladesh
                  </h6>
                </li>
                <li className="flex items-center justify-between">
                  <UserSearch className="size-4" />
                  <h6 className="text-sm font-medium leading-none">
                    {user?.protfilo}
                  </h6>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-2 self-start">
          <div className="grid grid-cols-1 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">About me</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Hello, I’m Anshan Handgun Creative Graphic Designer & User
                  Experience Designer based in Website, I create digital
                  Products a more Beautiful and usable place. Morbid accusant
                  ipsum. Nam nec tellus at.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Personal Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-6">
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="fname">First Name</Label>
                    <Input
                      type="text"
                      id="fname"
                      placeholder="Robin"
                      value="Robin"
                      readOnly
                    />
                  </div>
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="lname">Last Name</Label>
                    <Input
                      type="text"
                      id="lname"
                      placeholder="Mind"
                      value="Mind"
                      readOnly
                    />
                  </div>
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="text"
                      id="email"
                      placeholder="robin.rh656@gmail.com"
                      value="robin.rh656@gmail.com"
                      readOnly
                    />
                  </div>
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="number">Phone</Label>
                    <Input
                      type="number"
                      id="number"
                      placeholder="01763408494"
                      value="01763408494"
                      readOnly
                    />
                  </div>
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="country">Country</Label>
                    <Input
                      type="text"
                      id="country"
                      placeholder="Bangladesh"
                      value="Bangladesh"
                      readOnly
                    />
                  </div>
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="zipCode">Zip Code</Label>
                    <Input
                      type="text"
                      id="zipCode"
                      placeholder="1800"
                      value="1800"
                      readOnly
                    />
                  </div>
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="address">Address</Label>
                    <Input
                      type="text"
                      id="address"
                      placeholder="Manikganj, Dhaka,BD"
                      value="Manikganj-1800, Dhaka, BD"
                      readOnly
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
