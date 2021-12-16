import React from 'react';
import { Link } from 'react-router-dom';

import CtaBg from '../../images/cta-bacground.jpg';

const CallToActtion = () => {
    return (
        <div
            className='cta-all-pages cta-all-pages section-border blue-brake'
            style={{ backgroundImage: `url(${CtaBg})` }}
        >
            <section>
                <h4>Get A Free Consultation</h4>
                <p>
                    Are you ready to start, click the button below for all our
                    contact information
                </p>
                <div className='gold-button'>
                    <Link to='#!'>Schedule a Free Consultation</Link>
                </div>
            </section>
        </div>
    );
};

export default CallToActtion;
