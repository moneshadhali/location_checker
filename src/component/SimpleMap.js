import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const SimpleMap = ({ longitude, latitude }) => {
  const mapRef = useRef(null);
  const position = [latitude, longitude];

  return (
    <>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        ref={mapRef}
        style={{ height: "50vh", width: "50vw" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>your location</Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default SimpleMap;
