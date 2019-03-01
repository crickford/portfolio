import React from "react"
import { css } from '@emotion/core'
import { Flipper } from "react-flip-toolkit"
import { Location } from "@reach/router"
import { ScrollContainer } from 'gatsby-react-router-scroll'
import { Helmet } from 'react-helmet'

import Sidebar from "../components/Sidebar"

export default ({ children }) => {

  return (
    <Location>
      {({ location }) => (
        <>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Portfolio</title>
            <link rel="canonical" href="http://crickford.github.io" />
          </Helmet>
          <div css={css`
            display: flex;
            @media only screen and (max-width: 768px) {
              flex-direction: column;
            }
          `}>
            <aside css={css`
              flex: 1;
              padding: 2rem;
            `}>
              <Sidebar />
            </aside>
            <ScrollContainer scrollKey="main">
              <main css={css`
                flex: 4;
                padding: 0 4rem;
                background-color: #f4f4f4;
                @media only screen and (min-width: 769px) {
                  height: 100vh;
                  overflow-y: scroll;
                }
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
            </ScrollContainer>
          </div>
        </>
      )}
    </Location>
  )
}