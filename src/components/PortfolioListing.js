import React from "react"
import { css } from "@emotion/core"
import Image from "gatsby-image"
import { defaultTag } from "../styles/index"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Flipped } from "react-flip-toolkit"

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
          <Flipped translate={true} scale={true} opacity={false} flipId={node.id}>
            <div css={css`display: inline-block;`}>
              <Image fixed={node.frontmatter.mainimage.childImageSharp.fixed}></Image>
            </div>
          </Flipped>
        </Link>
      </div>
      <div>
        <Link to={node.fields.slug}>
          <Flipped translate={true} scale={false} opacity={false} flipId={`node-${node.id}-title`}>
            <h1>{node.frontmatter.title}</h1>
          </Flipped>
        </Link>
        <Flipped translate={true} scale={false} opacity={false} flipId={`node-${node.id}-subtitle`}>
          <h3>{node.frontmatter.subtitle}</h3>
        </Flipped>
        {
          node.frontmatter.tags.length &&
          <ul css={css`list-style: none;`}>
            {node.frontmatter.tags.map((tag, index) => (
              <Flipped stagger="tags" flipId={`node-${node.id}-tag-${index}`} key={`tag-${index}`}>
                <li css={defaultTag}>{tag}</li>
              </Flipped>
            ))}
          </ul>
        }
      </div>
      
    </article>
  ))
}