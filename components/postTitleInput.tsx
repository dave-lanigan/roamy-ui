import styles from '../styles/posts.module.css'
import React from "react";

export default function App() {
    
    const [query, setQuery] = React.useState("")

    return (
        <div>
            <input id={styles['post-title']}
                   placeholder='Create a post ...'
                   onChange={event => setQuery(event.target.value)} />
        </div>
    );
}