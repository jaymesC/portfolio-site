import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Navbar from "../components/Navbar"

const About = () => (
  <>
    <Navbar />
    <Layout>
      <Seo title="About" />
      <h1>Hi from About page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  </>
)

export default About
