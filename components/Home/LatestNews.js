import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Grid } from '@material-ui/core';

import axios from 'axios';
import MidFeatured from '../Extras/MidFeatured';
import Spinning from '../routing/Spinning';

const LatestNews = ({ posts }) => {
    const [titlehome, setTitlehome] = useState({
        subtitle: '',
        title: '',
    });
    const [loading, setLoading] = useState(true);

    const { subtitle, title } = titlehome;

    useEffect(() => {
        async function GetData() {
            const titledata = await axios.get(
                'https://blakewp.ferociousmediaweb.com/wp-json/wp/v2/pages/2'
            );

            Promise.all([titledata]).then((res) => {
                setTitlehome({
                    subtitle: res[0].data.fm_metabox.feature_three_h,
                    title: res[0].data.fm_metabox.feature_three_p,
                });
                setLoading(false);
            });
        }

        return GetData();

        // eslint-disable-next-line
    }, []);

    return (
        <div className='recent-posts-container'>
            <div className='divider-top-blue-thin'></div>
            {loading ? (
                <Spinning />
            ) : (
                <section>
                    <Grid container spacing={7}>
                        <Grid item xs={12}>
                            <h5
                                dangerouslySetInnerHTML={{
                                    __html: subtitle,
                                }}
                            ></h5>
                            <h3
                                dangerouslySetInnerHTML={{ __html: title }}
                            ></h3>
                        </Grid>
                    </Grid>
                    <Grid container spacing={7} justify='center'>
                        {posts &&
                            posts.length > 0 &&
                            posts
                                .sort(
                                    (a, b) =>
                                        new Date(b.date) - new Date(a.date)
                                )
                                .slice(0, 3)
                                .map((post) => (
                                    <Grid
                                        key={post.id}
                                        item
                                        xs={12}
                                        sm={6}
                                        md={4}
                                    >
                                        <div className='post-item'>
                                            <div className='post-image'>
                                                <MidFeatured
                                                    theimg={post.featured_media}
                                                />
                                            </div>
                                            <div className='post-text'>
                                                <h4
                                                    dangerouslySetInnerHTML={{
                                                        __html:
                                                            post.title.rendered,
                                                    }}
                                                ></h4>
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html:
                                                            post.excerpt
                                                                .rendered,
                                                    }}
                                                ></div>
                                            </div>
                                            <div className='ha-button'>
                                                <Link
                                                    href={`/blog/[slug]`}
                                                    as={`/blog/${post.slug}`}
                                                >
                                                    <a>
                                                        Read Post{' '}
                                                        <i className='fal fa-long-arrow-right'></i>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </Grid>
                                ))}
                    </Grid>
                </section>
            )}
        </div>
    );
};

export default LatestNews;
