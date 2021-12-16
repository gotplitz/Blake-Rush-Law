import React, { Fragment, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';

// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Autoplay, A11y } from 'swiper';

// Materialize
import { Grid } from '@material-ui/core';
import Spinning from '../routing/Spinning';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Autoplay, A11y]);

const TestimonialsTwo = () => {
    const [testimonials, setTestimonials] = useState();
    const [titleh, setTitleh] = useState({
        subtitle: '',
        title: '',
    });
    const [loading, setLoading] = useState(true);

    const { subtitle, title } = titleh;

    useEffect(() => {
        async function GetTests() {
            const testsdata = await axios.get(
                'https://blakewp.ferociousmediaweb.com/wp-json/wp/v2/testimonials?per_page=50'
            );

            const titlehome = await axios.get(
                'https://blakewp.ferociousmediaweb.com/wp-json/wp/v2/pages/2'
            );

            Promise.all([testsdata, titlehome]).then((res) => {
                setTestimonials(res[0].data);
                setTitleh({
                    subtitle: res[1].data.fm_metabox.feature_one_h,
                    title: res[1].data.fm_metabox.feature_one_p,
                });
                setLoading(false);
            });
        }

        return GetTests();

        // eslint-disable-next-line
    }, []);

    return (
        <div className='home-testimonials-wrapper'>
            <section>
                {loading ? (
                    <Spinning />
                ) : (
                    <Fragment>
                        <Grid container spacing={5}>
                            <Grid item xs={12} sm={12} md={12}>
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
                        <Swiper
                            spaceBetween={1}
                            slidesPerView={1}
                            autoplay={{ delay: 9000 }}
                            loop={true}
                            speed={1000}
                            navigation
                            pagination={{ clickable: true }}
                        >
                            {testimonials
                                .sort(
                                    (a, b) =>
                                        new Date(a.date) - new Date(b.date)
                                )
                                .map(
                                    (test, index) =>
                                        test.testimonialtype.includes(5) && (
                                            <SwiperSlide key={index}>
                                                <div className='testimonial-container'>
                                                    <p
                                                        dangerouslySetInnerHTML={{
                                                            __html:
                                                                test.content
                                                                    .rendered,
                                                        }}
                                                    ></p>
                                                    <h6>
                                                        {test.title.rendered}
                                                    </h6>
                                                </div>
                                            </SwiperSlide>
                                        )
                                )}
                        </Swiper>
                    </Fragment>
                )}

                <div className='cta-button'>
                    <a
                        href='https://www.google.com/search?q=blake+rush+law&source=lmns&bih=888&biw=1903&hl=en&sa=X&ved=2ahUKEwji182ugJbsAhVuAjQIHWT5Dc4Q_AUoAHoECAEQAA#lrd=0x89c38b057c3bca63:0xfcfb136388784942,1'
                        target='_blank'
                        rel='noreferrer'
                        className='submit-btn'
                    >
                        More Reviews
                    </a>
                </div>
            </section>
        </div>
    );
};

export default TestimonialsTwo;
