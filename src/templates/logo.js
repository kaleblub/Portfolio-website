import React from "react"
import Logo from "../components/partials/logo"
// import { useStaticQuery, graphql } from "gatsby"

const LogoTemplate = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {

  //         logoTemplate
  //       }
  //     }
  //   }
  // `)

  return <Logo text="  /KalebHumpal/ $" cursor mark />
}

export default LogoTemplate
