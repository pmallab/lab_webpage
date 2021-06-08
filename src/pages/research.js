import React from "react"
import Layout from "../components/layout"
import "../styles/research.scss"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Research = () => {
  const data = useStaticQuery(graphql`
          query {
              file1: file(relativePath: {eq: "images/Picture_1.png"}) {
                  childImageSharp {
                    fixed(width: 200) {
                      ...GatsbyImageSharpFixed
                    }
                  }
              }
              file2: file(relativePath: {eq: "images/Picture_2.png"}) {
                  childImageSharp {
                    fixed(width: 300,quality:100) {
                      ...GatsbyImageSharpFixed
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
              file5: file(relativePath: {eq: "images/C-S.jpg"}) {
                  childImageSharp {
                    fluid(maxWidth: 400,quality:100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
              }
              file6: file(relativePath: {eq: "images/C-N.jpg"}) {
                  childImageSharp {
                    fluid(maxWidth: 400,quality:100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
              }
          }
      `)
  return(
    <Layout>
    <div className="research">
    <div class="container">
    <div className="Big_box">
<div class="row">
  <div class="col-md">
    <p className="Res_text">C-S bond formation using weak interaction control.</p>
  </div>
  <div class="col-sm">
    <Img className="Research_pic1" fluid={data.file5.childImageSharp.fluid}></Img>
  </div>
  <div class="col-md">
    <p className="Res_text">Sustainable strategies for various C-H functionalization and addition reaction.</p>
  </div>
</div>
</div>
</div>

<div class="container">
<div className="Big_box">
<div class="row">
<div class="col-sm">
<p className="Res_text">C-N bond formation using weak interaction control.</p>
</div>
<div class="col-sm">
<Img className="Research_pic2" fluid={data.file6.childImageSharp.fluid}></Img>
</div>
<div class="col-sm">
<p className="Res_text">Sustainable strategies for various C-H functionalization and addition reaction.</p>
</div>
</div>
</div>
</div>

<div class="container">
<div className="Big_box">
<div class="row">
<div class="col-sm">
<Img className="Research_pic3" fixed={data.file4.childImageSharp.fixed}></Img>
</div>
<div class="col-sm">
<p className="Res_text">Visible light photo redox catalysis.</p>
</div>
<div class="col-sm">
<Img className="Research_pic4" fixed={data.file1.childImageSharp.fixed}></Img>
</div>
</div>
</div>
</div>
 <pre></pre>

 <div class="container">
 <div className="Big_box">
 <div class="row">
 <div class="col-sm">
 <Img className="Research_pic5" fixed={data.file3.childImageSharp.fixed}></Img>
 </div>
 <div class="col-sm">
 <p className="Res_text">Ball Milling</p>
 </div>
 <div class="col-sm">
 <Img className="Research_pic6" fixed={data.file2.childImageSharp.fixed}></Img>
 </div>
 </div>
 </div>
 </div>


    </div>
    <pre></pre>
    </Layout>
  )
}

export default Research
