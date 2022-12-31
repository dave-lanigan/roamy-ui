
import React from 'react'
import { useQuery } from 'react-query';
import styles from '../styles/cityPostList.module.css'
import {FiExternalLink} from 'react-icons/fi'

import {RedditStreamItem, TwitterStreamItem} from './streamItems'
import {dataAPI} from '../appConfig'
import Loading from './loading'
import FailedToLoad from './failedToLoad'


interface StreamItem {
  title: string,
  content: string,
  img: string,
  link: string,
  source: string,
  post_id: string
}


export default function App(props) {
  
  let city = props.city
  
  console.log(props.city)
  const {isLoading, data, isError } = useQuery(`${city}-stream`, async () => {
    try {
      let url = `${dataAPI.api}/stream/${ city }`
      let resp = await fetch(url)
      let out = await resp.json()
      return (out)
    } catch (err) {
      return(err)
    }
  })

  if ( data ) {
    if ( data.length==0 ) { return( <FailedToLoad /> ); }
    let StreamList: any = data.map((item)=>{
      if (item.source=="reddit")
        return(
            <RedditStreamItem key={item.post_id} city={city} post={item} />
        );
      else if (item.source=="twitter") {
        console.log("here")
        return(
            <TwitterStreamItem key={item.post_id} city={city} post={item} />
        );
      }
    })
    return(
      <div className={styles.cities}>
        {  StreamList }
      </div>
    );
  } else if (isLoading) {
    return( <Loading /> );
  } else {
    return( <FailedToLoad /> );
  }
}