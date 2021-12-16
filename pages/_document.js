import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang='en-US'>
                <Head>
                    <script
                        src='https://kit.fontawesome.com/8af360bd3a.js'
                        crossOrigin='anonymous'
                        async
                    ></script>

                    <link
                        rel='apple-touch-icon'
                        sizes='57x57'
                        href='/apple-icon-57x57.png'
                    />
                    <link
                        rel='apple-touch-icon'
                        sizes='60x60'
                        href='/apple-icon-60x60.png'
                    />
                    <link
                        rel='apple-touch-icon'
                        sizes='72x72'
                        href='/apple-icon-72x72.png'
                    />
                    <link
                        rel='apple-touch-icon'
                        sizes='76x76'
                        href='/apple-icon-76x76.png'
                    />
                    <link
                        rel='apple-touch-icon'
                        sizes='114x114'
                        href='/apple-icon-114x114.png'
                    />
                    <link
                        rel='apple-touch-icon'
                        sizes='120x120'
                        href='/apple-icon-120x120.png'
                    />
                    <link
                        rel='apple-touch-icon'
                        sizes='144x144'
                        href='/apple-icon-144x144.png'
                    />
                    <link
                        rel='apple-touch-icon'
                        sizes='152x152'
                        href='/apple-icon-152x152.png'
                    />
                    <link
                        rel='apple-touch-icon'
                        sizes='180x180'
                        href='/apple-icon-180x180.png'
                    />
                    <link
                        rel='icon'
                        type='image/png'
                        sizes='192x192'
                        href='/android-icon-192x192.png'
                    />
                    <link
                        rel='icon'
                        type='image/png'
                        sizes='32x32'
                        href='/favicon-32x32.png'
                    />
                    <link
                        rel='icon'
                        type='image/png'
                        sizes='96x96'
                        href='/favicon-96x96.png'
                    />
                    <link
                        rel='icon'
                        type='image/png'
                        sizes='16x16'
                        href='/favicon-16x16.png'
                    />
                    <link rel='manifest' href='/manifest.json' />

                    <meta name='msapplication-TileColor' content='#ffffff' />
                    <meta
                        name='msapplication-TileImage'
                        content='/ms-icon-144x144.png'
                    />
                    <meta name='theme-color' content='#ffffff' />

                    <link
                        rel='preconnect'
                        href='https://fonts.googleapis.com'
                    />
                    <link
                        rel='preconnect'
                        href='https://fonts.gstatic.com'
                        crossorigin
                    />
                    <link
                        rel='preload'
                        as='style'
                        href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap'
                        onLoad="this.rel='stylesheet'"
                    ></link>

                    <link
                        rel='preload'
                        href='https://blakewp.ferociousmediaweb.com/wp-content/uploads/2021/02/clinton-nj-river.jpg'
                        as='image'
                    />
                    <link
                        rel='preload'
                        href='https://blakewp.ferociousmediaweb.com/wp-content/uploads/2021/02/clinton-river-bridge.jpg'
                        as='image'
                    />
                    <link
                        rel='preload'
                        href='https://blakewp.ferociousmediaweb.com/wp-content/uploads/2021/02/court-pillars.jpg'
                        as='image'
                    />
                    <link
                        rel='preload'
                        href='https://blakewp.ferociousmediaweb.com/wp-content/uploads/2021/02/lady-justice-building.jpg'
                        as='image'
                    />
                    <link
                        rel='preload'
                        href='https://blakewp.ferociousmediaweb.com/wp-content/uploads/2021/02/somerset-court-building.jpg'
                        as='image'
                    />

                    {/* <!-- Google Tag Manager --> */}

                    <script
                        dangerouslySetInnerHTML={{
                            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PT69SS');`,
                        }}
                    ></script>

                    {/* <!-- End Google Tag Manager --> */}
                </Head>
                <body>
                    <noscript
                        dangerouslySetInnerHTML={{
                            __html: `<iframe
                            src='//www.googletagmanager.com/ns.html?id=GTM-PT69SS'
                            height='0'
                            width='0'
                            style='display:none;visibility:hidden'
                        ></iframe>`,
                        }}
                    ></noscript>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `(function(){ var s = document.createElement('script'), e = ! document.body ? document.querySelector('head') : document.body; s.src = 'https://acsbapp.com/apps/app/dist/js/app.js'; s.async = true; s.onload = function(){ acsbJS.init({ statementLink : '', footerHtml : 'Powered by Ferocious Media', hideMobile : false, hideTrigger : false, language : 'en', position : 'left', leadColor : '#153b66', triggerColor : '#153b66', triggerRadius : '50%', triggerPositionX : 'left', triggerPositionY : 'bottom', triggerIcon : 'people', triggerSize : 'medium', triggerOffsetX : 20, triggerOffsetY : 20, mobile : { triggerSize : 'small', triggerPositionX : 'left', triggerPositionY : 'bottom', triggerOffsetX : 10, triggerOffsetY : 10, triggerRadius : '50%' } }); }; e.appendChild(s);}());`,
                        }}
                    ></script>

                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
