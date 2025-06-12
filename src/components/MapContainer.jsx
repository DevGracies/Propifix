'use client';

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from 'react-leaflet';
import { useRouter } from 'next/navigation';
import L from 'leaflet';

const LeafletMap = ({ agents }) => {
  const router = useRouter();
  const defaultPosition = [6.5244, 3.3792];

  return (
    <MapContainer
      center={defaultPosition}
      zoom={12}
      scrollWheelZoom={false}
      zoomControl={false}
      className="w-full h-full rounded-xl shadow-md border border-gray-200 z-0"
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

      {agents?.map((agent) => (
        <Marker
          key={agent.id}
          position={[agent.lat, agent.lng]}
          title={agent.name}
          icon={L.icon({
            iconUrl: '/icons/marker.svg',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [0, -40],
          })}
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
      ))}
    </MapContainer>
  );
};

export default LeafletMap;
