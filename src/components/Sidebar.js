import React from "react"
import Image from "gatsby-image"
import { css } from '@emotion/core'
import { useStaticQuery, graphql } from "gatsby"

export default ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title,
          owner {
            name,
            jobTitle,
            links {
              title,
              url
            }
          }
        }
      }
      file(relativePath: { eq: "images/avatar.jpg" }) {
        childImageSharp {
          fixed(width: 180) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const socialLink = css`
    display: block;
    margin: .2rem 0;
  `

  return (
    <>
      <h1 css={css`margin-bottom: 1rem;`}>{data.site.siteMetadata.owner.name}</h1>
      <h3>{data.site.siteMetadata.owner.jobTitle}</h3>
      <div css={css`
        display: block;
        margin: 3rem auto;
        max-width: 180px;
        @media only screen and (max-width:1200px) {
          margin: 1.5rem auto;
        }
      `}>
        <Image imgStyle={{ borderRadius: '50%'}} fixed={data.file.childImageSharp.fixed} />
      </div>
      <p>I love to build things. Check out some of the things I've built!</p>
      {data.site.siteMetadata.owner.links.length && data.site.siteMetadata.owner.links.map(({title, url}, index) => <a key={index} css={socialLink} href={url}>{title}</a>)}
    </>
  )
}