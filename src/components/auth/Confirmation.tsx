"use client";

import React, { useEffect, useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "../ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useConfirmationMutation } from "@/api/auth/authApi";
import useToken from "@/hooks/useToken";

const Confirmation = () => {
  const token = useToken();
  const [otp, setOtp] = useState<string>("");
  const [confirmation, { data, isSuccess, error, isError, isLoading }] =
    useConfirmationMutation();
  const router = useRouter();

  useEffect(() => {
    if (isSuccess) {
      toast.success(data.message);
      router.push("/signin");
    }

    if (isError) {
      const apiError = error as {
        data?: {
          [x: string]: any;
          message?: string;
        };
      };
      if (apiError && apiError.data) {
        const errorMessage = apiError.data.message;
        toast.error(errorMessage || apiError.data.error.message);
      } else {
        console.log("Internal server error");
      }
    }
  }, [isSuccess, data, isError, error, router]);

  const handleOtpChange = (newValue: string) => {
    setOtp(newValue);
  };

  const onConfirm = async () => {
    await confirmation({ activationToken: token, otp: parseInt(otp) });
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col gap-5">
          <InputOTP
            maxLength={6}
            onChange={handleOtpChange}
            disabled={isLoading}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <Button
            type="button"
            onClick={onConfirm}
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </>
            ) : (
              "Confirmation"
            )}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Confirmation;
