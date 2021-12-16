import Image from 'next/image';
import { Grid } from '@material-ui/core';

const AboutAwards = () => {
    return (
        <div className='about-services'>
            <div className='footer-disclaimer'>
                <small>
                    <i>
                        <b>
                            *No aspect of this advertisement has been approved
                            by the Supreme Court of New Jersey.
                        </b>
                    </i>
                </small>
            </div>
            <section>
                <Grid container spacing={5} justify='center'>
                    <Grid
                        item
                        xs={5}
                        sm={3}
                        md={3}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                        }}
                    >
                        <Image
                            src='/images/logo-01.png'
                            alt='10 best 2016'
                            width={140}
                            height={140}
                            className='featured-logo'
                        />
                    </Grid>
                    <Grid
                        item
                        xs={5}
                        sm={3}
                        md={3}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                        }}
                    >
                        <Image
                            src='/images/logo-02.png'
                            alt='Multimillion Dollar Advocates Forum'
                            width={140}
                            height={140}
                            className='featured-logo'
                        />
                    </Grid>
                    <Grid
                        item
                        xs={5}
                        sm={3}
                        md={3}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                        }}
                    >
                        <Image
                            src='/images/logo-04.png'
                            alt='National Academy of Jurisprudence'
                            width={140}
                            height={140}
                            className='featured-logo'
                        />
                    </Grid>
                    <Grid
                        item
                        xs={5}
                        sm={3}
                        md={3}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                        }}
                    >
                        <Image
                            src='/images/logo-03.png'
                            alt='NAFLA'
                            width={140}
                            height={140}
                            className='featured-logo'
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={5} justify='center'>
                    <Grid
                        item
                        xs={5}
                        sm={3}
                        md={3}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                        }}
                    >
                        <a
                            href='https://www.avvo.com/attorneys/08809-nj-blake-rush-553310.html'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <Image
                                src='/images/logo-05.png'
                                alt='Arvo Divorce Badge'
                                width={140}
                                height={140}
                                className='featured-logo'
                            />
                        </a>
                    </Grid>
                    <Grid
                        item
                        xs={5}
                        sm={2}
                        md={2}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                        }}
                    >
                        <Image
                            src='/images/logo-08.png'
                            alt='Google Reviews'
                            width={140}
                            height={140}
                            className='featured-logo'
                        />
                    </Grid>
                    <Grid
                        item
                        xs={5}
                        sm={3}
                        md={3}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                        }}
                    >
                        <a
                            href='https://www.avvo.com/attorneys/08809-nj-blake-rush-553310.html'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <Image
                                src='/images/logo-09.png'
                                alt='Arvo Divorce Badge'
                                width={140}
                                height={140}
                                className='featured-logo'
                            />
                        </a>
                    </Grid>
                </Grid>
            </section>
        </div>
    );
};

export default AboutAwards;
