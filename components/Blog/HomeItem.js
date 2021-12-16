import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';
import Moment from 'react-moment';

// Parts
import MidFeatured from '../Extras/MidFeatured';
import '../message/Message.css';

const HomeItem = ({ post }) => {
    return (
        <Fragment>
            <Link to={`/blog/${post.slug}`} className='home-post-item'>
                <div className='post-image'>
                    <MidFeatured theimg={post.featured_media} />
                </div>
                <div className='post-info'>
                    <h4
                        dangerouslySetInnerHTML={{
                            __html: post.title.rendered,
                        }}
                    ></h4>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: post.excerpt.rendered,
                        }}
                    ></div>
                </div>
                <div className='date-box'>
                    <Moment format='MMM'>{post.date}</Moment>
                    <Moment format='DD'>{post.date}</Moment>
                </div>
            </Link>
        </Fragment>
    );
};

export default HomeItem;
