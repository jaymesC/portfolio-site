import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

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
  display: flex;
  border: 2px solid #313131;
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
  @media screen and (max-width: 568px) {
    margin: 2rem 1rem;
  }
`

const StyledNotes = styled.section`
  /* margin-left: 5px; */
`

const StyledPara = styled.p`
  margin-top: 2rem;
  @media screen and (max-width: 568px) {
    margin-top: 1rem;
    font-size: 0.2rem;
  }

  @media screen and (max-width: 768px) {
    margin-top: 0rem;
    font-size: 0.9rem;
  }
`

const ProjectItem = () => {
  return (
    <StyledDiv>
      <StyledSection>
        <StyledImage>
          <StaticImage
            src="../images/mackbook1.png"
            // width={300}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Project visuals"
          />
          
        </StyledImage>
        <StyledNotes>
          <StyledPara>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium, dolor.
          </StyledPara>
          
          💻 🎈🖥
        </StyledNotes>
      </StyledSection>
    </StyledDiv>
  )
}

export default ProjectItem
