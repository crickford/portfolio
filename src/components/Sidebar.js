import React from "react"
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
    <>
      <h1>{data.site.siteMetadata.owner.name}</h1>
      <h3>{data.site.siteMetadata.owner.jobTitle}</h3>
    </>
  )
}