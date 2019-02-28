import React from "react"
import { css } from '@emotion/core'
import { useStaticQuery, graphql } from "gatsby"
import { Flipper } from "react-flip-toolkit"
import { Location } from "@reach/router"

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
    <Location>
      {({ location }) => (
          <div css={css`
            display: flex;
          `}>
            <aside css={css`
              flex: 1;
              padding: 2rem;
            `}>
              <h1>{data.site.siteMetadata.owner.name}</h1>
              <h3>{data.site.siteMetadata.owner.jobTitle}</h3>
            </aside>
            <main css={css`
              flex: 4;
              padding: 0 4rem;
              height: 100vh;
              background-color: #f4f4f4;
              overflow-y: scroll;
            `}>
              <Flipper
                flipKey={location.key}
                staggerConfig={{
                  tags: {
                    // default is .1, 0 < n < 1
                    speed: .5
                  }
                }}
              >
                {children}
              </Flipper>
            </main>
          </div>
      )}
    </Location>
  )
}