import  React from "react"
import Layout from "../components/layout"
import '../styles/index.scss'
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Index = () => {
  const data = useStaticQuery(graphql`
          query {
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
      <div class="container">
      <h4 className ="Index_headings">Weak Interactions in:</h4>
      <div class="row">
      <div class="col-sm">
      <p className="Pic_15">
      <h5 className ="Index_headings_small">C-S coupling</h5>
      <Img className="Picture_15" fluid={data.file15.childImageSharp.fluid}></Img></p>
      </div>
      <div class="col-sm">
      <p className="Pic_16">
      <h5 className ="Index_headings_small">C-N coupling</h5>
      <Img className="Picture_16" fluid={data.file16.childImageSharp.fluid}></Img></p>
      </div>
      </div>
      </div>


      <p></p>
      <div class="container">
  <div class="row">
    <div class="col-sm">
    <p className="Pic_12">
    <h4 className ="Index_headings">Mechano-Chemistry</h4>
    <Img className="Picture_12" fluid={data.file12.childImageSharp.fluid}></Img></p>

</div>

    <div class="col-sm">
    <p className="Pic_11">
    <h4 className ="Index_headings">Photo-Chemistry</h4>
    <Img className="Picture_11" fluid={data.file11.childImageSharp.fluid}></Img></p>
      </div>
  </div>
</div>


<div class="container-sm">
  <div class="row">
    <div class="col-sm">
    <div className="News">
      <h3> News</h3>
      <marquee width="100%" direction="up" scrolldelay="300" >
      <p> 11 Aug 2021: Congratulations Ankita for successful completion of PhD Best of luck for future</p>
      <p> 11 Aug 2021: Congratulations Sudip for your latest paper in ChemComm</p>
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
