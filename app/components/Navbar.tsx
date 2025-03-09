'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Voir les Offres', href: '/deals' },
  { name: 'Comment ça Marche', href: '/how-it-works' },
  { name: 'Pour les Commerçants', href: '/business' },
];

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <Link href="/" className="flex flex-shrink-0 items-center">
                  <ShoppingBagIcon className="h-8 w-8 text-red-600" />
                  <span className="ml-2 text-xl font-bold text-gray-900">FoodSaver</span>
                </Link>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-red-600"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <Link
                  href="/login"
                  className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Connexion
                </Link>
                <Link
                  href="/signup"
                  className="ml-3 rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
                >
                  S'inscrire
                </Link>
              </div>

              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                  <span className="sr-only">Ouvrir le menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  href={item.href}
                  className="block py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <div className="mt-4 space-y-2 px-4">
                <Link
                  href="/login"
                  className="block rounded-md px-3 py-2 text-center text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Connexion
                </Link>
                <Link
                  href="/signup"
                  className="block rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500"
                >
                  S'inscrire
                </Link>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
} 