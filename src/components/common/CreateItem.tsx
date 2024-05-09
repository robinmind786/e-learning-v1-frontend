"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Delete, PlusCircle } from "lucide-react";
import toast from "react-hot-toast";

export interface ItemData {
  value: string;
}

interface CreateItemProps {
  isCreate: boolean;
  itemType: string;
  initialValues?: ItemData[];
  onUpdateItems: (items: ItemData[]) => void;
}

const CreateItem: React.FC<CreateItemProps> = ({
  isCreate,
  itemType,
  initialValues = [{ value: "" }],
  onUpdateItems,
}) => {
  const [items, setItems] = useState<ItemData[]>(
    isCreate ? [{ value: "" }] : initialValues
  );

  const handleAddItem = () => {
    if (items[items.length - 1].value === "") {
      toast.error(`Last ${itemType} value required! 🚀`);
    } else {
      const updatedItems = [...items, { value: "" }];
      setItems(updatedItems);
      onUpdateItems(updatedItems);
      toast.success(`New ${itemType} added! 🚀`);
    }
  };

  const handleItemChange = (index: number, value: string) => {
    const updatedItems = [...items];
    updatedItems[index].value = value;
    setItems(updatedItems);
    onUpdateItems(updatedItems);
  };

  const handleRemoveItem = (index: number) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
    onUpdateItems(updatedItems);
    toast.success(`${itemType} removed successfully! ✨`);
  };

  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/course/${itemType.toLowerCase()}`}>
              {itemType}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{isCreate ? "Create" : "Edit"}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Card>
        <CardHeader className="max-sm:p-3">
          <CardTitle className="text-base">
            {isCreate ? `${itemType} Create` : `${itemType} Edit`}
          </CardTitle>
        </CardHeader>
        <CardContent className="max-sm:px-3 space-y-3">
          <div className="grid w-full items-center gap-1.5">
            <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
              {items.map((item: ItemData, index: number) => (
                <React.Fragment key={index}>
                  <div className="flex items-center gap-2.5">
                    <Input
                      type="text"
                      id={`${itemType.toLowerCase()}-${index}`}
                      placeholder={`Enter ${itemType.toLowerCase()}`}
                      className="w-full max-sm:text-xs"
                      value={item.value}
                      onChange={(e) => handleItemChange(index, e.target.value)}
                    />

                    <Button
                      title="Remove item"
                      onClick={() =>
                        index === 0 ? null : handleRemoveItem(index)
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
          </div>
          <div className="flex justify-start">
            <Button
              onClick={handleAddItem}
              type="button"
              size="icon"
              variant="outline"
            >
              <PlusCircle className="size-4" />
            </Button>
          </div>
          <div className="flex items-center justify-end">
            <Button>
              {isCreate ? `Create ${itemType}` : `Save ${itemType}`}
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default CreateItem;
