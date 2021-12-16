import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';

import Spinning from '../extras/Spinning';

const LastBlock = ({ final_t, final_b, loading }) => {
    return (
        <div className='break-text'>
            <section>
                <Grid container spacing={7} justify='center'>
                    <Grid item xs={10} sm={8}>
                        <div className='extra-text'>
                            {loading ? (
                                <Spinning />
                            ) : (
                                <Fragment>
                                    <h2
                                        dangerouslySetInnerHTML={{
                                            __html: final_t,
                                        }}
                                    ></h2>

                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: final_b,
                                        }}
                                        className='extra-content'
                                    ></div>
                                </Fragment>
                            )}
                        </div>
                    </Grid>
                </Grid>
            </section>
        </div>
    );
};

export default LastBlock;
