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
<div className="Alumni_data">
<h3>Mr. Soham Roy</h3>
<p>Completed Int. M.Sc. in 2025</p>
<p>Thesis title: Synthesis and Characterization of Perovskites and Perylene Diimide towards organic transformation</p>
<p>Present Affiliation: </p>
<p></p>
</div>
</div> 

<div class="container">
<div className="Alumni_data">
<h3>Dr. Rosalin Bhanja</h3>
<p>Completed Ph.D. in 2024</p>
<p>Thesis title: Metal-free Approaches towards C-N and C-O bond formations.</p>
<p>Present Affiliation: </p>
<p></p>
</div>
</div>
    
    <div class="container">
<div className="Alumni_data">
<h3>Ms. Soumyashree Priyadarshinee</h3>
<p>Completed Int. M.Sc. in 2024</p>
<p>Thesis title: C-H Functionalization: Sustainable Approaches towards Synthesis of C-X (X = C, N, O, Br) Bonds</p>
<p>Present Affiliation: </p>
<p></p>
</div>
</div> 

    <div class="container">
<div className="Alumni_data">
<h3>Mr. Supratim Chatterjee</h3>
<p>Completed Int. M.Sc. in 2024</p>
<p>Thesis title: Synthesis, Study, and Application of Elemental-doped Perovskites</p>
<p>Present Affiliation: PhD at Concordia University, Canada</p>
<p></p>
</div>
</div> 

      <div class="container">
<div className="Alumni_data">
<h3>Mr. Ankit Ray</h3>
<p>Completed Int. M.Sc. in 2024</p>
<p>Thesis title: Synthesis of Different Cesium-based Lead Halide Perovskites and Their Photophysical Studies</p>
<p>Present Affiliation: PhD at IITB, India</p>
<p></p>
</div>
</div>

    <div class="container">
<div className="Alumni_data">
<h3>Mr. Kushal Baloda</h3>
<p>Completed Int. M.Sc. in 2024</p>
<p>Thesis title: Synthesis, Structural Characterization, and Study of Phase Transformations in Halide Perovskites for Advanced Applications</p>
<p>Present Affiliation: </p>
<p></p>
</div>
</div>

    <div class="container">
<div className="Alumni_data">
<h3>Dr. Anupam Manna</h3>
<p>RA from Nov 2021 - Mar 2024</p>
<p>Research field: Synthesis of fluorescence materials and their applications.</p>
<p>Present Affiliation: Works at Macleods, Gujrat, India</p>
<p></p>
</div>
</div>

    
    <div class="container">
<div className="Alumni_data">
<h3>Dr. Ashis Mathuri</h3>
<p>Completed Ph.D. in 2023</p>
<p>Thesis title: Sustainable Approaches in the Synthesis of Organosulfur Compounds.</p>
<p>Present Affiliation: Works at Macleods, Mumbai, India</p>
<p></p>
</div>
</div>
    
  <div class="container">
<div className="Alumni_data">
<h3>Mr. Uday Singh</h3>
<p>Completed Int. M.Sc. in 2023</p>
<p>Thesis title: An Attempt towards Synthesis of C-X (-N, -C, -O) Bonds via Mild and Convenient Approaches</p>
<p>Present Affiliation : MBA, India</p>
<p></p>
</div>
</div>
    
    <div class="container">
<div className="Alumni_data">
<h3>Dr. Milan Pramanik (Outstanding Doctoral Student of HBNI, 2022)</h3>
<p>Completed Ph.D. in 2022</p>
<p>Thesis title: Reactivity Control of Alkenes, Alkynes and Alcohols for C-S Bond Formation Reactions</p>
<p>Present Affiliation: Postdoctoral fellow at Cardiff University, UK</p>
<p></p>
</div>
</div>

<div class="container">
<div className="Alumni_data">
<h3>Dr. Shyamal Kanti Bera</h3>
<p>Completed Ph.D. in 2022</p>
<p>Thesis title: Metal-free Approaches towards the Construction of Heterocycles</p>
<p>Present Affiliation: Postdoctoral fellow at University of Cagliari, Italy</p>
<p></p>
</div>
</div>


<div class="container">
<div className="Alumni_data">
<h3>Dr. Sudip Sau (Outstanding Doctoral Student of HBNI, 2023)</h3>
<p>Completed Ph.D. in 2022</p>
<p>Thesis title: Sustainable Approaches towards C-X (-N, -C, -O) Bond Formation Reactions in Organic Synthesis</p>
<p>Present Affiliation: Postdoctoral fellow at CAU, South Korea</p>
<p></p>
</div>
</div>


  <div class="container">

<div className="Alumni_data">
<h3>Dr. Ankita Bal</h3>
<p>Completed Ph.D. in 2021</p>
<p>Thesis title: Synthesis of Nitrogen Based N-Heterocycles via Metal Free Approach</p>
<p>Present Affliation: Works at HPCL</p>
<p></p>
</div>
</div>

 <div class="container">

<div className="Alumni_data">
<h3>Dr. Khokan Choudhuri</h3>
<p>Completed Ph.D. in 2020</p>
<p>Thesis title: Sustainable Strategies For Carbon-Sulfur Bond Formation Reactions In Organic Synthesis</p>
<p>Present Affiliation: Postdoctoral fellow at NTU, Singapore</p>
<p></p>
</div>
</div>
  
  <div class="container">

<div className="Alumni_data">
<h3>Dr. Md. Toufique Alam</h3>
<p>Completed Ph.D. in 2019</p>
<p>Thesis title: Organic C-X (X = N & O) Bond Synthesis Using Organo-Iodine Reagents</p>
<p>Present Affiliation: Assistant teacher</p>
<p></p>
</div>
</div>
  
  <div class="container">

<div className="Alumni_data">
<h3>Dr. Anima Bose</h3>
<p>Completed Ph.D. in 2018</p>
<p>Thesis title: Peroxide Promoted C-X (X = -O, -N) Bond Syntheisis</p>
<p>Present Affiliation: Asst. Prof.</p>
<p></p>
</div>
</div>
 
  
  <div class="container">

<div className="Alumni_data">
<h3>Dr. Saikat Maiti</h3>
<p>Completed Ph.D. in 2017</p>
<p>Thesis title: Hypervalent Lodine(Iii) Mediated C-N Bond Formation Reactions</p>
<p>Present Affiliation: Scientist at Merck, Bengaluru</p>
<p></p>
</div>
</div>
  
  <div class="container">

<div className="Alumni_data">
<h3>Dr. Prasit Kumar Sahoo</h3>
<p>Completed Ph.D. in 2016</p>
<p>Thesis title: Subcomponent Synthesis Via Mechanochemistry</p>
<p>Present Affiliation: Patent officer, Kolkata</p>
<p></p>
</div>
</div>
  
  <div class="container">

<div className="Alumni_data">
<h3>Dr. Tapas Kumar Achar</h3>
<p>Completed Ph.D. in 2016</p>
<p>Thesis title: Enabling Non-Conventional Pathway For Organic Synthesis</p>
<p>Present Affiliation: Works at Syngene </p>
<p></p>
</div>
</div>
  

  </div>
</Layout>
  )
}

export default Alumni
