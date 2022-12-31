import React, { FunctionComponent } from 'react';
import { useQuery } from 'react-query';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/cityList.module.css';
import { MdLocalGroceryStore, MdFastfood } from 'react-icons/md';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { IoLanguage } from 'react-icons/io5';
import {
  AiFillCar,
  AiFillSafetyCertificate,
  AiFillStar,
  AiOutlineStar,
  AiOutlineWifi
} from 'react-icons/ai';
import {ImAirplane} from 'react-icons/im';
import Image from 'next/image';
import Loading from '../components/loading'
import FailedToLoad from '../components/failedToLoad'

import {dataAPI} from '../appConfig';


interface ICityQuickData {
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
  img: string,
  complete: boolean
}


function City(props: {data: ICityQuickData}) {
  
  let name: string = props.data.name;
  let img: string = props.data.img;
  
  const [imgSrc, setImgSrc] = useState<string>(img);

  const englishRating: any[] = [];
  const safetyRating: any[] = [];
  
  for (let i: number = 1; i<6; i++) {
    if (i <= props.data.english ){
      englishRating.push(<AiFillStar key={i} />)
    }
    else{
      englishRating.push(<AiOutlineStar key={i}/>)
    }
  }
  
  for (let i: number = 1; i<6; i++) {
    if (i <= props.data.safety ){
      safetyRating.push(<AiFillStar key={i}/>)
    }
    else{
      safetyRating.push(<AiOutlineStar key={i}/>)
    }
  }
  
  return (
      <div className={styles.city}>
        <Link href={props.data.tag}>
          <img className={styles['city-image']} src={ img } />
        </Link>

        <div className={styles['city-name-container']}>
          <div className={styles['city-name']}>{ name }</div>
          <div className={styles['country-name']}>{ props.data.country }</div>
        </div>
        
        <div className={styles['city-quick-data']}>
          {/* <div className={styles['city-quick-data-item']}>
            <BsFillHouseDoorFill />
            <div className={styles['city-quick-data-item-text']}>
              Airbnb: ${props.data.airbnb}
            </div>
          </div> */}

          <div className={styles['city-quick-data-item']}>
            <AiOutlineWifi />
            <div className={styles['city-quick-data-item-text']}>
              Internet: {props.data.internet} mbs
            </div>
          </div>

          <div className={styles['city-quick-data-item']}>
            <MdFastfood />
            <div className={styles['city-quick-data-item-text']}>
              Food: ${props.data.food}
            </div>
          </div>

          <div className={styles['city-quick-data-item']}>
            <AiFillCar />
            <div className={styles['city-quick-data-item-text']}>
              Rides: ${props.data.rides}
            </div>
          </div>

          <div className={styles['city-quick-data-item']}>
            <IoLanguage />
            <div className={styles['city-quick-data-item-stars']}>
              <div>English:</div>
              <div>{englishRating}</div>
            </div>
          </div>

          <div className={styles['city-quick-data-item']}>
            <AiFillSafetyCertificate />
            <div className={styles['city-quick-data-item-stars']}>
              <div>Safety:</div>
              <div>{safetyRating}</div>
            </div>
            </div>

          </div>
      </div>
  );
}


export default function App() {

  const search = useQuery('searchTF')

  console.log("search", search.data)
  
  // sort by living cost, flight cost, popularity, current temp
  const {isLoading, data, isError } = useQuery('city-short-data', async () => {
    try {
      let url = `${dataAPI.api}/cities/quick-data?=l`
      let resp = await fetch(url)
      let out = await resp.json()
      return (out)
    } catch (err) {
      return(err)
    }
  })

  if (data) {
    let cityList: any = data.map((city)=>{
      return( <City key={city.tag} data={ city }/> );
    })
    return(
      <>
        { search.data? <p>Hi Jim</p> : ""}
        <div className={styles.cities}>{ cityList }</div>
      </>
    );
  } else if (isLoading) {
    return( <Loading /> );
  } else {
    return( <FailedToLoad /> );
  }
}