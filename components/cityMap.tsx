import React from "react";
import { useQuery } from 'react-query';
import Map, {Marker} from 'react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css";

import {ICityPlace, ICityShortData} from '../interfs/interfs';
import {dataAPI} from '../appConfig'
import MapPin from './mapPin'

const mpKey: string = "pk.eyJ1IjoiYm9oZW1kZXYiLCJhIjoiY2xhcHl2Nm5jMWR3czNubm0xaHdhdXBleCJ9.cTpiIO2mB0rmUtu4XLzKtA"
const mapStyle: string = "mapbox://styles/bohemdev/clapz10w6000s14qp97q8d1md"


export default function MapComp(props) {

  let lat = 6.247035516682649
  let lon = -75.56699261017286

  const [viewState, setViewState] = React.useState<any>({
    latitude: props.lat,
    longitude: props.lon,
    zoom: 10,
    width:"100%",
    height:"100%"
  })

  const coffeePinsQuery = useQuery(`${props.city}-coffee-places`, async () => {
    let kind: string = "coffee"
    try {
        let url = `${dataAPI.api}/info/${props.city}/places?kind=${kind}`
        let resp = await fetch(url)
        let out = await resp.json()
        
        let ps = out.map((items, index) => {
          return(<MapPin key={`${kind}-${index}`} lat={items.lat} lon={items.lon} kind={kind} />)
        })
        return (ps)

    } catch (err) {
        return(err)
    }
  })

  const foodPinsQuery = useQuery(`${props.city}-food-places`, async () => {
    let kind: string = "food"
    try {
        let url = `${dataAPI.api}/info/${props.city}/places?kind=${kind}`
        let resp = await fetch(url)
        let out = await resp.json()

        let ps = out.map((items, index) => {
          return(<MapPin key={`food-${index}`} lat={items.lat} lon={items.lon} kind={kind}/>)
        })
        return (ps)
    } catch (err) {
        return(err)
    }
  })

  const funPinsQuery = useQuery(`${props.city}-fun-places`, async () => {
    let kind: string = "fun"
    try {
        let url = `${dataAPI.api}/info/${props.city}/places?kind=${kind}`
        let resp = await fetch(url)
        let out = await resp.json()
        
        let ps = out.map((item, index) => {
          return(
            <MapPin key={`fun-${index}`} lat={item.lat} lon={item.lon} kind={kind}/>
          )
        })
        return (ps)
      } catch (err) {
        return(err)
    }
  })
      
  if (coffeePinsQuery.data && foodPinsQuery.data && funPinsQuery.data) {
    let jimbo = [...coffeePinsQuery.data, ...foodPinsQuery.data, ...funPinsQuery.data]
    return(
      <Map
        mapStyle={mapStyle}
        mapboxAccessToken={mpKey}
        {...viewState}
        onMove={evt => setViewState(evt.viewState)}
      > { jimbo } </Map>
    );
  } else {
    return(
      <Map
        mapStyle={mapStyle}
        mapboxAccessToken={mpKey}
        {...viewState}
        onMove={evt => setViewState(evt.viewState)}
      ></Map>
    );
  }
}