import React, { Fragment, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Slant as Hamburger } from 'hamburger-react';

// Materialize
import { IconButton } from '@material-ui/core';

const MainMenu = ({ pages, families, injuries }) => {
    const [isOpen, setOpen] = useState(false);

    const mobileMenuId = 'primary-search-account-menu-mobile';

    const renderMobileMenu = () => {
        const opeMenu = document.getElementById(
            'primary-search-account-menu-mobile'
        );
        if (opeMenu.classList.contains('opened-menu')) {
            opeMenu.classList.remove('opened-menu');
        } else {
            opeMenu.classList.add('opened-menu');
        }
    };

    const wrapperRef = useRef(null);
    const subwrapperRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target)
            ) {
                const opeMenu = document.getElementById(
                    'primary-search-account-menu-mobile'
                );

                opeMenu.classList.remove('opened-menu');
                setOpen(false);

                var hamb = document.getElementsByClassName('hamburger-react');
                var hambdiv = document.querySelectorAll('.hamburger-react div');
                for (var i = 0; i < hamb.length; i++) {
                    hamb[i].style.transform = 'none';
                }
                for (var x = 0; x < hambdiv.length; x++) {
                    hambdiv[x].style.transform = 'none';
                }
            }
        }

        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        };
    });

    useEffect(() => {
        const handleClickOutsideSub = (event) => {
            if (
                subwrapperRef.current &&
                !subwrapperRef.current.contains(event.target)
            ) {
                const opeSubMenuUno = document.getElementById('sub-menu-uno');
                const opeSubMenuDos = document.getElementById('sub-menu-dos');
                const opeSubMenuTres = document.getElementById(
                    'mobile-sub-menu-uno'
                );
                const opeSubMenuCuatro = document.getElementById(
                    'mobile-sub-menu-dos'
                );

                opeSubMenuUno.classList.remove('abierto-submenu');
                opeSubMenuDos.classList.remove('abierto-submenu');
                opeSubMenuTres.classList.remove('abierto-submenu');
                opeSubMenuCuatro.classList.remove('abierto-submenu');
            }
        };

        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutsideSub);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutsideSub);
        };
    });

    const closeMenu = () => {
        const closeMenu = document.getElementById(
            'primary-search-account-menu-mobile'
        );
        closeMenu.classList.remove('opened-menu');
        setOpen(false);
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'auto',
        });
    };

    const subUno = (e) => {
        e.preventDefault();

        const sub1 = document.getElementById('sub-menu-uno');

        if (sub1.classList.contains('abierto-submenu')) {
            sub1.classList.remove('abierto-submenu');
        } else {
            sub1.classList.add('abierto-submenu');
        }
    };

    const outHover = () => {
        const sub1 = document.getElementById('sub-menu-uno');
        const sub2 = document.getElementById('sub-menu-dos');

        if (sub1.classList.contains('abierto-submenu')) {
            sub1.classList.remove('abierto-submenu');
        } else if (sub2.classList.contains('abierto-submenu')) {
            sub2.classList.remove('abierto-submenu');
        }
    };

    const hoverMenuU = () => {
        const sub1 = document.getElementById('sub-menu-uno');
        const sub2 = document.getElementById('sub-menu-dos');

        sub1.classList.add('abierto-submenu');
        sub2.classList.remove('abierto-submenu');
    };

    const hoverMenuD = () => {
        const sub1 = document.getElementById('sub-menu-dos');
        const sub2 = document.getElementById('sub-menu-uno');

        sub1.classList.add('abierto-submenu');
        sub2.classList.remove('abierto-submenu');
    };

    const subDos = (e) => {
        e.preventDefault();

        const sub2 = document.getElementById('sub-menu-dos');

        if (sub2.classList.contains('abierto-submenu')) {
            sub2.classList.remove('abierto-submenu');
        } else {
            sub2.classList.add('abierto-submenu');
        }
    };

    const mobsubMenu = (e) => {
        e.preventDefault();
        const openOne = document.getElementById('mobile-sub-menu-uno');
        const closeotherone = document.getElementById('mobile-sub-menu-dos');
        if (openOne.classList.contains('abierto-submenu')) {
            openOne.classList.remove('abierto-submenu');
        } else {
            openOne.classList.add('abierto-submenu');
            closeotherone.classList.remove('abierto-submenu');
        }
    };
    const celsubMenu = (e) => {
        e.preventDefault();
        const openTwo = document.getElementById('mobile-sub-menu-dos');
        const closeothertwo = document.getElementById('mobile-sub-menu-uno');
        if (openTwo.classList.contains('abierto-submenu')) {
            openTwo.classList.remove('abierto-submenu');
        } else {
            openTwo.classList.add('abierto-submenu');
            closeothertwo.classList.remove('abierto-submenu');
        }
    };

    const NeedHov = (page) => {
        if (page.title.rendered === 'Family Law') {
            return hoverMenuU;
        } else if (page.title.rendered === 'Personal Injury') {
            return hoverMenuD;
        } else {
            return outHover;
        }
    };

    const NeedClk = (page) => {
        if (page.title.rendered === 'Family Law') {
            return subUno;
        } else if (page.title.rendered === 'Personal Injury') {
            return subDos;
        } else {
            return null;
        }
    };

    const NeedClkMob = (page) => {
        if (page.title.rendered === 'Family Law') {
            return mobsubMenu;
        } else if (page.title.rendered === 'Personal Injury') {
            return celsubMenu;
        } else {
            return closeMenu;
        }
    };

    return (
        <div className='menu-container'>
            <div className='class-grow' />
            <div className='section-desktop' ref={subwrapperRef}>
                <Link href='/'>
                    <a onMouseOver={outHover} className='top-menu'>
                        Home
                    </a>
                </Link>

                {pages &&
                    pages.length > 0 &&
                    pages
                        .sort((a, b) => new Date(a.date) - new Date(b.date))
                        .slice(2, 10)
                        .map((page) => (
                            <Link
                                key={page.id}
                                href={
                                    page.title.rendered === 'Family Law' ||
                                    page.title.rendered === 'Personal Injury'
                                        ? '#!'
                                        : `/${page.slug}`
                                }
                            >
                                <a
                                    onMouseOver={NeedHov(page)}
                                    onClick={NeedClk(page)}
                                    className={
                                        page.title.rendered === 'Family Law' ||
                                        page.title.rendered ===
                                            'Personal Injury'
                                            ? 'top-menu has-submenu'
                                            : 'top-menu'
                                    }
                                >
                                    {page.title.rendered}
                                </a>
                            </Link>
                        ))}

                <div id='sub-menu-uno' className='submenu-pop-up'>
                    <ul>
                        {families &&
                            families.length > 0 &&
                            families
                                .sort(
                                    (a, b) =>
                                        new Date(a.date) - new Date(b.date)
                                )
                                .map((fm) => (
                                    <li key={fm.id}>
                                        <Link
                                            href={`/family-law/[slug]`}
                                            as={`/family-law/${fm.slug}`}
                                        >
                                            <a
                                                onClick={closeMenu}
                                                dangerouslySetInnerHTML={{
                                                    __html: fm.title.rendered,
                                                }}
                                            ></a>
                                        </Link>
                                    </li>
                                ))}
                    </ul>
                </div>

                <div id='sub-menu-dos' className='submenu-pop-up'>
                    <ul>
                        {injuries &&
                            injuries.length > 0 &&
                            injuries
                                .sort(
                                    (a, b) =>
                                        new Date(a.date) - new Date(b.date)
                                )
                                .map((pr) => (
                                    <li key={pr.id}>
                                        <Link
                                            href={`/personal-injury/[injurylink]`}
                                            as={`/personal-injury/${pr.slug}`}
                                        >
                                            <a
                                                onClick={closeMenu}
                                                dangerouslySetInnerHTML={{
                                                    __html: pr.title.rendered,
                                                }}
                                            ></a>
                                        </Link>
                                    </li>
                                ))}
                    </ul>
                </div>
            </div>
            <div ref={wrapperRef} className='mobile-menu-wrap class-mobile'>
                <div
                    id='primary-search-account-menu-mobile'
                    className='menu-pop-up'
                >
                    <ul>
                        <li>
                            <Link href='/' onClick={closeMenu}>
                                Home
                            </Link>
                        </li>
                        {pages &&
                            pages.length > 0 &&
                            pages
                                .sort(
                                    (a, b) =>
                                        new Date(a.date) - new Date(b.date)
                                )
                                .slice(2, 10)
                                .map((page) => (
                                    <li
                                        key={page.id}
                                        ref={subwrapperRef}
                                        className={
                                            page.title.rendered ===
                                                'Family Law' ||
                                            page.title.rendered ===
                                                'Personal Injury'
                                                ? 'top-menu has-submenu'
                                                : 'top-menu'
                                        }
                                    >
                                        <Link
                                            href={
                                                page.title.rendered ===
                                                    'Family Law' ||
                                                page.title.rendered ===
                                                    'Personal Injury'
                                                    ? '#!'
                                                    : `/${page.slug}`
                                            }
                                        >
                                            <a
                                                onClick={NeedClkMob(page)}
                                                className={
                                                    page.title.rendered ===
                                                        'Family Law' ||
                                                    page.title.rendered ===
                                                        'Personal Injury'
                                                        ? 'mobile-submenu'
                                                        : ''
                                                }
                                                ref={subwrapperRef}
                                            >
                                                {' '}
                                                {page.title.rendered}
                                            </a>
                                        </Link>
                                        {page.title.rendered ===
                                            'Family Law' && (
                                            <div
                                                id='mobile-sub-menu-uno'
                                                className='submenu-pop-up'
                                                ref={subwrapperRef}
                                            >
                                                <ul>
                                                    {families &&
                                                        families.length > 0 &&
                                                        families
                                                            .sort(
                                                                (a, b) =>
                                                                    new Date(
                                                                        a.date
                                                                    ) -
                                                                    new Date(
                                                                        b.date
                                                                    )
                                                            )
                                                            .map((fm) => (
                                                                <li key={fm.id}>
                                                                    <Link
                                                                        href={`/family-law/[slug]`}
                                                                        as={`/family-law/${fm.slug}`}
                                                                    >
                                                                        <a
                                                                            onClick={
                                                                                closeMenu
                                                                            }
                                                                            dangerouslySetInnerHTML={{
                                                                                __html:
                                                                                    fm
                                                                                        .title
                                                                                        .rendered,
                                                                            }}
                                                                        ></a>
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                </ul>
                                            </div>
                                        )}
                                        {page.title.rendered ===
                                            'Personal Injury' && (
                                            <div
                                                id='mobile-sub-menu-dos'
                                                className='submenu-pop-up'
                                                ref={subwrapperRef}
                                            >
                                                <ul>
                                                    {injuries &&
                                                        injuries.length > 0 &&
                                                        injuries
                                                            .sort(
                                                                (a, b) =>
                                                                    new Date(
                                                                        a.date
                                                                    ) -
                                                                    new Date(
                                                                        b.date
                                                                    )
                                                            )
                                                            .map((pr) => (
                                                                <li key={pr.id}>
                                                                    <Link
                                                                        href={`/personal-injury/[injurylink]`}
                                                                        as={`/personal-injury/${pr.slug}`}
                                                                    >
                                                                        <a
                                                                            onClick={
                                                                                closeMenu
                                                                            }
                                                                            dangerouslySetInnerHTML={{
                                                                                __html:
                                                                                    pr
                                                                                        .title
                                                                                        .rendered,
                                                                            }}
                                                                        ></a>
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                </ul>
                                            </div>
                                        )}
                                    </li>
                                ))}
                    </ul>
                </div>

                <IconButton
                    aria-label='show more'
                    aria-controls={mobileMenuId}
                    aria-haspopup='true'
                    color='inherit'
                    className='mobile-menu'
                >
                    <Hamburger
                        label='NAVIGATION'
                        toggled={isOpen}
                        toggle={setOpen}
                        onToggle={(toggled) => {
                            if (toggled) {
                                renderMobileMenu();
                            } else {
                                closeMenu();
                            }
                        }}
                    />
                </IconButton>
            </div>
        </div>
    );
};

export default MainMenu;
