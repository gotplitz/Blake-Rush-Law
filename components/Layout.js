import { Fragment } from 'react';
import dynamic from 'next/dynamic';

import TopBar from './Layout/TopBar';
const Footer = dynamic(() => import('./Layout/Footer'));

const Layout = ({ children }) => {
    return (
        <Fragment>
            <TopBar
                pages={children.props.pages}
                families={children.props.families}
                injuries={children.props.injuries}
            />
            <Fragment>{children}</Fragment>
            <Footer
                pages={children.props.pages}
                families={children.props.families}
                injuries={children.props.injuries}
            />
        </Fragment>
    );
};

export default Layout;
