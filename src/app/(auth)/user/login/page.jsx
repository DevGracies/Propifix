"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { assets } from '../../../../../public/assets/assets'
import SideComponent from "@/components/auth/SideComponent";
<<<<<<< HEAD:src/app/(auth)/login/page.jsx
import { useRouter } from "next/navigation";
=======
import { Button } from "@/components/ui/button";
>>>>>>> df4958416509b9daae0537a0e3a5250678a052b1:src/app/(auth)/user/login/page.jsx

export default function LoginPage() {
  const [selectedRole, setSelectedRole] = useState('User');
  const [showPassword, setShowPassword] = useState(false);
  const roles = ["User", "House Agent", "Caretaker", "Artisan", "Landlord"];
  const { register, handleSubmit } = useForm();

  const router = useRouter();
  const onSubmit = (data) => {
    data.preventDefault();
    router.push("/");
  };
  return (
    <div className="relative h-full w-full flex justify-center items-center">
      <div className="w-full flex flex-col md:flex-row items-center justify-between ">
        <SideComponent />
<<<<<<< HEAD:src/app/(auth)/login/page.jsx
        <div className="p-6 md:p-8 shadow-lg flex flex-col gap-4 bg-[#FFFFFFCC] backdrop-blur-[18.92px] md:mt-0 rounded-[18.92px] bg-opacity-80">
          <h2 className="text-lg text-center font-[Poppins] font-semibold text-[28.38px] leading-[39.42px] tracking-[0%] max-w-fit h-[78px] top-[39px] left-[39px]">
=======
        <div className="w-full md:max-w-[600px] p-6 md:p-8 shadow-lg flex flex-col gap-4 bg-[#FFFFFFCC] backdrop-blur-[18.92px] md:mt-0 rounded-[18.92px]">
          <h2 className=" font-semibold text-[28.38px] leading-[39.42px] w-full max-w-[400px]">
>>>>>>> df4958416509b9daae0537a0e3a5250678a052b1:src/app/(auth)/user/login/page.jsx
            LogIn to Explore Homes and Artisan Services
          </h2>

          <div className="flex flex-wrap gap-2">
<<<<<<< HEAD:src/app/(auth)/login/page.jsx
            {roles.map((role, index) => (
              <button
                key={index}
                className={`px-4 py-2 flex justify-center items-center transition-colors w-[92px] h-[28px] rounded-[9.72px] border-[0.81px] border-solid ${
=======
            {roles.map((role) => (
              <Button
                key={role}
                className={`px-4 py-2 transition-colors bg-transparent text-black hover:bg-[#5e14adbb] hover:text-white rounded-[9.72px] border-[0.81px] ${
>>>>>>> df4958416509b9daae0537a0e3a5250678a052b1:src/app/(auth)/user/login/page.jsx
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
<<<<<<< HEAD:src/app/(auth)/login/page.jsx
                className="absolute cursor-pointer right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
=======
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-500 bg-transparent border-0 outline-0 hover:bg-transparent cursor-pointer"
>>>>>>> df4958416509b9daae0537a0e3a5250678a052b1:src/app/(auth)/user/login/page.jsx
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
<<<<<<< HEAD:src/app/(auth)/login/page.jsx
              className="w-full cursor-pointer p-3 bg-[#5D14AD] text-white rounded-lg"
=======
              className="w-full py-6  bg-[#5D14AD] hover:bg-[#5D14AD]/90 cursor-pointer text-white rounded-lg"
>>>>>>> df4958416509b9daae0537a0e3a5250678a052b1:src/app/(auth)/user/login/page.jsx
            >
              Sign In
            </Button>
          </form>

          <div className="flex justify-between items-center text-sm">
<<<<<<< HEAD:src/app/(auth)/login/page.jsx
            <button onClick={() => router.push("/")}>
              <a className="flex cursor-pointer items-center text-[#5D14AD]">
                <ArrowLeft className="mr-2" size={16} /> Back to Homepage
              </a>
            </button>
            <p>
              Don't have an account?{" "}
              <button
                className="cursor-pointer"
                onClick={() => router.push("/register")}
=======
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
>>>>>>> df4958416509b9daae0537a0e3a5250678a052b1:src/app/(auth)/user/login/page.jsx
              >
                <a className="text-[#5D14AD]">Sign Up</a>
                {/* 2345279444 UBA Grace Temitope Adegunle */}
              </button>
            </p>
<<<<<<< HEAD:src/app/(auth)/login/page.jsx
            <button
              className="cursor-pointer"
              onClick={() => router.push("/forgot-password")}
            >
              <a className="text-[#5D14AD]">Forgot Password?</a>
            </button>
=======
            <Link
              href="/forgot-password"
              legacyBehavior
            >
              <a className="text-[#5D14AD] text-xs">Forgot Password?</a>
            </Link>
>>>>>>> df4958416509b9daae0537a0e3a5250678a052b1:src/app/(auth)/user/login/page.jsx
          </div>
        </div>
      </div>
    </div>
  );
}
