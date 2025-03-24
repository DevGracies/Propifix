import { SignUpForm } from "@/components/auth/admin/SignUp";
import { AdminAuthInnerLayout } from "@/components/shared/AdminAuthInnerLayout";
import React from "react";

const RegisterPage = () => {
  return (
    <AdminAuthInnerLayout
      footerRoute="login"
      title="Enter your information below to continue"
      footerLabel={"Have an account?"}
      footerActionText="Sign In"
    >
      <SignUpForm />
    </AdminAuthInnerLayout>
  );
};

export default RegisterPage;
