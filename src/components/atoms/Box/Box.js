import styled from 'styled-components';
import {
  background,
  border,
  color,
  compose,
  display,
  flexbox,
  layout,
  position,
  space,
  shadow,
  textAlign,
} from 'styled-system';
import css from '@styled-system/css';
import SxProps from '@styled-system/prop-types';

const Box = styled.div(({ sx }) => css(sx),
  compose(
    background,
    border,
    color,
    display,
    flexbox,
    layout,
    position,
    space,
    shadow,
    textAlign,
  ));

Box.propTypes = {
  ...SxProps.background,
  ...SxProps.border,
  ...SxProps.color,
  ...SxProps.display,
  ...SxProps.flexbox,
  ...SxProps.layout,
  ...SxProps.position,
  ...SxProps.space,
  ...SxProps.shadow,
  ...SxProps.textAlign,
};

export default Box;
