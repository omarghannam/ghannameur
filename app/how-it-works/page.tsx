import React from 'react';
import { MapPinIcon, ShoppingBagIcon, SparklesIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const steps = [
  {
    name: 'Browse Local Deals',
    description: 'Find surplus food from restaurants, bakeries, and grocery stores in your area at discounted prices.',
    icon: MapPinIcon,
  },
  {
    name: 'Place Your Order',
    description: 'Select your preferred items and complete your purchase through our secure platform.',
    icon: ShoppingBagIcon,
  },
  {
    name: 'Pick Up Your Food',
    description: 'Collect your order during the specified time slot directly from the business.',
    icon: SparklesIcon,
  },
  {
    name: 'Save Food & Money',
    description: 'Enjoy quality food while helping reduce food waste and supporting local businesses.',
    icon: GlobeAltIcon,
  },
];

const benefits = [
  {
    title: 'Save Money',
    description: 'Get quality food at up to 70% off regular prices.',
  },
  {
    title: 'Fight Food Waste',
    description: 'Help prevent perfectly good food from going to waste.',
  },
  {
    title: 'Support Local',
    description: 'Help local businesses reduce waste and increase profits.',
  },
  {
    title: 'Quality Food',
    description: 'Enjoy fresh, delicious food from your favorite spots.',
  },
];

export default function HowItWorks() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-green-600">How It Works</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Save Food, Save Money, Save the Planet
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Join thousands of people fighting food waste while enjoying great deals on quality food from local businesses.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.name} className="flex flex-col items-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-green-600">
                  <step.icon className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <dt className="text-base font-semibold leading-7 text-gray-900">{step.name}</dt>
                <dd className="mt-1 text-base leading-7 text-gray-600 text-center">{step.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-32 sm:mt-40">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Use FoodSaver?
            </h2>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-center lg:max-w-none lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="mx-auto flex max-w-xl flex-col gap-y-4">
                <dt className="text-base font-semibold leading-7 text-gray-900">{benefit.title}</dt>
                <dd className="text-base leading-7 text-gray-600">{benefit.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-32 sm:mt-40 text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Join our community of food savers and start enjoying great deals while making a difference.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/deals"
                className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Browse Deals
              </a>
              <a href="/signup" className="text-sm font-semibold leading-6 text-gray-900">
                Sign Up <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 