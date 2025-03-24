"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { assets } from '../../../../../public/assets/assets'
import SideComponent from "@/components/auth/SideComponent";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [selectedRole, setSelectedRole] = useState('User');
  const [showPassword, setShowPassword] = useState(false);
  const roles = ["User", "House Agent", "Caretaker", "Artisan", "Landlord"];
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="relative h-full w-full flex justify-center items-center">
      <div className="w-full flex flex-col md:flex-row items-center justify-between ">
        <SideComponent />
        <div className="w-full md:max-w-[600px] p-6 md:p-8 shadow-lg flex flex-col gap-4 bg-[#FFFFFFCC] backdrop-blur-[18.92px] md:mt-0 rounded-[18.92px]">
          <h2 className=" font-semibold text-[28.38px] leading-[39.42px] w-full max-w-[400px]">
            LogIn to Explore Homes and Artisan Services
          </h2>

          <div className="flex flex-wrap gap-2">
            {roles.map((role) => (
              <Button
                key={role}
                className={`px-4 py-2 transition-colors bg-transparent text-black hover:bg-[#5e14adbb] hover:text-white rounded-[9.72px] border-[0.81px] ${
                  selectedRole === role
                    ? "bg-[#5D14AD] text-white"
                    : "border border-[#00000059]"
                }`}
                onClick={() => setSelectedRole(role)}
              >
                <p className="text-xs">{role}</p>
              </Button>
            ))}
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <input
              type="text"
              placeholder="Enter your email or phone number"
              {...register("email", { required: true })}
              className="w-full p-3 text-[12px] font-normal border-[1.5px] border-gray-500  rounded-[10px]  placeholder:italic"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                {...register("password", { required: true })}
                className="w-full p-3 text-[12px] font-normal border-[1.5px] border-gray-500  rounded-[10px]  placeholder:italic"
              />
              <Button
                variant={"outline"}
                type="button"
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-500 bg-transparent border-0 outline-0 hover:bg-transparent cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </Button>
            </div>

            <div className="flex items-center bg-[#7777774F] w-fit gap-10 justify-between rounded-2xl py-3 px-8">
              <div className="gap-4 flex">
                <input
                  type="checkbox"
                  id="recaptcha"
                  {...register("recaptcha", { required: true })}
                />
                <label
                  htmlFor="recaptcha"
                  className="text-sm"
                >
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

            <Button
              type="submit"
              className="w-full py-6  bg-[#5D14AD] hover:bg-[#5D14AD]/90 cursor-pointer text-white rounded-lg"
            >
              Sign In
            </Button>
          </form>

          <div className="flex justify-between items-center text-sm">
            <Link href="/">
              <div className="flex items-center text-[#5D14AD] text-xs">
                <ArrowLeft
                  className="mr-1"
                  size={16}
                />{" "}
                Back to Homepage
              </div>
            </Link>
            <p className="flex items-center gap-1 text-xs">
              Don't have an account?{" "}
              <Link
                href="/register"
                legacyBehavior
              >
                <a className="text-[#5D14AD]">Sign Up</a>
              </Link>
            </p>
            <Link
              href="/forgot-password"
              legacyBehavior
            >
              <a className="text-[#5D14AD] text-xs">Forgot Password?</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
