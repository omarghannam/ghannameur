'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Mock data - in a real app, this would come from an API
const deals = [
  {
    id: 1,
    title: "Joe's Bakery Surprise Box",
    description: "A mix of fresh pastries and bread at a fraction of the original price",
    originalPrice: 30,
    discountedPrice: 10,
    image: "/placeholder-bakery.jpg",
    pickupTime: "Today, 5-6 PM",
    category: "Bakery",
    distance: "0.5",
  },
  {
    id: 2,
    title: "Green Garden Restaurant",
    description: "Delicious surplus meals from our daily menu",
    originalPrice: 25,
    discountedPrice: 8,
    image: "/placeholder-restaurant.jpg",
    pickupTime: "Today, 8-9 PM",
    category: "Restaurant",
    distance: "1.2",
  },
  // Add more mock deals here
];

const categories = ["All", "Restaurant", "Bakery", "Grocery", "Cafe"];
const sortOptions = ["Recommended", "Price: Low to High", "Price: High to Low", "Distance"];

export default function DealsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSort, setSelectedSort] = useState("Recommended");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDeals = deals.filter((deal) => {
    if (selectedCategory !== "All" && deal.category !== selectedCategory) {
      return false;
    }
    if (searchQuery) {
      return deal.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
             deal.description.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return true;
  });

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="space-y-6">
          <div>
            <div className="relative">
              <input
                type="text"
                className="block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm"
                placeholder="Search for deals..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="sm:w-1/2">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                id="category"
                className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:w-1/2">
              <label htmlFor="sort" className="block text-sm font-medium text-gray-700">
                Sort by
              </label>
              <select
                id="sort"
                className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Deals Grid */}
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDeals.map((deal) => (
            <div key={deal.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <div className="h-48 w-full bg-gray-200 flex items-center justify-center text-gray-500">
                  [Image Placeholder]
                </div>
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime="2023-03-16" className="text-gray-500">
                      {deal.pickupTime}
                    </time>
                    <span className="relative z-10 rounded-full bg-green-50 px-3 py-1.5 font-medium text-green-600">
                      {Math.round((1 - deal.discountedPrice / deal.originalPrice) * 100)}% off
                    </span>
                  </div>
                  <Link href={`/deals/${deal.id}`} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{deal.title}</p>
                    <p className="mt-3 text-base text-gray-500">{deal.description}</p>
                  </Link>
                </div>
                <div className="mt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-4">
                      <div className="text-lg font-bold text-green-600">${deal.discountedPrice}</div>
                      <div className="text-sm text-gray-500 line-through">${deal.originalPrice}</div>
                    </div>
                    <div className="text-sm text-gray-500">{deal.distance} km away</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 