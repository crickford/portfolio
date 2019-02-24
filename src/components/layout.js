import React from "react"
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
            jobTitle
          }
        }
      }
    }
  `)

  return (
    <div css={css`
      display: flex;
    `}>
      <aside css={css`
        flex: 1;
        background-color: #f4f4f4;
        padding: 2rem;
      `}>
        <h1>{data.site.siteMetadata.owner.name}</h1>
        <h3>{data.site.siteMetadata.owner.jobTitle}</h3>
      </aside>
      <main css={css`
        flex: 4;
        padding-left: 2rem;
        height: 100vh;
        overflow-y: scroll;
      `}>
        {children}
      </main>
    </div>
  )
}