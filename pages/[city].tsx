/*
options: rankby: country, avg_cost, plane_ticket, safety, airbnb, user_liked
*/
import React from 'react'
import { useRouter } from 'next/router'

import { useQuery } from 'react-query';

import {MdInfo} from 'react-icons/md'
import {FiMapPin} from 'react-icons/fi'
import {RiCompassDiscoverLine} from "react-icons/ri"
import {AiOutlineHeart} from 'react-icons/ai'

import styles from '../styles/city.module.css'

import CityStream from '../components/cityStream'
import CityPosts from '../components/cityPosts'
import CityPlaces from '../components/cityPlaces'
import Map from '../components/cityMap'

import Loading from '../components/loading'
import FailedToLoad from '../components/failedToLoad'

import {cityNameFromTag} from '../utils'
import {dataAPI} from '../appConfig'


function CityView(props: any) {
    if (props.data=="discover") {
        return(<CityStream city={props.city}/>);
    }
    else if (props.data=="info") {
        return(<CityPlaces city={props.city } />);
    } 
    else if (props.data=="groups") {
        return(<CityPosts city={props.city } />);
    }
    else if (props.data=="map") {
        return(
            <div style={{height: '100vh'}}>
                <Map city={props.city}
                     lat={ props.content.lat}
                     lon={ props.content.lon} />
            </div>
);
    }
}


function App(props: any) {

    const [screen, setScreen] = React.useState<string>("discover")

    function switchScreen(event) {
        let newScreen: string = event.currentTarget.id;
        if (screen!=newScreen) {
            setScreen(newScreen)
        }
    }

    const router = useRouter();
    
    let tag: string = router.asPath.replace("/","");
    let name: string = cityNameFromTag( tag );

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

        let cityData: any
        
        for (let el of data) {
            if (el.tag==tag){
                cityData = el;
                break
            }
        }

        return (
            <div className={styles["city-container"]}>
                <div className={styles["city-banner"]}>
                    <img className={styles['city-image']} src={cityData.img} />
                    <div className={styles['city-name']} >{ name }</div>
                    <AiOutlineHeart size={28} />
                    <div className={styles['city-nav']}>
                        <div className={styles['city-nav-comps-container']}>
    
                            <div id="discover" className={styles['city-nav-comps']} onClick={switchScreen } >
                                <RiCompassDiscoverLine size={34}/>
                            </div>
                            <div id="info" className={styles['city-nav-comps']} onClick={switchScreen} >
                                <MdInfo size={32}/>
                            </div>
                            {/* <div id="groups" className={styles['city-nav-comps']} onClick={switchScreen} >
                                <HiUserGroup size={32} />
                            </div> */}
                            <div id="map" className={styles['city-nav-comps']} onClick={switchScreen} >
                                <FiMapPin size={29}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles["content"]}>
                    <CityView data={screen} city={tag} content={cityData} />
                </div>
            </div>
      );
    } else if (isLoading) {
        return( <Loading /> );
    } else {
        return( <FailedToLoad /> );
    }
}

export default App;
