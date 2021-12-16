import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Grid } from '@material-ui/core';
import Spinning from '../routing/Spinning';

const AboutServices = () => {
    const [about, setAbout] = useState({
        blk_four_h: '',
        blk_four_p: '',
        blk_five_h: '',
        blk_five_p: '',
    });
    const [loading, setLoading] = useState(true);

    const { blk_four_h, blk_four_p, blk_five_h, blk_five_p } = about;

    useEffect(() => {
        async function pagesLinks() {
            await axios
                .get(
                    'https://blakewp.ferociousmediaweb.com/wp-json/wp/v2/pages/7'
                )
                .then((res) => {
                    setAbout({
                        blk_four_h: res.data.fm_metabox.feature_four_h,
                        blk_four_p: res.data.fm_metabox.feature_four_p,
                        blk_five_h: res.data.fm_metabox.feature_five_h,
                        blk_five_p: res.data.fm_metabox.feature_five_p,
                    });
                    setLoading(false);
                });
        }

        pagesLinks();

        // eslint-disable-next-line
    }, []);

    return (
        <div className='about-services'>
            {loading ? (
                <Spinning />
            ) : (
                <section>
                    <Grid container spacing={10}>
                        <Grid item xs={12} sm={6}>
                            <h3
                                style={{ marginBottom: 0 }}
                                dangerouslySetInnerHTML={{
                                    __html: blk_four_h,
                                }}
                            ></h3>
                            <div
                                className='ab-t-wrap'
                                dangerouslySetInnerHTML={{
                                    __html: blk_four_p,
                                }}
                            ></div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <h3
                                style={{ marginBottom: 0 }}
                                dangerouslySetInnerHTML={{
                                    __html: blk_five_h,
                                }}
                            ></h3>
                            <div
                                className='ab-t-wrap'
                                dangerouslySetInnerHTML={{
                                    __html: blk_five_p,
                                }}
                            ></div>
                        </Grid>
                    </Grid>
                </section>
            )}
            <div className='divider-bottom-inverted-gold'></div>
        </div>
    );
};

export default AboutServices;
