'use client';

import React from 'react';
import Link from 'next/link';

const footerNavigation = {
  main: [
    { name: 'À Propos', href: '/about' },
    { name: 'Comment ça Marche', href: '/how-it-works' },
    { name: 'Pour les Commerçants', href: '/business' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Politique de Confidentialité', href: '/privacy' },
    { name: 'Conditions d\'Utilisation', href: '/terms' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-900">FoodSaver</span>
            </Link>
            <p className="text-gray-600 text-sm">
              Rejoignez le mouvement pour réduire le gaspillage alimentaire tout en profitant d'excellentes offres sur des plats délicieux.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-900">Navigation</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerNavigation.main.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-gray-600 hover:text-gray-900">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-900">Mentions Légales</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerNavigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-gray-600 hover:text-gray-900">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} FoodSaver. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
} 