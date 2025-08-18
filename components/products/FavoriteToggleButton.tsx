import { FaHeart } from "react-icons/fa";
import { Button } from "../ui/button";

const FavoriteToggleButton = ({ productId }: { productId: string }) => {
  const handleClick = () => {
    console.log("Favorite clicked for product:", productId);
  };
  return (
    <Button
      size="icon"
      variant="outline"
      className="p-2 cursor-pointer"
      onClick={handleClick}
    >
      <FaHeart />
    </Button>
  );
};
export default FavoriteToggleButton;
