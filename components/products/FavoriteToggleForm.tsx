"use client";

import { usePathname } from "next/navigation";
import { useState, useTransition } from "react";
import { toggleFavoriteAction } from "@/utils/actions";
import { CardSubmitButton } from "../form/Button";
import { toast } from "sonner";

type FavoriteToggleFormProps = {
  favoriteId: string | null;
  productId: string;
};

export default function FavoriteToggleForm({
  favoriteId,
  productId
}: FavoriteToggleFormProps) {
  const pathname = usePathname();

  // Optimistic states
  const [optimisticFav, setOptimisticFav] = useState(Boolean(favoriteId));
  const [currentFavId, setCurrentFavId] = useState(favoriteId);

  const [, startTransition] = useTransition();

  const handleClick = () => {
    const wasFavorite = optimisticFav;
    const oldFavoriteId = currentFavId; //  NEW — CAPTURE ID BEFORE UI UPDATES

    // ⭐ Optimistic UI toggle
    setOptimisticFav(!optimisticFav);

    // If removing → clear ID immediately
    if (wasFavorite) {
      setCurrentFavId(null);
    }

    // 🔥 Call server action
    startTransition(async () => {
      try {
        const result = await toggleFavoriteAction({
          productId,
          favoriteId: oldFavoriteId,
          pathname
        });

        // ⭐ Show toast from server response
        if (result?.message) {
          toast(result.message);
        }
      } catch (error) {
        // 🔥 Revert optimistic UI on error
        console.error("Favorite toggle failed:", error);
        setOptimisticFav(wasFavorite);
        setCurrentFavId(oldFavoriteId);
        toast.error("Something went wrong");
      }
    });
  };

  return (
    <button type="button" onClick={handleClick}>
      <CardSubmitButton isFavorite={optimisticFav} />
    </button>
  );
}
