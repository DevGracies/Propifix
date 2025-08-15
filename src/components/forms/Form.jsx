'use client'

import React from 'react';
import {
  Form as FormContainer,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useForm } from 'react-hook-form';
import AnimatedLinks from '../AnimatedLinks';
import { Calendar } from 'lucide-react';

const Form = ({ SELECTOPTIONS, calendarLabel, selectedTab, onTabChange }) => {
  const form = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
  };

  const tabs = ["buy", "rent", "shortlet", "land"];

  return (
    <div className="mt-8 p-5 w-full max-w-[920px] rounded-md bg-white shadow-lg">
      <FormContainer {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-wrap justify-center gap-4 md:gap-[65px] w-full">
            {tabs.map((tab) => (
              <AnimatedLinks 
                key={tab}
                type="button"
                onClick={() => onTabChange(tab)}
                isSelected={selectedTab === tab}
                className={`text-base md:text-[18px] font-semibold capitalize transition-colors ${
                  selectedTab === tab
                    ? "text-[#5D14AD]"
                    : "text-black/80 hover:text-[#5D14AD]"
                }`}
              >
                {tab}
              </AnimatedLinks>
            ))}
          </div>

          <div className="flex items-center w-full border border-gray-300 rounded-lg px-2 py-1 focus-within:ring-2 focus-within:ring-purple-500 mt-[15px]">
            <Input
              type="text"
              placeholder="Enter your location"
              className="flex-1 border-none bg-transparent outline-none focus:ring-0 focus-visible:ring-0 text-black shadow-none"
            />
            <Button className="rounded-md bg-gradient-to-r from-[#5D14AD] to-[#9747FF] text-white cursor-pointer hover:opacity-90 transition-all duration-200">
              Send Request
            </Button>
          </div>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(120px,1fr))] justify-center` gap-4">
            {calendarLabel && (
              <div className='w-full'>
                <FormField
                  control={form.control}
                  name="calendar"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-1">
                      <FormControl>
                        <div
                          onClick={() => {
                            document.getElementById('custom-date-input')?.showPicker?.();
                          }}
                          className="w-full cursor-pointer border border-gray-300 px-3 py-1 rounded-md bg-white text-black shadow-none outline-none focus-within:ring-2 focus-within:ring-[#9747FF] flex items-center justify-between"
                        >
                          <span className="text-left">
                            {field.value || "Availablity Date"}
                          </span>
                          <Calendar width={16} height={16}/>
                          <input
                            id="custom-date-input"
                            type="date"
                            {...field}
                            className="absolute opacity-0 w-0 h-0 pointer-events-none"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
          {SELECTOPTIONS.map((option, index) => (
           <div key={index} className='w-full'>
             <FormField
              control={form.control}
              name={option.label}
              render={({ field }) => (
                <FormItem className="flex flex-col gap-1">
                  {option.label === "Property Highlights" ? (
                    <Select
                      open={field.value?.open}
                      onOpenChange={(open) => {
                        field.onChange({
                          ...(field.value || { values: [] }),
                          open,
                        });
                      }}
                      value="" 
                    >
                      <FormControl>
                        <SelectTrigger className="w-full border text-sm border-gray-300 px-3 py-2 rounded-md bg-white text-black shadow-none outline-none focus:ring-2 focus:ring-[#9747FF]">
                          <div className="w-full text-left text-black">
                            {(field.value?.values?.length || 0) === 0
                              ? "Property Highlights"
                              : `${field.value?.values?.length} selection${field.value?.values?.length > 1 ? "s" : ""}`}
                          </div>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <div className="px-2 py-1 max-h-[150px] overflow-y-auto">
                          {option.items.map((item) => {
                            const selected = field.value?.values?.includes(item);

                            return (
                              <label
                                key={item}
                                className="flex items-center gap-2 text-sm text-black capitalize px-2 py-1 hover:bg-gray-100 rounded cursor-pointer"
                              >
                                <input
                                  type="checkbox"
                                  checked={selected}
                                  onChange={(e) => {
                                    const newValues = new Set(field.value?.values || []);
                                    if (e.target.checked) {
                                      newValues.add(item);
                                    } else {
                                      newValues.delete(item);
                                    }
                                    field.onChange({
                                      open: true,
                                      values: Array.from(newValues),
                                    });
                                  }}
                                />
                                {item}
                              </label>
                            );
                          })}
                        </div>
                      </SelectContent>
                    </Select>
                  ) : (
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full border border-gray-300 px-3 py-2 rounded-md bg-white text-black text-sm shadow-none outline-none focus:ring-2 focus:ring-[#9747FF]">
                          <SelectValue placeholder={option.label} className="text-left" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {option.items.map((item) => (
                          <SelectItem
                            key={item}
                            value={item}
                            className="capitalize text-black"
                          >
                            {item}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}

                  <FormMessage />
                </FormItem>
              )}
            />
           </div>
          ))}
          </div>
        </form>
      </FormContainer>
    </div>
  );
};

export default Form;
