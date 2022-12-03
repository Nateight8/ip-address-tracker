import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import icon from "../../public/icon";
import MarkerPosition from "./MarkerPosition";
// import icon from "../../public/icon";

function Map({ address }) {
  return (
    <>
      {address && (
        <MapContainer
          style={{ position: "absolute", inset: 0, zIndex: -10 }}
          center={[address.location.lat, address.location.lng]}
          zoom={10}
          scrollWheelZoom={true}
        >
          {console.log(address.location.city)}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MarkerPosition address={address} />
        </MapContainer>
      )}
    </>
  );
}

export default Map;
