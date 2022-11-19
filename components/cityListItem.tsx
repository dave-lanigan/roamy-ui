import React from 'react';
import Link from 'next/link'
import styles from '../styles/cityList.module.css';

export default function App(props: any) {

    let name: string = props.data.name;
    let img: string = props.data.img;

    //console.log( props.key )

    return (
        <Link href={props.data.tag}>
            <a>
                <div className={styles.city}>
                    <img className={styles['city-image']} src={img} />
                    <div className={styles['city-name']}>{ name }</div>
                </div>
            </a>
        </Link>
    );
}