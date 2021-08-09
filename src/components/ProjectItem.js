import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { motion } from "framer-motion"
import { FaCss3Alt, FaGithub, FaGlobe, FaHtml5, FaReact } from "react-icons/fa"
import { SiJava, SiJavascript, SiStyledComponents } from "react-icons/si"

const StyledDiv = styled(motion.div)`
  margin-top: 4rem;
  margin-left: 7rem;
  @media screen and (max-width: 568px) {
    margin-top: 2rem;
    margin-left: 0rem;
  }

  @media (max-width: 768px) {
  }

  @media screen and (max-width: 960px) {
    margin-left: 0rem;
  }
`

const StyledSection = styled.section`
  font-family: "Philosopher", sans-serif;
  display: flex;
  border: 2px solid #ddbbff;
  margin-right: 20rem;
  box-shadow: 1px 25px 18px #ddd9d9;
  border-radius: 10px;
  @media (max-width: 768px) {
    margin-right: 0rem;
  }

  @media screen and (max-width: 960px) {
    margin-right: 8rem;
    margin-left: 3rem;
  }

  @media screen and (max-width: 568px) {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`

const StyledImage = styled.div`
  margin-left: 3px;
  margin-right: 1rem;
  @media screen and (max-width: 568px) {
    margin: 1rem 1rem;
  }
`

const StyledNotes = styled.section`
  margin-top: 0.6rem;
  /* margin-left: 5px; */
`

const StyledP = styled.p`
  margin-top: 0.5rem;
  @media screen and (max-width: 568px) {
    margin-top: 1rem;
    font-size: 0.4rem;
  }

  @media screen and (max-width: 768px) {
    margin-top: 0rem;
    font-size: 0.9rem;
  }
`
const StyledIcons = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 568px) {
    flex-direction: column;
  }
`

const StyledLinks = styled.div`
  display: flex;
  @media screen and (max-width: 568px) {
    justify-content: flex-end;
    margin-bottom: 5px;
  }
`
const StyledStack = styled.section`
  display: flex;
  @media screen and (max-width: 568px) {
    margin-top: -1.2rem;
    flex-direction: row;
  }
`

const ProjectItem = () => {
  return (
    <StyledDiv
      initial={{ x: -250, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 1.5 }}
    >
      <StyledSection>
        <StyledImage>
          <StaticImage
            src="../images/portfolio.jpg"
            width={250}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Project visuals"
          />
        </StyledImage>
        <StyledNotes>
          <StyledP>
            The website you're looking at right now. Showcases my skills and
            what I'm up to.
          </StyledP>
          <StyledIcons>
            <StyledStack>
              {" "}
              <strong>
                {" "}
                <p>Tech Stack:</p>{" "}
              </strong>{" "}
              <section>
                <FaReact
                  style={{
                    marginLeft: "5px",
                    marginRight: "5px",
                    fontSize: "24px",
                  }}
                />{" "}
                <FaHtml5 style={{ marginRight: "5px", fontSize: "20px" }} />{" "}
                <SiStyledComponents
                  style={{ marginRight: "6px", fontSize: "20px" }}
                />
                <SiJavascript />
                {/* <SiStyledComponents /> */}
              </section>
            </StyledStack>
            <StyledLinks>
              <a href="https://jaymesjay.netlify.app/">
                <FaGlobe
                  style={{
                    marginRight: "12px",
                    fontSize: "20px",
                    color: "black",
                  }}
                />
              </a>{" "}
              <a href="https://github.com/jaymesC/portfolio-site/tree/master">
                <FaGithub
                  style={{
                    marginRight: "5px",
                    fontSize: "20px",
                    color: "black",
                  }}
                />
              </a>
            </StyledLinks>
          </StyledIcons>
        </StyledNotes>
      </StyledSection>
    </StyledDiv>
  )
}


export default ProjectItem
