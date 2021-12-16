import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Grid } from '@material-ui/core';

import axios from 'axios';
import Spinning from '../routing/Spinning';

const BlakeBio = () => {
    const [bio, setBio] = useState({
        smallt: '',
        bigt: '',
        biocontent: '',
    });
    const [slug, setSlug] = useState('');
    const [loading, setLoading] = useState(true);

    const { smallt, bigt, biocontent } = bio;

    useEffect(() => {
        async function GetData() {
            await axios
                .get(
                    'https://blakewp.ferociousmediaweb.com/wp-json/wp/v2/pages/7'
                )
                .then((res) => {
                    setBio({
                        smallt: res.data.fm_metabox.subheader,
                        bigt: res.data.fm_metabox.subtext,
                        biocontent: res.data.fm_metabox.extrabox_small,
                    });
                    setSlug(res.data.slug);
                    setLoading(false);
                });
        }

        return GetData();

        // eslint-disable-next-line
    }, []);

    return (
        <div className='blake-home-section section-border blue-brake'>
            <div className='divider-top-gold'></div>
            {loading ? (
                <Spinning />
            ) : (
                <section>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={12} md={6}>
                            <div className='blake-photo'>
                                <Image
                                    src='/images/blake-rush-attorney.jpg'
                                    alt='Blake W. Rush'
                                    width={500}
                                    height={658}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <div className='blake-bio'>
                                <h5
                                    dangerouslySetInnerHTML={{ __html: smallt }}
                                ></h5>
                                <h3
                                    dangerouslySetInnerHTML={{ __html: bigt }}
                                ></h3>
                                <div
                                    className='bio-content'
                                    dangerouslySetInnerHTML={{
                                        __html: biocontent,
                                    }}
                                ></div>
                                <Link href={`/${slug}`}>
                                    <a>
                                        Read More{' '}
                                        <i className='fal fa-long-arrow-right'></i>
                                    </a>
                                </Link>
                            </div>
                        </Grid>
                    </Grid>
                </section>
            )}
            <div className='divider-bottom-gold'></div>
        </div>
    );
};

export default BlakeBio;
