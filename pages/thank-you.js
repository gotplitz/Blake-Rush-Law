import Link from 'next/link';

const ThankYou = () => {
    return (
        <div className='home-body thank-you'>
            <section>
                <h1>Thank You</h1>
                <h2>We Have Received Your Request</h2>
                <h4 style={{ marginBottom: 50 }}>
                    A representative from our office will contact you shortly.
                    If you need immediate assistance please call us at{' '}
                    <a href='tel:9087139800'>(908) 713-9800</a>.
                </h4>
                <div className='cta-button'>
                    <Link href='/'>
                        <a className='submit-btn'>Back to Home</a>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export const getStaticProps = async () => {
    const pagesdata = await fetch(
        `https://blakewp.ferociousmediaweb.com/wp-json/wp/v2/pages`
    );
    const pages = await pagesdata.json();

    const familydata = await fetch(
        `https://blakewp.ferociousmediaweb.com/wp-json/wp/v2/families`
    );
    const families = await familydata.json();

    const injurydata = await fetch(
        `https://blakewp.ferociousmediaweb.com/wp-json/wp/v2/personals`
    );
    const injuries = await injurydata.json();

    return {
        props: {
            pages,
            families,
            injuries,
        },
    };
};

export default ThankYou;
