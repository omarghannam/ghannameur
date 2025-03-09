'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ChartBarIcon,
  ShoppingBagIcon,
  UsersIcon,
  PlusIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from '@heroicons/react/24/outline';

// Mock data - in a real app, this would come from an API
const stats = [
  { name: 'Total Sales', value: '$2,435', change: '+12.5%', trend: 'up' },
  { name: 'Active Deals', value: '12', change: '+3.2%', trend: 'up' },
  { name: 'Food Saved (kg)', value: '156', change: '+28.4%', trend: 'up' },
  { name: 'Customer Reviews', value: '4.8/5', change: '-0.2%', trend: 'down' },
];

const recentDeals = [
  {
    id: 1,
    title: 'End of Day Pastry Box',
    price: '$10.00',
    originalPrice: '$30.00',
    status: 'Active',
    pickupTime: 'Today, 5-6 PM',
    quantityLeft: 3,
  },
  {
    id: 2,
    title: 'Fresh Produce Box',
    price: '$15.00',
    originalPrice: '$40.00',
    status: 'Sold Out',
    pickupTime: 'Today, 6-7 PM',
    quantityLeft: 0,
  },
  {
    id: 3,
    title: 'Lunch Special Box',
    price: '$8.00',
    originalPrice: '$25.00',
    status: 'Active',
    pickupTime: 'Tomorrow, 1-2 PM',
    quantityLeft: 5,
  },
];

export default function BusinessDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900">Business Dashboard</h1>
            <Link
              href="/business/deals/new"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Create New Deal
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.name}
                className="bg-white overflow-hidden shadow rounded-lg"
              >
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      {item.name === 'Total Sales' && (
                        <ChartBarIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                      )}
                      {item.name === 'Active Deals' && (
                        <ShoppingBagIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                      )}
                      {item.name === 'Food Saved (kg)' && (
                        <ShoppingBagIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                      )}
                      {item.name === 'Customer Reviews' && (
                        <UsersIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                      )}
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
                        <dd className="flex items-baseline">
                          <div className="text-2xl font-semibold text-gray-900">{item.value}</div>
                          <div
                            className={`ml-2 flex items-baseline text-sm font-semibold ${
                              item.trend === 'up' ? 'text-green-600' : 'text-red-600'
                            }`}
                          >
                            {item.trend === 'up' ? (
                              <ArrowTrendingUpIcon className="self-center flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                            ) : (
                              <ArrowTrendingDownIcon className="self-center flex-shrink-0 h-5 w-5 text-red-500" aria-hidden="true" />
                            )}
                            <span className="ml-1">{item.change}</span>
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Deals */}
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">Recent Deals</h2>
              <Link
                href="/business/deals"
                className="text-sm font-medium text-green-600 hover:text-green-500"
              >
                View all
              </Link>
            </div>
            <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-md">
              <ul role="list" className="divide-y divide-gray-200">
                {recentDeals.map((deal) => (
                  <li key={deal.id}>
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <p className="text-sm font-medium text-green-600 truncate">{deal.title}</p>
                          <span
                            className={`ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              deal.status === 'Active'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {deal.status}
                          </span>
                        </div>
                        <div className="ml-2 flex-shrink-0 flex">
                          <p className="text-sm text-gray-500">{deal.pickupTime}</p>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-gray-500">
                            Price: {deal.price}
                            <span className="ml-2 line-through">{deal.originalPrice}</span>
                          </p>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                          <p>
                            {deal.quantityLeft > 0
                              ? `${deal.quantityLeft} left`
                              : 'Sold out'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 