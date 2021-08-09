import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"

const StyledSection = styled.div`
  margin-bottom: 10rem;
`

const NotFoundPage = () => (
  <Layout>
    <StyledSection>
      <Seo title="404: Not found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness. 😢 </p>
    </StyledSection>
  </Layout>
)

export default NotFoundPage
