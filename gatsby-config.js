const path = require('path');

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-101270563-2',
      },
    },
    'gatsby-theme-andy',
    `gatsby-plugin-postcss`,
  ],
};
