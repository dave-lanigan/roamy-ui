import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClientProvider, QueryClient } from 'react-query';
import Layout from '../components/layout'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {

    const queryClient = new QueryClient()
    return(
      <QueryClientProvider client={queryClient} contextSharing={true}>
          <Layout>
            <Component {...pageProps} />
            <div style={{height: '60px'}}></div>
          </Layout>
      </QueryClientProvider>
  );
}
