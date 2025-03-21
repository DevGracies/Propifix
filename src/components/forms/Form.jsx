'use client'

import React from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import {
  Form as FormContainer,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import AnimatedLinks from '../AnimatedLinks';
import { useForm } from 'react-hook-form';

const Form = ({ SELECTOPTIONS }) => {
  const form = useForm()
  const onSubmit = () => {
    
  }
  return (
    <div className="mt-8 p-5 w-full  max-w-[700px] rounded-md bg-white shadow-lg">
      <FormContainer {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-10 md:gap-[65px] w-fit mx-auto">
            <AnimatedLinks
              iconColor={"black"}
              className="text-base md:text-[18px] font-semibold text-black/80 hover:text-[#5D14AD] capitalize"
            >
              buy
            </AnimatedLinks>
            <AnimatedLinks
              iconColor={"black"}
              className="text-base md:text-[18px] font-semibold text-black/80 hover:text-[#5D14AD] capitalize"
            >
              rent
            </AnimatedLinks>
            <AnimatedLinks
              iconColor={"black"}
              className="text-base md:text-[18px] font-semibold text-black/80 hover:text-[#5D14AD] capitalize"
            >
              short let
            </AnimatedLinks>
            <AnimatedLinks
              iconColor={"black"}
              className="text-base md:text-[18px] font-semibold text-black/80  hover:text-[#5D14AD] capitalize"
            >
              land
            </AnimatedLinks>
          </div>
          <div className="flex items-center w-full border border-gray-300 rounded-lg px-2 py-1 focus-within:ring-2 focus-within:ring-purple-500 mt-[20px]">
            <Input
              type="text"
              placeholder="Enter your location"
              className="flex-1 border-none bg-transparent outline-none focus:ring-0 focus-visible:ring-0 text-black shadow-none"
            />
            <Button className="rounded-md bg-gradient-to-r from-[#5D14AD] to-[#9747FF] text-white cursor-pointer hover:opacity-90 transition-all duration-200">
              Send Request
            </Button>
          </div>
          <div className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-[10px] w-full mx-auto">
            {SELECTOPTIONS.map((option, index) => (
              <>
                <FormField
                  control={form.control}
                  name={option.label}
                  render={({ field }) => (
                    <FormItem>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger
                            className="w-[120px] border-0 shadow-none outline-none focus:ring-0 focus-visible:ring-0 text-black"
                            key={index}
                          >
                            <SelectValue placeholder={option.label} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {option.items.map((option) => (
                            <SelectItem
                              value={option}
                              className="capitalize text-black"
                            >
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            ))}
          </div>
        </form>
      </FormContainer>
    </div>
  );
}

export default Form