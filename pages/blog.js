import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import axios from 'axios';

// Parts
import AllItem from '../components/Blog/AllItem';
import PageHeaders from '../components/Layout/PagesHeaders';
import { Fragment } from 'react';

const Blog = ({ posts, blogpage }) => {
    const [blogstop, setBlogstop] = useState({
        title: '',
        intro: '',
        img: '',
        desc: '',
    });
    const [img, setImg] = useState({
        alt_text: 'Ceiling of Justice System Building',
        url: `http://blakewp.ferociousmediaweb.com/wp-content/uploads/2021/02/home-1-e1622140069976.jpg`,
    });
    const [url, setUrl] = useState();

    useEffect(() => {
        function pageContent() {
            setBlogstop({
                title: blogpage.title.rendered,
                intro: blogpage.fm_metabox.subtitle,
                img: blogpage.featured_media,
                desc: blogpage.excerpt.rendered,
            });
            setUrl(window.location.pathname);
        }

        return pageContent();

        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        async function setData() {
            if (blogstop.img !== 0) {
                await axios
                    .get(
                        `https://blakewp.ferociousmediaweb.com/wp-json/wp/v2/media/${blogstop.img}`
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
    }, [blogstop.img]);

    return (
        <Fragment>
            <Head>
                <title>{blogstop.title}| Blake W. Rush | Law Firm</title>
                <meta name='description' content={blogstop.desc} />
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
                    content={`${blogstop.title} | Law office of Blake W. Rush`}
                />
                <meta property='og:image' key='ogimage' content={img.url} />
                <meta content='image/*' property='og:image:type' />
                <meta
                    property='og:site_name'
                    key='ogsitename'
                    content={`${blogstop.title} | Law office of Blake W. Rush`}
                />
                <meta
                    property='og:description'
                    key='ogdesc'
                    content={blogstop.desc}
                />
            </Head>
            <div className='all-body'>
                <PageHeaders header={blogstop} />

                <section>
                    <Grid container spacing={4} justify='center'>
                        <Grid item xs={12} sm={12} className='post-column'>
                            {posts && posts.length === 0 ? (
                                <div
                                    style={{
                                        textAlign: 'center',
                                        width: '100%',
                                        margin: '20px auto',
                                    }}
                                >
                                    We haven't posted anything yet, please
                                    comeback later
                                </div>
                            ) : (
                                posts.map((post, index) => (
                                    <Grid
                                        key={index}
                                        container
                                        spacing={5}
                                        className='blog-post-wrapper'
                                    >
                                        <AllItem post={post} />
                                    </Grid>
                                ))
                            )}
                        </Grid>
                    </Grid>
                </section>
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

    const blog = await fetch(
        `https://blakewp.ferociousmediaweb.com/wp-json/wp/v2/pages/13`
    );
    const blogpage = await blog.json();

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
            blogpage,
            families,
            injuries,
        },
    };
};

export default Blog;
