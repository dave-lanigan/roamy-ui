import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClientProvider, QueryClient } from 'react-query';
import Layout from '../components/layout'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {

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
  
  if (currentDevice.isMobile()) {
    const queryClient = new QueryClient()
    return(
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <Layout>
          <Component {...pageProps} />
          <div style={{height: '60px'}}></div>
        </Layout>
      </QueryClientProvider>
  );
  } else {
    return(
      <Component {...pageProps} />
    );
  }

}
