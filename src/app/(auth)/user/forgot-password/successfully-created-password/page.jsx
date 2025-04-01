"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { ArrowLeft } from "lucide-react";

const Success = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = () => {
    router.push("/user/login");
  };
  return (
    <div className="relative h-screen w-full flex justify-center items-center p-4 md:p-0">
      <div className="p-6 shadow-lg flex flex-col gap-4 bg-[#FFFFFFCC] backdrop-blur-[18.92px] justify-center w-full max-w-[600px] h-auto md:h-[367px] rounded-[18.92px]">
        <h2 className="font-semibold text-[24px] md:text-[28.38px] leading-[32px] md:leading-[39.42px] tracking-[0%]">
          Password updated!
        </h2>
        <p>Your password has been updated.</p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <button
            type="submit"
            className="w-full cursor-pointer p-3 bg-[#5D14AD] text-white rounded-lg"
          >
            Sign in
          </button>
        </form>

        <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4 text-sm">
          <button
            onClick={() => router.push("/")}
            className="flex cursor-pointer items-center text-[#5D14AD] transition duration-300 ease-linear hover:opacity-80"
          >
            <ArrowLeft className="mr-2" size={16} /> Back to Homepage
          </button>

          <p>
            Don't have an account?{" "}
            <button
              onClick={() => router.push("/user/register")}
              className="cursor-pointer text-[#5D14AD] transition duration-300 ease-linear transform hover:scale-105"
            >
              Sign Up
            </button>
          </p>
          <button
            className="cursor-pointer"
            onClick={() => router.push("/user/forgot-password")}
          >
            <a className="text-[#5D14AD]">Forgot Password?</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
