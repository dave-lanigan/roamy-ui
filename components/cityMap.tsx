import React from "react";
import { ReactDOM } from "react";
import Map from 'react-map-gl';

const mpKey: string = "pk.eyJ1IjoiYm9oZW1kZXYiLCJhIjoiY2xhcHl2Nm5jMWR3czNubm0xaHdhdXBleCJ9.cTpiIO2mB0rmUtu4XLzKtA"
const mapStyle: string = "mapbox://styles/bohemdev/clapz10w6000s14qp97q8d1md"

export default function MapComp(props) {
    
    const [viewState, setViewState] = React.useState<any>({
        //latitude: props.lat,
        //longitude: props.long,
        latitude: 6.247035516682649,
        longitude: -75.56699261017286,
        zoom: 10,
        width:"100%",
        height:"100%"
    })

    return(
        <Map
            mapStyle={mapStyle}
            mapboxAccessToken={mpKey}
            {...viewState}
            onMove={evt => setViewState(evt.viewState)}
        >
        </Map>
    );

}