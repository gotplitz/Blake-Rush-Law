import Head from 'next/head';
import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';

// Parts
import Spinning from '../components/routing/Spinning';
import PagesHeaders from '../components/Layout/PagesHeaders';
import ContactDetails from '../components/Contacts/ContactDetails';
import HomeForm from '../components/Home/HomeForm';

const ContactUs = ({ contactpage }) => {
    const [contacttop, setContacttop] = useState({
        title: 'Law office of Blake W. Rush',
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
            setContacttop({
                title: contactpage.title.rendered,
                intro: contactpage.fm_metabox.subtitle,
                img: contactpage.featured_media,
                desc: contactpage.excerpt.rendered.replace(/(<([^>]+)>)/gi, ''),
            });
            setUrl(window.location.pathname);
            setLoading(false);
        }

        pagesLinks();

        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        async function setData() {
            if (contacttop.img !== 0) {
                await axios
                    .get(
                        `https://blakewp.ferociousmediaweb.com/wp-json/wp/v2/media/${contacttop.img}`
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
    }, [contacttop.img]);

    return (
        <Fragment>
            <Head>
                <title>{contacttop.title} | Blake W. Rush | Law Firm</title>

                <meta name='description' content={contacttop.desc} />
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
                    content={`${contacttop.title} | Law office of Blake W. Rush`}
                />
                <meta property='og:image' key='ogimage' content={img.url} />
                <meta content='image/*' property='og:image:type' />
                <meta
                    property='og:site_name'
                    key='ogsitename'
                    content={`${contacttop.title} | Law office of Blake W. Rush`}
                />
                <meta
                    property='og:description'
                    key='ogdesc'
                    content={contacttop.desc}
                />
            </Head>
            <div className='all-body contact-page'>
                {loading ? <Spinning /> : <PagesHeaders header={contacttop} />}
                <ContactDetails />
                <HomeForm />
            </div>
        </Fragment>
    );
};

export const getStaticProps = async () => {
    const pagesdata = await fetch(
        `https://blakewp.ferociousmediaweb.com/wp-json/wp/v2/pages`
    );
    const pages = await pagesdata.json();

    const contactdata = await fetch(
        `https://blakewp.ferociousmediaweb.com/wp-json/wp/v2/pages/15`
    );
    const contactpage = await contactdata.json();

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
            contactpage,
            families,
            injuries,
        },
    };
};

export default ContactUs;
