import { Grid } from '@material-ui/core';

const MainContent = ({ subtitle, content }) => {
    return (
        <div className='info-section wave-bg'>
            <section>
                <Grid container justify='center'>
                    <Grid item xs={10} sm={8}>
                        <div style={{ textAlign: 'center' }}>
                            {subtitle !== '' && (
                                <h2 className='heading-2'>{subtitle}</h2>
                            )}
                            <div
                                className='body-text'
                                dangerouslySetInnerHTML={{ __html: content }}
                            ></div>
                            <h3 className='heading-3 accent-text'>
                                <a href='tel:2037328585'>
                                    <i className='fal fa-phone-volume'></i>{' '}
                                    Call: (203) 732-8585
                                </a>
                            </h3>
                            <p className='punch-line'>or text</p>
                            <h3 className='heading-3 accent-text'>
                                <a href='sms:4752232330'>
                                    <i className='fal fa-comment-alt-lines'></i>{' '}
                                    (475) 223-2330
                                </a>
                            </h3>
                        </div>
                    </Grid>
                </Grid>
            </section>
        </div>
    );
};

export default MainContent;
