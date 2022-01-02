module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'citytabletennis',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-postcss'
    },

    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    }
  ],
};
