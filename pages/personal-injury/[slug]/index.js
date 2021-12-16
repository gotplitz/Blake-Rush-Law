import Head from 'next/head';
import { useEffect, useState, Fragment } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

// Parts
import Spinning from '../../../components/routing/Spinning';
import PagesHeaders from '../../../components/Layout/PagesHeaders';
import PersonalBody from '../../../components/Personal/PersonalBody';
import FeaturedBlocks from '../../../components/Personal/FeaturedBlocks';
import TestimonialsTwo from '../../../components/Layout/TestimonialsTwo';

const PersonalInjury = ({ injuries }) => {
    const router = useRouter();

    const [personaltop, setPersonaltop] = useState({
        title: '',
        intro: '',
        img: 0,
        desc: '',
    });

    const [img, setImg] = useState({
        alt_text: 'Ceiling of Justice System Building',
        url: `http://blakewp.ferociousmediaweb.com/wp-content/uploads/2021/02/home-1-e1622140069976.jpg`,
    });

    const [injuriesFeat, setPersonalsfeat] = useState([
        {
            feature_t: '',
            feature_b: '',
        },
    ]);

    const [lastblock, setLastblock] = useState({
        title: '',
        text: '',
    });

    const [content, setContent] = useState('');

    const [url, setUrl] = useState();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        function injuriesContent() {
            injuries &&
                injuries.length > 0 &&
                injuries.map((d) => {
                    if (d.slug === router.query.slug) {
                        setPersonaltop({
                            title: d.title.rendered,
                            intro: d.fm_personal_metabox.subtitle,
                            img: d.featured_media,
                            desc: d.content.rendered,
                        });
                        setContent(d.content.rendered);

                        setUrl(window.location.pathname);

                        setPersonalsfeat([
                            {
                                feature_t: d.fm_personal_metabox.feature_one_h,
                                feature_b: d.fm_personal_metabox.feature_one_p,
                            },
                            {
                                feature_t: d.fm_personal_metabox.feature_two_h,
                                feature_b: d.fm_personal_metabox.feature_two_p,
                            },
                        ]);

                        setLastblock({
                            title: d.fm_personal_metabox.feature_three_h,
                            text: d.fm_personal_metabox.feature_three_p,
                        });
                    }
                });

            setLoading(false);
        }

        injuriesContent();
    }, [router]);

    useEffect(() => {
        async function setData() {
            if (personaltop.img !== 0) {
                await axios
                    .get(
                        `https://blakewp.ferociousmediaweb.com/wp-json/wp/v2/media/${personaltop.img}`
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
    }, [personaltop.img]);

    return (
        <Fragment>
            <Head>
                <title>{personaltop.title} | Blake W. Rush | Law Firm</title>
                <meta name='description' content={personaltop.desc} />
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
                    content={`${personaltop.title} | Law office of Blake W. Rush`}
                />
                <meta property='og:image' key='ogimage' content={img.url} />
                <meta content='image/*' property='og:image:type' />
                <meta
                    property='og:site_name'
                    key='ogsitename'
                    content={`${personaltop.title} | Law office of Blake W. Rush`}
                />
                <meta
                    property='og:description'
                    key='ogdesc'
                    content={personaltop.desc}
                />
            </Head>
            <div className='all-pages personals-pages'>
                {loading ? <Spinning /> : <PagesHeaders header={personaltop} />}
                <PersonalBody contentbody={content} />
                {personaltop.title.includes('Case') ? (
                    <CaseStudies />
                ) : (
                    <FeaturedBlocks
                        injuriesFeat={injuriesFeat}
                        lastblock={lastblock}
                        personals={injuries}
                    />
                )}
                <TestimonialsTwo />
            </div>
        </Fragment>
    );
};

export const getServerSideProps = async () => {
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

export default PersonalInjury;
