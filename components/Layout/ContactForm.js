import React, { useState, Fragment, createRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
import { useRouter } from 'next/router';

import { Grid, TextField } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';

const ContactForm = () => {
    const router = useRouter();
    const recaptchaRef = createRef();
    const [sent, setSent] = useState(false);
    const [mess, setMess] = useState('');
    const [error, setError] = useState(false);
    const [warning, setWarn] = useState(false);
    const [errs, setErrs] = useState();
    const [buttontext, setButtontext] = useState(
        'Submit to Get Your Consultation'
    );
    const [formData, setFormdata] = useState({
        fullName: '',
        phone: '',
        email: '',
        interest: '',
        message: '',
    });

    const { fullName, phone, email, interest, message } = formData;

    const onChange = (e) => {
        setFormdata({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setButtontext('Sending...');
        const recaptchaValue = recaptchaRef.current.getValue();
        await axios
            .post('https://api.blakerushlaw.com/api/emails', formData)
            .then((res) => {
                if (!recaptchaValue) {
                    setWarn(true);
                    setButtontext('Submit to Get Your Consultation');
                } else if (res.data.msg === 'success') {
                    setError(false);
                    setWarn(false);
                    setSent(true);
                    setMess('The form has been sent successfully!');
                    setButtontext('Submit to Get Your Consultation');
                    router.push('/thank-you');

                    setFormdata({
                        fullName: '',
                        phone: '',
                        email: '',
                        interest: '',
                        message: '',
                    });
                    recaptchaValue.current.reset();
                } else if (res.data.msg === 'fail') {
                    setError(true);
                    setSent(false);
                    setButtontext('Submit to Get Your Consultation');
                }
            })
            .catch((err) => {
                setButtontext('Submit to Get Your Consultation');
                console.log(err);
            });
    };

    return (
        <form
            noValidate
            onSubmit={(e) => onSubmit(e)}
            noValidate
            id='fm-contact-form'
            className='fm-contact'
        >
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6}>
                    <TextField
                        autoComplete='fname'
                        name='fullName'
                        required
                        fullWidth
                        id='fullName'
                        value={fullName}
                        label='Full Name'
                        onChange={(e) => onChange(e)}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <TextField
                        required
                        fullWidth
                        id='phone'
                        label='Phone Number'
                        name='phone'
                        value={phone}
                        autoComplete='pnumber'
                        onChange={(e) => onChange(e)}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <TextField
                        required
                        fullWidth
                        id='email'
                        label='Email Address'
                        name='email'
                        autoComplete='email'
                        value={email}
                        onChange={(e) => onChange(e)}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <TextField
                        required
                        fullWidth
                        id='interest'
                        label='Interested in'
                        name='interest'
                        value={interest}
                        onChange={(e) => onChange(e)}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <TextField
                        fullWidth
                        required
                        id='message'
                        label='Please briefly describe the services you are seeking.'
                        multiline
                        rows={4}
                        name='message'
                        value={message}
                        onChange={(e) => onChange(e)}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <div className='align-center'>
                        {warning && (
                            <Fragment>
                                <Alert severity='warning'>
                                    <AlertTitle>Warning</AlertTitle>
                                    Check the box to prove you are not a robot
                                </Alert>
                            </Fragment>
                        )}
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey='6Lc86-4aAAAAAJviSY6kLDUz1Gaao6YR0t0MU5nd'
                            onChange={onChange}
                        />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    {sent && (
                        <Fragment>
                            <Alert severity='success'>
                                <AlertTitle>Success</AlertTitle>
                                {mess}
                            </Alert>
                        </Fragment>
                    )}
                </Grid>
                <Grid item xs={12}>
                    {error && (
                        <Fragment>
                            <Alert severity='error'>
                                <AlertTitle>Error</AlertTitle>
                                There was an error sending the form
                                <ul>
                                    {errs &&
                                        errs.length > 0 &&
                                        errs.map((r, index) => (
                                            <li key={index}>{r.msg}</li>
                                        ))}
                                </ul>
                            </Alert>
                        </Fragment>
                    )}
                </Grid>
            </Grid>
            <button className='submit-btn' type='submit'>
                {buttontext}
            </button>
            <br />
            <small style={{ color: '#fff' }}>(One Click To Submit)</small>
        </form>
    );
};

export default ContactForm;
