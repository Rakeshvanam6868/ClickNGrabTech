// app/admin/page.tsx
"use client";

import { useState } from "react";

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDeal = {
      id: Date.now(),
      title,
      image,
      link,
    };

    const storedDeals = JSON.parse(localStorage.getItem("customDeals")) || [];
    localStorage.setItem("customDeals", JSON.stringify([ newDeal, ...storedDeals]));

    alert("Deal added successfully!");
    setTitle("");
    setImage("");
    setLink("");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-black text-white">
      <h2 className="text-2xl font-bold mb-4">Add New Deal</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-600 bg-gray-900 p-2 w-full rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Image URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="border border-gray-600 bg-gray-900 p-2 w-full rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Product Link</label>
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="border border-gray-600 bg-gray-900 p-2 w-full rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          Add Deal
        </button>
      </form>
    </div>
  );
}