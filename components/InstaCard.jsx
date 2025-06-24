// components/InstaCard.jsx
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function InstaCard() {
  const deal = {
    title: "Untitled Deal",
    image: "https://m.media-amazon.com/images/I/61pFfy105PL._SX679_.jpg",
    link: "https://amzn.to/469CvgA",
  };

  return (
    <div className="grid place-content-center">
      <Card
        className="flex flex-col justify-center align-center w-full p-1
      bg-[#171717] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      >
        {/* Image Section */}
        <div className=" w-full h-auto flex justify-center items-center ">
          <Image
            src={deal.image}
            alt={"Deal"}
            width={250}
            height={250}
            className="object-cover w-auto h-auto p-1 rounded-2xl"
          />
        </div>

        {/* Title Section */}
        <CardHeader className="p-0 mt-2 text-center">
          <CardDescription className="font-semibold text-[#d4d4d4] dark:text-gray-100 text-sm line-clamp-2 leading-tight ">
            {/* {deal.title} */} Men's Adjustable Tint Polarized Sunglasses
          </CardDescription>
        </CardHeader>

        {/* Buy Button */}
        <CardFooter className="p-4 flex items-center justify-center mt-auto">
          {/* <Button asChild className="w-3/4  py-2 text-sm font-medium 
          bg-[#22c55e] hover:bg-[#15803d] 
          text-[#e5e5e5] backdrop-blur-sm rounded-lg transition-all duration-300 hover:shadow-inner">
          <a href={deal.link} target="_blank" rel="noopener noreferrer">
            Buy Now
          </a>
        </Button>  */}
          <Button
  asChild
  className="w-3/4 py-2 text-sm font-medium 
    bg-[#16a34a] text-white rounded-lg 
    transition-all duration-300 
    hover:shadow-[0_0_8px_#22c55e,0_0_16px_#22c55e]
    active:shadow-[0_0_10px_#15803d,0_0_20px_#15803d]
    focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:ring-offset-2 
    relative overflow-hidden group"
>
  <a href={deal.link} target="_blank" rel="noopener noreferrer">
    <span className="relative z-10 ">Buy Now</span>
    {/* Soft glow background */}
    <span className="absolute inset-0 bg-[#22c55e] opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"></span>
  </a>
</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
