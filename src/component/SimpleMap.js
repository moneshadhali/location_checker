import { Icon } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const SimpleMap = ({ longitude, latitude }) => {
  const position = [latitude, longitude];
  const newIcon = new Icon({
    iconUrl: require("../img/icon-map.png"),
    iconSize: [38, 38], //size of the icon
  });

  return (
    <>
      <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={newIcon}>
          <Popup>IP Location</Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default SimpleMap;
