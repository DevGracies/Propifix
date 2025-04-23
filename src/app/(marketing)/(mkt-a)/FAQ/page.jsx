"use client";
import { FAQ } from "@/lib/constants";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CustomAccordionTrigger } from "@/components/custom-ui/CustomAccordianTrigger";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Banner from "@/components/Banner";

const FrenquentlyAskedQuestionsPage = () => {
  const [openItem, setOpenItem] = useState("");

  return (
    <section className="w-full bg-[#F9F7FB] overflow-hidden">
      <Banner
        content={
          <h1 className="text-[48px] font-semibold uppercase text-white tracking-wide">
            FAQ
          </h1>
        }
      />
      <div className="py-[50px] md:py-[100px] bg-[#F9F7FB] px-5 space-y-[50px] md:space-y-[100px]">
        <h1 className="w-full max-w-[1296px] mx-auto text-[18px] md:text-[22px] font-medium md:font-semibold leading-[28px] text-center">
          Got questions about Propifix? You're in the right place! This FAQ
          section covers everything you need to know about our platform, from
          finding the perfect property to listing your services as an agent or
          artisan. Explore the answers below to make the most of your Propifix
          experience.
        </h1>
        <div className="max-w-[1152px] space-y-[50px] md:space-y-[100px] mx-auto">
          {FAQ.map((item, i) => {
            const [first, second, third, fourth, fifth] = item.title.split(" ");

            return (
              <div
                key={i}
                className="flex flex-col justify-between items-center  space-y-[20px]"
              >
                <h1 className="text-[#9D71C6] tracking-wide text-[24px] font-bold capitalize">
                  {first}{" "}
                  <span className="text-[#5D14AD]">
                    {second} {third} {fourth} {fifth}
                  </span>
                </h1>
                <div className="w-full">
                  <Accordion
                    type="single"
                    collapsible
                    className="space-y-[20px] md:space-y-[30px] w-full max-w-[1152px] mx-auto"
                    onValueChange={(val) => setOpenItem(val)}
                  >
                    {item.items.map((question, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-${index}_${item.title}`}
                        className={cn(
                          "w-full py-[6px] md:py-[16px] px-[20px] md:px-[50px] rounded-lg bg-white shadow-sm !border-2 border-transparent",
                          openItem === `item-${index}_${item.title}`
                            ? " !border-[#5D14AD]"
                            : ""
                        )}
                      >
                        <CustomAccordionTrigger
                          openItem={openItem}
                          value={`item-${index}_${item.title}`}
                          className="w-full font-medium text-[16px] md:text-[22px]"
                        >
                          {question.question}
                        </CustomAccordionTrigger>
                        <AccordionContent className="text-[#7F6C90] text-[14px] md:text-[18px] font-normal">
                          {question.answerDescription && (
                            <p className="mb-2">{question.answerDescription}</p>
                          )}
                          {question.answerType === "List" ? (
                            <ul className="space-y-2">
                              {question.answer.map((answerq, answerIndex) => (
                                <li key={answerIndex}>
                                  {typeof answerq.subtitle === "number" ? (
                                    <div className="mr-2 inline-block">
                                      {answerq.subtitle}.
                                    </div>
                                  ) : (
                                    <>
                                      <div className="bg-[#5D14AD] size-[8px] rounded-full inline-block mr-2"></div>
                                      <span className="text-[#5D14AD] font-medium">
                                        {answerq.subtitle}
                                      </span>
                                    </>
                                  )}{" "}
                                  {answerq.answer}
                                </li>
                              ))}
                            </ul>
                          ) : (
                            question.answer
                          )}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FrenquentlyAskedQuestionsPage;
