import 'react'
import React from 'react'
import CityList from './cities'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'

export default function Home() {

  const getMobileDetect = (userAgent: NavigatorID['userAgent']) => {
    const isAndroid = () => Boolean(userAgent.match(/Android/i))
    const isIos = () => Boolean(userAgent.match(/iPhone|iPad|iPod/i))
    const isOpera = () => Boolean(userAgent.match(/Opera Mini/i))
    const isWindows = () => Boolean(userAgent.match(/IEMobile/i))
    const isSSR = () => Boolean(userAgent.match(/SSR/i))
    const isMobile = () => Boolean(isAndroid() || isIos() || isOpera() || isWindows())
    const isDesktop = () => Boolean(!isMobile() && !isSSR())
    return {
      isMobile,
      isDesktop,
      isAndroid,
      isIos,
      isSSR,
    }
  }
  const useMobileDetect = () => {
    useEffect(() => {}, [])
    const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent
    return getMobileDetect(userAgent)
  }
  
  const currentDevice = useMobileDetect()
  console.log(currentDevice.isMobile())

  const [user, setUser] = React.useState(  !currentDevice.isMobile()  )

  if (user) {
    return (
      <div className={styles['base-container']}>
        This site is mobile only.
      </div>
    )
  } else {
    return(
      <div className={styles['base-container']}>
        <CityList />
      </div>
    )
  }
}
