import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import "../styles/header.scss"
import NavigationBar from "./NavigationBar"
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'



const Header = (props) => {
  const data = useStaticQuery(graphql`
        query {
            file(relativePath: {eq: "images/group3.jpg"}) {
                childImageSharp {
                  fluid(maxWidth: 2000,quality: 90) {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
        }
    `)
const Ishome= props.home
    if (Ishome){
    return (
      <header>
      <NavigationBar/>
      <BackgroundImage className="Bgi" fluid={data.file.childImageSharp.fluid} >
      </BackgroundImage>
      </header>
    )
  }
else{
return (
  <header>
  <BackgroundImage className="Bgi" fluid={data.file.childImageSharp.fluid} >
  </BackgroundImage>
  <NavigationBar/>
  </header>
)
}
}
export default Header
