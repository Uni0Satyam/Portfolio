import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";


const MapView = () => {
    const mapRef = useRef(null);
    const mapDivRef = useRef(null);
    const apiKeyRef = useRef(null);

    useEffect(() => {
        if (mapRef.current) return;

        const initMap = async () => {
            const res = await fetch("https://portfolio-u0tl.onrender.com/api/map-key");
            const data = await res.json();
            apiKeyRef.current = data.apiKey;

            const lat = 25.4345716;
            const lon = 81.7524959;

            mapRef.current = L.map(mapDivRef.current).setView(
                [lat, lon],
                12
            );

            L.tileLayer(
                `https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey=${apiKeyRef.current}`,
                {
                    attribution:
                        '© <a href="https://www.geoapify.com/">Geoapify</a>',
                }
            ).addTo(mapRef.current);

            L.marker([lat, lon])
                .addTo(mapRef.current)
                .bindPopup("Peepal Gaon, Prayagraj, India");
        };

        initMap();
    }, []);

    return (
        <div
            ref={mapDivRef}
            style={{ height: "30rem", width: "100%" }}
        />
    );
};

export default MapView;
