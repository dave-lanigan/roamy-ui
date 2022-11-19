import styles from '../../styles/posts.module.css';
import React from 'react';


//https://react-simplemde-edtior.netlify.app/

export default function CityPostListItem() {

  const [title, setTitle] = React.useState<string>("")
  const [content, setContent] = React.useState<string>("")

  return (
    <div className={styles['city-group-create-post-container']}>
      <div>
        <input id={styles['post-title']}
                placeholder='Create a post ...'
                onChange={event => setTitle(event.target.value)} />
      </div>
      <div>
        <input id={styles['post-content']}
                placeholder='Create a post ...'
                onChange={event => setTitle(event.target.value)} />
      </div>

    </div>
  );
}