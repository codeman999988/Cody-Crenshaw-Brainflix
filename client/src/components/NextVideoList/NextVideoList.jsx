import React from 'react'
import NextVideoItem from '../NextVideoItem/NextVideoItem';
import './NextVideoList.scss';

const NextVideoList = (props) => {
    console.log(props);

return (
    <section className="nextVideoList__container">
        <h3 className="nextVideoList__title">NEXT VIDEO
        </h3>
        {props?.videoArray && props.videoArray.map((show) => {return (
        <NextVideoItem 
            title={show.title} 
            channel={show.channel} 
            image={show.image} 
            id={show.id}
            key={show.id}/> 
        );})}
    </section>
)}
    export default NextVideoList;