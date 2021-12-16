import React, { useEffect } from 'react';
import Link from 'next/link';

import { Grid } from '@material-ui/core';

// Parts
import MainMenu from '../Layout/MainMenu';
import SecondaryBar from './SecondaryBar';

const TopBar = ({ pages, families, injuries }) => {
    useEffect(() => {
        function paral() {
            var scrollPosition = window.pageYOffset;
            var navbar = document.getElementById('navbar');
            var sticky = navbar.offsetTop;

            if (scrollPosition > sticky) {
                navbar.classList.add('sticky');
            } else {
                navbar.classList.remove('sticky');
            }
        }

        document.addEventListener('scroll', paral, true);

        return () => {
            document.removeEventListener('scroll', paral, true);
        };
    });

    return (
        <header id='navbar' className='top-bar'>
            <SecondaryBar />
            <div className='main-top'>
                <Grid container spacing={0}>
                    <Grid item xs={7} sm={5} md={3} lg={3}>
                        <div className='logo-wrapp'>
                            <Link href='/'>
                                <a>
                                    <img
                                        src='/images/blake-w-rush-logo.svg'
                                        alt='Blacke W. Rush law logo'
                                        width='100%'
                                        height='100%'
                                    />
                                </a>
                            </Link>
                        </div>
                    </Grid>
                    <Grid item xs={5} sm={7} md={9} lg={9}>
                        <div className='locations-top-wrapper'>
                            <MainMenu
                                pages={pages}
                                families={families}
                                injuries={injuries}
                            />
                        </div>
                    </Grid>
                </Grid>
            </div>
        </header>
    );
};

export default TopBar;
