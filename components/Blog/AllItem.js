import React, { Fragment } from 'react';

import Link from 'next/link';
import Moment from 'react-moment';

// Materialize
import { Grid } from '@material-ui/core';

// Parts
import MidFeatured from '../Extras/MidFeatured';

const AllItem = ({ post }) => {
    return (
        <Fragment>
            <Grid item xs={12} sm={6} md={3}>
                <Link href={`/blog/[slug]`} as={`/blog/${post.slug}`}>
                    <a>
                        <div className='post-image'>
                            <MidFeatured theimg={post.featured_media} />
                        </div>
                    </a>
                </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <div className='post-info'>
                    <h4
                        dangerouslySetInnerHTML={{
                            __html: post.title.rendered,
                        }}
                    ></h4>
                    <Moment format='MMMM DD, YYYY'>{post.date}</Moment>
                </div>

                <div className='read-more-wrap'>
                    <Link href={`/blog/[slug]`} as={`/blog/${post.slug}`}>
                        <a className='post-read'>Read More</a>
                    </Link>
                </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <div className='post-info list-posts'>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: post.excerpt.rendered,
                        }}
                    ></div>
                </div>
            </Grid>
        </Fragment>
    );
};

export default AllItem;
