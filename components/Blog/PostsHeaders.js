import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Moment from 'react-moment';

const PostsHeaders = ({ header }) => {
    const [bgImage, setBgimage] = useState('');

    useEffect(() => {
        async function featImg() {
            await axios
                .get(
                    `https://blakewp.ferociousmediaweb.com/wp-json/wp/v2/media/${header.img}`
                )
                .then((res) => {
                    setBgimage(res.data.media_details.sizes.full.source_url);
                })
                .catch((err) => console.log(err));
        }

        return featImg();
    }, [header.img]);

    return (
        <div style={{ position: 'relative' }}>
            <div
                className='internal-page-header'
                style={{
                    backgroundImage: `url(${
                        bgImage !== 0 ? bgImage : '/images/placeholder.jpg'
                    })`,
                }}
            ></div>
            <div className='internal-page-header-title bottom-blue-section-border bottom-blue-brake posts-pages'>
                <Moment format='MMMM DD, YYYY'>{header.intro}</Moment>
                <h1 dangerouslySetInnerHTML={{ __html: header.title }}></h1>
            </div>
        </div>
    );
};

export default PostsHeaders;
