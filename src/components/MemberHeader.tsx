// MemberHeader.tsx
import { ReactNode } from "react";
import ProfilePictures from "./ProfilePictures";
import { twMerge } from "tailwind-merge";

interface MemberHeaderProp {
  profilePicChildren: ReactNode;
  backgroundColor:
    | "tulip"
    | "gold"
    | "lime"
    | "jade"
    | "water"
    | "air"
    | "lilac"
    | "candy";
  username: string;
}

function MemberHeader({
  profilePicChildren,
  backgroundColor,
  username,
}: MemberHeaderProp) {
  return (
    <div
      className={twMerge("flex flex-col md:flex-row items-center w-full h-36")}
    >
      <div className="w-32 h-32">
        <ProfilePictures backgroundColor={backgroundColor}>
          {profilePicChildren}
        </ProfilePictures>
      </div>
      <div className=" pl-4 font-bold justify-start flex pb-2 w-40 text-2xl ">
        <h1>{username}</h1>
      </div>
    </div>
  );
}

export default MemberHeader;
