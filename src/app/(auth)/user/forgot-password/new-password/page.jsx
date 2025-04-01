"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

const NewPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const onSubmit = () => {
    router.push("/user/forgot-password/successfully-created-password");
  };
  return (
    <div className="relative h-screen w-full flex justify-center items-center p-4 md:p-0">
      <div className="p-6 shadow-lg flex flex-col gap-4 bg-[#FFFFFFCC] backdrop-blur-[18.92px] justify-center w-full max-w-[600px] h-auto md:h-[367px] rounded-[18.92px]">
        <h2 className="font-semibold text-[24px] md:text-[28.38px] leading-[32px] md:leading-[39.42px] tracking-[0%]">
          Create a new password
        </h2>
        <p className="text-[12px] md:text-[14px]">
          Your new password must not be the same as previous passwords.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter new password"
              {...register("password", { required: true })}
              className="w-full p-3 border border-gray-300 rounded-lg placeholder:font-[Poppins] placeholder:italic"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm new password"
              {...register("password", { required: true })}
              className="w-full p-3 border border-gray-300 rounded-lg placeholder:font-[Poppins] placeholder:italic"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer p-3 bg-[#5D14AD] text-white rounded-lg"
          >
            Reset password
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

export default NewPassword;
