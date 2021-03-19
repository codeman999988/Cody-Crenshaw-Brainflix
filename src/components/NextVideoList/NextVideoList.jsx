import React, { Component } from 'react'
import NextVideoItem from '../NextVideoItem/NextVideoItem';
import './NextVideoList.scss';
import VideoDetails from '../../Data/video-details.json';



class NextVideoList extends Component {
    constructor(props) {
        super(props);
    }
    

    handleClick = (e) => {
        console.log(e.target);
        //      this.setState({vids: [...this.state]})
    }
    
    render() {
        return (
            <section className="nextVideoList__container">
                {this.props.vidArray.map((show) => {
            return (
                <NextVideoItem 
                onClick={this.handleClick}
                title={show.title} 
                channel={show.channel} 
                image={show.image} 
                key={show.id}
                /> 
                );
            })}
            </section>
        )
    }
}
    export default NextVideoList;