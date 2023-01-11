import React from 'react';
import GoogleMapReact from 'google-map-react';

import '../../assets/styles/homepart/map.css';

const Map = () => {
    const mapCenter = { lat: 28.419485, lng: 77.038512 };
    const mapZoom = 11;
    const Marker = ({ text }) => <div className="map-marker"></div>;
    function mapOptions(maps) {
        // next props are exposed at maps
        // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
        // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition", "SymbolPath", "ZoomControlStyle",
        // "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem", "DistanceMatrixStatus",
        // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType", "GeocoderStatus", "KmlLayerStatus",
        // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference", "TravelMode", "UnitSystem"
        return {
            panControl: false,
            mapTypeControl: false,
            scrollwheel: false,
            // zoomControlOptions: {
            //     position: maps.ControlPosition.RIGHT_CENTER,
            //     style: maps.ZoomControlStyle.SMALL
            // },
            // mapTypeControlOptions: {
            //     position: maps.ControlPosition.TOP_RIGHT
            // },
            // mapTypeControl: false,
          styles: [{ stylers: [{ 'saturation': -100 }, { 'gamma': 0.8 }, { 'lightness': 4 }, { 'visibility': 'off' }] }]
        };
    }

    return (
        <div className="map">
            <GoogleMapReact bootstrapURLKeys={{ key: "AIzaSyDR0s-GYwCEjqdpsoXBsdoOpD65xz2cUcE" }} defaultCenter={mapCenter} defaultZoom={mapZoom}>
                <Marker lat={mapCenter.lat} lng={mapCenter.lng} text="My Marker" /> 
            </GoogleMapReact>
            {/* options={mapOptions} */}
            {/* bootstrapURLKeys={{ key: "AIzaSyDR0s-GYwCEjqdpsoXBsdoOpD65xz2cUcE" }} */}
            {/* bootstrapURLKeys={{ key: "AIzaSyCahcnS5Io_grobJbK57Vr4QPn2FAqDLw0" }} */}
            {/* options={{ styles: mapStyles }} */}
            {/* AIzaSyDR0s-GYwCEjqdpsoXBsdoOpD65xz2cUcE */}
        </div>

   );
}
 
export default Map;