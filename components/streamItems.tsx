import React from 'react'
import styles from '../styles/cityStream.module.css';
import {FiExternalLink} from 'react-icons/fi';
import { BiDislike, BiLike } from 'react-icons/bi';
import { AiFillTwitterCircle} from 'react-icons/ai';
import {BsReddit} from 'react-icons/bs';
import Link from 'next/link'

function RedditStreamItem(props) {

    let title: string = props.post.title;
    let content: string = props.post.content;
    let img: string = props.post.img;
    //let postId: string = props.post.postId;

    const [liked, setLiked ] = React.useState<string[]>([]);
    const [disliked, setDisLiked ] = React.useState<string[]>([]);

    function handleLike(action: string, key: string ) {
        console.log("running")
        console.log( key )
        if (action=="like") {
            if (liked.includes(key)==false && disliked.includes(key)==false) {
                setLiked(liked => [...liked, key])
            } else if (liked.includes(key)==true) {
                setLiked( liked.filter( item => item !== key) )
            }
        }
        else if (action=="dislike") {
            if (liked.includes(key)==false && disliked.includes(key)==false) {
                setDisLiked(disliked=>[...disliked, key])
            } else if (disliked.includes(key)==true) {
                setDisLiked( disliked.filter( item => item !== key) )
            }
        }
    }
  
  return (
    <div className={styles['stream-item']}>
      
      <div style={{ display:"flex", justifyContent: "end"}}>
        <Link href={props.post.link ? props.post.link : "#"}>
            <FiExternalLink style={{ color:"#219ebc"}} size={26}/>
        </Link>
      </div>
      <div style={{display: "flex", flexDirection:"row", alignItems: "center"}}>
            <BsReddit style={{ color:"#e63946"}} size={30}/>
            <p style={{fontWeight: "bold", paddingLeft: "10px"}}>{props.city}</p>
      </div>
      <div>
        <div>
            <p style={{fontWeight: "bold"}}>{title}</p>
        </div>
        <div>
            <p>{content ? content.substring(0,300)+" ..." : ""}</p>
        </div>
      </div>
      { img ? <img src={img}></img> : ""}
      <div style={{ display:"flex", justifyContent: "space-between"}}>
        <BiDislike onClick={()=>handleLike('dislike',props.post.post_id)}  style={{ cursor: "pointer", color: disliked.includes( props.post.post_id ) ? "#f72585" : "grey"}} size={26}/>
        <BiLike onClick={()=>handleLike('like',props.post.post_id)} style={{ cursor: "pointer", color: liked.includes( props.post.post_id ) ? "#f72585" : "grey"}}  size={26}/>
      </div>
    </div>
  );
  }


  function TwitterStreamItem(props) {
    let title: string = props.post.title;
    let img: string = props.post.img;

    const [liked, setLiked ] = React.useState<string[]>([]);
    const [disliked, setDisLiked ] = React.useState<string[]>([]);

    function handleLike(action: string, key: string ) {
        console.log("running")
        console.log( key )
        if (action=="like") {
            if (liked.includes(key)==false && disliked.includes(key)==false) {
                setLiked(liked => [...liked, key])
            } else if (liked.includes(key)==true) {
                setLiked( liked.filter( item => item !== key) )
            }
        }
        else if (action=="dislike") {
            if (liked.includes(key)==false && disliked.includes(key)==false) {
                setDisLiked(disliked=>[...disliked, key])
            } else if (disliked.includes(key)==true) {
                setDisLiked( disliked.filter( item => item !== key) )
            }
        }
    }
  
  return (
    <div className={styles['stream-item']}>
      
      <div style={{ display:"flex", justifyContent: "end"}}>
        <Link href={props.post.link ? props.post.link : "#"}>
            <FiExternalLink style={{ color:"#219ebc"}} size={26}/>
        </Link>
      </div>
      <div style={{display: "flex", flexDirection:"row", alignItems: "center"}}>
            <AiFillTwitterCircle style={{ color:"#4361ee"}} size={30}/>
            <p style={{fontWeight: "bold", paddingLeft: "10px"}}>{props.city}</p>
      </div>
      <div>
        <div>
            <p style={{fontWeight: "bold"}}>{title}</p>
        </div>
        {/* <div>
            <p>{content ? content.substring(0,300)+" ..." : ""}</p>
        </div> */}
      </div>
      { img ? <img src={img}></img> : ""}
      <div style={{ display:"flex", justifyContent: "space-between"}}>
        <BiDislike onClick={()=>handleLike('dislike',props.post.post_id)}  style={{ cursor: "pointer", color: disliked.includes( props.post.post_id ) ? "#f72585" : "grey"}} size={26}/>
        <BiLike onClick={()=>handleLike('like',props.post.post_id)} style={{ cursor: "pointer", color: liked.includes( props.post.post_id ) ? "#f72585" : "grey"}}  size={26}/>
      </div>
    </div>
  );
  }


export {RedditStreamItem, TwitterStreamItem}