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

      
      <p> 30 OCt 2024: Heartiest congratulations to Buddha for his latest paper in ChemCatChem.</p> 
      <p> 26 Sept 2024: Prof. Mal has been recognized among the TOP 2% of global scientists. Heartiest congratulations to Prof. Mal.</p>
      <p> 06 Sept 2024: Congratulations to Tarun and Anupam for their latest paper in ACS AMI.</p> 
      
      
      
      
     
      
     
     
      
      
     
      
      
      
      


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
