import InstaCard from "@/components/InstaCard";
import { Button } from "@/components/ui/button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";

export default function Home() {
  return (
   <> 
     <div className=" w-full h-auto ">
         <div className="m-5 text-white">Search</div>
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
