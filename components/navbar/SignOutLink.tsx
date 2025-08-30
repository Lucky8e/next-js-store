"use client";

import { SignOutButton } from "@clerk/nextjs";
import { toast } from "sonner";

function SignOutLink() {
  return (
    <SignOutButton>
      <button
        className="w-full text-left"
        onClick={() => {
          toast("You have been Logged out");
        }}
      >
        Logout
      </button>
    </SignOutButton>
  );
}
export default SignOutLink;
