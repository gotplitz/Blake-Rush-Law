import React from 'react';
import { Grid } from '@material-ui/core';

const SecondaryBar = () => {
    return (
        <div className='secondary-bar'>
            <Grid container spacing={0} className='top-info'>
                <Grid item xs={12} sm={5} md={5} className='top-left'>
                    <div className='contact-top'>
                        <i className='fal fa-map-marker-alt'></i>{' '}
                        <span>14 E. Main Street Clinton, NJ 08809</span>
                    </div>
                </Grid>
                <Grid item xs={12} sm={7} md={7} className='top-right'>
                    <div className='social-icons'>
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
                    <div className='contact-top phone-top'>
                        <a href='tel:9087139800'>
                            <i className='fal fa-phone-office'></i>
                            <span>(908) 713-9800</span>
                        </a>
                    </div>
                    {/* <div className='contact-top'>
                        <a href='mailto:name@ferociousmedia.com'>
                        <i className='fal fa-paper-plane'></i>{' '}
                        <span>name@ferociousmedia.com</span>
                        </a>
                    </div> */}
                </Grid>
            </Grid>
        </div>
    );
};

export default SecondaryBar;
