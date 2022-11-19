import styles from '../styles/cityPostList.module.css';

export default function CityPostListItem() {
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