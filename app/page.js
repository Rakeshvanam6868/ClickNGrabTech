// app/page.tsx
"use client";

import InstaCard from "@/components/InstaCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getDeals } from "@/utils/cardData";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [displayedDeals, setDisplayedDeals] = useState([]);

  useEffect(() => {
    const initialDeals = getDeals().filter((deal) =>
      deal.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setDisplayedDeals(initialDeals.slice(0, 4));
  }, [searchTerm]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        const allDeals = getDeals().filter((deal) =>
          deal.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        const nextBatch = allDeals.slice(displayedDeals.length, displayedDeals.length + 4);

        if (nextBatch.length > 0) {
          setDisplayedDeals((prev) => [...prev, ...nextBatch]);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [displayedDeals, searchTerm]);

  const filteredDeals = getDeals().filter((deal) =>
    deal.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="w-full h-auto">
        <div className="flex flex-col justify-center items-center p-4 gap-4">
          <Image
            src="/logo.jpg"
            alt="ClickNGrab Tech Logo"
            width={80}
            height={80}
            className="rounded-full"
          />
          <h2 className="text-[#f5f5f5] font-semibold text-3xl">ClickNGrab Tech</h2>
          <p className="text-[#d4d4d4] text-center text-base mt-2 max-w-2xl">
            ClickNGrab Tech is a platform that curates the best tech deals and products from around the web,
            providing you with the latest and greatest in technology at your fingertips.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 justify-center items-center mt-3 p-2">
          <Button className="rounded-full text-lg flex justify-between items-center">
            <Image src="/telegram.png" alt="Telegram Logo" width={25} height={25} className="rounded-full" />
            Telegram
          </Button>
          <Button className="rounded-full text-lg flex justify-between items-center">
            <Image src="/insta.png" alt="Instagram Logo" width={25} height={25} className="rounded-full" />
            Instagram
          </Button>
          <Button className="rounded-full text-lg flex justify-between items-center">
            <Image src="/youtube.png" alt="YouTube Logo" width={25} height={25} className="rounded-full" />
            YouTube
          </Button>
        </div>
        <div className="px-3 py-2 my-3 mx-2 sm:mx-2 md:mx-[30%] text-white">
          <Input
            type="text"
            placeholder="Search the products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="mx-2 mb-4 sm:mx-2 md:mx-[10%] h-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 p-2">
          {filteredDeals.length > 0 ? (
            displayedDeals.map((deal) => <InstaCard key={deal.id} deal={deal} />)
          ) : (
            <p className="col-span-full text-center text-gray-500">No results found.</p>
          )}
        </div>
      </div>
    </>
  );
}