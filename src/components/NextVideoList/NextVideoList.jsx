import React, { Component } from 'react'
import NextVideoItem from '../NextVideoItem/NextVideoItem';
import './NextVideoList.scss';

class NextVideoList extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        console.log(this.props);
        return (
            <section className="nextVideoList__container">
                <h3 className="nextVideoList__title">
                    NEXT VIDEO
                </h3>
                {this.props.videoArray && this.props.videoArray.map((show) => {
                    return (
                <NextVideoItem 
                    // whenClicked={this.props.whenClicked}
                    title={show.title} 
                    channel={show.channel} 
                    image={show.image} 
                    id={show.id}
                    key={show.id}
                /> 
                );
            }
            )}
        </section>
        )
    }
}
    export default NextVideoList;