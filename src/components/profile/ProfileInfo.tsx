"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ProfileInfo = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-6">
        <Card
          x-chunk="dashboard-05-chunk-3"
          className="col-span-1 max-lg:col-span-3"
        >
          <CardContent>d</CardContent>
        </Card>
        <div className="col-span-2 max-lg:col-span-3">
          <div className="grid grid-cols-1 gap-6">
            <Card x-chunk="dashboard-05-chunk-3">
              <CardHeader className="px-7">
                <CardTitle>About me</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Hello, I’m Anshan Handgun Creative Graphic Designer & User
                  Experience Designer based in Website, I create digital
                  Products a more Beautiful and usable place. Morbid accusant
                  ipsum. Nam nec tellus at.
                </p>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-05-chunk-3">
              <CardHeader className="px-7">
                <CardTitle>Personal Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-6 ">
                  <div className="border-b grid grid-cols-2 gap-6 pb-3">
                    <div className="flex flex-col">
                      <p className="text-base text-muted-foreground mb-1">
                        First Name
                      </p>
                      <h6>Robin Mind</h6>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-base text-muted-foreground mb-1">
                        First Name
                      </p>
                      <h6>Robin Mind</h6>
                    </div>
                  </div>
                  <div className="border-b grid grid-cols-2 gap-6 pb-3">
                    <div className="flex flex-col">
                      <p className="text-base text-muted-foreground mb-1">
                        Phone
                      </p>
                      <h6>(+1-876) 8654 239 581</h6>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-base text-muted-foreground mb-1">
                        Country
                      </p>
                      <h6>New York</h6>
                    </div>
                  </div>
                  <div className="border-b grid grid-cols-2 gap-6 pb-3">
                    <div className="flex flex-col">
                      <p className="text-base text-muted-foreground mb-1">
                        Email
                      </p>
                      <h6>anshan.dh81@gmail.com</h6>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-base text-muted-foreground mb-1">
                        Zip Code
                      </p>
                      <h6>1800</h6>
                    </div>
                  </div>
                  <div className="border-b grid grid-cols-2 gap-6 pb-3">
                    <div className="flex flex-col">
                      <p className="text-base text-muted-foreground mb-1">
                        Address
                      </p>
                      <h6>Street 110-B Kalians Bag, Dewan, M.P. New York</h6>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-05-chunk-3">
              <CardHeader className="px-7">
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-6 ">
                  <div className="border-b grid grid-cols-2 gap-6 pb-3">
                    <div className="flex flex-col">
                      <p className="text-base text-muted-foreground mb-1">
                        Master Degree (Year)
                      </p>
                      <h6>2014-2017</h6>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-base text-muted-foreground mb-1">
                        Institute
                      </p>
                      <h6>-</h6>
                    </div>
                  </div>
                  <div className="border-b grid grid-cols-2 gap-6 pb-3">
                    <div className="flex flex-col">
                      <p className="text-base text-muted-foreground mb-1">
                        Bachelor (Year)
                      </p>
                      <h6>2011-2013</h6>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-base text-muted-foreground mb-1">
                        Institute
                      </p>
                      <h6>Imperial College London</h6>
                    </div>
                  </div>
                  <div className="border-b grid grid-cols-2 gap-6 pb-3">
                    <div className="flex flex-col">
                      <p className="text-base text-muted-foreground mb-1">
                        School (Year)
                      </p>
                      <h6>2009-2011</h6>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-base text-muted-foreground mb-1">
                        Institute
                      </p>
                      <h6>School of London, England</h6>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-05-chunk-3">
              <CardHeader className="px-7">
                <CardTitle>Emplyment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-6 ">
                  <div className="border-b grid grid-cols-2 gap-6 pb-3">
                    <div className="flex flex-col">
                      <p className="text-base text-muted-foreground mb-1">
                        Senior UI/UX designer (Year)
                      </p>
                      <h6>2019-Current</h6>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-base text-muted-foreground mb-1">
                        Job Responsibility
                      </p>
                      <h6>
                        Perform task related to project manager with the 100+
                        team under my observation. Team management is key role
                        in this company.
                      </h6>
                    </div>
                  </div>
                  <div className="border-b grid grid-cols-2 gap-6 pb-3">
                    <div className="flex flex-col">
                      <p className="text-base text-muted-foreground mb-1">
                        Trainee cum Project Manager (Year)
                      </p>
                      <h6>2017-2019</h6>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-base text-muted-foreground mb-1">
                        Job Responsibility
                      </p>
                      <h6>Team management is key role in this company.</h6>
                    </div>
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
