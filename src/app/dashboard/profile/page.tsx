import DLayout from "@/components/dashboard/DLayout/DLayout";
import Profile from "@/components/profile/Profile";
import AdminProtect from "@/hooks/useAdminProtect";
import React from "react";

const page = () => {
  return (
    <>
      <AdminProtect>
        <DLayout>
          <Profile />
        </DLayout>
      </AdminProtect>
    </>
  );
};

export default page;
