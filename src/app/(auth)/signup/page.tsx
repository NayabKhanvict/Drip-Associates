import React from "react";
import Facility from "@/components/Common/Facility";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SignupForm from "@/components/Auth/SignupForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import options from "@/app/api/auth/[...nextauth]/options";

const Signup = async () => {
  const session = await getServerSession(options);

  if (session) redirect("/");
  return (
    <>
      <Breadcrumb title="Signup" />

      <SignupForm />

      <Facility />
    </>
  );
};

export default Signup;
