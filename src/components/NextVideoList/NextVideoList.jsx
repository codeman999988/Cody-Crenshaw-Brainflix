import React from 'react'
import NextVideoItem from '../NextVideoItem/NextVideoItem';
import './NextVideoList.scss';

function NextVideoList() {
    return (
        <section className="nextVideoList__container">
            <NextVideoItem />
        </section>
    )
}

export default NextVideoList;