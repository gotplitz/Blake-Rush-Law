import { Link } from 'react-router-dom';
import React from 'react';
import ScrollToTop from '../routing/ScrollToTop';

const NotFound = () => {
    return (
        <div className='home-body not-found'>
            <ScrollToTop />
            <section>
                <h1>
                    <i className='fas fa-exclamation-triangle'></i> 404 :-(
                </h1>
                <p style={{ marginBottom: 50 }}>
                    {' '}
                    The page you are trying to access doesn't exist.
                </p>
                <div className='cta-button'>
                    <Link to='/' className='submit-btn'>
                        Back to Home
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default NotFound;
