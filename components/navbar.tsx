import styles from '../styles/navbar.module.css'
import {FaGlobeAmericas, FaSearch} from 'react-icons/fa';
import { RiCompassDiscoverLine, RiMessage3Fill } from "react-icons/ri";

function App() {
  return (
    <div className={styles['nav-container']}>
        <a href="/#"><FaGlobeAmericas size={25}/></a>
        <a href="/#"><FaSearch size={25}/></a>
        <a href="/#"><RiCompassDiscoverLine size={29}/></a>
        <a href="/#"><RiMessage3Fill size={28}/> </a>
    </div>
  );
}

export default App;
