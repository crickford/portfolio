module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    owner: {
      name: 'Collin Rickford',
      jobTitle: `Software Engineer`,
      links: [
        {
          title: `Github Profile`,
          url: `https://github.com/crickford`
        },
        {
          title: `LinkedIn Profile`,
          url: `https://www.linkedin.com/in/collinrickford`
        },
        {
          title: `Stack Overflow Developer Story`,
          url: `https://stackoverflow.com/story/crickford`
        }
      ]
    }
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-layout`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    `gatsby-transformer-remark`,
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
    }
  ]
}