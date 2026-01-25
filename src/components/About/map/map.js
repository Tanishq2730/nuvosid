"use client";

import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import locations from "@/data/locations.json";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const Map = () => {
    // Custom decent marker icon with city label
    const createCustomIcon = (city) => {
        if (typeof window === 'undefined') return null;
        return L.divIcon({
            className: 'custom-map-marker',
            html: `
                <div class="marker-dot-wrapper">
                    <div class="marker-dot"></div>
                    <div class="marker-pulse"></div>
                    <span class="marker-label">${city}</span>
                </div>
            `,
            iconSize: [20, 20],
            iconAnchor: [10, 10]
        });
    };

    // Helper to create a curved path between two points
    const getCurvePoints = (start, end) => {
        const points = [];
        const steps = 30; // Reduced steps for performance with many points

        const lat1 = start[0];
        const lng1 = start[1];
        const lat2 = end[0];
        const lng2 = end[1];

        const midLat = (lat1 + lat2) / 2;
        const midLng = (lng1 + lng2) / 2;

        // Subtle curve offset
        const offset = 0.15;
        const controlLat = midLat + (lng2 - lng1) * offset;
        const controlLng = midLng - (lat2 - lat1) * offset;

        for (let i = 0; i <= steps; i++) {
            const t = i / steps;
            const lat = (1 - t) * (1 - t) * lat1 + 2 * (1 - t) * t * controlLat + t * t * lat2;
            const lng = (1 - t) * (1 - t) * lng1 + 2 * (1 - t) * t * controlLng + t * t * lng2;
            points.push([lat, lng]);
        }
        return points;
    };

    // Calculate curves in sequence or hub-spoke
    // For many markers, connecting them in clusters or a chain looks best.
    // Here we'll do a chain for simplicity or hub-spoke from Mumbai (index 0)
    const curves = [];
    const hub = [locations[0].lat, locations[0].lng];

    // Option 1: Hub & Spoke (Every location connects to Mumbai)
    /*
    locations.slice(1).forEach(loc => {
        curves.push(getCurvePoints(hub, [loc.lat, loc.lng]));
    });
    */

    // Option 2: Sequential Chain (Looks like a journey/growth path)
    for (let i = 0; i < locations.length - 1; i++) {
        curves.push(getCurvePoints(
            [locations[i].lat, locations[i].lng],
            [locations[i + 1].lat, locations[i + 1].lng]
        ));
    }

    return (
        <section className="mainSection">
            <div className="container">
                <div className="HeadingSection mb-5">
                    <h1>Our National Presence</h1>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                        Spanning across {locations.length} major cities and industrial hubs.
                    </p>
                </div>

                <div className="map-wrapper">
                    <MapContainer
                        center={[22.9734, 78.6569]} // India center
                        zoom={5}
                        scrollWheelZoom={false}
                    >
                        <TileLayer
                            attribution='&copy; CARTO'
                            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                        />

                        {/* Connected curved lines */}
                        {curves.map((points, idx) => (
                            <Polyline
                                key={idx}
                                positions={points}
                                color="var(--accent-custom)"
                                weight={1.5}
                                opacity={0.4}
                                dashArray="4, 8"
                                lineCap="round"
                            />
                        ))}

                        {locations.map((loc) => (
                            <Marker
                                key={loc.id}
                                position={[loc.lat, loc.lng]}
                                icon={createCustomIcon(loc.city)}
                            >
                                <Popup>
                                    <div className="popup-content">
                                        <h6 style={{ color: 'var(--accent-custom)', margin: 0 }}>{loc.city}</h6>
                                        <p style={{ margin: '5px 0 0', fontSize: '0.8rem' }}>{loc.address}</p>
                                    </div>
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