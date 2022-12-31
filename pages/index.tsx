import 'react'
import React from 'react'
import CityList from './cities'
import styles from '../styles/Home.module.css'


export default function Home() {

    const [user, setUser] = React.useState(null)

  if (user) {
    return (
      <div className={styles['base-container']}></div>
    )
  } else {
    return (
        <div className={styles['base-container']}>
          <CityList />
        </div>
    )
  }
}
