import React from 'react';
import '../App.css';

export default function App(props: any) {

    let name: string = props.data.name;
    let img: string = props.data.img;

    return (
        <div className='city'>
            <img className='city-image' src={img} />
            <div className='city-name'>{ name }</div>
        </div>
    );
}