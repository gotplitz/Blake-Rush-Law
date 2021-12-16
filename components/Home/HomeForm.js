import { Grid } from '@material-ui/core';
import React from 'react';

// Parts
import ContactForm from '../Layout/ContactForm';

const HomeForm = () => {
    return (
        <div
            className='cta-all-pages section-border blue-brake'
            style={{ backgroundImage: `url(/images/cta-bacground.jpg)` }}
        >
            <section>
                <h4>Free Consultation</h4>
                <p>
                    Request today a free consultation filling out the form
                    below.
                </p>
                <Grid container spacing={0} justify='center'>
                    <Grid item xs={12} sm={9} md={8}>
                        <ContactForm />
                    </Grid>
                </Grid>
            </section>
        </div>
    );
};

export default HomeForm;
