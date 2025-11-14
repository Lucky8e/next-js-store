"use client";
import { useUser } from "@clerk/nextjs";
import { CardSignInButton } from "../form/Button";
import { fetchFavoriteId } from "@/utils/actions";
import FavoriteToggleForm from "./FavoriteToggleForm";
import { useEffect, useState } from "react";

const FavoriteToggleButton = ({ productId }: { productId: string }) => {
  // const { userId } = await auth();
  // if (!userId) return <CardSignInButton />;

  // const favoriteId = await fetchFavoriteId({ productId });

  const { user, isLoaded, isSignedIn } = useUser();
  const [favoriteId, setFavoriteId] = useState<string | null>(null);

  // ⛔ If Clerk isn't ready yet — render nothing
  if (!isLoaded) return null;

  // ❌ If no user → show sign-in button
  if (!isSignedIn || !user) {
    return <CardSignInButton />;
  }

  // ⭐ Fetch favorites ONLY when user exists
  useEffect(() => {
    async function loadFavorite() {
      const id = await fetchFavoriteId({ productId });
      setFavoriteId(id);
    }
    loadFavorite();
  }, [productId]);

  return <FavoriteToggleForm favoriteId={favoriteId} productId={productId} />;
};
export default FavoriteToggleButton;
