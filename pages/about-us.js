import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import axios from 'axios';

// Parts
import PagesHeaders from '../components/Layout/PagesHeaders';
import Spinning from '../components/routing/Spinning';
import AboutBlake from '../components/About/AboutBlake';
import AboutAwards from '../components/About/AboutAwards';

const AboutUs = ({ aboutpage }) => {
    const [abouttop, setAbouttop] = useState({
        title: '',
        intro: '',
        img: 0,
        desc: '',
    });
    const [img, setImg] = useState({
        alt_text: 'Ceiling of Justice System Building',
        url: `http://blakewp.ferociousmediaweb.com/wp-content/uploads/2021/02/home-1-e1622140069976.jpg`,
    });
    const [url, setUrl] = useState();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        function pagesLinks() {
            setAbouttop({
                title: aboutpage.title.rendered,
                intro: aboutpage.fm_metabox.subtitle,
                img: aboutpage.featured_media,
                desc: aboutpage.excerpt.rendered,
            });
            setUrl(window.location.pathname);
            setLoading(false);
        }

        pagesLinks();

        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        async function setData() {
            if (abouttop.img !== 0) {
                await axios
                    .get(
                        `https://blakewp.ferociousmediaweb.com/wp-json/wp/v2/media/${abouttop.img}`
                    )
                    .then((res) => {
                        setImg({
                            alt_text: res.data.alt_text,
                            url: res.data.media_details.sizes.full.source_url,
                        });
                    })
                    .catch((err) => console.log(err));
            }
        }

        return setData();
    }, [abouttop.img]);

    return (
        <Fragment>
            <Head>
                <title>{abouttop.title} | Blake W. Rush | Law Firm</title>
                <meta name='description' content={abouttop.desc} />
                <meta property='image' content={img.url} />
                <meta property='og:locale' content='en_US' />
                <meta property='og:type' content='website' />
                <meta
                    property='og:url'
                    content={`https://blakerushlaw.com${url}`}
                    key='ogurl'
                />
                <meta
                    property='og:title'
                    key='ogtitle'
                    content={`${abouttop.title} | Law office of Blake W. Rush`}
                />
                <meta property='og:image' key='ogimage' content={img.url} />
                <meta content='image/*' property='og:image:type' />
                <meta
                    property='og:site_name'
                    key='ogsitename'
                    content={`${abouttop.title} | Law office of Blake W. Rush`}
                />
                <meta
                    property='og:description'
                    key='ogdesc'
                    content={abouttop.desc}
                />
            </Head>
            <div className='all-body about-page'>
                {loading ? <Spinning /> : <PagesHeaders header={abouttop} />}
                <AboutBlake />
                <AboutAwards />
            </div>
        </Fragment>
    );
};

export const getStaticProps = async () => {
    const pagesdata = await fetch(
        `https://blakewp.ferociousmediaweb.com/wp-json/wp/v2/pages`
    );
    const pages = await pagesdata.json();

    const aboutdata = await fetch(
        `https://blakewp.ferociousmediaweb.com/wp-json/wp/v2/pages/7`
    );
    const aboutpage = await aboutdata.json();

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
            aboutpage,
            families,
            injuries,
        },
    };
};

export default AboutUs;
