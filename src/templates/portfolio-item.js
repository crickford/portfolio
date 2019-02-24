import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  return (
    <article>
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
        tags
      }
    }
  }
`