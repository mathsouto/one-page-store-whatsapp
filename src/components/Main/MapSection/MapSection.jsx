import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import styles from "./mapSection.module.css";

function MapSection() {
  const position = [-23.538259736969426, -46.64260043295379];
  const zoom = 16;
  const THUNDERFOREST_API_KEY = "90bd1e0757d54d5995aa2add73faf208";
  const redLocationIcon = L.divIcon({
    className: "custom-div-icon",
    html: '<i class="fa-solid fa-location-dot" style="display:flex; justify-content:center; color: var(--gray-btn); font-size: 35px;"></i>',
    iconSize: [35, 35],
    iconAnchor: [17, 35],
    popupAnchor: [0, -35],
  });

  return (
    <section id="map" className={styles.mapSection}>
      <div className={styles.mapContainer}>
        <MapContainer
          center={position}
          zoom={zoom}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution=""
            url={`https://tile.thunderforest.com/atlas/{z}/{x}/{y}.png?apikey=${THUNDERFOREST_API_KEY}`}
          />
          <Marker position={position} icon={redLocationIcon}>
            <Popup>Wing Motos - General Osório, 495</Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
}

export default MapSection;
