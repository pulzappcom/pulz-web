import PropTypes from 'prop-types';
import styled from 'styled-components';
import css from '@styled-system/css';

import Box from './Box';

const Container = styled.div(({ theme, fluid, sx }) => css({
  ...sx,
  marginX: 'auto',
  width: fluid ? '100%' : [
    '100%',
    `calc(${theme.breakpoints.mobileM} - 8px)`,
    `calc(${theme.breakpoints.mobileL} - 8px)`,
    `calc(${theme.breakpoints.tablet} - 16px)`,
    `calc(${theme.breakpoints.desktopM} - 16px)`,
    `calc(${theme.breakpoints.desktopL} - 32px)`,
  ],
}));

Container.defaultProps = {
  children: null,
  fluid: false,
};

Container.propTypes = {
  ...Box.propTypes,
  children: PropTypes.node,
  fluid: PropTypes.bool,
};

export default Container;
