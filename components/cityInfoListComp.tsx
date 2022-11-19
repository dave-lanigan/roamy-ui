import styles from '../styles/posts.module.css'
import Link from 'next/link'


export default function App(props: any) {
    return (
        <Link className={styles['city-info-list-comp']} href={`post/${ 'medellin' }`}>

        </Link>
    );
  }