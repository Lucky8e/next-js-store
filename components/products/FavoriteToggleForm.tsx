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
          favoriteId: currentFavId,
          pathname
        });

        // ⭐ Show toast from server response
        if (result?.message) {
          toast(result.message);
        }
      } catch (_error) {
        // 🔥 Revert optimistic UI on error
        setOptimisticFav(wasFavorite);
        setCurrentFavId(favoriteId);
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
