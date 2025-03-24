import { SignInForm } from "@/components/auth/admin/SignIn";
import { AdminAuthInnerLayout } from "@/components/shared/AdminAuthInnerLayout";
import React from "react";

const LoginPage = () => {
  return (
    <AdminAuthInnerLayout
      footerRoute="register"
      title="Please Login your admin account"
      footerLabel={`Don't Have an account?`}
      footerActionText="Sign Up"
    >
      <SignInForm />
    </AdminAuthInnerLayout>
  );
};

export default LoginPage;
