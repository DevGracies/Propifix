"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SideComponent from "@/components/auth/SideComponent";
import { assets } from "../../../../../public/assets/assets";
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [selectedRole, setSelectedRole] = useState("User");
  const [showPassword, setShowPassword] = useState(false);
  const recaptchaRef = useRef(null);
  const [isVerified, setIsVerified] = useState(false);
  const roles = ["User", "House Agent", "Caretaker", "Artisan", "Landlord"];
  const { register, handleSubmit } = useForm();

  const router = useRouter();
  const onSubmit = (data) => {
    data.preventDefault();
    router.push("/");
  };

  async function handleCaptchsubmission(token) {
    try {
      if (token) {
        await fetch("/api", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });
        setIsVerified(true);
      }
    } catch (e) {
      setIsVerified(false);
    }
  }

  const handleChange = (token) => {
    handleCaptchsubmission(token);
  };

  function handleExpired() {
    setIsVerified(false);
  }

  return (
    <div className="absolute w-full p-4 md:p-14 flex flex-col md:flex-row items-center justify-between min-h-screen">
      <SideComponent />
      <div className="p-6 md:p-8 shadow-lg flex flex-col gap-4 bg-[#FFFFFFCC] backdrop-blur-[18.92px] rounded-[18.92px] bg-opacity-80">
        <h2 className="font-semibold text-[24px] md:w-[506px] md:text-[28.38px] leading-[32px] md:leading-[39.42px] tracking-[0%]">
          Log In to Explore Homes and Artisan Services
        </h2>

        <div className="flex flex-wrap gap-2">
          {roles.map((role) => (
            <button
              key={role}
              className={`px-4 py-2 transition-colors w-[92px] h-[28px] flex justify-center items-center rounded-lg border-[0.81px] border-solid ${
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

          <div className="flex items-center justify-between bg-[#7777774F] w-full md:w-1/2 rounded-2xl p-2">
            <div className="flex items-center gap-2">
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
            className="w-full cursor-pointer p-3 bg-[#5D14AD] text-white h-11 rounded-lg transition duration-300 ease-linear transform hover:scale-105"
          >
            Sign In
          </button>
        </form>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
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
}
