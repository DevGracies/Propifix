import Brand from "../../../public/Propifix_logo.svg";
import { CustomImage } from "./Image";
import { cn } from "@/lib/utils";
import { useRouter } from "nextjs-toploader/app";
export const Logo = ({ style }) => {
  const router = useRouter();
  return (
    <CustomImage
      src={Brand}
      priority={true}
      style={cn("w-[83px] h-[30px] cursor-pointer", style)}
      clickFunc={() => router.push(`/`)}
    />
  );
};
