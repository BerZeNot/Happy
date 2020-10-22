import Leaflet from 'leaflet';

import mapMarkerImg from '../images/map-marker.svg';

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
  
    iconSize: [50, 60],
    iconAnchor: [29, 68],
    popupAnchor: [160, 2]
})

export default mapIcon;
