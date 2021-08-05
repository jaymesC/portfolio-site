/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import { FaLinkedinIn } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"


import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const StyledDiv = styled.div`
    margin-left: 4rem;
    margin-right: 5rem;

    @media (max-width: 768px) {
      margin-left: 0rem;
      margin-right: 0rem;
    }
  `

  const Footer = styled.footer`
  display: flex;
  margin-top: 16%;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  `

  const StyledFooterText = styled.p`
  font-size: 0.8rem;
  
  @media (max-width: 768px) {
    font-size: 0.6rem;
    margin-top: 0rem;
    
   }
  `


  return (
    <StyledDiv>
      <main>{children}</main>
      <Footer>
        <section>
          {" "}
          <a href="https://github.com/jaymesC">
            <FaGithub
              style={{
                marginRight: "2.5rem",
                color: "black",
                fontSize: "30px",
              }}
            />
          </a>
          <a href="https://www.linkedin.com/in/james-clement-8a9a44184/web">
            <FaLinkedinIn
              style={{
                marginRight: "2.5rem",
                color: "black",
                fontSize: "30px",
              }}
            />
          </a>{" "}
          <a href="https://twitter.com/JaymesJnr?s=09">
            <FaTwitter
              style={{
                marginRight: "2.5rem",
                color: "black",
                fontSize: "30px",
              }}
            />
          </a>{" "}
          <a href="https://www.instagram.com/jaymes_jnr/">
            <FaInstagram style={{ color: "black", fontSize: "30px" }} />
          </a>{" "}
        </section>
        <StyledFooterText>COPYRIGHT © {new Date().getFullYear()} CLEMENT JAMES JNR</StyledFooterText>
      </Footer>
    </StyledDiv>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
