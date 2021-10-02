import PropTypes from 'prop-types';
import styled from 'styled-components';
import styledPropTypes from '@styled-system/prop-types';
import {
  color,
  compose,
  display,
  shadow,
  space,
  textAlign,
  typography,
} from 'styled-system';

const Text = styled.span(
  compose(
    color,
    display,
    shadow,
    space,
    textAlign,
    typography,
  ),
);

Text.defaultProps = {
  whiteSpace: 'normal',
};

Text.propTypes = {
  ...styledPropTypes.color,
  ...styledPropTypes.display,
  ...styledPropTypes.shadow,
  ...styledPropTypes.space,
  ...styledPropTypes.textAlign,
  ...styledPropTypes.typography,
  whiteSpace: PropTypes.oneOf(['normal', 'nowrap', 'pre-wrap', 'pre', 'pre-line']),
};

export default Text;
