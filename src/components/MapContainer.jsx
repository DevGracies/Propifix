"use client";
import { MapContainer, TileLayer, Marker, Popup, ZoomControl, CircleMarker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = ({ agents }) => {
  const defaultPosition = [6.5244, 3.3792];

  return (
    <MapContainer
      center={defaultPosition}
      zoom={12}
      className="flex-2/3 h-[400px] lg:h-full w-full   lg:absolute top-0 right-0 z-0"
      scrollWheelZoom={false}
    >
      <ZoomControl position="topright" />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {agents.map((agent) => (
        <Marker
          key={agent.id}
          position={[agent.lat, agent.lng]}
          icon={L.icon({ iconUrl: "/icons/marker.svg", iconSize: [25, 41] })}
        >
          <Popup>
            <strong>{agent.name}</strong> <br />
            {agent.category}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
