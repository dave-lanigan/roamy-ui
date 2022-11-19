import Navbar from './navbar'
import Banner from './banner'

export default function App({ children }) {
    return(
        <div>
            <Banner />
                { children }
            <Navbar />
        </div>
    );
}