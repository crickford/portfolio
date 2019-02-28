import React from "react"
import Image from "gatsby-image"
import { graphql } from "gatsby"
import { css, keyframes } from "@emotion/core"
import { defaultTag } from "../styles/index"
import { Flipped } from "react-flip-toolkit"

class PortfolioItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showContent: false
    }
  }

  show() {
    this.setState({
      showContent: true
    })
  }

  componentDidMount() {
    setTimeout(
      () => this.show(),
      400
    );
  }

  render() {
    const node = this.props.data.markdownRemark
    const fadeIn = keyframes`
      0% {
        opacity: 0;
        transform: translateY(1rem);
      }
      100% {
        opacity: 1;
      }
    `
    return (
      <article css={css`margin-top: 3rem;`}>
        <Flipped translate={true} scale={true} opacity={false} flipId={node.id}>
          <div css={css`
            display: inline-block;
            width: 75%;
            max-width: 800px;
          `}>
            <Image fluid={node.frontmatter.mainimage.childImageSharp.fluid}></Image>
          </div>
        </Flipped>
        <div css={css`display: flex;`}>
          <div css={css`flex: 3;`}>
            <Flipped translate={true} scale={false} opacity={false} flipId={`node-${node.id}-title`}>
              <h1>{node.frontmatter.title}</h1>
            </Flipped>
            <Flipped translate={true} scale={false} opacity={false} flipId={`node-${node.id}-subtitle`}>
              <h3>{node.frontmatter.subtitle}</h3>
            </Flipped>
            <div css={this.state.showContent ? css`animation: ${fadeIn} .5s forwards;` : css`opacity: 0;`} dangerouslySetInnerHTML={{ __html: node.html}}></div>
          </div>
          <div css={css`
            flex: 1;
            padding-left: 1rem;
          `}>
            {
              node.frontmatter.tags.length &&
              <>
                <h4>Built with:</h4>
                <ul css={css`list-style: none;`}>
                  {node.frontmatter.tags.map((tag, index) => (
                    <Flipped stagger="tags" flipId={`node-${node.id}-tag-${index}`} key={`tag-${index}`}>
                      <li css={defaultTag}>{tag}</li>
                    </Flipped>
                  ))}
                </ul>
              </>
            }
          </div>
        </div>
        
      </article>
    )
  }
}

export default PortfolioItem

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
          publicURL
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`