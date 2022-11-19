import styles from '../styles/city.module.css'
import Link from 'next/link'

function Coffee(props: any) {
    return (
        <Link className={styles['city-info-list-comp']} href={`coffee/${ 'medellin' }`}>
            Coffee
        </Link>
    );
}

export { Coffee }