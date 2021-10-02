/* eslint-disable prefer-destructuring */

import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider as TP } from 'styled-components';

import * as theme from '../../constants/theme';

const breakpoints = [
  `${theme.BreakpointMobileMedium}px`,
  `${theme.BreakpointMobileLarge}px`,
  `${theme.BreakpointTablet}px`,
  `${theme.BreakpointDesktopMedium}px`,
  `${theme.BreakpointDesktopLarge}px`,
];

breakpoints.mobileM = breakpoints[0];
breakpoints.mobileL = breakpoints[1];
breakpoints.tablet = breakpoints[2];
breakpoints.desktopM = breakpoints[3];
breakpoints.desktopL = breakpoints[4];

const colors = {
  black: `${theme.ColorBlack}`,
  background: `${theme.ColorBackground}`,
  white: `${theme.ColorWhite}`,
};

const sizes = [
  0,
  theme.SpaceXxxSmall,
  theme.SpaceXxSmall,
  theme.SpaceXSmall,
  theme.SpaceSmall,
  theme.SpaceMedium,
  theme.SpaceLarge,
  theme.SpaceXLarge,
  theme.SpaceXxLarge,
  theme.SpaceXxxLarge,
];

const shadows = {
  default: theme.ShadowDefault,
  level1: theme.ShadowLevel1,
  level2: theme.ShadowLevel2,
  level3: theme.ShadowLevel3,
  level4: theme.ShadowLevel4,
  level5: theme.ShadowLevel5,
};

const zIndices = {
  default: theme.ZIndexDefault,
  sticky: theme.ZIndexSticky,
  modal: theme.ZIndexModal,
  modalOverlay: theme.ZIndexModalOverlay,
  onTheTop: theme.ZIndexOnTheTop,
};

const ThemeProvider = ({ children }) => (
  <TP theme={{
    breakpoints, colors, sizes, shadows, zIndices,
  }}
  >
    {children}
  </TP>
);

ThemeProvider.defaultProps = {
  children: null,
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default ThemeProvider;
