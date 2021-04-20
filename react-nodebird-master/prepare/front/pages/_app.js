import React from 'react';
import PropTypes from "prop-types";
import 'antd/dist/antd.css';

import wrapper from '../store/configureStore';
import Head from 'next/head';

const NodeBird = ({ Component }) => {

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>YesJong</title>
            </Head>
            <Component />
        </>

    );

};

NodeBird.prototypes = {
    Component: PropTypes.elementType.isRequired,
}

export default NodeBird;