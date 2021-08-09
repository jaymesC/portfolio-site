import * as React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { motion } from 'framer-motion'

import Layout from "../components/layout"
import Seo from "../components/seo"
import Navbar from "../components/Navbar"
import ProjectItem from "../components/ProjectItem"
import SecondProjectItem from "../components/SecondProjectItem"
import ThirdProjectItem from "../components/thirdProjectItem"
import FourthProjectItem from "../components/FourthProjectItem"
import FifthProjectItem from "../components/FifthProjectItem"
import SixthProjectItem from "../components/SixthProjectItem"


const StyledH1 = styled(motion.h1)`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  font-family: "Philosopher", sans-serif;
  font-size: 3rem;
  @media screen and (max-width: 568px) {
    margin-top: 2rem;
    display: flex;
    font-size: 1.5rem;
  }
  `

const StyledDescription = styled(motion.p)`
  display: flex;
  justify-content: center;
  font-family: sans-serif;
  font-size: 1.2rem;
  @media screen and (max-width: 568px) {
    margin-top: -1.1rem;
    display: flex;
    font-size: 0.9rem;
  }
  `
const StyledBack = styled.section`
font-family: sans-serif;
margin-top: 3rem;
`

const SecondPage = () => (
  <>
    <Navbar />
    <Layout>
      <Seo title="Project" />
      <StyledH1
        initial={{ opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.0, delay: 1.8 }}
      >
        Projects.
      </StyledH1>
      <StyledDescription
        initial={{ opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.0, delay: 2 }}
      >
        Here are some of my works
      </StyledDescription>
      <ProjectItem />
      <SecondProjectItem />
      <ThirdProjectItem />
      <FourthProjectItem />
      <FifthProjectItem />
      <SixthProjectItem />

      <StyledBack>
        <Link to="/">Go back </Link>
      </StyledBack>
    </Layout>
  </>
)

export default SecondPage
