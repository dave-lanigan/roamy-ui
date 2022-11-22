import Navbar from './navbar'
import Banner from './banner'

export default function App({ children }) {
    return(
        <>
            <Banner />
                { children }
            <Navbar />
        </>
    );
}