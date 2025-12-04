import Link from "next/link";
import { Button } from "../ui/button";
import { BsCart3 } from "react-icons/bs";
import { fetchCartItems } from "@/utils/actions";

async function CartButton() {
  //temp
  const numItemsInCart = await fetchCartItems();

  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="flex justify-center items-center relative"
    >
      <Link href="/cart">
        <BsCart3 className="h-6 -w-6" />
        <span className="absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
}
export default CartButton;
