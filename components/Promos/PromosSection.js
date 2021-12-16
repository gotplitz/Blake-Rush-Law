import { Grid } from '@material-ui/core';
import promoStyles from '../../styles/Promo.module.css';
import Link from 'next/link';

const PromosSection = ({ promos }) => {
    return (
        <div className={promoStyles.pagewrap}>
            <div className={`${promoStyles['promos-section']}`}>
                <section className={`is-white`}>
                    <h2 className='heading-2 text-center'>Monthly Offers</h2>
                </section>
            </div>

            <section>
                <Grid container spacing={0} justify='center'>
                    {promos.length > 0 &&
                        promos.map((pr) => (
                            <Grid
                                item
                                key={pr._id}
                                xs={12}
                                sm={6}
                                md={4}
                                style={{
                                    backgroundImage: `url('https://wdback.ferociousmediaweb.com/uploads/${pr.img}')`,
                                    position: 'relative',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                }}
                            >
                                <div
                                    className={`is-white ${promoStyles['promo']}`}
                                >
                                    <small>Special Offer</small>
                                    <h4 className='heading-4'>{pr.title}</h4>
                                    <h4 className='heading-4 accent-text'>
                                        {pr.amount}
                                    </h4>
                                    <div
                                        className={promoStyles.expiration}
                                        dangerouslySetInnerHTML={{
                                            __html: pr.expiration,
                                        }}
                                    ></div>
                                    <Link href='/contact-us'>
                                        <a>
                                            <div className='btn btn-xs'>
                                                Contact Us
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                                <div className='black-overlay'></div>
                            </Grid>
                        ))}
                </Grid>
            </section>
        </div>
    );
};

export default PromosSection;
