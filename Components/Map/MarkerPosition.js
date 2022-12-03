import React, { useEffect } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import icon from "../../public/icon";

function MarkerPosition({ address }) {
  const map = useMap();
  const position = [address.location.lat, address.location.lng];

  useEffect(() => {
    map.flyTo(position, 10, {
      animate: true,
    });
  }, [map, position]);
  return (
    <Marker icon={icon} position={position}>
      <Popup>{address.location.city}</Popup>
    </Marker>
  );
}

export default MarkerPosition;
