/* eslint-disable global-require, react/jsx-props-no-spreading */

import PropTypes from 'prop-types';
import React from 'react';
import { IntlProvider as ReactIntlProvider } from 'react-intl';

import englishStrings from './messages/en';
import spanishStrings from './messages/es';

if (Intl && !Intl.PluralRules) {
  require('@formatjs/intl-pluralrules/polyfill');
  require('@formatjs/intl-pluralrules/locale-data/en');
  require('@formatjs/intl-pluralrules/locale-data/es');
}

if (Intl && !Intl.RelativeTimeFormat) {
  require('@formatjs/intl-relativetimeformat/polyfill');
  require('@formatjs/intl-relativetimeformat/locale-data/en');
  require('@formatjs/intl-relativetimeformat/locale-data/es');
}

if (Intl && !Intl.NumberFormat) {
  require('@formatjs/intl-numberformat/polyfill');
  require('@formatjs/intl-numberformat/locale-data/en');
  require('@formatjs/intl-numberformat/locale-data/es');
}

const enabledLanguages = [
  'en',
  'es',
];

const i18nStrings = {
  en: englishStrings,
  es: spanishStrings,
};

const getInterfaceLanguage = () => {
  const defaultLang = 'es';
  if (typeof window === 'undefined') return defaultLang;
  if (!!navigator && !!navigator.language) return navigator.language.substring(0, 2);
  if (!!navigator && !!navigator.languages && !!navigator.languages[0]) {
    return navigator.languages[0].substring(0, 2);
  } if (!!navigator && !!navigator.userLanguage) return navigator.userLanguage.substring(0, 2);
  if (!!navigator && !!navigator.browserLanguage) {
    return navigator.browserLanguage.substring(0, 2);
  }
  return defaultLang;
};

const initialState = {
  locale: getInterfaceLanguage() || 'es',
  ...enabledLanguages,
  ...(i18nStrings[getInterfaceLanguage()] || {}),
};

function IntlProvider({ children }) {
  return (
    <ReactIntlProvider {...initialState}>
      {children}
    </ReactIntlProvider>
  );
}

IntlProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IntlProvider;
