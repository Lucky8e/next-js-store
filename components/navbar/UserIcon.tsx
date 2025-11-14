"use client";
import { LuUserPlus } from "react-icons/lu";
import { useUser } from "@clerk/nextjs";

function UserIcon() {
  const { user } = useUser();
  const profileImage = user?.imageUrl;
  if (profileImage)
    return (
      <img src={profileImage} className="w-6 h-6 rounded-full object-cover" />
    );
  return <LuUserPlus className="w-6 h-6  text-black dark:text-white" />;
}
export default UserIcon;
