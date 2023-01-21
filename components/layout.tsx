import Navbar from './navbar'
import Banner from './banner'

export default function App({ children }) {
    return(
        <div style={
            {
              maxWidth: "400px",
            }
          }
        >
            <Banner />
                { children }
            <Navbar />
        </div>
    );
}