import React from 'react'
import { useQuery } from 'react-query';

import {MdFastfood} from 'react-icons/md'
import {BiHappyAlt} from 'react-icons/bi'
import {CgCoffee} from 'react-icons/cg'

import styles from '../styles/city.module.css'

import Place from './places'
import {dataAPI} from '../appConfig'
import Loading from './loading'
import FailedToLoad from './failedToLoad'


// interface CityPlace {
//     name: string,
//     address: string,
//     img: string,
//     link: string,
//     lat: number,
//     lon: number,
//   }


function PlacesList (props: any) {
    const {isLoading, data, isError } = useQuery(`${props.city}-${props.kind}-places`, async () => {
        try {
            let url = `${dataAPI.api}/info/${props.city}/places?kind=${props.kind}`
            let resp = await fetch(url)
            let out = await resp.json()
            return (out)
        } catch (err) {
            return(err)
        }
      })
      
    if (data) {
        if ( data.length==0 ) { return( <FailedToLoad /> ); }
        let cityList: any = data.map((info)=>{
            return( <Place key={info.pid} data={ info }/> );
        })
        return(cityList);
    } else if (isLoading) {
        return( <Loading /> );
    } else {
        return( <FailedToLoad /> );
}
}


export default function App(props: any) {
    let tag: string = props.city;
    return(
        <div className={styles['city-info-container']}>
            <div className={styles['city-info-item-container']}>
                <div className={styles['city-info-item-title']}>
                    <CgCoffee size={32}/>
                    <div>Coffee Shops</div>
                </div>
                <div className={styles['city-info-item-places']}>
                    {<PlacesList city={tag} kind={"coffee"}/>}
                </div>
            </div>

            <div className={styles['city-info-item-container']}>
                <div className={styles['city-info-item-title']}>
                    <MdFastfood size={32}/>
                    <div>Restaurants</div>
                </div>
                <div className={styles['city-info-item-places']}>
                    {<PlacesList city={tag} kind={"food"}/>}
                </div>
            </div>

            <div className={styles['city-info-item-container']}>
                <div className={styles['city-info-item-title']}>
                    <BiHappyAlt size={32}/>
                    <div>Entertainment</div>
                </div>
                <div className={styles['city-info-item-places']}>
                    {<PlacesList city={tag} kind={"fun"}/>}
                </div>
            </div>
        
        </div>
    );
}