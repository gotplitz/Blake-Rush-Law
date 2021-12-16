import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

import { Grid } from '@material-ui/core';
import Link from 'next/link';

// Parts
import FeaturedImages from '../Extras/FeaturedImages';
import { Fragment } from 'react';

const HomeSlider = ({ sliders }) => {
    var settings = {
        className: 'banner-slider',
        dots: true,
        infinite: true,
        autoplay: true,
        fade: true,
        speed: 2000,
        autoplaySpeed: 7600,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        adaptiveHeight: true,
    };

    return (
        <div className='banner--wrap bottom-section-border'>
            <Slider {...settings}>
                {sliders &&
                    sliders.length > 0 &&
                    sliders
                        .sort((a, b) => new Date(a.date) - new Date(b.date))
                        .map((slide) => (
                            <div key={slide.id} className='banner'>
                                <div className='container'>
                                    <Grid container spacing={3}>
                                        <Grid
                                            item
                                            xs={12}
                                            className='d-flex align-items-center'
                                        >
                                            <div className='main-title'>
                                                <h1
                                                    dangerouslySetInnerHTML={{
                                                        __html:
                                                            slide.title
                                                                .rendered,
                                                    }}
                                                ></h1>
                                                {slide.fm_slider_metabox
                                                    .subtitle[0] !== '' && (
                                                    <Fragment>
                                                        <span
                                                            dangerouslySetInnerHTML={{
                                                                __html:
                                                                    slide
                                                                        .fm_slider_metabox
                                                                        .subtitle,
                                                            }}
                                                        ></span>
                                                        {slide.content
                                                            .rendered !==
                                                            '' && (
                                                            <span
                                                                className='hero-third'
                                                                dangerouslySetInnerHTML={{
                                                                    __html:
                                                                        slide
                                                                            .content
                                                                            .rendered,
                                                                }}
                                                            ></span>
                                                        )}
                                                    </Fragment>
                                                )}
                                                <div className='hero-button'>
                                                    <Link
                                                        href={`${slide.fm_slider_metabox.link}`}
                                                    >
                                                        <a>
                                                            {
                                                                slide
                                                                    .fm_slider_metabox
                                                                    .linkname
                                                            }
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className='banner-outer'>
                                    <FeaturedImages
                                        theimg={slide.featured_media}
                                    />
                                </div>
                            </div>
                        ))}
            </Slider>
        </div>
    );
};

export default HomeSlider;
