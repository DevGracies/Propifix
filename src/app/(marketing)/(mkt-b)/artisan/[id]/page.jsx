"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import ProfileCard from "@/components/custom-ui/ProfileCard";
import UserFeedback from "@/components/sections/UserFeedback";
import { BackButton } from "@/components/sections/userProfile/BackButton";
import { MaxWidth } from "@/components/shared/MaxWidth";
import MultiColorHeader from "@/components/shared/MultiColorHeader";
import Stats from "@/components/Stats";
import { feedbackList } from "@/lib/constants";
import { formatDate } from "@/utils/helpers/FormatDate";
import AnimatedSpinner from "@/components/ui/animated-spinner";

const ArtisanProfilePage = () => {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    const fetchArtisan = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/artisan/${id}`
        );
        setArtisan(res.data.data); 
        setError("");
      } catch (err) {
        console.error(err);
        setError("Unable to fetch artisan profile.");
      } finally {
        setLoading(false);
      }
    };

    fetchArtisan();
  }, [id]);

  if (loading) {
    return (
      // <MaxWidth className="py-28">
      //   <p className="flex justify-center not-[]:text-center min-h-screen text-[#5D14AD] italic text-lg">
      //     Loading artisan profile...
      //   </p>
      // </MaxWidth>
      <div className='min-h-screen pt-64 flex justify-center text-center'>
      <AnimatedSpinner/>
    </div>
    );
  }

  if (error) {
    return (
      <MaxWidth className="py-28">
        <p className="text-center min-h-screen text-red-500 italic">{error}</p>
      </MaxWidth>
    );
  }

  if (!artisan) return null;

  return (
    <MaxWidth className="bg-white py-28 md:px-[50px] px-4">
      <BackButton title="artisan" role="artisan" />

      <MultiColorHeader
        className="text-[30px] font-semibold tracking-wide mb-4 mt-5"
        lighterColor="#9D71C6"
        lighterText="Artisan"
        heavierColor="#5D14AD"
        heavierText="Account"
      />

      <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-[40px] gap-[15px]">
        <ProfileCard
          role="artisan"
          artisanProfileDetails={[
            { title: "Artisan Full Name", value: artisan.fullName },
            { title: "Contact", value: artisan.phone },
            { title: "Location", value: artisan.homeAddress },
            {title: "Profession/Skill", value: artisan.skill},
            {title: "Date Registered", value: formatDate(artisan.createdAt)},
          ]}
          isEditable={true}
        />

        <Stats
          title="Artisan Performance"
          responseTime="Typically responds within 1 hour."
          jobsCompleted={10} 
          successRateInPercentage={80} 
          successRateValue="80%"
          numberOfCustomerReviews={50} 
          customerRatingInPercentage={80} 
          customerRatingValue="4.5/5" 
          serviceFeeInNaira="15,000"
        />
      </div>

      <div className="mt-10 space-y-5">
        <MultiColorHeader
          className="text-[30px] font-semibold tracking-wide"
          lighterColor="#9D71C6"
          lighterText="About"
          heavierColor="#5D14AD"
          heavierText="Me"
        />
        <p className="text-[16px]">
          Hello, my name is {artisan.fullName}. I have {artisan.yoe} years
          of experience as an atisan and I’m passionate about providing
          exceptional service.
        </p>
      </div>

      <UserFeedback feedbackList={feedbackList} />
    </MaxWidth>
  );
};

export default ArtisanProfilePage;

