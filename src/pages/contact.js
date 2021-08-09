import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { motion } from "framer-motion"
import Navbar from "../components/Navbar"
import { FaEnvelope, FaLinkedinIn, FaPhoneAlt, FaTwitter } from "react-icons/fa"

const StyledContainer = styled(motion.div)`
  font-family: "Philosopher", sans-serif;
  margin-left: 6rem;
  margin-top: 2rem;
  @media screen and (max-width: 568px) {
    margin-left: 2rem;
    flex-direction: column;
  }
  @media (max-width: 968px) {
    margin-left: 1rem;
  }
`

const StyledH1 = styled.h1`
  font-size: 4rem;
  @media screen and (max-width: 568px) {
    font-size: 2rem;
  }
`

const StyledForm = styled.section`
  display: flex;
  @media screen and (max-width: 568px) {
    flex-direction: column;
  }
`

const StyledDetails = styled.section`
display: flex;
flex-direction: column;
`

const StyledFormSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 9rem;
  @media screen and (max-width: 568px) {
    margin-left: 0rem;
  }
  `

const StyledInput = styled.input`
  margin-bottom: 8px;
  width: 25rem;
  height: 3rem;
  border-radius: 8px;
  background-color: #f4f4f4;
  border: 2px solid black;
  ::placeholder {
    color: black;
    font-size: 0.8rem;
  }

  @media screen and (max-width: 568px) {
    width: 15.5rem;
    height: 3rem;
  }
`

const StyledTextArea = styled.textarea`
  height: 7rem;
  border-radius: 8px;
  background-color: #f4f4f4;
  border: 2px solid #313131;
  ::placeholder {
    color: black;
    font-size: 0.9rem;
  }
  @media screen and (max-width: 568px) {
    width: 15.5rem;
  }
`


const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  margin-top: 3rem;
  width: 10rem;
  margin-left: 15rem;
  border-radius: 4rem;
  cursor: pointer;
  
  /* background-color: #000; */
  /* color: white; */
  @media screen and (max-width: 568px) {
    padding: 6px 0;
    margin-top: 1rem;
    width: 6rem;
    margin-left: 9.3rem;
    border-radius: 4rem;
    font-size: 12px;

  }
`

const StyledLink = styled(motion.p)`
text-decoration: none;
font-family: tahoma;
color: black;
`

const StyledA = styled.a`
  text-decoration: none;
  font-family: tahoma;
  color: black;
`


const Contact = () => (
  <>
    <Navbar />
    <Layout>
      <Seo title="Contact" />
      <StyledContainer
        initial={{ y: 250, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <StyledH1>Get In touch!</StyledH1>
        <p>
          Do you want to say hi to me or you've got a project in mind, why not
          get in touch. <br /> Let's work together. Feel free to contact me
        </p>
        <StyledForm>
          <StyledDetails>
            <p>
              <FaEnvelope style={{ marginRight: "8px" }} />
              <StyledA href="mailto: clementjaymes@gmail.com">
                {" "}
                ******@*****.***{" "}
              </StyledA>
            </p>
            <p>
              <FaPhoneAlt style={{ marginRight: "8px" }} />
              <StyledA> +234**********</StyledA>
            </p>
            <p>
              <FaTwitter style={{ marginRight: "8px" }} />{" "}
              <StyledA
                href="https://twitter.com/JaymesJnr?s=09"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                twitter.com/JaymesJnr
              </StyledA>
            </p>
            <p>
              <FaLinkedinIn style={{ marginRight: "8px" }} />{" "}
              <StyledA
                href="https://linkedin.com/in/jamesclementjnr"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                linkedin.com/in/jamesclementjnr
              </StyledA>
            </p>
          </StyledDetails>
          <StyledFormSection>
            <StyledInput type="text" placeholder="NAME:" />
            <StyledInput type="email" placeholder="EMAIL:" />
            <StyledTextArea placeholder="MESSAGE:" />
            <StyledButton disabled="disabled">SEND MESSAGE</StyledButton>
          </StyledFormSection>
        </StyledForm>
      </StyledContainer>
      <StyledLink
        initial={{ opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.0, delay: 2.3 }}
      >
        <Link to="/">Go Back</Link>
      </StyledLink>
    </Layout>
  </>
)

export default Contact
