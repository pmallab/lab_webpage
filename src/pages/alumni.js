import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import "../styles/alumni.scss"
import Img from "gatsby-image"
import {Carousel} from "react-bootstrap";

const Alumni = () => {
  const data = useStaticQuery(graphql`
          query {
            filealumni16: file(relativePath: {eq: "images/alimni/alumni_16.jpg"}) {
                  childImageSharp {
                    fixed(width: 280) {
                      ...GatsbyImageSharpFixed
                    }
                  }
              }
                filealumni15: file(relativePath: {eq: "images/alumni/alumni_15.jpg"}) {
                      childImageSharp {
                        fixed(width: 280) {
                          ...GatsbyImageSharpFixed
                        }
                      }
                  }
            filealumni14: file(relativePath: {eq: "images/alimni/alumni_14.jpg"}) {
                  childImageSharp {
                    fixed(width: 280) {
                      ...GatsbyImageSharpFixed
                    }
                  }
              }
                filealumni13: file(relativePath: {eq: "images/alimni/alumni_13.jpg"}) {
                      childImageSharp {
                        fixed(width: 280) {
                          ...GatsbyImageSharpFixed
                        }
                      }
                  }
            filealumni12: file(relativePath: {eq: "images/alimni/alumni_12.jpg"}) {
                  childImageSharp {
                    fixed(width: 280) {
                      ...GatsbyImageSharpFixed
                    }
                  }
              }
                filealumni11: file(relativePath: {eq: "images/alimni/alumni_11.jpg"}) {
                      childImageSharp {
                        fixed(width: 280) {
                          ...GatsbyImageSharpFixed
                        }
                      }
                  }
            filealumni10: file(relativePath: {eq: "images/alimni/alumni_10.jpg"}) {
                  childImageSharp {
                    fixed(width: 280) {
                      ...GatsbyImageSharpFixed
                    }
                  }
              }
                filealumni9: file(relativePath: {eq: "images/alimni/alumni_9.jpg"}) {
                      childImageSharp {
                        fixed(width: 280) {
                          ...GatsbyImageSharpFixed
                        }
                      }
                  }
            filealumni8: file(relativePath: {eq: "images/alimni/alumni_8.jpg"}) {
                  childImageSharp {
                    fixed(width: 280) {
                      ...GatsbyImageSharpFixed
                    }
                  }
              }
                filealumni7: file(relativePath: {eq: "images/alimni/alumni_7.jpg"}) {
                      childImageSharp {
                        fixed(width: 280) {
                          ...GatsbyImageSharpFixed
                        }
                      }
                  }
            filealumni6: file(relativePath: {eq: "images/alimni/alumni_20.jpg"}) {
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
            filealumni4: file(relativePath: {eq: "images/alumni/alumni_4.JPG"}) {
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
            filealumni2: file(relativePath: {eq: "images/alumni/alumni_2.JPG"}) {
                  childImageSharp {
                    fixed(width: 280) {
                      ...GatsbyImageSharpFixed
                    }
                  }
              }
                filealumni1: file(relativePath: {eq: "images/alumni/alumni_1.JPG"}) {
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
<Img className="Alumni_pic" fixed={data.filealumni2.childImageSharp.fixed}></Img>
</div>
<div class="col">
<div className="Alumni_data">
<h3>Dr Milan Pramanik</h3>
<p>completed P.hd in 2022</p>
<p>Thesis title: Reactivity Control of Alkenes, Alkynes and Alcohols for C-S Bond Formation Reactions</p>
<p>Present Affliation : Post-doc at Cardiff University</p>
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
<h3>Dr Shyamal Kanti Bera</h3>
<p>completed P.hd in 2022</p>
<p>Thesis title: Metal-free Approaches towards the Construction of Heterocycles</p>
<p>Present Affliation : </p>
<p></p>
</div>
</div>
</div>
</div>


<div class="container">
<div class="row">
<div class="col">
<Img className="Alumni_pic" fixed={data.filealumni4.childImageSharp.fixed}></Img>
</div>
<div class="col">
<div className="Alumni_data">
<h3>Dr Sudip Sau</h3>
<p>completed P.hd in 2022</p>
<p>Thesis title: Sustainable Approaches towards C-X (-N, -C, -O) Bond Formation Reactions in Organic Synthesis</p>
<p>Present Affliation : </p>
<p></p>
</div>
</div>
</div>
</div>


  <div class="container">
<div class="row">
<div class="col">
<Img className="Alumni_pic" fixed={data.filealumni3.childImageSharp.fixed}></Img>
</div>
<div class="col">
<div className="Alumni_data">
<h3>Dr Ankita Bal</h3>
<p>completed P.hd in 2021</p>
<p>Thesis title: Synthesis of Nitrogen Based N-Heterocycles via Metal Free Approach</p>
<p>Present Affliation: HPCL</p>
<p></p>
</div>
</div>
</div>
</div>


<div class="container">
<div class="row">
<div class="col">
<Img className="Alumni_pic" fixed={data.filealumni5.childImageSharp.fixed}></Img>
</div>
<div class="col">
<div className="Alumni_data">
<h3>Dr Md. Toufique Alam</h3>
<p>completed P.hd in 2019</p>
<p>Thesis title: Organic C-X (X = N & O) Bond Synthesis Using Organo-Iodine Reagents</p>
<p>Present Affliation: Assistant teacher</p>
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
