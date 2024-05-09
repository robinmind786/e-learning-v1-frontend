"use client";

import React, {
  ChangeEvent,
  DragEventHandler,
  createRef,
  useEffect,
  useState,
} from "react";
import Cropper, { ReactCropperElement } from "react-cropper";
import { Button } from "@/components/ui/button";
import { ImageUp, X } from "lucide-react";
import { CourseDetails } from "./courseType";
import { useDropzone } from "react-dropzone";
import CustomChoiceSelect, { Option } from "../common/CustomChoiceSelect";
import toast from "react-hot-toast";

interface CourseMediaFormProps {
  courseDetails: CourseDetails;
  setCourseDetails: React.Dispatch<React.SetStateAction<CourseDetails>>;
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
}

const CourseMediaForm: React.FC<CourseMediaFormProps> = ({
  courseDetails,
  setCourseDetails,
  active,
  setActive,
}) => {
  const [image, setImage] = useState<string>(
    (courseDetails.thumbnail && courseDetails.thumbnail) || ""
  );
  const [cropData, setCropData] = useState("#");
  const cropperRef = createRef<ReactCropperElement>();
  const [cropSize, setCropSize] = useState({ width: 0, height: 0 });

  const handleCrop = () => {
    const cropper = cropperRef.current?.cropper;
    if (cropper) {
      const cropData = cropper.getData();
      const croppedWidth = Math.round(cropData.width);
      const croppedHeight = Math.round(cropData.height);
      setCropSize({ width: croppedWidth, height: croppedHeight });
    }
  };

  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
      setImage("");
    }
  };

  useEffect(() => {
    if (cropData !== "#") {
      setCourseDetails({
        ...courseDetails,
        thumbnail: cropData,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [, cropData]);

  const handleRemoveImg = () => {
    setImage("");
    setCourseDetails({
      ...courseDetails,
      thumbnail: "",
    });
    setCropSize({
      width: 0,
      height: 0,
    });
  };

  const onDrop = (acceptedFiles: any) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const fileContent = reader.result as string;
        setImage(fileContent);
      };
      reader.readAsDataURL(file);
    }
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handlePrev = () => {
    setActive(active - 1);
  };

  const handleTagChange = (key: string, newTags: Option[]) => {
    setCourseDetails({
      ...courseDetails,
      [key]: newTags,
    });
  };

  const handleNext = () => {
    if (courseDetails.tags.length === 0) {
      toast.error("Oops! Don't forget to add some course tags 🏷️");
    } else if (courseDetails.thumbnail === "") {
      toast.error("Oops! A beautiful course deserves a stunning thumbnail 🖼️");
    } else {
      setActive(active + 1);
    }
  };

  return (
    <React.Fragment>
      <div className="grid grid-cols-1 gap-5">
        <div className="border-2 relative border-dashed rounded-md">
          <div className="absolute top-0 left-0  to-90% z-40">
            {cropSize.width > 0 && cropSize.height > 0 && (
              <span
                className={`p-2.5 inline-flex items-center text-base ${
                  cropSize.width < 600 && cropSize.height < 450
                    ? "text-red-500"
                    : "text-white"
                }`}
              >
                {cropSize.width} <X className="size-4" /> {cropSize.height}
              </span>
            )}
          </div>
          <div className="absolute top-0 rounded-sm right-0 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% z-40">
            {cropSize.width < 600 && cropSize.height < 450 && (
              <span className="px-2 text-xs text-white inline-block">
                Please upload 600X400
              </span>
            )}
          </div>
          <div className="w-full relative">
            {image ? (
              <Cropper
                ref={cropperRef}
                style={{ height: 400, width: "100%" }}
                zoomTo={0.5}
                aspectRatio={16 / 9}
                preview=".img-preview"
                src={image}
                viewMode={1}
                minCropBoxHeight={150}
                minCropBoxWidth={200}
                background={false}
                responsive={true}
                autoCropArea={1}
                checkOrientation={false}
                guides={true}
                crop={handleCrop}
              />
            ) : (
              <div
                {...getRootProps()}
                className="block relative mx-auto !w-full h-[400px] overflow-hidden bg-transparent"
              >
                <input {...getInputProps()} />
                {courseDetails.thumbnail ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={courseDetails.thumbnail}
                    alt="thumbnail"
                    className="max-w-full h-auto object-contain"
                  />
                ) : (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="text-center">
                      {isDragActive ? (
                        <p className="leading-7 [&:not(:first-child)]:mt-5">
                          Drop here Image
                        </p>
                      ) : (
                        <div className="flex flex-col items-center justify-center">
                          <ImageUp size={32} />

                          <p className="leading-7 [&:not(:first-child)]:mt-5">
                            Upload course image here or Browse
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Note: Only JPG, JPEG, and PNG formats are supported.
                            Our suggested dimensions are 600px * 450px. If you
                            upload an image with different dimensions, the
                            system will automatically crop it to fit our
                            thumbnails/previews.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <div>
          <div className="flex gap-5 justify-end">
            <Button type="button" onClick={getCropData} size="sm">
              Crop Image
            </Button>
            <Button
              type="button"
              onClick={handleRemoveImg}
              className="bg-red-500 text-white hover:opacity-90"
              size="sm"
            >
              Remove
            </Button>
          </div>
        </div>
        <CustomChoiceSelect
          label="Tags"
          id="tags"
          values={courseDetails.tags}
          onChange={handleTagChange}
        />
        <div className="flex items-center justify-between">
          <Button onClick={handlePrev}>Previous</Button>
          <Button onClick={handleNext}>Next</Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CourseMediaForm;
