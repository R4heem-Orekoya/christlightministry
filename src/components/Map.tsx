// import { useState } from "react";
import { MdCancel } from "react-icons/md";
import { useContext } from "react"
import { Context } from "../context/MapContext";
// import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

const Map = () => {
   // const [mapCenter, setMapCenter] = useState([51.505, -0.09]); // Initial center (London)
   // const [location, setLocation] = useState({ lat: 40.7128, lng: -74.0059 });
   const { setIsMapOpen } = useContext(Context)
   return (
      <div className="fixed z-[500] inset-0 bg-black/80 backdrop-blur-xl grid place-items-center top-0 duration-300">
         <div className="relative max-w-lg w-[90%] bg-white py-8 px-4">
            <h2 className="text-center text-xl font-semibold">Our Location</h2>
            <button 
               onClick={() => {
                  setIsMapOpen(false)
               }}
               className="absolute -top-12 right-0 sm:top-0 sm:-right-12 text-white">
               <MdCancel size={30}/>
            </button>
            
            <div>
               {/* <MapContainer center={mapCenter} zoom={13} style={{ height: '200px' }}>
                  <TileLayer
                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={location}>
                     <Popup>You are here!</Popup>
                  </Marker>
               </MapContainer> */}
               <p className="text-xl font-semibold text-center text-zinc-600 mt-6">Map will be embbeded here!!</p>
            </div>
         </div>
      </div>
   )
}

export default Map
