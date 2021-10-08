import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { motion } from "framer-motion"
import NavbarLinks from "./NavbarLinks"
import { StaticImage } from "gatsby-plugin-image"

const Navigation = styled.nav`
  height: 10vh;
  display: flex;
  background-color: #000;
  position: relative;
  justify-content: space-between;
  text-transform: uppercase;
  border-bottom: 2px solid #33333320;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  align-self: center;
  font-family: tahoma;

  @media (max-width: 768px) {
    /* justify-content: center; */
    position: sticky;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 768px) {
    display: flex;
  }
`
const Img = styled(motion.section)`
  padding-top: 13px;
  margin-left: 6.3rem;

  @media (max-width: 768px) {
    margin-left: 0;
    padding-top: 18px;
    padding-left: 10px;
    margin-right: 0rem;
    width: 50px;
  }
`

const Navbox = styled(motion.div)`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  margin-right: 5.3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    background-color: #000;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    margin-right: 0;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: #fff;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #fff;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <Navigation>
      <Img>
        <Link to="/">
          <StaticImage
            layout="constrained"
            src="../images/CJ.png"
            width={65}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
          />
        </Link>
      </Img>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox
          initial={{ y: -250, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 1 }}
        >
          <NavbarLinks />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks />
        </Navbox>
      )}
    </Navigation>
  )
}

export default Navbar
