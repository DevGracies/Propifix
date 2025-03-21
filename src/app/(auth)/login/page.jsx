"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { assets } from "@/assets/assets";

export default function LoginPage() {
  const [selectedRole, setSelectedRole] = useState(null);
  const roles = ["User", "House Agent", "Caretaker", "Artisan", "Landlord"];
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div
      className="p-6 md:p-14 min-h-screen w-full flex flex-col md:flex-row items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${assets.loginBackground})` }}
    >
      {/* First Component */}
      <div className="relative p-6 bg-white shadow-lg text-center max-w-sm md:max-w-md rounded-[20px] flex flex-col items-center justify-center">
        <Image
          src={assets.gridVector}
          alt="Grid Vector"
          width={50}
          height={50}
          className="absolute top-0 right-0"
        />

        <Image src={assets.icon1} alt="Propifix Icon" width={150} height={54} />

        <p className="mt-4 text-gray-700 text-center px-4">
          Seamless transactions, trusted professionals, and quality service
          every time.
        </p>

        <Image
          src={assets.Vector}
          alt="Vector"
          width={50}
          height={50}
          className="absolute bottom-0 left-0"
        />
      </div>

      {/* Second Component */}
      <div className="p-6 md:p-8 shadow-lg flex flex-col gap-4 max-w-md md:max-w-lg rounded-[18.92px] backdrop-blur-md bg-white/80 mt-6 md:mt-0">
        <h2 className="text-lg font-bold text-center">
          Log In to Explore Homes and Artisan Services
        </h2>

        <div className="flex flex-wrap justify-center gap-2">
          {roles.map((role) => (
            <button
              key={role}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedRole === role
                  ? "bg-[#5D14AD] text-white"
                  : "border border-black"
              }`}
              onClick={() => setSelectedRole(role)}
            >
              {role}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter your email or phone number"
            {...register("email", { required: true })}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <div className="relative">
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: true })}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="recaptcha"
              {...register("recaptcha", { required: true })}
            />
            <label htmlFor="recaptcha" className="text-sm">
              I'm not a robot
            </label>
            <Image
              src="/recaptcha.png"
              alt="Recaptcha"
              width={50}
              height={50}
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-[#5D14AD] text-white rounded-lg"
          >
            Sign In
          </button>
        </form>

        <div className="flex justify-between items-center text-sm">
          <Link href="/" legacyBehavior>
            <a className="flex items-center text-[#5D14AD]">
              <ArrowLeft className="mr-2" size={16} /> Back to Homepage
            </a>
          </Link>
          <p>
            Don't have an account?{" "}
            <Link href="/register" legacyBehavior>
              <a className="text-[#5D14AD]">Sign Up</a>
            </Link>
          </p>
          <Link href="/forgot-password" legacyBehavior>
            <a className="text-[#5D14AD]">Forgot Password?</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
