import { LuUserPlus } from "react-icons/lu";
import { currentUser } from "@clerk/nextjs/server";

async function UserIcon() {
  const user = await currentUser();
  const profileImage = user?.imageUrl;
  if (profileImage)
    return (
      <img src={profileImage} className="w-6 h-6 rounded-full object-cover" />
    );
  return <LuUserPlus className="w-6 h-6  text-black dark:text-white" />;
}
export default UserIcon;
