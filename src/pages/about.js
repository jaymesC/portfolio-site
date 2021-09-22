import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import Seo from "../components/seo"

const StyledDiv = styled(motion.div)`
  margin-left: 6rem;
  display: flex;
  font-family: "Philosopher", sans-serif;
  @media screen and (max-width: 568px) {
    margin-left: 1rem;
    margin-right: 1rem;
    flex-direction: column;
  }
`

const StyledH1 = styled.h1`
  font-family: "Philosopher", sans-serif;
  margin-top: 2rem;
  font-size: 4rem;

  @media screen and (max-width: 568px) {
    font-size: 2rem;
  }
`
const StyledImage = styled.section`
  margin-top: 1rem;
  /* margin-left: -9rem; */

  @media screen and (max-width: 568px) {
    margin-left: 0.8rem;
  }
`
const StyledButton = styled(motion.button)`
  /* display: flex; */
  border: 2px solid #313131;
  background-color: #313131;
  color: white;
  cursor: pointer;
  border-radius: 5rem;
  margin-left: 9rem;
  padding: 12px 12px;
  /* transition: 0.7s;
  & :hover {
    color: white;
    background-color: red;
  } */

  @media (max-width: 768px) {
    margin-left: 4rem;
    flex-direction: column;
  }
`

const buttonVariants = {
  visible: {
    initial: { x: -250, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { delay: 1.5, duration: 1.5 },
  },
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px blue",
    boxShadow: "0px 0px 8px red",
    transition: {
      // delay: 1.5,
      // duration: 1.5,
      yoyo: Infinity,
    },
  },
}

const About = () => (
  <>
    <Layout>
      <Seo title="About" />
      <StyledDiv
        initial={{ opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.0, delay: 1.8 }}
      >
        <section>
          <StyledH1>
            Hi I'm James. <br /> Front end developer
          </StyledH1>
          <p>
            Hello, my name is Clement James Jnr and I am a Front end developer
          </p>
          <p>
            My passion for programming started in my high school days where I
            took a deep dive into web development. <br /> Building simple web
            pages and seeing the results, I got this level of fulfilment after
            every build.{" "}
            <span role="img" aria-labelledby="">
              🔥🔥
            </span>{" "}
          </p>
          <p>
            Since then, I've gathered knowledge that has helped to propel my
            career. I am also a Christian.
            <br /> I primarily program in JavaScript but have plans to dive
            deeper to expand my skills.
          </p>
          <Link to="/project">
            <StyledButton variants={buttonVariants} whileHover="hover">
              View my work
            </StyledButton>
          </Link>
        </section>
        <StyledImage>
          <StaticImage
            layout="constrained"
            src="../images/aboutpic.png"
            width={300}
            height={260}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A Gatsby astronaut"
            // style={{ borderRadius: `50%` }}
          />
        </StyledImage>
      </StyledDiv>
      <Link to="/">Go back </Link>
    </Layout>
  </>
)

export default About
