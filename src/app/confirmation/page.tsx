import Confirmation from "@/components/auth/Confirmation";
import UseIsAuthProtect from "@/hooks/useIsAuthProtect";
import UseTokenProtect from "@/hooks/useTokenProtect";
import React from "react";

const page = () => {
  return (
    <>
      <UseTokenProtect>
        <UseIsAuthProtect>
          <Confirmation />
        </UseIsAuthProtect>
      </UseTokenProtect>
    </>
  );
};

export default page;
