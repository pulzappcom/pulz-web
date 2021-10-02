import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  compose, border, space, typography, variant,
} from 'styled-system';
import SxPropTypes from '@styled-system/prop-types';

const Link = styled.a(
  compose(
    border,
    space,
    typography,
  ),
  variant({
    variants: {
      black: {
        color: '#272727',
        '&:hover': {
          color: 'white',
        },
      },
    },
  }),
);

Link.defaultProps = {
  variant: 'black',
};

Link.propTypes = {
  ...SxPropTypes.border,
  ...SxPropTypes.space,
  ...SxPropTypes.typography,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['black']),
};

export default Link;
