"use client";
import Image from "next/image";
import React, { useState } from "react";
import { assets } from "../../../../../public/assets/assets";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

const NewPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const onSubmit = () => {
    router.push("/forgot-password/successfully-created-password");
  };
  return (
    <div className="relative h-screen w-full flex justify-center items-center">
      <Image
        src={assets.loginBackground}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute"
      />
    <div className="p-6 md:p-8 shadow-lg flex flex-col gap-4 bg-[#FFFFFFCC] backdrop-blur-[18.92px] md:mt-0 justify-center w-[600px] h-[367px] top-[50px] left-[410px] rounded-[18.92px]">
        <h2 className="text-lg text-center font-[Poppins] font-semibold text-[28.38px] leading-[39.42px] tracking-[0%] w-[506px] h-[78px] top-[39px] left-[39px]">
          Create a new password
        </h2>
        <p>Your new password must not be the same as previous passwords.</p>

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

        <div className="flex justify-between items-center text-sm">
          <button className="cursor-pointer" onClick={() => router.push("/")}>
            <a className="flex items-center text-[#5D14AD]">
              <ArrowLeft className="mr-2" size={16} /> Back to Homepage
            </a>
          </button>
          <p>
            Don't have an account?{" "}
            <button className="cursor-pointer" onClick={() => router.push("/register")}>
              <a className="text-[#5D14AD]">Sign Up</a>
              {/* 2345279444 UBA Grace Temitope Adegunle */}
            </button>
          </p>
          <button className="cursor-pointer" onClick={() => router.push("/forgot-password")}>
            <a className="text-[#5D14AD]">Forgot Password?</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
