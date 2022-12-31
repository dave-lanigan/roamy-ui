import styles from '../styles/places.module.css'
import {FiExternalLink} from 'react-icons/fi'
import Link from 'next/link'


interface CityPlace {
    name: string,
    address: string,
    img: string,
    link: string,
    lat: number,
    lon: number,
  }

interface Props {
    data: CityPlace,
    city: string,
    key: number
}

export default function Place(props: Props) {

    let img: string = props.data.img;
    let title: string = props.data.name;
    let blurb: string = props.data.address;
    let link: string = props.data.link;

    return (
        <div className={ styles['bg-img']  } style={{backgroundImage: `url(${img})`}}>
            <div className={styles['place-link-container']}>
                <div className={styles['place-link']}>
                    <Link href={link ? link : "#"}>
                        <FiExternalLink style={{ color:"#219ebc"}} size={26}/>
                    </Link>
                </div>
            </div>
            <div className={styles['place-info-container']}>
                <div className={styles['place-info']}>
                    <div className={styles['place-name']}>{title}</div>
                    <div className={styles['place-blurb']}>{blurb}</div>
                </div>
            </div>
        </div>
    );
}