import styles from '../styles/posts.module.css'
import PostTitleInput from './postTitleInput'
import CityPostListItem from './cityPostListItem'
import {FiExternalLink} from 'react-icons/fi'
import Link from 'next/link'

import {GoPencil} from 'react-icons/go'


export default function App(props: any) {
//     let cityList: any = cities.map((city)=>{
//     return(
//         <City key={city.tag} data={ city }/>
//     );
//   })
    //const [query, setQuery] = React.useState("")

    return (
        <div>
            <div className={styles['create-post-container']}>
                <Link className={styles['create-post-button']} href={`post/${ 'medellin' }`}>
                    <div className={styles['create-post-text']}>Create A Post</div>
                    <GoPencil size={24} />
                </Link>
            </div>
            <div>
                {[
                    <CityPostListItem />,
                    <CityPostListItem />,
                    <CityPostListItem />,
                ]}
            </div>
        </div>
    );
  }