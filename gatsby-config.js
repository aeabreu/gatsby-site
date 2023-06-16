/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'My new gatsby site',
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    `gatsby-transformer-remark`,
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ],
}
