import React from "react"
import { css } from '@emotion/core'
import { Flipper } from "react-flip-toolkit"
import { Location } from "@reach/router"

import Sidebar from "../components/Sidebar"

export default ({ children }) => {

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
              <Sidebar />
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