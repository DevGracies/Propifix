"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ForgotPassword() {
  const router = useRouter();

  useEffect(() => {
    router.push("/user/forgot-password/reset");
  }, []);

  return <p>Redirecting...</p>;
}
