import Head from 'next/head';
import { Fragment } from 'react';
import dynamic from 'next/dynamic';

// Parts
import HomeSlider from '../components/Home/HomeSlider';
import HomeContent from '../components/Home/HomeContent';
import BlakeBio from '../components/Home/BlakeBio';
const HomeServices = dynamic(() => import('../components/Home/HomeServices'));
const HomeTestimonials = dynamic(() =>
    import('../components/Home/HomeTestimonials')
);
const Features = dynamic(() => import('../components/Home/Features'));
const CaseStudies = dynamic(() => import('../components/Home/CaseStudies'));
const LatestNews = dynamic(() => import('../components/Home/LatestNews'));

export default function Home({
    sliders,
    families,
    injuries,
    testimonials,
    posts,
    homepage,
}) {
    return (
        <Fragment>
            <Head>
                <title>Law Office of Blake W. Rush</title>

                <meta
                    name='description'
                    content={
                        'At the Law Office of Blake W. Rush, our clients come first. We provide honest, straightforward advice in a private and personal atmosphere, and we pride ourselves on the results we achieve for our clients.'
                    }
                />
                <meta
                    property='image'
                    content={
                        'http://blakewp.ferociousmediaweb.com/wp-content/uploads/2021/02/home-1-e1622140069976.jpg'
                    }
                />
                <meta property='og:locale' content='en_US' />
                <meta property='og:type' content='website' />
                <meta
                    property='og:url'
                    content={`https://blakerushlaw.com`}
                    key='ogurl'
                />
                <meta
                    property='og:title'
                    key='ogtitle'
                    content={`Law Office of Blake W. Rush`}
                />
                <meta
                    property='og:image'
                    key='ogimage'
                    content={
                        'http://blakewp.ferociousmediaweb.com/wp-content/uploads/2021/02/home-1-e1622140069976.jpg'
                    }
                />
                <meta content='image/*' property='og:image:type' />
                <meta
                    property='og:site_name'
                    key='ogsitename'
                    content={`Law Office of Blake W. Rush`}
                />
                <meta
                    property='og:description'
                    content={
                        'At the Law Office of Blake W. Rush, our clients come first. We provide honest, straightforward advice in a private and personal atmosphere, and we pride ourselves on the results we achieve for our clients.'
                    }
                />
            </Head>
            <div className='home-body'>
                <HomeSlider sliders={sliders} />
                <HomeContent homepage={homepage} />
                <BlakeBio />
                <HomeServices families={families} personals={injuries} />
                <HomeTestimonials testimonials={testimonials} />
                <Features />
                <CaseStudies />
                <LatestNews posts={posts} />
            </div>
        </Fragment>
    );
}

export const getStaticProps = async () => {
    const pagesdata = await fetch(
        `https://blakewp.ferociousmediaweb.com/wp-json/wp/v2/pages`
    );
    const pages = await pagesdata.json();

    const homedata = await fetch(
        `https://blakewp.ferociousmediaweb.com/wp-json/wp/v2/pages/2`
    );
    const homepage = await homedata.json();

    const slidersdata = await fetch(
        `https://blakewp.ferociousmediaweb.com/wp-json/wp/v2/sliders`
    );
    const sliders = await slidersdata.json();

    const testidata = await fetch(
        `https://blakewp.ferociousmediaweb.com/wp-json/wp/v2/testimonials?per_page=100`
    );
    const testimonials = await testidata.json();

    const blogdata = await fetch(
        `https://blakewp.ferociousmediaweb.com/wp-json/wp/v2/posts`
    );
    const posts = await blogdata.json();

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
            homepage,
            sliders,
            testimonials,
            posts,
            families,
            injuries,
        },
        revalidate: 30,
    };
};
