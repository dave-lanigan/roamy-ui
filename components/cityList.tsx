import React, { FunctionComponent } from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/cityList.module.css';
import { MdLocalGroceryStore } from 'react-icons/md';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { IoLanguage } from 'react-icons/io5';
import {
  AiFillCar,
  AiFillSafetyCertificate,
  AiFillStar,
  AiOutlineStar
} from 'react-icons/ai';
import {ImAirplane} from 'react-icons/im';
import Image from 'next/image';


interface ICityQuickData {
  tag: string,
  name: string,
  iso3?: string,
  iata?: string,
  country?: string,
  airbnb: number,
  food: number,
  rides: number,
  english: number,
  safety: number,
  complete: boolean
}



let url: string = "https://www.travelandleisure.com/thmb/bS-cREn6CPem8zyIi8nIRjMcZQY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/mexico-city-MEXICOCITYTG0521-a25bef718b924f12b7ea483ea872934b.jpg"

let cities = [
  {
    tag: "medellin",
    name: "Medellin",
    img: url,
    ratingsSimple: {
      airbnb: 450,
      groceries:100,
      english: 3,
      safety: 4,

      transportation:{
          uber: 5,
          taxi: 5
      }
    }
  },
  {
    tag: "cmdx",
    name: "Medellin",
    img: url,
    ratingsSimple: {
      airbnb: 450,
      groceries:100,
      english: 3,
      safety: 4,
      transportation:{
          uber: 5,
          taxi: 5
      }
    }
  },
  {
      tag: "merida",  
      name: "Medellin",
      img: url,
      ratingsSimple: {
        airbnb: 450,
        groceries:100,
        english: 3,
        safety: 4,
        transportation:{
            uber: 5,
            taxi: 5
        }
  
    }
  }
]


function City(props: {data: ICityQuickData}) {
  const name: string = props.data.name;
  let img: string = `/img/cities/${ props.data.tag }.jpg`;
  let english: number = props.data.english;
  let safety: number = props.data.safety;
  //let img: string = props.data.img;
  let defaultImg: string = `/img/cities/random.jpg`;
  const [imgSrc, setImgSrc] = useState<string>(img);

  const englishRating: any[] = [];
  const safetyRating: any[] = [];
  
  for (let i: number = 1; i<6; i++) {
    if (i <= props.data.english ){
      englishRating.push(<AiFillStar />)
    }
    else{
      englishRating.push(<AiOutlineStar/>)
    }
  }
  
  for (let i: number = 1; i<6; i++) {
    if (i <= props.data.safety ){
      safetyRating.push(<AiFillStar />)
    }
    else{
      safetyRating.push(<AiOutlineStar />)
    }
  }
  


  return (
      <div className={styles.city}>
        <Link href={props.data.tag}>
        <img className={styles['city-image']} src={ defaultImg } />
        </Link>

        <div className={styles['city-name']}>{ name }</div>
        
        <div className={styles['city-quick-data']}>
          <div className={styles['city-quick-data-item']}>
            <BsFillHouseDoorFill />
            <div className={styles['city-quick-data-item-text']}>
              Airbnb: ${props.data.airbnb}
            </div>
          </div>

          <div className={styles['city-quick-data-item']}>
            <MdLocalGroceryStore />
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
  
  const api: string = "http://127.0.0.1:8000"
  const [cityQuickData, setCityQuickData ] = useState<ICityQuickData[] | undefined>(undefined);
  const [error, setError] = useState(null);

  useEffect(()=>{
    let url = `${api}/cities/quick-data/?=l`
    console.log(url)
    fetch(url)
    .then((resp)=>resp.json())
    .then((resp)=>setCityQuickData(resp))
  },[])

  if (cityQuickData) {
    let cityList: any = cityQuickData.map((city)=>{
      return(
          <City key={city.tag} data={ city }/>
      );
    })
    return(<div className={styles.cities}>{ cityList }</div>);
  } else {
    return(<div>Broken</div>);
  }
}