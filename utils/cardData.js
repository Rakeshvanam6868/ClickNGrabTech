// utils/cardData.ts
import { deals } from "@/utils/cardDataStatic";

export const getDeals = () => {
  if (typeof window === "undefined") return [...deals];

  try {
    const customDeals = JSON.parse(localStorage.getItem("customDeals") || "[]");
    const combined = [...customDeals, ...deals];
    
    // Sort by ID descending (latest first)
    return combined.sort((a, b) => b.id - a.id);
  } catch (e) {
    console.error("Failed to load deals", e);
    return [...deals];
  }
};

