'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

// Mock data - in a real app, this would come from an API
const deals = [
  {
    id: 1,
    title: "Maison du Tajine Marrakech",
    description: "Tajines marocains authentiques et couscous à des prix spéciaux en fin de journée. Nos tajines sont préparés avec des ingrédients frais et des épices traditionnelles marocaines. Une occasion unique de découvrir la cuisine marocaine à prix réduit.",
    originalPrice: 250,
    discountedPrice: 120,
    image: "/images/tagine.jpg",
    pickupTime: "Aujourd'hui, 20h-21h",
    tags: ["Marocain", "Traditionnel"],
    location: {
      name: "Maison du Tajine",
      address: "123 Avenue Mohammed V, Marrakech",
      distance: "2.5 km",
    },
    details: [
      "Tajine au choix parmi les spécialités du jour",
      "Accompagnement de pain traditionnel",
      "Portions généreuses pour 2-3 personnes",
      "Préparé le jour même",
    ],
    business: {
      name: "Maison du Tajine",
      rating: 4.8,
      reviews: 342,
      description: "Restaurant traditionnel marocain servant des tajines authentiques depuis 1995.",
    }
  },
  {
    id: 2,
    title: "Pâtisserie Casablanca",
    description: "Pâtisseries marocaines fraîches, dont Kaab el Ghazal et Briouats. Notre assortiment comprend une sélection variée de pâtisseries traditionnelles marocaines, toutes préparées artisanalement avec des ingrédients de qualité.",
    originalPrice: 200,
    discountedPrice: 80,
    image: "/images/dessert.jpg",
    pickupTime: "Aujourd'hui, 18h-19h",
    tags: ["Pâtisserie", "Sucré"],
    location: {
      name: "Pâtisserie Casablanca",
      address: "45 Rue des Consuls, Casablanca",
      distance: "1.8 km",
    },
    details: [
      "Assortiment de pâtisseries marocaines",
      "Minimum 10 pièces variées",
      "Préparation du jour",
      "Peut contenir des fruits secs et du miel",
    ],
    business: {
      name: "Pâtisserie Casablanca",
      rating: 4.9,
      reviews: 256,
      description: "Pâtisserie artisanale spécialisée dans les douceurs traditionnelles marocaines.",
    }
  },
  {
    id: 3,
    title: "Délices Royaux Marocains",
    description: "Pâtisseries et gâteaux marocains premium. Nos créations allient tradition et raffinement, utilisant les meilleurs ingrédients pour des desserts d'exception.",
    originalPrice: 350,
    discountedPrice: 150,
    image: "/images/dessert2.jpg",
    pickupTime: "Demain, 10h-11h",
    tags: ["Desserts", "Premium"],
    location: {
      name: "Délices Royaux",
      address: "78 Boulevard Anfa, Casablanca",
      distance: "3.2 km",
    },
    details: [
      "Assortiment premium de pâtisseries marocaines",
      "Présentation soignée en coffret",
      "Idéal pour les occasions spéciales",
      "Fabrication artisanale",
    ],
    business: {
      name: "Délices Royaux",
      rating: 4.7,
      reviews: 189,
      description: "Pâtisserie haut de gamme spécialisée dans les créations marocaines raffinées.",
    }
  }
];

export default function DealPage() {
  const params = useParams();
  const dealId = parseInt(params.id as string);
  
  // Find the deal that matches the ID
  const deal = deals.find(d => d.id === dealId);

  if (!deal) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Offre non trouvée</h2>
          <p className="mt-2 text-gray-600">Cette offre n'existe pas ou n'est plus disponible.</p>
        </div>
      </div>
    );
  }

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
              <div className="text-3xl tracking-tight text-gray-900">{deal.discountedPrice} MAD</div>
              <div className="ml-4 text-lg text-gray-500 line-through">{deal.originalPrice} MAD</div>
              <div className="ml-4 inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700">
                {Math.round((1 - deal.discountedPrice / deal.originalPrice) * 100)}% off
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6 text-base text-gray-700">{deal.description}</div>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-medium text-gray-900">Détails du retrait</h3>
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
              <h3 className="text-sm font-medium text-gray-900">Ce qui est inclus</h3>
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
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Réserver Maintenant
              </button>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-8">
              <h3 className="text-lg font-medium text-gray-900">À propos de {deal.business.name}</h3>
              <div className="mt-4">
                <div className="flex items-center">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-900">{deal.business.rating}</span>
                    <span className="ml-1 text-sm text-gray-500">({deal.business.reviews} avis)</span>
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