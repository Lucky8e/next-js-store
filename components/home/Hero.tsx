import Link from "next/link";
import { Button } from "../ui/button";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl text-emerald-600">
          We are changing the way people shop.
        </h1>
        <p className="mt-8 max-w-xl text-lg text-muted-foreground">
          Discover timeless furniture crafted for comfort and style. Elevate
          every room with elegant, durable pieces designed to match your unique
          lifestyle and space.
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link href="/products">Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </div>
  );
};
export default Hero;
