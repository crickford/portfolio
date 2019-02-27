module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    owner: {
      name: 'Collin Rickford',
      jobTitle: `Software Engineer`
    }
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-layout`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow"
            }
          }
        ]
      }
    }
  ]
}