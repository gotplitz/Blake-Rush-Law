import { Link } from 'react-router-dom';
import React from 'react';
import ScrollToTop from '../routing/ScrollToTop';

const ThankYou = () => {
    return (
        <div className='home-body thank-you'>
            <ScrollToTop />
            <section>
                <h1>Thank You</h1>
                <h2>We Have Received Your Request</h2>
                <h4 style={{ marginBottom: 50 }}>
                    {' '}
                    A representative from our office will contact you shortly.
                    If you need immediate assistance please call us at{' '}
                    <a href='tel:9087139800'>(908) 713-9800</a>.
                </h4>
                <div className='cta-button'>
                    <Link to='/' className='submit-btn'>
                        Back to Home
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ThankYou;
