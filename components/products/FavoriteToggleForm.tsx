"use client";

import { usePathname } from "next/navigation";
import { useState, useTransition } from "react";
import { toggleFavoriteAction } from "@/utils/actions";
import { CardSubmitButton } from "../form/Button";
import { toast } from "sonner";

type FavoriteToggleFormProps = {
  isFavoriteInitial: boolean;
  productId: string;
};

export default function FavoriteToggleForm({
  isFavoriteInitial,
  productId
}: FavoriteToggleFormProps) {
  const pathname = usePathname();

  // Optimistic states
  const [optimisticFav, setOptimisticFav] = useState(
    Boolean(isFavoriteInitial)
  );

  const [, startTransition] = useTransition();

  const handleClick = () => {
    const wasFavorite = optimisticFav;
    setOptimisticFav(!wasFavorite); //  NEW — CAPTURE ID BEFORE UI UPDATES

    // 🔥 Call server action
    startTransition(async () => {
      try {
        const result = await toggleFavoriteAction({
          productId,
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
        toast.error("Something went wrong");
      }
    });
  };

  return (
    <CardSubmitButton
      onClick={(e) => {
        e.stopPropagation(); // prevent clicking the parent <Link>
        handleClick();
      }}
      isFavorite={optimisticFav}
    />
  );
}
