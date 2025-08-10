import Image from "next/image";

const roleImageMap = {
  agent: "/backgrounds/agent-card-bg.jpg",
  user: "/User_profile_bg.png",
  carpentry: "/images/carpentry.png",
  electrician: "/images/electrical-work.png",
  houseCleaning: "/images/house-cleaning.png",
  dryCleaning: "/images/dry-cleaning.png",
  painting: "/images/painting.png",
};

const RoleImage = ({ role, alt = "Role image", ...props }) => {
  const src = roleImageMap[role] || "/backgrounds/agent-card-bg.jpg";
  return (
    <Image
      src={src}
      alt={alt}
      {...props}
    />
  );
};

export default RoleImage;
