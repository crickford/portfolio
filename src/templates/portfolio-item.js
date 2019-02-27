import React from "react"
import Image from "gatsby-image"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import { defaultTag } from "../styles/index"
import { Flipped } from "react-flip-toolkit"

export default ({ data }) => {
  const node = data.markdownRemark
  return (
    <article css={css`margin-top: 3rem;`}>
      <Flipped flipId={node.id}>
        <div css={css`display: inline-block;`}>
          <Image fixed={node.frontmatter.mainimage.childImageSharp.fixed}></Image>
        </div>
      </Flipped>
      <div css={css`display: flex;`}>
        <div css={css`flex: 3;`}>
          <h1>{node.frontmatter.title}</h1>
          <h3>{node.frontmatter.subtitle}</h3>
          <div dangerouslySetInnerHTML={{ __html: node.html}}></div>
        </div>
        <div css={css`flex: 1;`}>
          {
            node.frontmatter.tags.length &&
            <>
              <h4>Built with:</h4>
              <ul css={css`list-style: none;`}>
                {node.frontmatter.tags.map((tag, index) => (
                  <li key={`tag-${index}`} css={defaultTag}>{tag}</li>
                ))}
              </ul>
            </>
          }
        </div>
      </div>
      
    </article>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id,
      html,
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