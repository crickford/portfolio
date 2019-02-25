import React from "react"
import Image from "gatsby-image"
import { graphql } from "gatsby"

export default ({ data }) => {
  return (
    <article>
      <Image fixed={data.markdownRemark.frontmatter.mainimage.childImageSharp.fixed}></Image>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <h3>{data.markdownRemark.frontmatter.subtitle}</h3>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html}}></div>
    </article>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title,
        subtitle,
        tags,
        mainimage {
          childImageSharp {
            fixed(width: 800) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`