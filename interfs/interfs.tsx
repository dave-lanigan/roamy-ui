interface ICityShortData {
    tag: string,
    name: string,
    iso3?: string,
    iata?: string,
    country?: string,
    airbnb: number,
    internet: number,
    food: number,
    rides: number,
    english: number,
    safety: number,
    complete: boolean
  }

interface ICityPlace {
    name: string,
    address: string,
    img: string,
    link: string,
    lat: number,
    lon: number,
}


export type {ICityPlace, ICityShortData}