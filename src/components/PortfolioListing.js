import React from "react"
import { css } from "@emotion/core"
import { Link, useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___enddate], order: DESC }) {
        edges {
          node {
            id,
            fields {
              slug
            },
            frontmatter {
              title,
              subtitle,
              date,
              tags
            },
            html
          }
        }
      }
    }
  `)

  const items = data.allMarkdownRemark.edges.map(({ node }) => (
    <article key={node.id} css={css`
      margin: 3rem 0;
    `}>
      <Link to={node.fields.slug}><h1>{node.frontmatter.title}</h1></Link>
      <h3>{node.frontmatter.subtitle}</h3>
      {
        node.frontmatter.tags.length &&
        <ul css={
          css`
            list-style: none;
          `
        }>
          {node.frontmatter.tags.map((tag, index) => (
            <li key={`tag-${index}`} css={css`
              display: inline-block;
              background-color: #dbdbdb;
              font-family: 'Open Sans', sans-serif;
              color: #353535;
              border-radius: 5px;
              margin: 5px;
              padding: 2px 8px;
            `}>{tag}</li>
          ))}
        </ul>
      }
      
    </article>
  ))

  return items
}