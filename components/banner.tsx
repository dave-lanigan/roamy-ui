import styles from '../styles/banner.module.css'
import React from 'react';
import {MdAccountCircle} from 'react-icons/md';

function App() {
    const [query, setQuery] = React.useState("")
  return (
    <div className={ styles['banner-container'] }>
        <div className={styles['logo']}>
            <h2>roamy</h2>
        </div>
        <div className={styles['searchbar-container']}>
            <input id={styles['main-searchbar']}
                   placeholder='search ...'
                   onChange={event => setQuery(event.target.value)} />
        </div>
        <div style={{width:'15%'}}>
          <a href="/#"><MdAccountCircle size={32}/></a>
        </div>
    </div>
  );
}

export default App;
