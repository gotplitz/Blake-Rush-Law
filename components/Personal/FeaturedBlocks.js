import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

// Parts
import Spinning from '../routing/Spinning';

const FeaturedBlocks = ({
    injuriesFeat,
    loading,
    lastblock: { title, text },
    personals,
}) => {
    const serClick = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className='featured-block'>
            {loading ? (
                <Spinning />
            ) : (
                <div className='blake-home-section bottom-blue-section-border bottom-blue-brake'>
                    <section>
                        <Grid
                            container
                            spacing={5}
                            className='personal-extras'
                            justify='center'
                        >
                            <Grid item xs={12} sm={12} md={8}>
                                {injuriesFeat.map((ft, index) => (
                                    <div key={index}>
                                        <h3
                                            style={{ marginBottom: 0 }}
                                            dangerouslySetInnerHTML={{
                                                __html: ft.feature_t,
                                            }}
                                        ></h3>
                                        <div
                                            className='ab-t-wrap serv-over-blue'
                                            dangerouslySetInnerHTML={{
                                                __html: ft.feature_b,
                                            }}
                                        ></div>
                                    </div>
                                ))}
                            </Grid>
                            <Grid item xs={12} sm={12} md={4}>
                                <h3>Personal Injury Services Navigation</h3>
                                <ul className='sidebar-nav'>
                                    {personals &&
                                        personals.length > 0 &&
                                        personals
                                            .sort(
                                                (a, b) =>
                                                    new Date(a.date) -
                                                    new Date(b.date)
                                            )
                                            .map((fm) => (
                                                <li key={fm.id}>
                                                    <Link
                                                        href={`/personal-injury/[slug]`}
                                                        as={`/personal-injury/${fm.slug}`}
                                                    >
                                                        <a
                                                            onClick={serClick}
                                                            dangerouslySetInnerHTML={{
                                                                __html:
                                                                    fm.title
                                                                        .rendered,
                                                            }}
                                                        ></a>
                                                    </Link>
                                                </li>
                                            ))}
                                </ul>
                                <div className='sidebar-cta'>
                                    <h4
                                        dangerouslySetInnerHTML={{
                                            __html: title,
                                        }}
                                    ></h4>
                                    <div
                                        className='sidebar-cta-text'
                                        dangerouslySetInnerHTML={{
                                            __html: text,
                                        }}
                                    ></div>
                                    <div className='ha-button'>
                                        <Link href='/contact-us'>
                                            <a>
                                                Schedule a Free Consultation{' '}
                                                <i className='fal fa-long-arrow-right'></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </section>
                </div>
            )}
        </div>
    );
};

export default FeaturedBlocks;
