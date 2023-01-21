import React from 'react';

import styles from '../styles/banner.module.css'


function App() {
    const [query, setQuery] = React.useState("")
  return (
        <div className={styles['searchbar-container']}>
            <input id={styles['main-searchbar']}
                    placeholder='search ...'
                    onChange={event => setQuery(event.target.value)} />
        </div>
  );
}

export default App;
