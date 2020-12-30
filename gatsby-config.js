const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Stian's Notes`,
    siteUrl: 'https://notes.reganmian.net',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-101270563-2',
      },
    },
    {
      resolve: 'gatsby-theme-andy',
      linkifyHashtags: true,
      generateBrainMap: true,
      generateRSS: false,
      brainBaseUrl: 'https://notes.reganmian.net/',
    },
    `gatsby-plugin-postcss`,
  ],
};
