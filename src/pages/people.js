import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import "../styles/people.scss"
import Img from "gatsby-image"
import {Carousel} from "react-bootstrap";

const People = () => {
  const data = useStaticQuery(graphql`
          query {
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
                              filemsc_5: file(relativePath: {eq: "images/members/msc_5.webp"}) {
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
                                      filemsc_10: file(relativePath: {eq: "images/members/msc_10.JPG"}) {
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


        <h1>Post-Doc Researcher</h1>

        <div class="container">
          <div class="row">
            <div class="col-sm">
              <Img className="Member_5" fixed={data.filepostdoc_1.childImageSharp.fixed}></Img>
            </div>
            <div class="col-sm">
            <div className= "Phd1_data">
              <h3>Dr. Anupam Manna
              <small class="text-muted"> (RA)</small></h3>
              <p></p>
              <p>PhD-2020 (CSIR-IMMT, Bhubaneswar)</p>
              <p>Homeplace: Debra, West Bengal</p>
                <p> Research field: Synthesis of fluorescence materials and their applications</p>
              <p><a href="mailto: anupammanna@niser.ac.in"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
          </svg>&nbsp;anupammanna@niser.ac.in</a>&emsp;</p>
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
<p>Research field: Photocatalysis</p>
<p><a href="mailto: tarunkumar.dinda@niser.ac.in"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
</svg>&nbsp;tarunkumar.dinda@niser.ac.in</a></p>
</div>
</div>
</div>
</div>
<pre></pre>

<div class="container">
<div class="row">
<div class="col-sm">
  <Img className="Member_5" fixed={data.filephd_1.childImageSharp.fixed}></Img>
</div>
<div class="col-sm">
<div className= "Phd1_data">
<h3>Rosalin Bhanja
<small class="text-muted"> (JRF)</small></h3>
<p>B.Sc-2016 (Ravenshaw university), M.Sc.-2020 (Central university of jharkhand)</p>
<p> Qualified GATE-2021, NET(CSIR)-2020</p>
<p>Joined this group in July 2021</p>
<p>Hometown:  Balasore, Odisha</p>
<p>Research field: C-C and C-heteroatom bond formation under metal free condition</p>
<p><a href="mailto: rosalin.bhanja@niser.ac.in"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
</svg>&nbsp;rosalin.bhanja@niser.ac.in</a>&emsp;</p>
  </div>
</div>
</div>
</div>
<pre></pre>


<div class="container">
<div class="row">
<div class="col-sm">
<Img className="Member_5" fixed={data.filephd_7.childImageSharp.fixed}></Img>
</div>
<div class="col-sm">
<div className= "Phd1_data">
<h3>Buddhadeb Pal
<small class="text-muted"> (JRF)</small></h3>
<p>B.Sc-2018 (Vidyasagar University) ,M.Sc.-2020 (Vidyasagar University)</p>
<p> Qualified GATE 2021</p>
<p>Joined this group in July-2021</p>
<p>Homeplace: Haldia, West Bengal</p>
<p>Research field: Visible-light mediated carbon heteroatom bond formation reactions</p>
<p><a href="mailto: buddhadeb.pal@niser.ac.in"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
</svg>&nbsp;buddhadeb.pal@niser.ac.in</a></p>
</div>
</div>
</div>
</div>
<pre></pre>


<div class="container">
<div class="row">
<div class="col-sm">
<Img className="Member_5" fixed={data.filephd_10.childImageSharp.fixed}></Img>
</div>
<div class="col-sm">
<div className= "Phd1_data">
<h3>Pravat Nayek
<small class="text-muted"> (JRF)</small></h3>
<p>B.Sc-2019 (Midnapore college autonomous) ,M.Sc.-2021 (IIEST, Shibpur)</p>
<p> Qualified Gate 2021 / CSIR Net 2021 june( UGC fellowship)</p>
<p>Joined this group in August-2022</p>
<p>Homeplace: Moyna, West Bengal</p>
<p>Research field: Through course work</p>
<p><a href="mailto: pravat.nayek@niser.ac.in"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
</svg>&nbsp;pravat.nayek@niser.ac.in</a></p>
</div>
</div>
</div>
</div>
<pre></pre>



<div class="container">
<div class="row">
<div class="col-sm">
<Img className="Member_5" fixed={data.filephd_8.childImageSharp.fixed}></Img>
</div>
<div class="col-sm">
<div className= "Phd1_data">
<h3>Sathi Sahoo
<small class="text-muted"> (JRF)</small></h3>
<p>B.Sc-2019 (Midnapore college autonomous) ,M.Sc.-2021 (Vidyasagar University, WB)</p>
<p> Qualified GATE 2021</p>
<p>Joined this group in August-2022</p>
<p>Homeplace: Egra, West Bengal</p>
<p>Research field: Through course work</p>
<p><a href="mailto: sathi.sahoo@niser.ac.in"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
</svg>&nbsp;sathi.sahoo@niser.ac.in</a></p>
</div>
</div>
</div>
</div>
<pre></pre>



<div className="Liner"></div>
<pre></pre>

<h1> M.Sc. Researchers</h1>


<div class="container">
<div class="row">
<div class="col-sm">
<Img className="Member_5" fixed={data.filemsc_1.childImageSharp.fixed}></Img>
</div>
<div class="col-sm">
<div className= "Phd1_data">
<h3>Uday Singh
<p><small class="text-muted"></small></p></h3>
<p>Joind this group in Sept-2021</p>
<p>Currently continuing 5th year Int. M.Sc.(NISER)</p>
<p>Hometown: Rohtak,Haryana</p>
<p>Research field: C-H functionalization </p>
<p><a href="mailto: uday.singh@niser.ac.in"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
</svg>&nbsp;uday.singh@niser.ac.in</a></p>
</div>
</div>
</div>
</div>
<pre></pre>


<div class="container">
<div class="row">
<div class="col-sm">
<Img className="Member_5" fixed={data.filemsc_2.childImageSharp.fixed}></Img>
</div>
<div class="col-sm">
<div className= "Phd1_data">
<h3>Kushal Baloda
<p><small class="text-muted"></small></p></h3>
<p>Joined this group in May 2022</p>
<p>Currently continuing Int. MSc(NISER), 7th semester</p>
<p> Qualified JEE Main, 2019</p>
<p>Hometown: Jaipur, Rajasthan</p>
<p>Research field: Material Chemistry</p>
<p><a href="mailto: kushal.baloda@niser.ac.in"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
</svg>&nbsp;kushal.baloda@niser.ac.in</a>&emsp;</p>
</div>
</div>
</div>
</div>
<pre></pre>


<div class="container">
<div class="row">
<div class="col-sm">
<Img className="Member_5" fixed={data.filemsc_9.childImageSharp.fixed}></Img>
</div>
<div class="col-sm">
<div className= "Phd1_data">
<h3>Soumyashree Priyadarshinee
<p><small class="text-muted"></small></p></h3>
<p>Joined this group in May 2022</p>
<p>Currently continuing Int. MSc(NISER), 7th semester</p>
<p> Qualified NEST Exam</p>
<p>Hometown: Dhenkanal , Odisha</p>
<p>Research field: Synthetic organic chemistry</p>
<p><a href="mailto: soumyashree.p@niser.ac.in"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
</svg>&nbsp;soumyashree.p@niser.ac.in</a>&emsp;</p>
</div>
</div>
</div>
</div>
<pre></pre>


<div class="container">
<div class="row">
<div class="col-sm">
<Img className="Member_5" fixed={data.filemsc_3.childImageSharp.fixed}></Img>
</div>
<div class="col-sm">
<div className= "Phd1_data">
<h3>Supratim Chatterjee
<p><small class="text-muted"></small></p></h3>
<p>Joined this group in August 2022</p>
<p>Currently continuing Int. MSc(NISER), 7th semester</p>
<p> Qualified NEST Exam (AIR 511)</p>
<p>Hometown: Kolkata, West Bengal</p>
<p>Research field: Synthetic organic chemistry</p>
<p><a href="mailto: supratim.chatterjee@niser.ac.in"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
</svg>&nbsp;supratim.chatterjee@niser.ac.in</a>&emsp;</p>
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
<h3>Ankit Ray
<p><small class="text-muted"></small></p></h3>
<p>Joined this group in August 2022</p>
<p>Currently continuing Int. MSc(NISER), 7th semester</p>
<p> Qualified NEST Exam (AIR 280)</p>
<p>Hometown: Kolkata, West Bengal</p>
<p>Research field: Synthetic organic chemistry</p>
<p><a href="mailto: ankit.ray@niser.ac.in"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
</svg>&nbsp;ankit.ray@niser.ac.in</a>&emsp;</p>
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
