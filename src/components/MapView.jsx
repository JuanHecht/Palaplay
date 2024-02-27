/* import locationData from '../data/locations.json'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS



function MapView(props){

    const { game, width, height, zoom } = props;

    const locations = locationData;

    function findCoords(locationName) {
        const location = locations.find(loc => loc.name === locationName);
        return location ? [location.latitude, location.longitude] : [0, 0];
    }

    return(
        <div>
            <MapContainer center={findCoords(game.location)} zoom={zoom} style={{ height: height, width: width }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={findCoords(game.location)}>
                        <Popup>{game.title}</Popup>
                    </Marker>
                </MapContainer>
        </div>
    )   
}

export default MapView; */
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; // Import Leaflet
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import locationData from '../data/locations.json';
import customMarker from '/assets/images/marker.png'; // Import your custom marker image

function MapView(props) {
    const { game, width, height, zoom } = props;

    const locations = locationData;

    function findCoords(locationName) {
        const location = locations.find(loc => loc.name === locationName);
        return location ? [location.latitude, location.longitude] : [0, 0];
    }

    // Define custom icon using Leaflet's L.Icon class
    const customIcon = L.icon({
        iconUrl: customMarker,
        iconSize: [60, 60], // Adjust icon size as needed
        iconAnchor: [40, 60], // Adjust anchor of icon
    });

    return (
        <div>
            <MapContainer center={findCoords(game.location)} zoom={zoom} style={{ height: height, width: width }}>
                {<TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />}
                <Marker position={findCoords(game.location)} icon={customIcon}>
                    <Popup>{game.title}</Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default MapView;
