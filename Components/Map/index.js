import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Map"), { ssr: false });

const MapCaller = ({ address, icon }) => {
  return <Map address={address} />;
};

export default MapCaller;
