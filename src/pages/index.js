import  React from "react"
import Layout from "../components/layout"
import '../styles/index.scss'
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Index = () => {
  const data = useStaticQuery(graphql`
          query {
            file_background: file(relativePath: {eq: "images/groupc.jpg"}) {
                  childImageSharp {
                    fluid(maxWidth: 10000) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
              }
              file11: file(relativePath: {eq: "images/photochem_pic.jpg"}) {
                  childImageSharp {
                    fluid(maxWidth: 300) {
                      ...GatsbyImageSharpFluid
                    }
                  }
              }
              file12: file(relativePath: {eq: "images/mechanochem_pic.jpg"}) {
                  childImageSharp {
                    fluid(maxWidth: 470,quality:100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
              }
              file3: file(relativePath: {eq: "images/Picture_3.png"}) {
                  childImageSharp {
                    fixed(width: 100) {
                      ...GatsbyImageSharpFixed
                    }
                  }
              }
              file4: file(relativePath: {eq: "images/Picture_4.png"}) {
                  childImageSharp {
                    fixed(width: 100,quality:100) {
                      ...GatsbyImageSharpFixed
                    }
                  }
              }
              file15: file(relativePath: {eq: "images/C-S.jpg"}) {
                  childImageSharp {
                    fluid(maxWidth: 466,quality:100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
              }
              file16: file(relativePath: {eq: "images/C-N.jpg"}) {
                  childImageSharp {
                    fluid(maxWidth: 300,quality:100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
              }
          }
      `)

  return(
    <Layout>
      <div clasName="index">
<h1 className= "Index_Title"> P Mal's Lab @ NISER</h1>
  <p><Img className="GroupPic1" fluid={data.file_background.childImageSharp.fluid}></Img></p>

<div class="container-sm">
  <div class="row">
    <div class="col-sm">
    <div className="News">
      <h3> News</h3>
      <marquee width="100%" direction="up" scrolldelay="600" >


      
      <p> 18 May 2026: Congratulations to Tarun, Sathi and Dr. Manoranjan Ojha for their latest article in Chem. Eur. J.</p>
      <p> 18 May 2026: Heartiest Congratulations to Chidananda, Pravat and Dr. Sandeepan Maity for their latest paper in Chem. commun.</p>
      <p> 08 May 2026: Congratulations to Suman Handal for their latest article in Small</p>
      <p> 01 May 2026: Congratulations to Sathi and Tarun for their latest review article in ChemPlusChem </p>
      <p> 29 Jan 2026: Heartiest congratulations to Pravat and Lipika for their latest paper in small </p>
      <p> 08 Jan 2026: Congratulations to Pravat, Ramen, Tanmay, Bappaditya and Dr. Rosalin Bhanja for their latest paper in Eur. J. Org. Chem. </p>
      <p> 23 Dec 2025: Many congratulations to Pravat, Chidananda and Dr. Sandeepan Maity for their latest paper in Adv. Synth. Catal. </p>
      <p> 28 Oct 2025: Congratulations to Sathi and Tarun for their latest review article in Synlett</p>
      
      
      
      
      
      
      
      
      
      
     
      
     
     
      
      
     
      
      
      
      


      <p></p>
      </marquee>
      </div>
    </div>
  </div>
</div>

        </div>
    </Layout>
)
}

export default Index
