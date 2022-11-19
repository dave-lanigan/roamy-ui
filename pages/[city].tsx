import styles from '../styles/city.module.css';
import React from 'react';
import CityStream from './cityLists'
import CityPosts from '../components/cityPosts'
import { useRouter } from 'next/router'
import {MdFastfood, MdInfo} from 'react-icons/md';
import {BiHappyAlt, BiCoffee} from 'react-icons/bi';
import {CiTempHigh} from 'react-icons/ci';
import {FiPlusCircle, FiMapPin} from 'react-icons/fi';
import {HiUserGroup} from 'react-icons/hi';
import {RiCompassDiscoverLine} from "react-icons/ri";
import {AiOutlineHeart} from 'react-icons/ai';
import {CgCoffee} from 'react-icons/cg';
import {BsCloudSunFill} from 'react-icons/bs';
//import {RiQuestionnaireLine}

import CityInfo from '../components/cityInfo'


function CityView(props: any) {

    console.log(props)

    if (props.data=="discover") {
        return( <CityStream /> );
    }
    else if (props.data=="info") {
        return( <CityInfo city={props.city } /> );
    } 
    else if (props.data=="groups") {
        return(<CityPosts city={props.city } />);
    }
    else if (props.data=="map") {
        return(<div>Hey</div>);
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

    let img: string = "https://www.travelandleisure.com/thmb/bS-cREn6CPem8zyIi8nIRjMcZQY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/mexico-city-MEXICOCITYTG0521-a25bef718b924f12b7ea483ea872934b.jpg"

    let city = {
        name: "Medellin",
        tag: "medellin",
        img: img,
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

  return (
    <div className={styles["city-container"]}>
        <div className={styles["city-banner"]}>
            <img className={styles['city-image']} src={city.img} />
            <div className={styles['city-name']} >{ city.name }</div>
            <AiOutlineHeart size={28} />
            
            <div className={styles['city-nav']}>
                <div className={styles['city-nav-comps-container']}>

                    <div id="discover" className={styles['city-nav-comps']} onClick={switchScreen } >
                        <RiCompassDiscoverLine size={34}/>
                    </div>
                    <div id="info" className={styles['city-nav-comps']} onClick={switchScreen} >
                        <MdInfo size={32}/>
                    </div>
                    <div id="groups" className={styles['city-nav-comps']} onClick={switchScreen} >
                        <HiUserGroup size={32} />
                    </div>
                    <div id="map" className={styles['city-nav-comps']} onClick={switchScreen} >
                        <FiMapPin size={29}/>
                    </div>
                </div>
            </div>
        
        </div>

        <div className={styles["content"]}>
            <CityView data={screen} city={city.tag}/>
        </div>

    </div>
  );
}

export default App;
