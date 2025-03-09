'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const featuredDeals = [
  {
    id: 1,
    title: "Maison du Tajine Marrakech",
    description: "Tajines marocains authentiques et couscous à des prix spéciaux en fin de journée",
    originalPrice: 250,
    discountedPrice: 120,
    image: "/images/tagine.jpg",
    pickupTime: "Aujourd'hui, 20h-21h",
    tags: ["Marocain", "Traditionnel"]
  },
  {
    id: 2,
    title: "Pâtisserie Casablanca",
    description: "Pâtisseries marocaines fraîches, dont Kaab el Ghazal et Briouats",
    originalPrice: 200,
    discountedPrice: 80,
    image: "/images/dessert.jpg",
    pickupTime: "Aujourd'hui, 18h-19h",
    tags: ["Pâtisserie", "Sucré"]
  },
  {
    id: 3,
    title: "Délices Royaux Marocains",
    description: "Pâtisseries et gâteaux marocains premium",
    originalPrice: 350,
    discountedPrice: 150,
    image: "/images/dessert2.jpg",
    pickupTime: "Demain, 10h-11h",
    tags: ["Desserts", "Premium"]
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section with Moroccan Pattern Background */}
      <div className="relative bg-gradient-to-r from-amber-500 to-red-600 pattern-moroccan">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Sauvez la Nourriture, Partagez la Culture
            </h1>
            <p className="mt-6 text-xl text-gray-100">
              Découvrez la cuisine marocaine authentique et aidez à réduire le gaspillage alimentaire
            </p>
            <div className="mt-10 flex justify-center gap-x-6">
              <Link
                href="/deals"
                className="rounded-full bg-white px-8 py-3 text-lg font-semibold text-red-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Voir les Offres
              </Link>
              <Link 
                href="/how-it-works"
                className="rounded-full border-2 border-white px-8 py-3 text-lg font-semibold text-white hover:bg-white hover:text-red-600"
              >
                En Savoir Plus
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Deals Section */}
      <div className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Offres Spéciales du Jour
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Découvrez des saveurs marocaines authentiques à prix réduits
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredDeals.map((deal) => (
              <div
                key={deal.id}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-transform hover:-translate-y-1"
              >
                <div className="aspect-w-4 aspect-h-3">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={deal.image}
                      alt={deal.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2">
                    {deal.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">
                    <Link href={`/deals/${deal.id}`}>
                      <span className="absolute inset-0" />
                      {deal.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-gray-600 line-clamp-2">
                    {deal.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-red-600">
                        {deal.discountedPrice} MAD
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        {deal.originalPrice} MAD
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {deal.pickupTime}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-red-100 flex items-center justify-center">
                <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">Cuisine Authentique</h3>
              <p className="mt-2 text-gray-600">Découvrez les vraies saveurs et recettes traditionnelles marocaines</p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-red-100 flex items-center justify-center">
                <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">Offres de Dernière Minute</h3>
              <p className="mt-2 text-gray-600">Profitez de réductions exceptionnelles en fin de journée</p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-red-100 flex items-center justify-center">
                <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">Soutenez le Local</h3>
              <p className="mt-2 text-gray-600">Aidez les restaurants marocains à réduire le gaspillage</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 