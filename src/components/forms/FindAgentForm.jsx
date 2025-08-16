"use client";
import { useForm, Controller } from "react-hook-form";
import * as Slider from "@radix-ui/react-slider"; // Import Radix Slider
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Search } from "lucide-react";

const FIELDS = [
  {
    label: "search location",
    placeholder: "Ikeja, Lagos",
    default: "Ikeja, Lagos",
    type: "text",
  },
  {
    label: "service category",
    placeholder: "House Agent",
    default: "House Agent",
    type: "select",
    items: [
      "house agent",
      "carpentry",
      "electrical work",
      "dry cleaning",
      "house cleaning",
      "plumbering",
      "painting",
      "bricklaying",
      "tiling",
      "welding",
      "roofing",
      "glazing",
      "HVAC installation",
    ],
  },
];

const FindAgentForm = () => {
  const form = useForm({
    defaultValues: {
      searchLocation: "Ikeja, Lagos",
      serviceCategory: "house agent",
      radius: 10, // Default radius in km
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 "
      >
        {FIELDS.map((fieldOption, index) => {
           if (fieldOption.type === "select") {
             return (
               <FormField
               key={fieldOption.id || index}
                 control={form.control}
                 name="serviceCategory"
                 render={({ field }) => (
                   <FormItem>
                     <FormLabel
                       className={"capitalize text-[14px] md:text-[15px] font-medium italic"}
                     >
                       {fieldOption.label}
                     </FormLabel>
                     <Select
                       key={index}
                       onValueChange={field.onChange}
                       defaultValue={field.value}
                     >
                       <div className="flex gap-5 mt-1">
                         <div className="flex-1 h-full bg-white text-black text-[12px] font-medium capitalize py-[10px] px-5 rounded-full cursor-default">
                           {field.value}{" "}
                           <span className="font-normal italic">
                             (Selected)
                           </span>
                         </div>
                         <FormControl>
                           <SelectTrigger className="w-full max-w-[180px] border-0 bg-white rounded-full text-black capitalize cursor-pointer">
                             <span className="text-gray-500">
                               {field.value
                                 ? fieldOption.label
                                 : "Select an option"}
                             </span>
                           </SelectTrigger>
                         </FormControl>
                         <SelectContent>
                           {fieldOption.items.map((option, i) => (
                             <SelectItem
                               key={i}
                               value={option}
                               className="capitalize text-black"
                             >
                               {option}
                             </SelectItem>
                           ))}
                         </SelectContent>
                       </div>
                     </Select>
                     <FormMessage />
                   </FormItem>
                 )}
               />
             );
           }
          return (
            <FormField
              key={index}
              control={form.control}
              name="searchLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="capitalize text-[14px] md:text-[15px] font-medium italic">
                    {fieldOption.label}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder={fieldOption.placeholder}
                      className="bg-white text-black rounded-full px-5 py-[10px] font-semibold text-[12px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          );
        })}

        <FormField
          control={form.control}
          name="radius"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="capitalize text-[15px] font-medium italic">
                Search Radius
              </FormLabel>
              <FormControl>
                <div className="flex flex-col gap-2 bg-white text-black px-5 rounded-lg py-4">
                  <div className=" w-full flex justify-between">
                    {[1, 20, 40, 60].map((km) => (
                      <span
                        key={km}
                        className="text-[12px] font-medium"
                      >
                        {km}km
                      </span>
                    ))}
                  </div>
                  <Slider.Root
                    className="relative flex items-center select-none touch-none w-full h-5"
                    value={[field.value]}
                    onValueChange={(value) => field.onChange(value[0])}
                    min={0}
                    max={60}
                    step={10}
                  >
                    <Slider.Track className="bg-gray-300 relative grow rounded-full h-1">
                      <Slider.Range className="absolute bg-purple-500 h-full rounded-full" />
                    </Slider.Track>
                    <Slider.Thumb
                      className="block w-4 h-4 bg-gray-100 shadow-2xl border outline rounded-full cursor-pointer"
                      aria-label="Radius"
                    />
                  </Slider.Root>
                  <p className="text-sm font-medium text-black">
                    R: <span className="font-bold">{field.value} km</span>
                  </p>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          variant="outline"
          className="min-w-full bg-transparent capitalize"
        >
          <Search size={13} />
          Search Professionals
        </Button>
      </form>
    </Form>
  );
};

export default FindAgentForm;
