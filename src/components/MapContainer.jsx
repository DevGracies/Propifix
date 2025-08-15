'use client';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from 'react-leaflet';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Rating } from '@mui/material';

const customIcon = new L.Icon({
  iconUrl: "/leaflet/marker-icon.png",
  shadowUrl: "/leaflet/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const MapComponent = ({ professionals = [], center = [6.5244, 3.3792], isLoading = false, currentCategory = 'house agent' }) => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [mapCenter, setMapCenter] = useState(center);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (center && center.length === 2) {
      setMapCenter(center);
    }
  }, [center]);

  const getNoResultsMessage = () => {
    if (professionals.length === 0 && !isLoading) {
      if (currentCategory && !['house agent', 'caretaker', 'landlord'].includes(currentCategory)) {
        return `No artisans (${currentCategory}) found in this area`;
      }
      return `No ${currentCategory}s found in this area`;
    }
    return null;
  };

  if (!mounted) return null;

  return (
    <div className="w-full h-full overflow-hidden clip-diagonal-left border border-gray-200 shadow-md relative">
      {isLoading && (
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-[1000]">
          <div className="bg-white rounded-lg p-4 shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-purple-600"></div>
              <span className="text-sm text-gray-700">Finding professionals...</span>
            </div>
          </div>
        </div>
      )}
      
      <MapContainer
        center={mapCenter}
        zoom={12}
        scrollWheelZoom={false}
        zoomControl={false}
        className="w-full h-full z-0"
        key={`${mapCenter[0]}-${mapCenter[1]}`}
      >
        <ZoomControl position="topright" />
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* Show message when no professionals found */}
        {getNoResultsMessage() && (
          <Marker position={mapCenter} icon={customIcon}>
            <Popup>
              <div className="text-sm text-center">
                {getNoResultsMessage()}
              </div>
            </Popup>
          </Marker>
        )}

        {/* Render professional markers */}
        {professionals?.map((professional) => {
          if (!professional.lat || !professional.lng) return null;

          const getRoutePrefix = (type) => {
            switch (type) {
              case 'agent':
                return 'agent';
              case 'artisan':
                return 'artisan';
              case 'caretaker':
                return 'caretaker';
              case 'landlord':
                return 'landlord';
              default:
                return 'professional';
            }
          };

          const getProfessionalLabel = (professional) => {
            if (professional.type === 'artisan' && professional.skill) {
              return `Artisan (${professional.skill})`;
            }
            return professional.user || professional.type;
          };

          return (
            <Marker
              key={professional.id}
              position={[professional.lat, professional.lng]}
              title={professional.name}
              icon={customIcon}
            >
              <Popup>
                <div className="min-w-[200px]">
                  <p className="font-semibold text-sm mb-1">{professional.name}</p>
                  <p className="text-xs text-gray-600 mb-2">
                    {getProfessionalLabel(professional)}
                  </p>
                  <div className="mb-2">
                    <Rating
                      value={professional.rating || 0}
                      precision={0.5}
                      readOnly
                      size='small'
                    />
                  </div>
                  <button
                    className="w-full border border-purple-500 text-purple-600 hover:bg-purple-50 rounded-xl cursor-pointer text-xs py-1 px-2 transition-colors"
                    onClick={() => router.push(`/${getRoutePrefix(professional.type)}/${professional.id}`)}
                  >
                    See More
                  </button>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default MapComponent;