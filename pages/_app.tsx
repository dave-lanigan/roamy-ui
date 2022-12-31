import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClientProvider, QueryClient } from 'react-query';
import Layout from '../components/layout'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return(
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <Layout>
        <Component {...pageProps} />
        <div style={{height: '60px'}}></div>
      </Layout>
    </QueryClientProvider>
  );
}
