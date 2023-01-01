import styles from '../styles/banner.module.css'
import React from 'react';
import {MdAccountCircle} from 'react-icons/md';

function App() {
  return (
    <div className={ styles['banner-container'] }>
        <div className={styles['logo']}>
            <h2>roamsy</h2>
        </div>

        <a href="/login" className={ styles['account-icon'] }>
          <MdAccountCircle size={32}/>
        </a>
    </div>
  );
}

export default App;
