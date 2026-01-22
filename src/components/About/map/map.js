"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import locations from "@/data/locations.json";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default marker icon issue in Next.js
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png"
});

const Map = () => {
    return (
        <section className="mainSection">
            <div className="container">
                <div className="HeadingSection mb-5">
                    <h1>Our Locations</h1>
                </div>

                <div className="map-wrapper">
                    <MapContainer
                        center={[22.9734, 78.6569]} // India center
                        zoom={5}
                        scrollWheelZoom={false}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                        />

                        {locations.map((loc) => (
                            <Marker key={loc.id} position={[loc.lat, loc.lng]}>
                                <Popup>
                                    <strong>{loc.city}</strong>
                                    <br />
                                    {loc.address}
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>
            </div>
        </section>
    );
};

export default Map;