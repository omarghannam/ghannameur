/// <reference types="@types/google.maps" />
import { useState, useCallback, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, Libraries } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const defaultCenter = {
  lat: 51.5074, // London coordinates as default
  lng: -0.1278
};

interface Location {
  lat: number;
  lng: number;
  address?: string;
}

interface LocationPickerProps {
  onLocationSelect: (location: Location) => void;
  initialLocation?: Location;
}

const libraries: Libraries = ['places', 'geometry', 'drawing'];

export default function LocationPicker({ onLocationSelect, initialLocation }: LocationPickerProps) {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(initialLocation || null);
  const [map, setMap] = useState<google.maps.Map | null>(null);

  // Try to get user's current location
  useEffect(() => {
    if (navigator.geolocation && !initialLocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const currentLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          setSelectedLocation(currentLocation);
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }
  }, [initialLocation]);

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const handleMapClick = async (e: { latLng: google.maps.LatLng | null }) => {
    if (!e.latLng) return;

    const newLocation = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng()
    };

    // Get address from coordinates using Geocoding service
    try {
      const geocoder = new google.maps.Geocoder();
      const result = await geocoder.geocode({ location: newLocation });
      
      if (result.results[0]) {
        const fullLocation = {
          ...newLocation,
          address: result.results[0].formatted_address
        };
        setSelectedLocation(fullLocation);
        onLocationSelect(fullLocation);
      }
    } catch (error) {
      console.error('Geocoding error:', error);
      setSelectedLocation(newLocation);
      onLocationSelect(newLocation);
    }
  };

  return (
    <div className="w-full">
      <LoadScript 
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
        libraries={libraries}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={selectedLocation || defaultCenter}
          zoom={13}
          onLoad={onLoad}
          onUnmount={onUnmount}
          onClick={handleMapClick}
        >
          {selectedLocation && (
            <Marker
              position={selectedLocation}
              draggable={true}
              onDragEnd={async (e) => {
                if (e.latLng) {
                  handleMapClick({ latLng: e.latLng });
                }
              }}
            />
          )}
        </GoogleMap>
      </LoadScript>
      {selectedLocation?.address && (
        <div className="mt-2 text-sm text-gray-600">
          Selected location: {selectedLocation.address}
        </div>
      )}
    </div>
  );
} 