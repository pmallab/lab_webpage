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
              filephd_2: file(relativePath: {eq: "images/members/phd_2.jpg"}) {
                      childImageSharp {
                        fixed(width: 280) {
                          ...GatsbyImageSharpFixed
                        }
                    }
                }
                filephd_3: file(relativePath: {eq: "images/members/phd_3.JPG"}) {
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
                      filephd_6: file(relativePath: {eq: "images/members/phd_6.JPG"}) {
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
                            filemsc_4: file(relativePath: {eq: "images/members/msc_4.jpeg"}) {
                                    childImageSharp {
                                      fixed(width: 280) {
                                        ...GatsbyImageSharpFixed
                                      }
                                  }
                              }
                              filemsc_5: file(relativePath: {eq: "images/members/msc_5.JPG"}) {
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
              <h3>Dr. Manoranjan Ojha
              <small class="text-muted"> (RA)</small></h3>
              <p></p>
              <p>PhD-2022 (IIT Hyderabad)</p>
              <p>Homeplace: Digha, West Bengal</p>
                <p> Research field: Electrochemistry</p>
              <p><a href="mailto: manoranjanojha21@gmail.com"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
          </svg>&nbsp;manoranjanojha21@gmail.com</a>&emsp;</p>
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
<Img className="Member_5" fixed={data.filephd_6.childImageSharp.fixed}></Img>
</div>
<div class="col-sm">
<div className= "Phd1_data">
<h3>Tarun Kumar Dinda
<small class="text-muted"> (SRF)</small></h3>
<p>B.Sc-2015 (Vidyasagar University), M.Sc.-2019 (Jadavpur University)</p>
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
<small class="text-muted"> (SRF)</small></h3>
<p>B.Sc-2016 (Ravenshaw university), M.Sc.-2020 (Central university of Jharkhand)</p>
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
<small class="text-muted"> (SRF)</small></h3>
<p>B.Sc-2018 (Vidyasagar University), M.Sc.-2020 (Vidyasagar University)</p>
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
<small class="text-muted"> (SRF)</small></h3>
<p>B.Sc-2019 (Midnapore college autonomous), M.Sc.-2021 (IIEST, Shibpur)</p>
<p> Qualified Gate 2021 / CSIR Net 2021 June (UGC fellowship)</p>
<p>Joined this group in August-2022</p>
<p>Homeplace: Moyna, West Bengal</p>
<p>Research field: Metal-free oxidation</p>
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
<small class="text-muted"> (SRF)</small></h3>
<p>B.Sc-2019 (Midnapore college autonomous), M.Sc.-2021 (Vidyasagar University, WB)</p>
<p> Qualified GATE 2021</p>
<p>Joined this group in August-2022</p>
<p>Homeplace: Egra, West Bengal</p>
<p>Research field: Photo-mediated radical chemistry</p>
<p><a href="mailto: sathi.sahoo@niser.ac.in"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
</svg>&nbsp;sathi.sahoo@niser.ac.in</a></p>
</div>
</div>
</div>
</div>
<pre></pre>


<div class="container">
<div class="row">
<div class="col-sm">
<Img className="Member_5" fixed={data.filephd_2.childImageSharp.fixed}></Img>
</div>
<div class="col-sm">
<div className= "Phd1_data">
<h3>Chidananda Biswal
<small class="text-muted"> (JRF)</small></h3>
<p>B.Sc-2021 (Govt. (Auto) College, Angul), M.Sc.-2023 (Veer Surendra Sai University of Technology, OD)</p>
<p> Qualified CSIR-UGC NET 2023</p>
<p>Joined this group in August-2024</p>
<p>Homeplace: Angul, Odisha</p>
<p>Research field: Ball Milling Reactions</p>
<p><a href="mailto: chidananda.biswal@niser.ac.in"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
</svg>&nbsp;chidananda.biswal@niser.ac.in</a></p>
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
<h3>Ramen Guchait
<small class="text-muted"> (JRF)</small></h3>
<p>B.Sc-2019 (Amta Ramsaday college, WB), M.Sc.-2021 (University of North Bengal, WB)</p>
<p> Qualified CSIR-UGC NET 2023</p>
<p>Joined this group in January-2025</p>
<p>Homeplace: Udaynarayanpur, West Bengal</p>
<p>Research field: Photochemistry and Electro-organic synthesis</p>
<p><a href="mailto: ramendranath.guchait@niser.ac.in"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
</svg>&nbsp;ramendranath.guchait@niser.ac.in</a></p>
</div>
</div>
</div>
</div>
<pre></pre>

  
<div className="Liner"></div>
<pre></pre>

<h1> Int. PhD Researcher</h1>


  <div class="container">
<div class="row">
<div class="col-sm">
<Img className="Member_5" fixed={data.filemsc_8.childImageSharp.fixed}></Img>
</div>
<div class="col-sm">
<div className= "Phd1_data">
<h3>Lipika Bardhan
<p><small class="text-muted"></small></p></h3>
<p>Joined this group in August 2024</p>
<p>Currently continuing Int. PhD (NISER), 6th semester</p>
<p> Qualified IIT JAM 2022</p>
<p>Hometown: Balasore, Odisha</p>
<p>Research field: Photocatalysis</p>
<p><a href="mailto: lipika.bardhan@niser.ac.in"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
</svg>&nbsp;lipika.bardhan@niser.ac.in</a>&emsp;</p>
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
<h3>Suman Handal
<p><small class="text-muted"></small></p></h3>
<p>Joined this group in August 2025</p>
<p>Currently continuing Int. PhD (NISER), 5th semester</p>
<p> Qualified IIT JAM 2023</p>
<p>Hometown: Ghatal, West Bengal</p>
<p>Research field: Photocatalysis</p>
<p><a href="mailto: Suman.Handal@niser.ac.in"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
</svg>&nbsp;Suman.Handal@niser.ac.in</a>&emsp;</p>
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
<h3>Sagnik Bhattacharya
<p><small class="text-muted"></small></p></h3>
<p>Joined this group in August 2023</p>
<p>Currently continuing Int. MSc (NISER), 10th semester</p>
<p> Qualified NEST Exam, 2020</p>
<p>Hometown: Kolkata, West Bengal</p>
<p>Research field: Lanthanide-based Perovskite Synthesis</p>
<p><a href="mailto: sagnik.bhattacharya@niser.ac.in"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
</svg>&nbsp;sagnik.bhattacharya@niser.ac.in</a>&emsp;</p>
</div>
</div>
</div>
</div>
<pre></pre>


<div class="container">
<div class="row">
<div class="col-sm">
<Img className="Member_5" fixed={data.filemsc_4.childImageSharp.fixed}></Img>
</div>
<div class="col-sm">
<div className= "Phd1_data">
<h3>Soham Roy
<p><small class="text-muted"></small></p></h3>
<p>Joined this group in August 2023</p>
<p>Currently continuing Int. MSc (NISER), 10th semester</p>
<p> Qualified NEST Exam, 2020</p>
<p>Hometown: South Dinajpur, West Bengal</p>
<p>Research field: Synthesis of Materials and biologically Important Molecules</p>
<p><a href="mailto: soham.roy@niser.ac.in"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
</svg>&nbsp;soham.roy@niser.ac.in</a>&emsp;</p>
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
<h3>Tathagata Mandal 
<p><small class="text-muted"></small></p></h3>
<p>Joined this group in August 2023</p>
<p>Currently continuing Int. MSc (NISER), 10th semester</p>
<p> Qualified NEST Exam, 2020</p>
<p>Hometown: Baruipur, Kolkata</p>
<p>Research field: Organic synthesis and catalysis</p>
<p><a href="mailto: tathagata.mandal@niser.ac.in"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
</svg>&nbsp;tathagata.mandal@niser.ac.in</a>&emsp;</p>
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
<h3>Tanmay Narendra Deshpande 
<p><small class="text-muted"></small></p></h3>
<p>Joined this group in August 2024</p>
<p>Currently continuing Int. MSc (NISER), 8th semester</p>
<p> Qualified NEST Exam, 2021</p>
<p>Hometown: Nagpur, Maharashtra</p>
<p>Research field: Organic chemistry</p>
<p><a href="mailto: tanmayn.deshpande@niser.ac.in"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
</svg>&nbsp;tanmayn.deshpande@niser.ac.in</a>&emsp;</p>
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
<h3>Bappaditya Debnath 
<p><small class="text-muted"></small></p></h3>
<p>Joined this group in August 2024</p>
<p>Currently continuing Int. MSc (NISER), 8th semester</p>
<p> Qualified NEST Exam, 2021</p>
<p>Hometown: Karimpur, West Bengal</p>
<p>Research field: Sustainable Organic Synthesis</p>
<p><a href="mailto: bappaditya.debnath@niser.ac.in"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
</svg>&nbsp;bappaditya.debnath@niser.ac.in</a>&emsp;</p>
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
<h3>Aisha Riyas 
<p><small class="text-muted"></small></p></h3>
<p>Joined this group in August 2024</p>
<p>Currently continuing Int. MSc (NISER), 8th semester</p>
<p> Qualified NEST Exam, 2021</p>
<p>Hometown: Alappuzha, Kerala</p>
<p>Research field: Organophotocatalysis</p>
<p><a href="mailto: aisha.riyas@niser.ac.in"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
</svg>&nbsp;aisha.riyas@niser.ac.in</a>&emsp;</p>
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
<h3>Sonali Priyadarshini Swain
<p><small class="text-muted"></small></p></h3>
<p>Joined this group in August 2025</p>
<p>Currently continuing Int. MSc (NISER), 7th semester</p>
<p> Qualified NEST Exam, 2022</p>
<p>Hometown: Puri, Odisha</p>
<p>Research field: Organo-photocatalysis</p>
<p><a href="mailto: sonali.swain@niser.ac.in"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
</svg>&nbsp;sonali.swain@niser.ac.in</a>&emsp;</p>
</div>
</div>
</div>
</div>
<pre></pre>
  
 
<div class="container">
<div class="row">
<div class="col-sm">
<Img className="Member_5" fixed={data.filemsc_10.childImageSharp.fixed}></Img>
</div>
<div class="col-sm">
<div className= "Phd1_data">
<h3>Megha Pradhan
<p><small class="text-muted"></small></p></h3>
<p>Joined this group in August 2025</p>
<p>Currently continuing Int. MSc (NISER), 7th semester</p>
<p> Qualified NEST Exam, 2022</p>
<p>Hometown: Rourkela, Odisha</p>
<p>Research field: Organometallic chemistry in organic synthesis</p>
<p><a href="mailto: megha.pradhan@niser.ac.in"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
</svg>&nbsp;megha.pradhan@niser.ac.in</a>&emsp;</p>
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
