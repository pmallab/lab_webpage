import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import "../styles/alumni.scss"
import Img from "gatsby-image"
import {Carousel} from "react-bootstrap";

const Alumni = () => {
  const data = useStaticQuery(graphql`
          query {
            filealumni16: file(relativePath: {eq: "images/alimni/alumni_1.jpg"}) {
                  childImageSharp {
                    fixed(width: 280) {
                      ...GatsbyImageSharpFixed
                    }
                  }
              }
                filealumni15: file(relativePath: {eq: "images/alumni/alumni_1.jpg"}) {
                      childImageSharp {
                        fixed(width: 280) {
                          ...GatsbyImageSharpFixed
                        }
                      }
                  }
            filealumni14: file(relativePath: {eq: "images/alimni/alumni1.jpg"}) {
                  childImageSharp {
                    fixed(width: 280) {
                      ...GatsbyImageSharpFixed
                    }
                  }
              }
                filealumni13: file(relativePath: {eq: "images/alimni/alumni1.jpg"}) {
                      childImageSharp {
                        fixed(width: 280) {
                          ...GatsbyImageSharpFixed
                        }
                      }
                  }
            filealumni12: file(relativePath: {eq: "images/alimni/alumni1.jpg"}) {
                  childImageSharp {
                    fixed(width: 280) {
                      ...GatsbyImageSharpFixed
                    }
                  }
              }
                filealumni11: file(relativePath: {eq: "images/alimni/alumni_1.jpg"}) {
                      childImageSharp {
                        fixed(width: 280) {
                          ...GatsbyImageSharpFixed
                        }
                      }
                  }
            filealumni10: file(relativePath: {eq: "images/alimni/alumni_1.jpg"}) {
                  childImageSharp {
                    fixed(width: 280) {
                      ...GatsbyImageSharpFixed
                    }
                  }
              }
                filealumni9: file(relativePath: {eq: "images/alimni/alumni_1.jpg"}) {
                      childImageSharp {
                        fixed(width: 280) {
                          ...GatsbyImageSharpFixed
                        }
                      }
                  }
            filealumni8: file(relativePath: {eq: "images/alimni/alumni_1.jpg"}) {
                  childImageSharp {
                    fixed(width: 280) {
                      ...GatsbyImageSharpFixed
                    }
                  }
              }
                filealumni7: file(relativePath: {eq: "images/alimni/alumni_1.jpg"}) {
                      childImageSharp {
                        fixed(width: 280) {
                          ...GatsbyImageSharpFixed
                        }
                      }
                  }
            filealumni6: file(relativePath: {eq: "images/alimni/alumni_6.jpg"}) {
                  childImageSharp {
                    fixed(width: 280) {
                      ...GatsbyImageSharpFixed
                    }
                  }
              }
                filealumni5: file(relativePath: {eq: "images/alimni/alumni_5.jpg"}) {
                      childImageSharp {
                        fixed(width: 280) {
                          ...GatsbyImageSharpFixed
                        }
                      }
                  }
            filealumni4: file(relativePath: {eq: "images/alumni/alumni_4.jpg"}) {
                  childImageSharp {
                    fixed(width: 280) {
                      ...GatsbyImageSharpFixed
                    }
                  }
              }
                filealumni3: file(relativePath: {eq: "images/alumni/alumni_3.jpg"}) {
                      childImageSharp {
                        fixed(width: 280) {
                          ...GatsbyImageSharpFixed
                        }
                      }
                  }
            filealumni2: file(relativePath: {eq: "images/alumni/alumni_2.jpg"}) {
                  childImageSharp {
                    fixed(width: 280) {
                      ...GatsbyImageSharpFixed
                    }
                  }
              }
                filealumni1: file(relativePath: {eq: "images/alumni/alumni_1.jpg"}) {
                      childImageSharp {
                        fixed(width: 280) {
                          ...GatsbyImageSharpFixed
                        }
                      }
                  }
          }
      `)


  return(
    <Layout>
    <div className="Alumni">

    <div class="container">
  <div class="row">
    <div class="col">
      <Img className="Alumni_pic" fixed={data.filealumni1.childImageSharp.fixed}></Img>
    </div>
    <div class="col">
    <div className="Alumni_data">
      <h3>Dr. Ankita Bal</h3>
      <p>completed P.hd in 2021</p>
      <p>Thesis title: Synthesis of Nitrogen Based N Heterocycles via Metal Free Approach </p>
      <p>Present Affliation : HP, Bengaluru, India</p>
      <p></p>
    </div>
    </div>
  </div>
</div>

<div class="container">
<div class="row">
<div class="col">
  <Img className="Alumni_pic" fixed={data.filealumni1.childImageSharp.fixed}></Img>
</div>
<div class="col">
<div className="Alumni_data">
  <h3>Keshab Agarwal</h3>
  <p>completed M.Sc. in 2021</p>
  <p>Thesis title: </p>
  <p>Present Affliation : Not available  </p>
  <p></p>
</div>
</div>
</div>
</div>

<div class="container">
<div class="row">
<div class="col">
  <Img className="Alumni_pic" fixed={data.filealumni1.childImageSharp.fixed}></Img>
</div>
<div class="col">
<div className="Alumni_data">
  <h3>Prabhu Dayal Naik</h3>
  <p>completed MSc in 2021 </p>
  <p>Thesis title: </p>
  <p>Present Affliation : Not available </p>
  <p></p>
</div>
</div>
</div>
</div>

<div class="container">
<div class="row">
<div class="col">
  <Img className="Alumni_pic" fixed={data.filealumni1.childImageSharp.fixed}></Img>
</div>
<div class="col">
<div className="Alumni_data">
  <h3>Sunil Kumar Swain</h3>
  <p>completed M.Sc in 2021</p>
  <p>Thesis title: </p>
  <p>Present Affliation : Not available  </p>
  <p></p>
</div>
</div>
</div>
</div>

<div class="container">
<div class="row">
<div class="col">
<Img className="Alumni_pic" fixed={data.filealumni1.childImageSharp.fixed}></Img>
</div>
<div class="col">
<div className="Alumni_data">
<h3>Dr Khokan Choudhuri</h3>
<p>completed P.hd in </p>
<p>Thesis title: </p>
<p>Present Affliation :  </p>
<p></p>
</div>
</div>
</div>
</div>

<div class="container">
<div class="row">
<div class="col">
<Img className="Alumni_pic" fixed={data.filealumni1.childImageSharp.fixed}></Img>
</div>
<div class="col">
<div className="Alumni_data">
<h3>Dr Md Toufique Alam</h3>
<p>completed P.hd in </p>
<p>Thesis title: </p>
<p>Present Affliation : </p>
<p></p>
</div>
</div>
</div>
</div>

  </div>
</Layout>
  )
}

export default Alumni
