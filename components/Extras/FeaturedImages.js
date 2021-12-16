import { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

const FeaturedImages = ({ theimg }) => {
    const [img, setImg] = useState({
        alt_text: '',
        url: ``,
        width: '',
        height: '',
    });

    const [rimg, setRimg] = useState({
        ralt_text: '',
        rurl: '',
        rwidth: '',
        rheight: '',
    });

    useEffect(() => {
        async function featImg() {
            await axios
                .get(
                    `https://blakewp.ferociousmediaweb.com/wp-json/wp/v2/media/${theimg}`
                )
                .then((res) => {
                    setImg({
                        alt_text: res.data.alt_text,
                        url: res.data.media_details.sizes.full.source_url,
                        width: res.data.media_details.sizes.full.width,
                        height: res.data.media_details.sizes.full.height,
                    });
                    setRimg({
                        ralt_text: res.data.alt_text,
                        rurl: res.data.media_details.sizes.large
                            ? res.data.media_details.sizes.large.source_url
                            : res.data.media_details.sizes.medium_large
                                  .source_url,
                        rwidth: res.data.media_details.sizes.large
                            ? res.data.media_details.sizes.large.width
                            : res.data.media_details.sizes.medium_large.width,
                        rheight: res.data.media_details.sizes.large
                            ? res.data.media_details.sizes.large.height
                            : res.data.media_details.sizes.medium_large.height,
                    });
                })
                .catch((err) => console.log(err));
        }

        return featImg();
    }, [theimg]);

    return theimg === 0 ? (
        <Fragment>
            <img
                src='/images/placeholder.jpg'
                alt='Place holder'
                width='1024'
                height='1024'
            />
        </Fragment>
    ) : (
        <Fragment>
            <picture>
                <source srcSet={`${rimg.rurl}`} media='(max-width:414px)' />
                <img
                    src={img.url}
                    alt={img.alt_text}
                    width={img.width}
                    height={img.height}
                />
            </picture>
        </Fragment>
    );
};

export default FeaturedImages;
