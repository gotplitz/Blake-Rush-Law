import React, { Fragment, useEffect, useState } from 'react';
import Slider from 'react-slick';

import { Grid } from '@material-ui/core';

import axios from 'axios';
import Spinning from '../routing/Spinning';

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <button className='next-arrow' onClick={onClick}>
            <img
                src='/images/arrow-right-light.svg'
                alt='arrow right'
                width='30px'
                height='30px'
            />
        </button>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <button className='prev-arrow' onClick={onClick}>
            <img
                src='/images/arrow-left-light.svg'
                alt='arrow right'
                width='30px'
                height='30px'
            />
        </button>
    );
};

const CaseStudies = () => {
    const [cases, setCases] = useState();
    const [titlehome, setTitlehome] = useState({
        title: '',
    });
    const [loading, setLoading] = useState(true);

    const { title } = titlehome;

    useEffect(() => {
        async function GetData() {
            const casesdata = await axios.get(
                'https://blakewp.ferociousmediaweb.com/wp-json/wp/v2/cases/?per_page=100'
            );

            const titledata = await axios.get(
                'https://blakewp.ferociousmediaweb.com/wp-json/wp/v2/pages/2'
            );

            Promise.all([casesdata, titledata]).then((res) => {
                setCases(res[0].data);
                setTitlehome({
                    title: res[1].data.fm_metabox.feature_two_p,
                });
                setLoading(false);
            });
        }

        return GetData();
        // eslint-disable-next-line
    }, []);

    var newsettings = {
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        infinite: true,
        dots: true,
        speed: 1000,
        autoplaySpeed: 10600,
        adaptiveHeight: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='our-cases'>
            <div className='divider-top-gold gris-section-border gris-brake'></div>
            {loading ? (
                <Spinning />
            ) : (
                <section>
                    <Grid container spacing={0} justify='center'>
                        <Grid item xs={12} sm={12} md={12}>
                            <div className='home-cases-title form-and-more'>
                                <h5>Family Law</h5>
                                <h2
                                    dangerouslySetInnerHTML={{ __html: title }}
                                ></h2>
                            </div>
                        </Grid>
                        <Grid item xs={11} sm={10} md={12}>
                            <Slider {...newsettings}>
                                {cases &&
                                    cases.length > 0 &&
                                    cases.map(
                                        (casestudy) =>
                                            casestudy.categories.includes(
                                                3
                                            ) && (
                                                <div
                                                    key={casestudy.id}
                                                    className='cases-card'
                                                >
                                                    <div className='case-info'>
                                                        <h4
                                                            dangerouslySetInnerHTML={{
                                                                __html:
                                                                    casestudy
                                                                        .title
                                                                        .rendered,
                                                            }}
                                                        ></h4>
                                                        <Fragment>
                                                            {casestudy
                                                                .fm_case_metabox
                                                                .amount ===
                                                            '' ? (
                                                                <span>-</span>
                                                            ) : (
                                                                <span>
                                                                    {
                                                                        casestudy
                                                                            .fm_case_metabox
                                                                            .amount
                                                                    }
                                                                </span>
                                                            )}
                                                        </Fragment>
                                                        <div
                                                            dangerouslySetInnerHTML={{
                                                                __html:
                                                                    casestudy
                                                                        .content
                                                                        .rendered,
                                                            }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            )
                                    )}
                            </Slider>
                        </Grid>
                    </Grid>
                </section>
            )}
        </div>
    );
};

export default CaseStudies;
