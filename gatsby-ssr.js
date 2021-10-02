const React = require('react');

const Layout = require('./src/components/templates/Layout/Layout').default;
const {
  ColorCloudPrimaryDark,
  ColorCloudPrimaryLight,
  ColorCloudPrimaryNormal,
  ColorCloudSecondaryDark,
  ColorCloudSecondaryLight,
  ColorCloudSecondaryNormal,
  ColorInkPrimaryDark,
  ColorInkPrimaryLight,
  ColorInkPrimaryNormal,
  ColorInkSecondaryDark,
  ColorInkSecondaryLight,
  ColorInkSecondaryNormal,
} = require('./src/constants/theme');

const MagicScriptTag = () => {
  const codeToRunOnClient = `
    (function() {
      function getInitialColorMode() {
        const persistedColorPreference = window.localStorage.getItem('color-mode');
        const hasPersistedPreference = typeof persistedColorPreference === 'string';
        if (hasPersistedPreference) {
          return persistedColorPreference;
        }
        const mql = window.matchMedia('(prefers-color-scheme: dark)');
        const hasMediaQueryPreference = typeof mql.matches === 'boolean';
        if (hasMediaQueryPreference) {
          return mql.matches ? 'dark' : 'light';
        }
        return 'light';
      }
      const colorMode = getInitialColorMode();
      const root = document.documentElement;
      root.style.setProperty(
        '--color-cloud-light',
        colorMode === 'light'
          ? '${ColorCloudPrimaryLight}'
          : '${ColorCloudSecondaryLight}'
      );
      root.style.setProperty(
        '--color-cloud-normal',
        colorMode === 'light'
          ? '${ColorCloudPrimaryNormal}'
          : '${ColorCloudSecondaryNormal}'
      );
      root.style.setProperty(
        '--color-cloud-dark',
        colorMode === 'light'
          ? '${ColorCloudPrimaryDark}'
          : '${ColorCloudSecondaryDark}'
      );
      root.style.setProperty(
        '--color-ink-light',
        colorMode === 'light'
          ? '${ColorInkPrimaryLight}'
          : '${ColorInkSecondaryLight}'
      );
      root.style.setProperty(
        '--color-ink-normal',
        colorMode === 'light'
          ? '${ColorInkPrimaryNormal}'
          : '${ColorInkSecondaryNormal}'
      );
      root.style.setProperty(
        '--color-ink-dark',
        colorMode === 'light'
          ? '${ColorInkPrimaryDark}'
          : '${ColorInkSecondaryDark}'
      );
      root.style.setProperty('--initial-color-mode', colorMode);
    })()`;
  /* eslint-disable-next-line react/no-danger */
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

/* eslint-disable-next-line react/prop-types */
exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScriptTag />);
};

/* eslint-disable-next-line react/jsx-props-no-spreading,react/prop-types */
exports.wrapPageElement = ({ element, props }) => <Layout {...props}>{element}</Layout>;
