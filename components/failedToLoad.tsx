import styles from '../styles/load.module.css'
import {FiFrown} from 'react-icons/fi';

function App() {
  return (
    <div className={ styles['failed-to-load'] }>
      <p>Nothing to load.</p>
      <FiFrown size={32}/>
    </div>
  );
}

export default App;