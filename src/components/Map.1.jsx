import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useState } from "react";
import { useCities } from "../contexts/CitiesContext";

export const Map = () => {
  const [position, setPosition] = useState([40, 0]);
  const navigate = useNavigate();
  const { cities } = useCities();
  const [searchParams, setSerarchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  console.log(lng, " lattitude");
  return (
    <div className={styles.mapContainer}>
      <MapContainer
        className={styles.map}
        center={position}
        center={[lat, lng]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            key={city.id}
            position={[city.position.lat, city.position.lng]}
          >
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
