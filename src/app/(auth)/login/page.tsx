import React from "react";
import Facility from "@/components/Common/Facility";
import Breadcrumb from "@/components/Common/Breadcrumb";
import LoginForm from "@/components/Auth/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import options from "@/app/api/auth/[...nextauth]/options";

const Login = async () => {
  const session = await getServerSession(options);

  if (session) redirect("/");
  return (
    <>
      <Breadcrumb title="Login" />

      <LoginForm />

      <Facility />
    </>
  );
};

export default Login;
