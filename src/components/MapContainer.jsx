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
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  shadowUrl: markerShadow.src,
});

const LeafletMap = ({ agents }) => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const defaultPosition = [6.5244, 3.3792];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full h-full overflow-hidden clip-diagonal-left border border-gray-200 shadow-md">
      <MapContainer
        center={defaultPosition}
        zoom={12}
        scrollWheelZoom={false}
        zoomControl={false}
        className="w-full h-full z-0"
      >
        <ZoomControl position="topright" />
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {(!agents || agents.length === 0) && (
          <Marker position={defaultPosition}>
            <Popup>
              <div className="text-sm text-gray-700">
                No agents found in this area.
              </div>
            </Popup>
          </Marker>
        )}

        {agents?.map((agent) => {
          if (!agent.lat || !agent.lng) return null;

          return (
            <Marker
              key={agent.id}
              position={[agent.lat, agent.lng]}
              title={agent.name}
            >
              <Popup>
                <div className="text-sm space-y-1 text-black">
                  <p className="font-semibold">{agent.name}</p>
                  <p className="text-xs text-gray-600">{agent.category}</p>
                  <p className="text-yellow-500 text-xs">⭐ {agent.stars}</p>
                  <button
                    className="text-blue-600 cursor-pointer underline text-xs hover:text-blue-800"
                    onClick={() => router.push(`/agent/${agent.id}`)}
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

export default LeafletMap;
