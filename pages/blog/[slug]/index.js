import Head from 'next/head';
import { useEffect, useState, Fragment } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

// Parts
import Spinning from '../../../components/routing/Spinning';
import PostsHeaders from '../../../components/Blog/PostsHeaders';
import PostBody from '../../../components/Blog/PostBody';

const blog = ({ posts }) => {
    const router = useRouter();

    const [postsTop, setServicestop] = useState({
        title: '',
        intro: '',
        img: 0,
        desc: '',
    });
    const [content, setContent] = useState('');
    const [img, setImg] = useState({
        alt_text: 'Ceiling of Justice System Building',
        url: `http://blakewp.ferociousmediaweb.com/wp-content/uploads/2021/02/home-1-e1622140069976.jpg`,
    });
    const [url, setUrl] = useState();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        function postsContent() {
            posts &&
                posts.length > 0 &&
                posts.map((d) => {
                    if (d.slug === router.query.slug) {
                        setServicestop({
                            title: d.title.rendered,
                            intro: d.date,
                            img: d.featured_media,
                            desc: d.excerpt.rendered.replace(
                                /(<([^>]+)>)/gi,
                                ''
                            ),
                        });
                        setUrl(window.location.pathname);
                        setContent(d.content.rendered);
                    }
                });

            setLoading(false);
        }

        postsContent();
    }, [router]);

    useEffect(() => {
        async function setData() {
            if (postsTop.img !== 0) {
                await axios
                    .get(
                        `https://blakewp.ferociousmediaweb.com/wp-json/wp/v2/media/${postsTop.img}`
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
    }, [postsTop.img]);

    return (
        <Fragment>
            <Head>
                <title>{postsTop.title} | Blake W. Rush | Law Firm</title>
                <meta name='description' content={postsTop.desc} />
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
                    content={`${postsTop.title} | Law office of Blake W. Rush`}
                />
                <meta property='og:image' key='ogimage' content={img.url} />
                <meta content='image/*' property='og:image:type' />
                <meta
                    property='og:site_name'
                    key='ogsitename'
                    content={`${postsTop.title} | Law office of Blake W. Rush`}
                />
                <meta
                    property='og:description'
                    key='ogdesc'
                    content={postsTop.desc}
                />
            </Head>
            <div className='posts-pages-wrap'>
                {loading ? (
                    <Spinning />
                ) : (
                    <Fragment>
                        <PostsHeaders header={postsTop} />
                        <PostBody content={content} />
                    </Fragment>
                )}
            </div>
        </Fragment>
    );
};

export const getServerSideProps = async () => {
    const pagesdata = await fetch(
        `https://blakewp.ferociousmediaweb.com/wp-json/wp/v2/pages`
    );
    const pages = await pagesdata.json();

    const postsdata = await fetch(
        `https://blakewp.ferociousmediaweb.com/wp-json/wp/v2/posts`
    );
    const posts = await postsdata.json();

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
            posts,
            families,
            injuries,
        },
    };
};

export default blog;
