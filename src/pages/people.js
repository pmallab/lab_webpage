import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import "../styles/people.scss"
import Img from "gatsby-image"
import {Carousel} from "react-bootstrap";

const People = () => {
  const data = useStaticQuery(graphql`
          query {
            file_background: file(relativePath: {eq: "images/group2.jpg"}) {
                  childImageSharp {
                    fluid(maxWidth: 10000) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
              }
              filepostdoc_1: file(relativePath: {eq: "images/members/postdoc_1.jpg"}) {
                    childImageSharp {
                      fixed(width: 280) {
                        ...GatsbyImageSharpFixed
                      }
                    }
                }
                filepostdoc_2: file(relativePath: {eq: "images/members/postdoc_2.jpg"}) {
                      childImageSharp {
                        fixed(width: 280) {
                          ...GatsbyImageSharpFixed
                        }
                      }
                  }
              filephd_1: file(relativePath: {eq: "images/members/phd_1.jpg"}) {
                    childImageSharp {
                      fixed(width: 280) {
                        ...GatsbyImageSharpFixed
                      }
                    }
                }
              filephd_2: file(relativePath: {eq: "images/members/phd_12.jpg"}) {
                      childImageSharp {
                        fixed(width: 280) {
                          ...GatsbyImageSharpFixed
                        }
                    }
                }
                filephd_3: file(relativePath: {eq: "images/members/phd_3.jpg"}) {
                        childImageSharp {
                          fixed(width: 280) {
                            ...GatsbyImageSharpFixed
                          }
                      }
                  }
                  filephd_4: file(relativePath: {eq: "images/members/phd_4.jpg"}) {
                          childImageSharp {
                            fixed(width: 280) {
                              ...GatsbyImageSharpFixed
                            }
                        }
                    }
                    filephd_5: file(relativePath: {eq: "images/members/phd_5.jpg"}) {
                            childImageSharp {
                              fixed(width: 280) {
                                ...GatsbyImageSharpFixed
                              }
                          }
                      }
                      filephd_6: file(relativePath: {eq: "images/members/phd_6.jpg"}) {
                              childImageSharp {
                                fixed(width: 280) {
                                  ...GatsbyImageSharpFixed
                                }
                            }
                        }
                        filephd_7: file(relativePath: {eq: "images/members/phd_7.jpg"}) {
                                childImageSharp {
                                  fixed(width: 280) {
                                    ...GatsbyImageSharpFixed
                                  }
                              }
                          }
                          filephd_8: file(relativePath: {eq: "images/members/phd_8.jpg"}) {
                                  childImageSharp {
                                    fixed(width: 280) {
                                      ...GatsbyImageSharpFixed
                                    }
                                }
                            }
                            filephd_9: file(relativePath: {eq: "images/members/phd_9.jpg"}) {
                                    childImageSharp {
                                      fixed(width: 280) {
                                        ...GatsbyImageSharpFixed
                                      }
                                  }
                              }
                              filephd_10: file(relativePath: {eq: "images/members/phd_10.jpg"}) {
                                      childImageSharp {
                                        fixed(width: 280) {
                                          ...GatsbyImageSharpFixed
                                        }
                                    }
                                }
                        filemsc_1: file(relativePath: {eq: "images/members/msc_1.jpg"}) {
                              childImageSharp {
                                fixed(width: 280) {
                                  ...GatsbyImageSharpFixed
                                }
                              }
                          }
                          filemsc_2: file(relativePath: {eq: "images/members/msc_2.jpg"}) {
                                childImageSharp {
                                  fixed(width: 280) {
                                    ...GatsbyImageSharpFixed
                                  }
                                }
                            }
                          filemsc_3: file(relativePath: {eq: "images/members/msc_3.jpg"}) {
                                  childImageSharp {
                                    fixed(width: 280) {
                                      ...GatsbyImageSharpFixed
                                    }
                                }
                            }
                            filemsc_4: file(relativePath: {eq: "images/members/msc_4.jpg"}) {
                                    childImageSharp {
                                      fixed(width: 280) {
                                        ...GatsbyImageSharpFixed
                                      }
                                  }
                              }
                              filemsc_5: file(relativePath: {eq: "images/members/msc_5.jpg"}) {
                                      childImageSharp {
                                        fixed(width: 280) {
                                          ...GatsbyImageSharpFixed
                                        }
                                    }
                                }
                                filemsc_6: file(relativePath: {eq: "images/members/msc_6.jpg"}) {
                                        childImageSharp {
                                          fixed(width: 280) {
                                            ...GatsbyImageSharpFixed
                                          }
                                      }
                                  }
                                  filemsc_7: file(relativePath: {eq: "images/members/msc_7.jpg"}) {
                                          childImageSharp {
                                            fixed(width: 280) {
                                              ...GatsbyImageSharpFixed
                                            }
                                        }
                                    }
                                    filemsc_8: file(relativePath: {eq: "images/members/msc_8.jpg"}) {
                                            childImageSharp {
                                              fixed(width: 280) {
                                                ...GatsbyImageSharpFixed
                                              }
                                          }
                                      }
                                      filemsc_9: file(relativePath: {eq: "images/members/msc_9.jpg"}) {
                                              childImageSharp {
                                                fixed(width: 280) {
                                                  ...GatsbyImageSharpFixed
                                                }
                                            }
                                        }
                                      filemsc_10: file(relativePath: {eq: "images/members/msc_10.jpg"}) {
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
    <div className="people">
      <p><Img className="GroupPic1" fluid={data.file_background.childImageSharp.fluid}></Img></p>

        <h1>Post-Doc Researcher</h1>

        <div class="container">
          <div class="row">
            <div class="col-sm">
              <Img className="Member_5" fixed={data.filepostdoc_1.childImageSharp.fixed}></Img>
            </div>
            <div class="col-sm">
            <div className= "Phd1_data">
              <h3>Dr. Monojit Das
              <small class="text-muted"> (RA)</small></h3>
              <p></p>
              <p>PhD-2019 (CSIR-IMMT, Bhubaneswar)</p>
              <p>Homeplace: Krishnanagar, West Bengal</p>
                <p> Research field: Organic synthesis and sensor applications</p>
              <p><a href="mailto: monojit.ch@niser.ac.in"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
          </svg>&nbsp;monojit.ch@niser.ac.in</a>&emsp;</p>
              </div>
            </div>
          </div>
        </div>

        <div className="Liner"></div>
        <pre></pre>

<h1> PhD Researchers</h1>

     

  <div class="container">
<div class="row">
<div class="col-sm">
  <Img className="Member_5" fixed={data.filephd_2.childImageSharp.fixed}></Img>
</div>
<div class="col-sm">
<div className= "Phd1_data">
<h3>Milan Pramanik
<small class="text-muted"> (SRF)</small></h3>
<p>B.Sc-2014 (Vidyasagar University), M.Sc.-2016 (IIT Madras)</p>
<p> Qualified GATE-2016, NET(UGC)-2018</p>
<p>Joined this group in July 2016</p>
<p>Hometown: Dantan, West Bengal</p>
<p>Research field: C-S bond formation reaction using organophotocatalysis</p>
<p><a href="mailto: milan.pramanik@niser.ac.in"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
</svg>&nbsp;milan.pramanik@niser.ac.in</a>&emsp;</p>
  </div>
</div>
</div>
</div>
<pre></pre>

<div class="container">
<div class="row">
<div class="col-sm">
<Img className="Member_5" fixed={data.filephd_3.childImageSharp.fixed}></Img>
</div>
<div class="col-sm">
<div className= "Phd1_data">
<h3>Shyamal Kanti Bera
<small class="text-muted"> (SRF)</small></h3>
<p>B.Sc-2014 (Vidyasagar University), M.Sc.-2016 (Guru Ghasidas Central University)</p>
<p> Qualified: NET(UGC)-2017, DST-INSPIRE Fellow (2017)</p>
<p>Joined this group in July 2017</p>
<p>Hometown: Kharagpur, West Bengal</p>
<p>Research field: Development of transition-metal-free carbon-carbon and carbon-hetero atom bond-forming reactions.</p>
<p><a href="mailto: shymal.bera@niser.ac.in"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
</svg>&nbsp;shymal.bera@niser.ac.in</a>&emsp;</p>
</div>
</div>
</div>
</div>
<pre></pre>

<div class="container">
<div class="row">
<div class="col-sm">
<Img className="Member_5" fixed={data.filephd_4.childImageSharp.fixed}></Img>
</div>
<div class="col-sm">
<div className= "Phd1_data">
<h3>Sudip Sau
<p><small class="text-muted"> (SRF)</small></p></h3>
<p>B.Sc-2015 (Vidyasagar University) ,M.Sc.-2017 (IIT Dhanbad)</p>
<p> Qualified GATE-2017, NET(LS)-2018</p>
<p>Joined this group in July 2017</p>
<p>Hometown: Panskura, West Bengal</p>
<p>Research field: Developmant of sustainable strategies for carbon-carbon and carbon-hetero atom bond synthesis.</p>
<p><a href="mailto: sudip.sau@niser.ac.in"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
</svg>&nbsp;sudip.sau@niser.ac.in</a></p>
</div>
</div>
</div>
</div>
<pre></pre>

<div class="container">
<div class="row">
<div class="col-sm">
<Img className="Member_5" fixed={data.filephd_5.childImageSharp.fixed}></Img>
</div>
<div class="col-sm">
<div className= "Phd1_data">
<h3>Ashis Mathuri
<p><small class="text-muted"> (SRF)</small></p></h3>
<p>Joined this group in July-2019</p>
<p>B.Sc. (Sidhu Kanho Birsha University), M.Sc.(Dr. C.V. Raman University)</p>
<p>Hometown: Bankura, West Bengal</p>
<p>Research field: Visible Light Photocatalyst in C-S Bond formation</p>
<p><a href="mailto: ashis.mathuri@niser.ac.in"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
</svg>&nbsp;ashis.mathuri@niser.ac.in</a></p>
</div>
</div>
</div>
</div>
<pre></pre>

<div class="container">
<div class="row">
<div class="col-sm">
<Img className="Member_5" fixed={data.filephd_6.childImageSharp.fixed}></Img>
</div>
<div class="col-sm">
<div className= "Phd1_data">
<h3>Tarun Kumar Dinda
<small class="text-muted"> (JRF)</small></h3>
<p>B.Sc-2015 (Vidyasagar University) ,M.Sc.-2019 (Jadavpur University)</p>
<p> Qualified GATE-2019</p>
<p>Joined this group in Jan-2021</p>
<p>Homeplace: Haldia, West Bengal</p>
<p>Research field: Iodine Based Reagents  For Construction Of Small Organic Molecules</p>
<p><a href="mailto: tarunkumar.dinda@niser.ac.in"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
</svg>&nbsp;tarunkumar.dinda@niser.ac.in</a></p>
</div>
</div>
</div>
</div>
<pre></pre>

<div className="Liner"></div>
<pre></pre>



<div class="container">
<div class="row">
<div class="col-sm">
<Img className="Member_5" fixed={data.filemsc_4.childImageSharp.fixed}></Img>
</div>
<div class="col-sm">
<div className= "Phd1_data">
<h3>Chandan Chittapriya Sahu
<p><small class="text-muted"></small></p></h3>
<p>Joined this group in Sept 2020</p>
<p>Currently continuing Int. M.Sc.(NISER)</p>
<p>Hometown: Deogarh, Odisha</p>
<p>Research field: Synthetic Chemistry</p>
<p><a href="mailto: chandan.sahu@niser.ac.in"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
</svg>&nbsp;chandan.sahu@niser.ac.in</a>&emsp;</p>
</div>
</div>
</div>
</div>
<pre></pre>

<div class="container">
<div class="row">
<div class="col-sm">
<Img className="Member_5" fixed={data.filemsc_5.childImageSharp.fixed}></Img>
</div>
<div class="col-sm">
<div className= "Phd1_data">
<h3>Himangshu Dutta
<p><small class="text-muted"></small></p></h3>
<p>Joined this group in Sept 2020</p>
<p>Currently continuing Int. M.Sc.(NISER)</p>
<p>Hometown: Bardhaman, West Bengal</p>
<p>Research field: C-S bond formation using photoredox catalysis</p>
<p><a href="mailto: himangshu.dutta@niser.ac.in"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
</svg>&nbsp;himangshu.dutta@niser.ac.in</a></p>

</div>
</div>
</div>
</div>
<pre></pre>

<div class="container">
<div class="row">
<div class="col-sm">
<Img className="Member_5" fixed={data.filemsc_6.childImageSharp.fixed}></Img>
</div>
<div class="col-sm">
<div className= "Phd1_data">
<h3>Azmeera Vritik Kumar
<p><small class="text-muted"></small></p></h3>
<p>Joined this group on Sept-2020</p>
<p>Currently continuing Int. M.Sc.(NISER)</p>
<p>Hometown: Hydrabad, Telangana</p>
<p>Research field: Chemistry</p>
<p><a href="mailto: azmeera.kumar@niser.ac.in"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
</svg>&nbsp;azmeera.kumar@niser.ac.in</a></p>
</div>
</div>
</div>
</div>
<pre></pre>

<div class="container">
<div class="row">
<div class="col-sm">
<Img className="Member_5" fixed={data.filemsc_7.childImageSharp.fixed}></Img>
</div>
<div class="col-sm">
<div className= "Phd1_data">
<h3>Abhishek Raj
<p><small class="text-muted"></small></p></h3>
<p>Joind this group in Sept-2020</p>
<p>Currently continuing Int. M.Sc.(NISER)</p>
<p>Hometown: Nalanda, Bihar</p>
<p>Research field: C-H functionalization to form new C-C, C-N and C-S bonds.</p>
<p><a href="mailto: abhishek.raj@niser.ac.in"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
</svg>&nbsp;abhishek.raj@niser.ac.in</a></p>
</div>
</div>
</div>
</div>
<pre></pre>


  </div>
</Layout>
  )
}

export default People