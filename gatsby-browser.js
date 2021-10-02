const React = require('react');

const Layout = require('./src/components/templates/Layout/Layout').default;

/* eslint-disable-next-line react/jsx-props-no-spreading, react/prop-types */
exports.wrapPageElement = ({ element, props }) => <Layout {...props}>{element}</Layout>;
