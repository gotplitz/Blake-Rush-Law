import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Grid } from '@material-ui/core';
import Spinning from '../routing/Spinning';

const AboutHighlights = () => {
    const [main, setMain] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function pagesLinks() {
            await axios
                .get(
                    'https://blakewp.ferociousmediaweb.com/wp-json/wp/v2/pages/7'
                )
                .then((res) => {
                    setMain(res.data.content.rendered);
                    setLoading(false);
                });
        }

        pagesLinks();

        // eslint-disable-next-line
    }, []);
    return (
        <div className='about-hl recent-posts-container'>
            <div className='divider-top-blue-thin'></div>
            {loading ? (
                <Spinning />
            ) : (
                <section>
                    <Grid container spacing={7} justify='center'>
                        <Grid item xs={12} sm={10} md={8}>
                            <div
                                dangerouslySetInnerHTML={{ __html: main }}
                            ></div>
                        </Grid>
                    </Grid>
                </section>
            )}
        </div>
    );
};

export default AboutHighlights;
