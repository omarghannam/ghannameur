'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface DealFormData {
  title: string;
  description: string;
  originalPrice: string;
  discountedPrice: string;
  quantity: string;
  pickupStartTime: string;
  pickupEndTime: string;
  category: string;
  allergens: string[];
}

const categories = [
  'Bakery',
  'Restaurant',
  'Cafe',
  'Grocery',
  'Other',
];

const allergens = [
  'Dairy',
  'Eggs',
  'Fish',
  'Shellfish',
  'Tree Nuts',
  'Peanuts',
  'Wheat',
  'Soy',
];

export default function NewDeal() {
  const router = useRouter();
  const [formData, setFormData] = useState<DealFormData>({
    title: '',
    description: '',
    originalPrice: '',
    discountedPrice: '',
    quantity: '',
    pickupStartTime: '',
    pickupEndTime: '',
    category: '',
    allergens: [],
  });
  const [errors, setErrors] = useState<Partial<DealFormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleAllergenChange = (allergen: string) => {
    setFormData((prev) => ({
      ...prev,
      allergens: prev.allergens.includes(allergen)
        ? prev.allergens.filter((a) => a !== allergen)
        : [...prev.allergens, allergen],
    }));
  };

  const validateForm = () => {
    const newErrors: Partial<DealFormData> = {};

    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.originalPrice.trim()) newErrors.originalPrice = 'Original price is required';
    if (!formData.discountedPrice.trim()) newErrors.discountedPrice = 'Discounted price is required';
    if (!formData.quantity.trim()) newErrors.quantity = 'Quantity is required';
    if (!formData.pickupStartTime) newErrors.pickupStartTime = 'Pickup start time is required';
    if (!formData.pickupEndTime) newErrors.pickupEndTime = 'Pickup end time is required';
    if (!formData.category) newErrors.category = 'Category is required';

    // Additional validations
    if (formData.originalPrice && parseFloat(formData.originalPrice) <= 0) {
      newErrors.originalPrice = 'Original price must be greater than 0';
    }
    if (formData.discountedPrice && parseFloat(formData.discountedPrice) <= 0) {
      newErrors.discountedPrice = 'Discounted price must be greater than 0';
    }
    if (formData.quantity && parseInt(formData.quantity) <= 0) {
      newErrors.quantity = 'Quantity must be greater than 0';
    }
    if (formData.pickupStartTime && formData.pickupEndTime && 
        new Date(formData.pickupStartTime) >= new Date(formData.pickupEndTime)) {
      newErrors.pickupEndTime = 'End time must be after start time';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        // Here you would typically make an API call to create the deal
        console.log('Form submitted:', formData);
        router.push('/business/dashboard');
      } catch (error) {
        console.error('Error creating deal:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Create New Deal
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            List your surplus food items to reduce waste and earn extra revenue
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-12 space-y-8 bg-white p-8 rounded-lg shadow">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Deal Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
              placeholder="e.g., End of Day Pastry Box"
            />
            {errors.title && (
              <p className="mt-2 text-sm text-red-600">{errors.title}</p>
            )}
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              rows={4}
              value={formData.description}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
              placeholder="Describe what's included in this deal..."
            />
            {errors.description && (
              <p className="mt-2 text-sm text-red-600">{errors.description}</p>
            )}
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="originalPrice" className="block text-sm font-medium text-gray-700">
                Original Price ($)
              </label>
              <input
                type="number"
                step="0.01"
                name="originalPrice"
                id="originalPrice"
                value={formData.originalPrice}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
              />
              {errors.originalPrice && (
                <p className="mt-2 text-sm text-red-600">{errors.originalPrice}</p>
              )}
            </div>

            <div>
              <label htmlFor="discountedPrice" className="block text-sm font-medium text-gray-700">
                Discounted Price ($)
              </label>
              <input
                type="number"
                step="0.01"
                name="discountedPrice"
                id="discountedPrice"
                value={formData.discountedPrice}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
              />
              {errors.discountedPrice && (
                <p className="mt-2 text-sm text-red-600">{errors.discountedPrice}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
              Quantity Available
            </label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
            />
            {errors.quantity && (
              <p className="mt-2 text-sm text-red-600">{errors.quantity}</p>
            )}
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="pickupStartTime" className="block text-sm font-medium text-gray-700">
                Pickup Start Time
              </label>
              <input
                type="datetime-local"
                name="pickupStartTime"
                id="pickupStartTime"
                value={formData.pickupStartTime}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
              />
              {errors.pickupStartTime && (
                <p className="mt-2 text-sm text-red-600">{errors.pickupStartTime}</p>
              )}
            </div>

            <div>
              <label htmlFor="pickupEndTime" className="block text-sm font-medium text-gray-700">
                Pickup End Time
              </label>
              <input
                type="datetime-local"
                name="pickupEndTime"
                id="pickupEndTime"
                value={formData.pickupEndTime}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
              />
              {errors.pickupEndTime && (
                <p className="mt-2 text-sm text-red-600">{errors.pickupEndTime}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              name="category"
              id="category"
              value={formData.category}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="mt-2 text-sm text-red-600">{errors.category}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Allergens
            </label>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {allergens.map((allergen) => (
                <div key={allergen} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`allergen-${allergen}`}
                    checked={formData.allergens.includes(allergen)}
                    onChange={() => handleAllergenChange(allergen)}
                    className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <label
                    htmlFor={`allergen-${allergen}`}
                    className="ml-2 text-sm text-gray-700"
                  >
                    {allergen}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Create Deal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 