import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

import { Grid } from '@material-ui/core';

import Spinning from '../routing/Spinning';

const HomeContent = () => {
    const [getContent, setGetcontent] = useState({
        subtitle: '',
        title: '',
        content: '',
    });
    const [loading, setLoading] = useState(true);

    const { subtitle, title, content } = getContent;

    useEffect(() => {
        async function GetHome() {
            await axios
                .get(
                    'https://blakewp.ferociousmediaweb.com/wp-json/wp/v2/pages/2'
                )
                .then((res) => {
                    setGetcontent({
                        subtitle: res.data.fm_metabox.subheader,
                        title: res.data.fm_metabox.subtext,
                        content: res.data.content.rendered,
                    });
                    setLoading(false);
                });
        }

        return GetHome();

        // eslint-disable-next-line
    }, []);

    return (
        <div className='form-and-more'>
            <section>
                <Grid container spacing={5} justify='center'>
                    <Grid
                        item
                        xs={12}
                        sm={9}
                        md={8}
                        style={{ textAlign: 'center' }}
                    >
                        {loading ? (
                            <Spinning />
                        ) : (
                            <Fragment>
                                <h5
                                    dangerouslySetInnerHTML={{
                                        __html: subtitle,
                                    }}
                                ></h5>
                                <h2
                                    dangerouslySetInnerHTML={{ __html: title }}
                                ></h2>
                                <div
                                    className='welcome-text'
                                    dangerouslySetInnerHTML={{
                                        __html: content,
                                    }}
                                ></div>
                            </Fragment>
                        )}
                    </Grid>
                </Grid>

                <div className='divider gris-section-border gris-brake'></div>
                <Grid container spacing={5} justify='center'>
                    <Grid
                        item
                        xs={5}
                        sm={3}
                        md={3}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                        }}
                    >
                        <Image
                            src='/images/logo-01.png'
                            alt='10 best 2016'
                            width={140}
                            height={140}
                            className='featured-logo'
                        />
                    </Grid>
                    <Grid
                        item
                        xs={5}
                        sm={3}
                        md={3}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                        }}
                    >
                        <Image
                            src='/images/logo-02.png'
                            alt='Multimillion Dollar Advocates Forum'
                            width={140}
                            height={140}
                            className='featured-logo'
                        />
                    </Grid>
                    <Grid
                        item
                        xs={5}
                        sm={3}
                        md={3}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                        }}
                    >
                        <Image
                            src='/images/logo-04.png'
                            alt='National Academy of Jurisprudence'
                            width={140}
                            height={140}
                            className='featured-logo'
                        />
                    </Grid>
                    <Grid
                        item
                        xs={5}
                        sm={3}
                        md={3}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                        }}
                    >
                        <Image
                            src='/images/logo-03.png'
                            alt='NAFLA'
                            width={140}
                            height={140}
                            className='featured-logo'
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={5} justify='center'>
                    <Grid
                        item
                        xs={5}
                        sm={3}
                        md={3}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                        }}
                    >
                        <a
                            href='https://www.avvo.com/attorneys/08809-nj-blake-rush-553310.html'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <Image
                                src='/images/logo-05.png'
                                alt='Arvo Divorce Badge'
                                width={140}
                                height={140}
                                className='featured-logo'
                            />
                        </a>
                    </Grid>
                    <Grid
                        item
                        xs={5}
                        sm={2}
                        md={2}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                        }}
                    >
                        <Image
                            src='/images/logo-08.png'
                            alt='Google Reviews'
                            width={140}
                            height={140}
                            className='featured-logo'
                        />
                    </Grid>
                    <Grid
                        item
                        xs={5}
                        sm={3}
                        md={3}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                        }}
                    >
                        <a
                            href='https://www.avvo.com/attorneys/08809-nj-blake-rush-553310.html'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <Image
                                src='/images/logo-09.png'
                                alt='Arvo Divorce Badge'
                                width={140}
                                height={140}
                                className='featured-logo'
                            />
                        </a>
                    </Grid>
                </Grid>
            </section>
        </div>
    );
};

export default HomeContent;
