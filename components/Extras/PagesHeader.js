import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

import placeHolder from '../../images/placeholder.jpg';

const PagesHeader = ({ header }) => {
    const [bgImage, setBgimage] = useState('');

    useEffect(() => {
        async function featImg() {
            await axios
                .get(
                    `https://damstrong.ferociousmediaweb.com/wp-json/wp/v2/media/${header.img}`
                )
                .then((res) => {
                    setBgimage(res.data.media_details.sizes.full.source_url);
                })
                .catch((err) => console.log(err));
        }

        return featImg();
    }, [header.img]);

    return (
        <Fragment>
            <div
                className='top-internal-pages'
                style={{
                    backgroundImage: `url(${bgImage ? bgImage : placeHolder})`,
                }}
            ></div>
            <section>
                <h1>{header.title}</h1>
            </section>
        </Fragment>
    );
};

export default PagesHeader;
