require('dotenv').config();

const siteAddress = new URL('https://www.pulzapp.com');

module.exports = {
  siteMetadata: {
    title: 'Pulz',
    siteUrl: siteAddress.href,
    description: 'Somos una empresa orgullosamente sudcaliforniana que ofrece servicios de consultoria sobre tecnologías de la información, diseño gráfico digital e ingeniería de software',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: siteAddress.href.slice(0, -1),
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/favicon.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-meta-redirect',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: false,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
  ],
};
