import styles from '../styles/city.module.css';

import {Coffee} from './cityInfoItems'

import {MdFastfood, MdInfo} from 'react-icons/md';
import {BiHappyAlt, BiCoffee} from 'react-icons/bi';
import {CiTempHigh} from 'react-icons/ci';
import {FiPlusCircle, FiMapPin} from 'react-icons/fi';
import {HiUserGroup} from 'react-icons/hi';
import {RiCompassDiscoverLine} from "react-icons/ri";
import {AiOutlineHeart} from 'react-icons/ai';
import {CgCoffee} from 'react-icons/cg';
import {BsCloudSunFill} from 'react-icons/bs';


export default function App(props: any) {

    let tag: string = "medellin";
    
    return(
        <div className={styles['city-info-container']}>
            <div className={styles['city-info-item-container']}>
                <div className={styles['city-info-item-title']}>
                    <CgCoffee size={32}/>
                    <div>Coffee Shops</div>
                </div>
                <div className={styles['city-info-item-content']}>
                    {[
                        <Coffee city={ tag } />,
                        <Coffee city={ tag } />
                    ]}
                </div>
            </div>
            <div className={styles['city-info-item-title']}>
                <BsCloudSunFill size={32}/>
                <div>Temperature</div>
            </div>
            <div className={styles['city-info-item-title']}>
                <MdFastfood size={32}/>
                <div>Restaurants</div>
            </div>
            <div className={styles['city-info-item-title']}>
                <BiHappyAlt size={32}/>
                <div>Entertainment</div>
            </div>
        </div>
    );
}