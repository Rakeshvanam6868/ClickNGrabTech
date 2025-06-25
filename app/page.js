import InstaCard from "@/components/InstaCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";

export default function Home() {
  return (
   <> 
     <div className=" w-full h-auto ">
        <div className="flex flex-col justify-center items-center p-4 gap-4">
            <Image
              src="/logo.jpg"
              alt="ClickNGraB Tech Logo"
              width={100}
              height={100}
              className="rounded-full"
            />
            <h2 className="text-[#d4d4d4] font-semibold text-3xl">ClickNGraB Tech</h2>
            <p className="text-[#d4d4d4] text-center text-sm mt-2 max-w-2xl">
              ClickNGraB Tech is a platform that curates the best tech deals and products from around the web, providing you with the latest and greatest in technology at your fingertips. Whether you're looking for gadgets, software, or tech accessories, ClickNGraB Tech has got you covered.
            </p>
        </div>
         <div className="flex flex-wrap gap-2 justify-center items-center mt-3 p-2">
            <Button className="rounded-full">X Twitter</Button>
            <Button className="rounded-full">X Twitter</Button>
            <Button className="rounded-full">X Twitter</Button>
            <Button className="rounded-full">X Twitter</Button>
            <Button className="rounded-full">X Twitter</Button>
            <Button className="rounded-full">X Twitter</Button>
            <Button className="rounded-full">X Twitter</Button>
         </div>
         <div className="px-3 py-2 my-3 text-white">
          <Input type="text" placeholder="Search the products..."/>
         </div>
         <div className="w-full h-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-2">
            <InstaCard/>
            <InstaCard/>
            <InstaCard/>
            <InstaCard/>
            <InstaCard/>
            <InstaCard/>
            <InstaCard/>
            <InstaCard/>
         </div>
     </div>
   </>
  );
}
