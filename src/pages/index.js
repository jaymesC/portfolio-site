import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Navbar from "../components/Navbar"

import { FaLongArrowAltRight } from "react-icons/fa"

const StyledH1 = styled(motion.h1)`
  margin-top: 5rem;
  font-size: 3rem;
  font-family: tahoma;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  `
const StyledP = styled(motion.p)`
  font-size: 1rem;

  @media (max-width: 768px) {
    margin-top: -1.1rem;
    font-size: 0.85rem;
  }
`

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 6.3rem;
  @media (max-width: 768px) {
    margin-left: 2rem;
    flex-direction: column;
  }
`

const StyledButton = styled(motion.button)`
  /* display: flex; */
  border: 2px solid red;
  background-color: #000;
  color: white;
  cursor: pointer;
  border-radius: 5rem;
  margin-left: 9rem;
  padding: 5px 8px;
  transition: 0.7s;
  & :hover {
    color: white;
    background-color: red;
  }

  @media (max-width: 768px) {
    margin-left: 4rem;
    flex-direction: column;
  }
`

const TestImage = styled(motion.div)`
  display: block;
  margin-right: 6rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    margin-right: 0rem;
    /* display: none; */
  }
`

const StyledSection = styled.section`
/* display: flex; */
`

const IndexPage = () => (
  <>
    <Navbar />
    <Layout>
      <Seo title="Official" />
      <StyledContainer>
        <StyledSection>
          <StyledH1
            initial={{ x: -250, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            Clement James Jnr.
          </StyledH1>

          <StyledP
            initial={{ x: -250, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.5 }}
          >
            Front end developer who writes optimized, efficient and readable
            code. <br /> Focused on crafting clean & user‑friendly experiences.
          </StyledP>
          <StyledButton
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.5 }}
          >
            loremmmm
          </StyledButton>
        </StyledSection>

        <TestImage
          initial={{ x: 250, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1, type: 'spring', stiffness: 120 }}
        >
          <StaticImage
            layout="constrained"
            src="../images/pic.JPG"
            // width={300}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A Gatsby astronaut"
            style={{ borderRadius: `50%` }}
          />
        </TestImage>
      </StyledContainer>
      {/* <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p> */}
    </Layout>
  </>
)

export default IndexPage

