import styles from '../styles/places.module.css'
import Link from 'next/link'

export default function Place(props: any) {

    let img: string = "https://lh5.googleusercontent.com/p/AF1QipNkMKlOVSnarLLZOe-GYGejvkTEul2KXSFj_r9S=w408-h544-k-no";
    let title: string = "Jimbo's Nice Coffee Shop";
    let blurb: string = "Coffee shop with something vibes.";

    return (
        <div className={styles['bg-img']}>
            <Link href={`coffee/${ 'medellin' }`}>
                <img className={styles['img-w-bg']} src={img} />
            </Link>
            <div>
                <div className={styles['place-name']}>{title}</div>
                <div className={styles['place-blurb']}>{blurb}</div>
            </div>
        </div>
    );
}