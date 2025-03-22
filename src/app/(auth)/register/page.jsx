import { SignUpForm } from "@/components/auth/SignUp";
import { AuthInnerLayout } from "@/components/shared/AuthInnerLayout";
import React from "react";

const RegisterPage = () => {
  return (
    <AuthInnerLayout
      footerRoute="login"
      title="Enter your information below to continue"
      footerLabel={"Have an account?"}
      footerActionText="Sign In"
    >
      <SignUpForm />
    </AuthInnerLayout>
  );
};

export default RegisterPage;
