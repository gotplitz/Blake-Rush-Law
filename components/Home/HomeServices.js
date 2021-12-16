import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { Grid } from '@material-ui/core';

const HomeServices = ({ families, personals }) => {
    return (
        <div className='services-in-home'>
            <section>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <h4>Practice Areas</h4>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={6}>
                        <div
                            className='serv-bg'
                            style={{
                                backgroundImage: `url(/images/family-law.jpg)`,
                            }}
                        >
                            <div className='serv-list'>
                                <ul>
                                    {families &&
                                        families.length > 0 &&
                                        families
                                            .sort(
                                                (a, b) =>
                                                    new Date(a.date) -
                                                    new Date(b.date)
                                            )
                                            .map((fm) => (
                                                <li key={fm.id}>
                                                    <Link
                                                        href={`/family-law/[slug]`}
                                                        as={`/family-law/${fm.slug}`}
                                                    >
                                                        <a>
                                                            <i className='fal fa-arrow-to-right'></i>
                                                            <span
                                                                dangerouslySetInnerHTML={{
                                                                    __html:
                                                                        fm.title
                                                                            .rendered,
                                                                }}
                                                            ></span>
                                                        </a>
                                                    </Link>
                                                </li>
                                            ))}
                                </ul>
                            </div>
                            <div className='serv-title'>
                                <h3>
                                    <i className='fal fa-users'></i> Family Law
                                </h3>
                            </div>
                            <div className='black-overlay'></div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <div
                            className='serv-bg'
                            style={{
                                backgroundImage: `url(/images/pillars-in-justice-building.jpg)`,
                            }}
                        >
                            <div className='serv-list'>
                                <ul>
                                    {personals &&
                                        personals.length > 0 &&
                                        personals
                                            .sort(
                                                (a, b) =>
                                                    new Date(a.date) -
                                                    new Date(b.date)
                                            )
                                            .map((pr) => (
                                                <li key={pr.id}>
                                                    <Link
                                                        href={`/personal-injury/[slug]`}
                                                        as={`/personal-injury/${pr.slug}`}
                                                    >
                                                        <a>
                                                            <i className='fal fa-arrow-to-right'></i>
                                                            <span
                                                                dangerouslySetInnerHTML={{
                                                                    __html:
                                                                        pr.title
                                                                            .rendered,
                                                                }}
                                                            ></span>
                                                        </a>
                                                    </Link>
                                                </li>
                                            ))}
                                </ul>
                            </div>
                            <div className='serv-title'>
                                <h3>
                                    <i className='fal fa-user-injured'></i>{' '}
                                    Personal Injury
                                </h3>
                            </div>
                            <div className='black-overlay'></div>
                        </div>
                    </Grid>
                </Grid>
            </section>
        </div>
    );
};

export default HomeServices;
