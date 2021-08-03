import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Navbar from "../components/Navbar"
import ProjectItem from "../components/ProjectItem"
import SecondProjectItem from "../components/SecondProjectItem"
import ThirdProjectItem from "../components/ThirdProjectItem"
import FourthProjectItem from "../components/FourthProjectItem"
import FifthProjectItem from "../components/FifthProjectItem"
import SixthProjectItem from "../components/SixthProjectItem"

const SecondPage = () => (
  <>
    <Navbar />
    <Layout>
      <Seo title="Project" />
      <ProjectItem />
      <SecondProjectItem />
      <ThirdProjectItem />
      <FourthProjectItem />
      <FifthProjectItem />
      <SixthProjectItem />

      <Link to="/">Go back </Link>
    </Layout>
  </>
)

export default SecondPage
