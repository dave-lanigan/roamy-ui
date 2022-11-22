//import Head from 'next/head'
//import Image from 'next/image'
import 'react'
import React from 'react'
import CityList from '../components/cityList'
import styles from '../styles/Home.module.css'

const api : string = "http://127.0.0.1:8000"

export default function Home() {

    const [user, setUser] = React.useState(null)

  if (user) {
    return (
      <div className={styles.container}></div>
    )
  } else {
    return (
      <div className={styles.container}><CityList /></div>
    )
  }
}
