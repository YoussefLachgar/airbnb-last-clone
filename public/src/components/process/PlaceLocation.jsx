import React from "react";
import { Map } from "react-map-gl";
import GeocoderControl from "./geocoder-control";

const PlaceLocation = () => {


  return <div className="flex flex-col justify-center items-center h-full gap-5">
    <h2 className="font-semibold text-4xl">
      wich of these best describe your place?
    </h2>
    <p>
      your address is only shared with guests after they've made a reservation.
    </p>
    <div className="h-[400px] w-[700px]">
      <Map
        initialViewState={{ 
          longitude: 33.5731,
          latitude: 7.5898,
          zoom: 13,
         }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        >
        <GeocoderControl
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
          position="top-left"
          marker={true}
          onLoading={() => {}}
          onResults={() => {}}
          onResult={() => {}}
          onError={() => {}}
        />
      </Map>
    </div>
  </div>;
};

export default PlaceLocation;
