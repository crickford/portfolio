import React from "react"
import { css } from "@emotion/core"
import Image from "gatsby-image"
import { defaultTag } from "../styles/index"
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
              tags,
              mainimage {
                childImageSharp {
                  fixed(width: 240) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            },
            html
          }
        }
      }
    }
  `)

  return data.allMarkdownRemark.edges.map(({ node }) => (
    <article key={node.id} css={css`
      margin: 3rem 0;
      display: flex;
      align-items: center;
    `}>
      <div css={css`
        margin-right: 1rem;
      `}>
        <Link to={node.fields.slug}>
          <Image fixed={node.frontmatter.mainimage.childImageSharp.fixed}></Image>
        </Link>
      </div>
      <div>
        <Link to={node.fields.slug}>
          <h1>{node.frontmatter.title}</h1>
        </Link>
        <h3>{node.frontmatter.subtitle}</h3>
        {
          node.frontmatter.tags.length &&
          <ul css={
            css`
              list-style: none;
            `
          }>
            {node.frontmatter.tags.map((tag, index) => (
              <li key={`tag-${index}`} css={defaultTag}>{tag}</li>
            ))}
          </ul>
        }
      </div>
      
    </article>
  ))
}