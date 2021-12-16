import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { Grid } from '@material-ui/core';

import Spinning from '../routing/Spinning';

const AboutBlake = () => {
    const [about, setAbout] = useState({
        sub_s: '',
        sub_b: '',
        bio: '',
        // blk_one_h: '',
        // blk_one_p: '',
        blk_two_h: '',
        blk_two_p: '',
        blk_three_h: '',
        blk_three_p: '',
    });
    const [practice, setPractice] = useState({
        prtitle: '',
        prtext: '',
    });
    // const [fams, setFams] = useState();
    // const [pers, setPers] = useState();
    const [loading, setLoading] = useState(true);

    const {
        sub_s,
        sub_b,
        bio,
        // blk_one_h,
        // blk_one_p,
        blk_two_h,
        blk_two_p,
        blk_three_h,
        blk_three_p,
    } = about;

    const { prtext } = practice;

    useEffect(() => {
        async function pagesLinks() {
            const gethome = await axios.get(
                'https://blakewp.ferociousmediaweb.com/wp-json/wp/v2/pages/7'
            );

            const getfams = axios.get(
                'https://blakewp.ferociousmediaweb.com/wp-json/wp/v2/families'
            );

            const getpers = axios.get(
                'https://blakewp.ferociousmediaweb.com/wp-json/wp/v2/personals'
            );

            Promise.all([gethome, getfams, getpers]).then((res) => {
                setAbout({
                    sub_s: res[0].data.fm_metabox.subheader,
                    sub_b: res[0].data.fm_metabox.subtext,
                    bio: res[0].data.fm_metabox.extrabox_small,
                    // blk_one_h: res[0].data.fm_metabox.feature_one_h,
                    // blk_one_p: res[0].data.fm_metabox.feature_one_p,
                    blk_two_h: res[0].data.fm_metabox.feature_two_h,
                    blk_two_p: res[0].data.fm_metabox.feature_two_p,
                    blk_three_h: res[0].data.fm_metabox.feature_three_h,
                    blk_three_p: res[0].data.fm_metabox.feature_three_p,
                });
                setPractice({
                    prtext: res[0].data.fm_metabox.feature_six_p,
                });
                // setFams(res[1].data);
                // setPers(res[2].data);
                setLoading(false);
            });
        }

        pagesLinks();

        // eslint-disable-next-line
    }, []);

    return loading ? (
        <Spinning />
    ) : (
        <Fragment>
            <div className='about-blake blake-home-section'>
                <div className='divider-top-gold'></div>
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
                                    dangerouslySetInnerHTML={{ __html: sub_s }}
                                ></h5>
                                <h3
                                    dangerouslySetInnerHTML={{ __html: sub_b }}
                                ></h3>
                                <div
                                    className='bio-content'
                                    dangerouslySetInnerHTML={{ __html: bio }}
                                ></div>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container spacing={5}>
                        <Grid item xs={12}>
                            <div
                                className='ab-t-wrap aa-txt'
                                dangerouslySetInnerHTML={{
                                    __html: prtext,
                                }}
                            ></div>
                        </Grid>
                    </Grid>
                </section>
                <div className='divider-bottom-gold'></div>
            </div>
            <div className='blake-home-section bottom-blue-section-border bottom-blue-brake'>
                <section>
                    <Grid container spacing={5} className='about-expertise'>
                        <Grid item xs={12}>
                            <h3
                                style={{ marginBottom: 0 }}
                                dangerouslySetInnerHTML={{
                                    __html: blk_three_h,
                                }}
                            ></h3>
                            <div
                                className='ab-t-wrap aa-txt'
                                dangerouslySetInnerHTML={{
                                    __html: blk_three_p,
                                }}
                            ></div>
                        </Grid>
                    </Grid>
                </section>
            </div>
            <div className='blake-home-section about-white'>
                <section>
                    <Grid container spacing={5} className='about-expertise'>
                        <Grid item xs={12}>
                            <h3
                                style={{ marginBottom: 0 }}
                                dangerouslySetInnerHTML={{
                                    __html: blk_two_h,
                                }}
                            ></h3>
                            <div
                                className='ab-t-wrap aa-txt'
                                dangerouslySetInnerHTML={{
                                    __html: blk_two_p,
                                }}
                            ></div>
                        </Grid>
                    </Grid>
                </section>
            </div>
        </Fragment>
    );
};

export default AboutBlake;
