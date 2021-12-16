import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';

import Spinning from '../routing/Spinning';
import ContactMap from './ContactMap';

const ContactDetails = () => {
    const [connecttop, setConnecttop] = useState({
        subtitle: '',
        subtext: '',
        address: '',
        addressdetails: '',
        phone: '',
        phonenumber: '',
        fax: '',
        faxnumber: '',
        hours: '',
        hoursdetails: '',
    });
    const [loading, setLoading] = useState(true);

    const {
        subtitle,
        subtext,
        address,
        addressdetails,
        phone,
        phonenumber,
        fax,
        faxnumber,
        hours,
        hoursdetails,
    } = connecttop;

    useEffect(() => {
        async function pageContent() {
            await axios
                .get(
                    'https://blakewp.ferociousmediaweb.com/wp-json/wp/v2/pages/15'
                )
                .then((res) => {
                    setConnecttop({
                        subtitle: res.data.fm_metabox.subheader,
                        subtext: res.data.fm_metabox.subtext,
                        address: res.data.fm_metabox.feature_one_h,
                        addressdetails: res.data.fm_metabox.feature_one_p,
                        phone: res.data.fm_metabox.feature_two_h,
                        phonenumber: res.data.fm_metabox.feature_two_p,
                        fax: res.data.fm_metabox.feature_three_h,
                        faxnumber: res.data.fm_metabox.feature_three_p,
                        hours: res.data.fm_metabox.feature_four_h,
                        hoursdetails: res.data.fm_metabox.feature_four_p,
                    });

                    setLoading(false);
                });
        }

        return pageContent();

        // eslint-disable-next-line
    }, []);

    return (
        <div className='contact-us-details'>
            <section>
                {loading ? (
                    <Spinning />
                ) : (
                    <Grid container spacing={7}>
                        <Grid item xs={12} sm={12} md={12}>
                            <h5
                                dangerouslySetInnerHTML={{
                                    __html: subtitle,
                                }}
                            ></h5>
                            <h3
                                dangerouslySetInnerHTML={{
                                    __html: subtext,
                                }}
                            ></h3>
                            <div className='details-wrap'>
                                <div className='contact-blurb'>
                                    <i className='fas fa-address-book'></i>
                                    <div className='blurb-contact-text'>
                                        <h6
                                            dangerouslySetInnerHTML={{
                                                __html: address,
                                            }}
                                        ></h6>
                                        <h3>
                                            <a
                                                href={`https://www.google.com/maps/place/Law+Office+of+Blake+W.+Rush/@40.6372386,-74.9089999,15z/data=!4m2!3m1!1s0x0:0xfcfb136388784942?sa=X&ved=2ahUKEwjw-fe1x_btAhVlEFkFHVJ1BFQQ_BIwFnoECCIQBQ`}
                                            >
                                                {addressdetails}
                                            </a>
                                        </h3>
                                    </div>
                                </div>

                                <div className='contact-blurb'>
                                    <i className='fad fa-phone-office'></i>
                                    <div className='blurb-contact-text'>
                                        <h6
                                            dangerouslySetInnerHTML={{
                                                __html: phone,
                                            }}
                                        ></h6>
                                        <h3>
                                            <a href={`tel:${phonenumber}`}>
                                                {phonenumber}
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                                <div className='contact-blurb'>
                                    <i className='fad fa-fax'></i>
                                    <div className='blurb-contact-text'>
                                        <h6
                                            dangerouslySetInnerHTML={{
                                                __html: fax,
                                            }}
                                        ></h6>
                                        <h3>{faxnumber}</h3>
                                    </div>
                                </div>
                                <div className='contact-blurb'>
                                    <i className='fad fa-business-time'></i>
                                    <div className='blurb-contact-text'>
                                        <h6
                                            dangerouslySetInnerHTML={{
                                                __html: hours,
                                            }}
                                        ></h6>
                                        <h3>{hoursdetails}</h3>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <div className='form-container'>
                                <ContactMap />
                            </div>
                        </Grid>
                    </Grid>
                )}
            </section>
        </div>
    );
};

export default ContactDetails;
