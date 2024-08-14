import { useState, useRef } from "react";
import markerImage from "../assets/marker.webp";
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import useGeoLocation from "../customHooks/useGeoLocation";
import { Button } from "@mui/material";
import RoutingComponent from "./RoutingComponent";

const center = { lat: 28.7041, lng: 77.1025 };
const markerIcon = new L.Icon({
  iconUrl: markerImage,
  iconSize: [45, 45],
  popupAnchor: [0, -20],
});

const MapComponent = () => {
  const [position, setPosition] = useState(center);
  const [routes, setRoutes] = useState({
    start: [],
    end: [],
  });
  const mapRef = useRef();
  const ZOOM = 9;

  const myLocation = useGeoLocation();

  const showMyLocation = () => {
    if (myLocation.loaded) {
      mapRef.current.flyTo(
        [myLocation.coordinates.lat, myLocation.coordinates.lng],
        ZOOM,
        { animate: true }
      );
    } else {
      alert(myLocation.error);
    }
  };
  const MapClickHandler = () => {
    useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;

        if (routes.start.length === 0) {
          setRoutes({
            ...routes,
            start: [lat, lng],
          });
        } else {
          setRoutes({
            ...routes,
            end: [lat, lng],
          });
        }
      },
    });
    return null;
  };

  return (
    <div className="flex flex-col gap-4 w-full items-center">
      <MapContainer center={position} zoom={ZOOM} ref={mapRef}>
        <TileLayer
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=tnJjWx0rdsXDXVYRkvPC"
        />
        <MapClickHandler />
        {myLocation.loaded && (
          <Marker
            position={[myLocation.coordinates.lat, myLocation.coordinates.lng]}
            icon={markerIcon}
          ></Marker>
        )}
        {routes.start.length !== 0 && routes.end.length !== 0 && (
          <RoutingComponent
            map={mapRef.current}
            start={routes.start}
            end={routes.end}
          />
        )}
      </MapContainer>
      <div className="flex gap-10">
        <Button onClick={showMyLocation} variant="contained">
          Show My Location🌐
        </Button>
        <Button
          onClick={() => setRoutes({ start: [], end: [] })}
          variant="contained"
        >
          Reset the Route
        </Button>
      </div>
    </div>
  );
};

export default MapComponent;
