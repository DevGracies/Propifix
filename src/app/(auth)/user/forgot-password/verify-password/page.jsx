"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { ArrowLeft } from "lucide-react";

const VerifyCode = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const onSubmit = () => {
    router.push("/user/forgot-password/new-password");
  };
  return (
    <div className="relative h-screen w-full flex justify-center items-center">
      <div className="p-6 md:p-8 shadow-lg flex flex-col gap-4 bg-[#FFFFFFCC] backdrop-blur-[18.92px] md:mt-0 justify-center w-[600px] h-[367px] top-[50px] left-[410px] rounded-[18.92px]">
        <h2 className="text-lg text-center font-[Poppins] font-semibold text-[28.38px] leading-[39.42px] tracking-[0%] w-[506px] h-[78px] top-[39px] left-[39px]">
          Enter verification code
        </h2>
        <p>
          We have sent a 6-digit verification code to your email
          (gr****@gmail.com). Check your inbox and enter the code below.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Enter code"
              {...register("code", { required: true })}
              className="w-full p-3 border border-gray-300 rounded-lg placeholder:font-[Poppins] placeholder:italic"
            />
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer p-3 bg-[#5D14AD] text-white rounded-lg"
          >
            Verify
          </button>
        </form>

        <div className="flex justify-between items-center gap-4 text-sm">
            <button onClick={() => router.push("/")}>
              <a className="flex cursor-pointer items-center text-[#5D14AD]">
                <ArrowLeft className="mr-2" size={16} /> Back to Homepage
              </a>
            </button>
            <p>
              Don't have an account?{" "}
              <button
                className="cursor-pointer"
                onClick={() => router.push("/user/register")}
              >
                <a className="text-[#5D14AD]">Sign Up</a>
                {/* 2345279444 UBA Grace Temitope Adegunle */}
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

export default VerifyCode;
