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
import PropertiesAvailable from "@/components/shared/propertiesAvailable";
import { feedbackList } from "@/lib/constants";
import { formatDate } from "@/utils/helpers/FormatDate";
import AnimatedSpinner from "@/components/ui/animated-spinner";

const LandlordProfilePage = () => {
  const { id } = useParams();
  const [landlord, setLandlord] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    const fetchLandlord = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/landlord/${id}`
        );
        setLandlord(res.data.data); 
        setError("");
      } catch (err) {
        console.error(err);
        setError("Unable to fetch landlord profile.");
      } finally {
        setLoading(false);
      }
    };

    fetchLandlord();
  }, [id]);

  if (loading) {
    return (
      // <MaxWidth className="py-28">
      //   <p className="text-center min-h-screen text-[#5D14AD] italic text-lg">
      //     Loading landlord profile...
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

  if (!landlord) return null;

  return (
    <MaxWidth className="bg-white py-28 md:px-[50px] px-4">
      <BackButton title="landlord" role="landlord" />

      <MultiColorHeader
        className="text-[30px] font-semibold tracking-wide mb-4 mt-5"
        lighterColor="#9D71C6"
        lighterText="Landlord"
        heavierColor="#5D14AD"
        heavierText="Account"
      />

      <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-[40px] gap-[15px]">
        <ProfileCard
          role="landlord"
          landlordProfileDetails={[
            { title: "Landlord Full Name", value: landlord.fullName },
            { title: "Contact", value: landlord.phone },
            { title: "Location", value: landlord.homeAddress },
            {title: "Date Registered", value: formatDate(landlord.createdAt)},
          ]}
          isEditable={true}
        />

        <Stats
          title="Landlord Performance"
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
          Hello, my name is {landlord.fullName}. I have {landlord.yoe} years
          of experience as a landlord and I’m passionate about providing
          exceptional service.
        </p>
      </div>

      <UserFeedback feedbackList={feedbackList} />
      <PropertiesAvailable />
    </MaxWidth>
  );
};

export default LandlordProfilePage;
