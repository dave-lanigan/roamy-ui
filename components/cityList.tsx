import React from 'react';
import Link from 'next/link';
import styles from '../styles/cityList.module.css';
import { MdLocalGroceryStore } from 'react-icons/md';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { IoLanguage } from 'react-icons/io5';
import { AiFillCar, AiFillSafetyCertificate } from 'react-icons/ai';
import {ImAirplane} from 'react-icons/im';



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


function City(props: any) {

  let name: string = props.data.name;
  let img: string = props.data.img;
  
  
  return (
      <div className={styles.city}>
        <Link href={props.data.tag}>
        <img className={styles['city-image']} src={img} />
        </Link>
          

          {/* <div className={styles['city-trip-est']}>
            <BsFillHouseDoorFill />
            <div>
              Flights: ${props.data.ratingsSimple.flights}
            </div>
          </div> */}


          <div className={styles['city-name']}>{ name }</div>
          
          <div className={styles['city-quick-data']}>
            <div className={styles['city-quick-data-item']}>
              <BsFillHouseDoorFill />
              <div className={styles['city-quick-data-item-text']}>
                Airbnb: ${props.data.ratingsSimple.airbnb}
              </div>
            </div>

            <div className={styles['city-quick-data-item']}>
              <MdLocalGroceryStore />
              <div className={styles['city-quick-data-item-text']}>
                Food: ${props.data.ratingsSimple.groceries}
              </div>
            </div>

            <div className={styles['city-quick-data-item']}>
              <AiFillCar />
              <div className={styles['city-quick-data-item-text']}>
                Rides: ${props.data.ratingsSimple.transportation.uber}
              </div>
            </div>

            <div className={styles['city-quick-data-item']}>
              <IoLanguage />
              <div className={styles['city-quick-data-item-text']}>
                English: {props.data.ratingsSimple.english}
              </div>
            </div>

            <div className={styles['city-quick-data-item']}>
              <AiFillSafetyCertificate />
              <div className={styles['city-quick-data-item-text']}>
                Safety: {props.data.ratingsSimple.safety}
              </div>
            </div>

            {/* <div className={styles['city-quick-data-item']}>
              <ImAirplane />
              <div className={styles['city-quick-data-item-text']}>
                Flight: {props.data.ratingsSimple.flights}
              </div>
            </div> */}

          </div>
      </div>
  );
}


export default function App() {
  let cityList: any = cities.map((city)=>{
  return(
      <City key={city.tag} data={ city }/>
  );
})
  return (<div className={styles.cities}>{ cityList }</div>);
}