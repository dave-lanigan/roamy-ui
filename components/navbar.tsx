
import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import Link from 'next/link';

import styles from '../styles/navbar.module.css'
import {FaGlobeAmericas, FaSearch} from 'react-icons/fa';
import { RiCompassDiscoverLine, RiMessage3Fill, RiTreasureMapFill } from "react-icons/ri";

function App() {
  const queryClient = useQueryClient();
  const [search, setSearch] = React.useState<boolean>(false)
  useQuery('searchTF', async () => search)

  function clickedSearch() {
    if (search) {
      setSearch(false)
      queryClient.setQueryData('searchTF', false);
    } else {
      setSearch(true)
      queryClient.setQueryData('searchTF', true);
    }
  }

  return (
    <div className={styles['nav-container']}>
        <Link href="/#"><FaGlobeAmericas size={25}/></Link>
        <Link href="/#" onClick={clickedSearch}><FaSearch size={25}/></Link>
        <Link href="/#"><RiCompassDiscoverLine size={29}/></Link>
        {/* <a href="/#"><RiMessage3Fill size={28}/> </a> */}
    </div>
  );
}

export default App;
