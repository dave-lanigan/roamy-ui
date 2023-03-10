import 'react'
import React from 'react'
import CityList from './cities'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'
import dynamic from 'next/dynamic'

export default function Home() {

  const [mobile, setMobile] = React.useState( null )

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

  // const useMobileDetect = () => {
    
  //   useEffect(() => {}, [])

  //   const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent
  //   setMobile(getMobileDetect(userAgent).isMobile())
  //   console.log(mobile)
  //   return getMobileDetect(userAgent)
  // }

  useEffect(() => {
    const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent
    setMobile(getMobileDetect(userAgent).isMobile())
  }, [])
  const CityList = dynamic(() => import('./cities'))
  return(
    <div className={styles['base-container']}>
      { mobile ? "" : <p>This site is currently meant for mobile only.</p>}
      <CityList />
    </div>
  )
}
