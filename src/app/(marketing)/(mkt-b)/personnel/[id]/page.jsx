import ProfileCard from "@/components/custom-ui/ProfileCard";
import UserFeedback from "@/components/sections/UserFeedback";
import { BackButton } from "@/components/sections/userProfile/BackButton";
import { MaxWidth } from "@/components/shared/MaxWidth";
import MultiColorHeader from "@/components/shared/MultiColorHeader";
import Stats from "@/components/Stats";
import { feedbackList, ProfileDetails } from "@/lib/constants";

const PersonnelProfile = () => {
  return (
    <MaxWidth className="bg-white py-28 md:px-[50px] px-4">
      <BackButton />
      <MultiColorHeader
        className={"text-[30px] font-semibold tracking-wide mb-4 mt-5"}
        lighterColor={"#9D71C6"}
        lighterText={"Artisan"}
        heavierColor={"#5D14AD"}
        heavierText={"Account"}
      />
      <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-[40px] gap-[15px]">
        <ProfileCard
          role="carpentry"
          profileDetails={ProfileDetails}
        />
        <Stats
          responseTime="Typically responds within 1 hour."
          jobsCompleted={10}
          successRateInPercentage={80}
          successRateValue={"80%"}
          numberOfCustomerReviews={50}
          customerRatingInPercentage={80}
          customerRatingValue={"4.5/5"}
          serviceFeeInNaira={"15,000"}
        />
      </div>
      <div className="mt-10 space-y-5">
        <MultiColorHeader
          className={"text-[30px] font-semibold tracking-wide"}
          lighterColor={"#9D71C6"}
          lighterText={"About"}
          heavierColor={"#5D14AD"}
          heavierText={"Me"}
        />
        <p className="text-[16px]">
          Hello, I'm Grace Olori, a dedicated and results-driven real estate
          professional passionate about helping clients find their perfect homes
          and investment opportunities. With [X years] of experience in the
          industry, I specialize in specific areas, e.g., residential
          properties, luxury homes, or commercial spaces, ensuring a seamless
          and personalized experience for every client.
          <br />
          <br /> I pride myself on understanding your unique needs and providing
          expert guidance through every step of the buying, selling, or renting
          process. My strong local market knowledge and commitment to excellence
          have earned the trust of countless clients who value my attention to
          detail and proactive approach.
          <br />
          <br /> When I’m not assisting clients, I enjoy [a few personal
          interests, e.g., exploring new neighborhoods, volunteering, or staying
          active], which helps me stay connected with the communities I serve.
          <br />
          <br />
          Let’s work together to make your real estate dreams a reality! Feel
          free to reach out to discuss how I can assist you.
        </p>
      </div>

      <UserFeedback feedbackList={feedbackList} />
    </MaxWidth>
  );
};

export default PersonnelProfile;
