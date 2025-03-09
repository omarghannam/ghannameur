'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

// Mock data - in a real app, this would come from an API
const deal = {
  id: 1,
  title: "Joe's Bakery Surprise Box",
  description: "A mix of fresh pastries and bread at a fraction of the original price. Our surprise boxes contain a variety of items that were baked fresh today. You might find croissants, baguettes, pastries, and more!",
  originalPrice: 30,
  discountedPrice: 10,
  image: "/placeholder-bakery.jpg",
  pickupTime: "Today, 5-6 PM",
  location: {
    name: "Joe's Bakery",
    address: "123 Main St, City, State",
    distance: "0.5 km away",
  },
  details: [
    "Contains a mix of bread and pastries",
    "Valued at $30 or more",
    "May contain nuts and dairy",
    "Best consumed within 24 hours",
  ],
  business: {
    name: "Joe's Bakery",
    rating: 4.8,
    reviews: 245,
    description: "Family-owned bakery serving fresh bread and pastries since 1985.",
  },
};

export default function DealPage() {
  const params = useParams();
  const dealId = params.id;

  // In a real app, you would fetch the deal data based on the ID
  console.log('Deal ID:', dealId);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Image gallery */}
          <div className="aspect-h-3 aspect-w-4 lg:aspect-h-4 lg:aspect-w-5 sm:overflow-hidden sm:rounded-lg">
            <div className="h-96 w-full bg-gray-200 flex items-center justify-center text-gray-500">
              [Image Placeholder]
            </div>
          </div>

          {/* Deal info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{deal.title}</h1>
            
            <div className="mt-3 flex items-center">
              <div className="text-3xl tracking-tight text-gray-900">${deal.discountedPrice}</div>
              <div className="ml-4 text-lg text-gray-500 line-through">${deal.originalPrice}</div>
              <div className="ml-4 inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700">
                {Math.round((1 - deal.discountedPrice / deal.originalPrice) * 100)}% off
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6 text-base text-gray-700">{deal.description}</div>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-8">
              <h3 className="text-sm font-medium text-gray-900">Pickup Details</h3>
              <div className="mt-4 space-y-4">
                <div className="flex items-center">
                  <ClockIcon className="h-5 w-5 text-gray-400" />
                  <p className="ml-2 text-sm text-gray-500">{deal.pickupTime}</p>
                </div>
                <div className="flex items-start">
                  <MapPinIcon className="h-5 w-5 text-gray-400" />
                  <div className="ml-2">
                    <p className="text-sm font-medium text-gray-900">{deal.location.name}</p>
                    <p className="text-sm text-gray-500">{deal.location.address}</p>
                    <p className="mt-1 text-sm text-gray-500">{deal.location.distance}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-8">
              <h3 className="text-sm font-medium text-gray-900">What's Included</h3>
              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {deal.details.map((detail) => (
                    <li key={detail} className="text-gray-400">
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="button"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-8 py-3 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Reserve Now
              </button>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-8">
              <h3 className="text-lg font-medium text-gray-900">About {deal.business.name}</h3>
              <div className="mt-4">
                <div className="flex items-center">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-900">{deal.business.rating}</span>
                    <span className="ml-1 text-sm text-gray-500">({deal.business.reviews} reviews)</span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-500">{deal.business.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 