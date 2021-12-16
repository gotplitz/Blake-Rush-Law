import React from 'react';

import { Grid } from '@material-ui/core';

import HomeForm from '../Home/HomeForm';

const Footer = () => {
    return (
        <div className='main-footer-top'>
            <HomeForm />
            <div className='divider-top-blue-thin'></div>
            <section>
                <Grid container spacing={5} justify='center'>
                    <Grid item xs={12} sm={6} md={4}>
                        <div className='contact-info'>
                            <h5>Our Office Location</h5>
                            <p>14 E. Main Street Clinton, NJ 08809</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <div className='contact-info'>
                            <h5>Contact Numbers</h5>
                            <p>
                                <b>Phone: </b>
                                <a href='tel:9087139800'>
                                    (908) 713-9800
                                </a> - <b>Fax: </b> 908-713-9803
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <div className='social-icons-foot'>
                            <a
                                href='https://www.facebook.com/BlakeRushLaw/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <i className='fab fa-facebook-f'></i>
                            </a>
                            <a
                                href='https://twitter.com/blakerushlaw'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <i className='fab fa-twitter'></i>
                            </a>
                            <a
                                href='https://www.linkedin.com/in/blakerush'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <i className='fab fa-linkedin-in'></i>
                            </a>
                            <a
                                href='https://www.google.com/maps/place/Law+Office+of+Blake+W.+Rush/@40.6372386,-74.9089999,15z/data=!4m2!3m1!1s0x0:0xfcfb136388784942?sa=X&ved=2ahUKEwjw-fe1x_btAhVlEFkFHVJ1BFQQ_BIwFnoECCIQBQ'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <i className='fab fa-google'></i>
                            </a>
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={3} justify='center'>
                    <Grid item xs={10} sm={8} md={8}>
                        <div className='footer-disclaimer'>
                            <small>
                                The information on this website is for general
                                information purposes only. Nothing on this site
                                should be taken as legal advice for any
                                individual case or situation. This information
                                is not intended to create, and receipt or
                                viewing does not constitute, an attorney-client
                                relationship.
                            </small>
                            <br />
                            <small>
                                <i>
                                    <b>
                                        *No aspect of this advertisement has
                                        been approved by the Supreme Court of
                                        New Jersey.
                                    </b>
                                </i>
                            </small>
                        </div>
                    </Grid>
                </Grid>
            </section>
            <Grid
                container
                spacing={3}
                justify='center'
                style={{ backgroundColor: '#153b66', margin: '30px 0 0 0' }}
            >
                <Grid item xs={10} sm={8} md={8}>
                    <div className='footer-credits'>
                        <p>
                            Copyright 2021 Law Office of Blake W. Rush. All
                            Rights Reserved. Design and Dev by{' '}
                            <a
                                href='https://ferociousmedia.com'
                                target='_blank'
                                rel='noreferrer'
                            >
                                Ferocious Media
                            </a>
                        </p>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Footer;
