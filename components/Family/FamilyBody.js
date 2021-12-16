import { Grid } from '@material-ui/core';
import React from 'react';

import Spinning from '../routing/Spinning';

const FamilyBody = ({ contentbody, loading }) => {
    return (
        <div className='internaal-pages-content blog-post'>
            {loading ? (
                <Spinning />
            ) : (
                <section>
                    <Grid container spacing={5} justify='center'>
                        <Grid item xs={12} sm={8}>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: contentbody,
                                }}
                                className='blog-post-content-div'
                            ></div>
                        </Grid>
                    </Grid>
                </section>
            )}
        </div>
    );
};

export default FamilyBody;
