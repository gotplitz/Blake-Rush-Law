import { Grid } from '@material-ui/core';
import React from 'react';

const Features = () => {
    return (
        <div className='feature-boxes'>
            <section>
                <div className='divider gris-section-border gris-brake'></div>
                <Grid container spacing={10}>
                    <Grid item xs={12} sm={12} md={4}>
                        <div className='fb-wrap'>
                            <i className='fal fa-check-circle'></i>
                            <span>
                                Providing Exceptional Representation In New
                                Jersey And Pennsylvania Since 2005
                            </span>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <div className='fb-wrap'>
                            <i className='fal fa-check-circle'></i>
                            <span>
                                Top Reviewed Divorce Attorney In Hunterdon &amp;
                                Somerset County
                            </span>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <div className='fb-wrap'>
                            <i className='fal fa-check-circle'></i>
                            <span>
                                Admitted To The Bar Of The Supreme Court Of The
                                United States
                            </span>
                        </div>
                    </Grid>
                </Grid>
            </section>
        </div>
    );
};

export default Features;
