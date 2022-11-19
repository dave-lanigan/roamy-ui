import React from 'react';
import styles from '../styles/cityPostList.module.css';
import {FiExternalLink} from 'react-icons/fi'


function CityPostListItem() {
    let title: string = "I think this is the best restaurant in Medellin" //props.title;
    let snippet: string = "Jimbo slim bimbo is restaurant here i like In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on" //props.snippet

  return (
    <div className={styles['city-group-post-list-item-container']}>
      <div className={styles['city-group-post-list-item-wrapper']}>
        <p style={{fontSize: 24}}>{title}</p>
        <p>{snippet} ...</p>
      </div>
    </div>
  );
}

function CityDiscoverListItem() {
  let title: string = "I think this is the best restaurant in Medellin" //props.title;
  let url: string = "https://pbs.twimg.com/media/FfW4VcHWAAMFLjx?format=jpg&name=360x360" //props.snippet

return (
  <div className={styles['city-group-post-list-item-container']}>
    <div>
      <FiExternalLink size={26}/>
    </div>
    <div>
      <p>{title}</p>
    </div>
    <img src={url}></img>
  </div>
);
}


export default function App() {

  return (
    <div className={styles["post-list-container"]}>
      {
        [
          <CityDiscoverListItem />,
          <CityDiscoverListItem />,
          <CityPostListItem />,
          <CityPostListItem/>,
          <CityDiscoverListItem />,
          <CityDiscoverListItem />,
          <CityDiscoverListItem />
        ]
      }
    </div>
  );
}