"use client";
import { LuUserPlus } from "react-icons/lu";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

function UserIcon() {
  const { user } = useUser();
  const profileImage = user?.imageUrl;
  if (profileImage)
    return (
      <Image
        alt="User Profile Image"
        src={profileImage}
        className="w-6 h-6 rounded-full object-cover"
      />
    );
  return <LuUserPlus className="w-6 h-6  text-black dark:text-white" />;
}
export default UserIcon;
