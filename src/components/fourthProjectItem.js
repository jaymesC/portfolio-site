import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { FaCss3Alt, FaGithub, FaGlobe, FaHtml5, FaReact } from "react-icons/fa"
import { SiJavascript } from "react-icons/si"

const StyledDiv = styled.div`
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

const FourthProjectItem = () => {
  return (
    <StyledDiv data-sal="slide-right" data-sal-duration="1200">
      <StyledSection>
        <StyledImage>
          <StaticImage
            src="../images/Project 5.jpg"
            width={250}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Project visuals"
          />
        </StyledImage>
        <StyledNotes>
          <StyledP>
            MSL is a multi-dimensional servicing company, providing services
            in the various areas construction
          </StyledP>
          <StyledIcons>
            <StyledStack>
              {" "}
              <strong>
                {" "}
                <p>Tech Stack:</p>{" "}
              </strong>{" "}
              <section>
                <FaHtml5 style={{ marginRight: "5px", fontSize: "20px" }} />{" "}
                <FaCss3Alt style={{ marginRight: "5px", fontSize: "20px" }} />
                <SiJavascript />
              </section>
            </StyledStack>
            <StyledLinks>
              <a href="https://www.mbarieservicesltd.com/">
                <FaGlobe
                  style={{
                    marginRight: "12px",
                    fontSize: "20px",
                    color: "black",
                  }}
                />
              </a>{" "}
              <a href="https://github.com/jaymesC/amamzon-clone">
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

export default FourthProjectItem
