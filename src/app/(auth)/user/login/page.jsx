"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SideComponent from "@/components/auth/SideComponent";
import { assets } from "../../../../../public/assets/assets";

export default function LoginPage() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const roles = ["User", "House Agent", "Caretaker", "Artisan", "Landlord"];
  const { register, handleSubmit } = useForm();

  const router = useRouter();
  const onSubmit = (data) => {
    data.preventDefault();
    router.push("/");
  };
  return (
    <div className="absolute w-full p-6 md:p-14 flex flex-col md:flex-row items-center justify-between min-h-screen">
      <SideComponent />
      <div className="p-6 md:p-8 shadow-lg flex flex-col gap-4 bg-[#FFFFFFCC] backdrop-blur-[18.92px] md:mt-0 rounded-[18.92px] bg-opacity-80">
        <h2 className="text-lg text-center font-[Poppins] font-semibold text-[28.38px] leading-[39.42px] tracking-[0%] w-[506px] h-[78px] top-[39px] left-[39px]">
          LogIn to Explore Homes and Artisan Services
        </h2>

        <div className="flex flex-wrap gap-2">
          {roles.map((role) => (
            <button
              key={role}
              className={`px-4 py-2 transition-colors w-[92px] h-[28px] rounded-[9.72px] border-[0.81px] border-solid ${
                selectedRole === role
                  ? "bg-[#5D14AD] text-white"
                  : "border border-[#00000059]"
              }`}
              onClick={() => setSelectedRole(role)}
            >
              <p className="font-[Poppins] font-normal text-[10.72px]">
                {role}
              </p>
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter your email or phone number"
            {...register("email", { required: true })}
            className="w-full p-3 border border-gray-300 rounded-lg placeholder:font-[Poppins] placeholder:italic"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              {...register("password", { required: true })}
              className="w-full p-3 border border-gray-300 rounded-lg placeholder:font-[Poppins] placeholder:italic"
            />
            <button
              type="button"
              className="absolute cursor-pointer right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="flex items-center bg-[#7777774F] w-1/2 justify-between rounded p-2">
            <div className="gap-2 flex">
              <input
                type="checkbox"
                id="recaptcha"
                {...register("recaptcha", { required: true })}
              />
              <label htmlFor="recaptcha" className="text-sm">
                I'm not a robot
              </label>
            </div>
            <Image
              src={assets.google_recaptcha}
              alt="Recaptcha"
              width={40}
              height={40}
            />
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer p-3 bg-[#5D14AD] text-white rounded-lg"
          >
            Sign In
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
}
