"use client";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
export const PasswordInput = ({
  defaultValue,
  name,
  control,
  placeholder,
  inputStyle,
}) => {
  const [passwordType, setPasswordType] = useState("password");
  const handleChange = () =>
    setPasswordType((prevState) =>
      prevState === "password" ? "text" : "password"
    );
  const inputCnStyle = cn(
    `italic text-[11.04px] font-[400] border border-input-border h-[35px] rounded-[9.46px] flex items-center z-[1000]`,
    inputStyle
  );
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="relative">
            <span>
              <FormControl>
                <Input
                  className={inputCnStyle}
                  placeholder={placeholder}
                  {...field}
                  type={passwordType}
                  defaultValue={defaultValue}
                />
              </FormControl>
            </span>
            <span
              onClick={handleChange}
              className="w-[55px] text-[11.04px] font-[400] text-white rounded-[9.46px] absolute top-[4px] bottom-[4px] right-[4px] cursor-pointer flex justify-center items-center bg_linear-purple"
            >
              {passwordType === "password" ? "Show" : "Hide"}
            </span>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
