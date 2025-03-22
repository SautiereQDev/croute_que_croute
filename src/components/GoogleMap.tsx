import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "0.5rem",
};

const center = {
  lat: 48.8566, // Coordonnées pour Paris
  lng: 2.3522,
};

const options = {
  disableDefaultUI: false,
  zoomControl: true,
  mapTypeControl: false,
  streetViewControl: false,
  fullscreenControl: true,
};

function MyMapComponent() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="w-full h-full shadow-lg rounded-lg overflow-hidden">
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
        onLoad={() => setIsLoaded(true)}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          options={options}
        >
          {isLoaded && (
            <Marker
              position={center}
              title="Croûte que Croûte"
              animation={google.maps.Animation.BOUNCE}
            />
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default MyMapComponent;
