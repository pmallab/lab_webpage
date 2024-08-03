import React from "react"
import Layout from "../components/layout"
import "../styles/pmal.scss"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Pmal = () => {
  const data = useStaticQuery(graphql`
          query {
            file1: file(relativePath: {eq: "images/pmal_image.jpg"}) {
                    childImageSharp {
                      fixed(width: 220) {
                        ...GatsbyImageSharpFixed
                      }
                  }
              }
              file2: file(relativePath: {eq: "images/niser_logo.jpeg"}) {
                      childImageSharp {
                        fixed(width: 25) {
                          ...GatsbyImageSharpFixed
                        }
                    }
                }
        }
    `)
  return(
    <Layout>
    <div className="pmal">
    <div class="container">
  <div class="row">
    <div class="col-sm">
      <div class="container-fluid">
      <div className="Short_details">
      <pre>  </pre>
      <h2> Prof. Prasenjit Mal
      <small class="text-muted"> (Group Leader)</small>
    </h2>
    <p>Professor</p>
    <p>School Of Chemical Sciences</p>
    <p>National Institute of Science Education and Research</p>
    <p> Bhubaneswar, Odisha, India </p>
    <p><a href="mailto: pmal@niser.ac.in"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
</svg>&nbsp;pmal@niser.ac.in</a>&emsp;
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>&nbsp; +91-6742494188</p>
    </div>
      </div>
    </div>
    <div class="col-sm">
    <Img className="Pmal_image" fixed={data.file1.childImageSharp.fixed}>
            </Img>

    </div>
  </div>
</div>


<div class="container-md">
<div class="container-fluid">
<div className="Head">
<h3>My Bio</h3>
<p>&emsp;&emsp; I was born at Lokhesole, Bankura, West Bengal, India. I obtained my MSc degree from Indian Institute of technology Kharagpur, and followed by PhD at Indian Institute of technology Kanpur in 2005. Then, I moved for postdoctoral studies at the University of Siegen in Germany as an Alexander von Humboldt Fellow (2006-2007) and at the University of Cambridge in the UK as a Marie Curie Fellow (2008-2009). I started an independent research career at NISER Bhubaneswar in December 2009. My research is focused on supramolecular catalysis in organic chemistry. Recently, our group is promptly contributing for developing new materials as visible light photoradox catalysts.</p>
</div>
</div>
</div>

  <div class="container-md">
    <div class="container-fluid">
    <div className="Head">
    <ul class="list-unstyled">
  <li>
  <h3>
  My Education and Experiences
  <small class="text-muted"> </small>
</h3>
<ul class="List2">
  <li>May 2024 - Till Date: Professor, NISER Bhubaneswar, India
</li>
  </ul>
  
  <ul class="List2">
  <li>July 2017 – May 2024: Associate Professor, NISER Bhubaneswar, India
</li>
  </ul>

<ul class="List2">
  <li>2009 (December) – June 2017: Assistant Professor, NISER Bhubaneswar, India</li>
  </ul>
    <ul class="List2">
      <li>2008 – 2009: Marie Curie Postdoctoral Fellow (Host: Dr. Jonathan R. Nitschke, University of Cambridge, UK)
      <ul class="List3"><li>Synthesis of Cage Molecules in Water and Exploring their Host-Guest Chemistry.</li>
          <li>Sequential Self-Assembly in Dynamic Combinatorial Library.</li>
      </ul>
      </li>
      <li>2006 – 2007: Alexander von Humboldt Fellow (Host: Prof. Dr. Michael Schmittel, University of Siegen, Germany)
      <ul class="List3"><li>Sensoric Materials using Multicomponent Self-assembly.</li>
          <li>Technomimetic Approach in Metallo-Supramolecular Chemistry.</li>
      </ul>
      </li>
      <li>1999-2005: Ph. D. in Organic Chemistry (Advisor: Prof. J. Narasimha Moorthy, IIT Kanpur, India)</li>
      <ul class="List3">
          <li>Photochromism and Photoreactivity of o-Alkyl Aromatic Aldehydes in the Solid State.</li>
          <li>Diastereomer-Differentiating Photochemistry of β-Arylalkanophenones.</li>
      </ul>
      <li>1997-1999: M. Sc. in Chemistry (Department of Chemistry, IIT Kharagpur.</li>
      <li>1993-1996: B. Sc. (Honors) in Chemistry (Bankura Christian College, University of Burdwan, West Bengal)</li>
    </ul>
  </li>
</ul>
</div>
</div>


<div class="container-md">
<div className="Head">
<h3>Awards and Honours</h3>
<ul class="List2">
  <li>2021: CRS Bronze Medal</li>
  <li>2012: Visiting Professor, University of Jyvaskyla Finland</li>
  <li>2008: Marie Curie Fellowship</li>
  <li>2006: Alexander von Humboldt Fellowship</li>
  <li>2000-2005: Junior, followed by Senior Research Fellowship (CSIR, India)</li>
</ul>
</div>
</div>

<div class="container-md">
<div className="Head">
<h3>Teachings</h3>
<ul class="List5">


<li>
<dl class="row">
<dt class="col-sm-1">2024</dt>
<dd class="col-sm-9">
  <dl class="row">
    <dt class="col-sm-2">January</dt>
    <dd class="col-sm-8">CH665 Advanced Organic Chemistry</dd>
    </dl>
    <dl class="row">
      <dt class="col-sm-2">August</dt>
      <dd class="col-sm-8">C301 Physical Organic Chemistry</dd>
      </dl>
    </dd>
</dl></li>
        
          

        <li>
<dl class="row">
<dt class="col-sm-1">2023</dt>
<dd class="col-sm-9">
  <dl class="row">
    <dt class="col-sm-2">January</dt>
    <dd class="col-sm-8">CH665 Advanced Organic Chemistry</dd>
    </dl>
    <dl class="row">
      <dt class="col-sm-2">August</dt>
      <dd class="col-sm-8">C341 Organic Chemistry Lab I</dd>
      </dl>
    </dd>
</dl></li>
        
  
  
<li>
<dl class="row">
<dt class="col-sm-1">2022</dt>
<dd class="col-sm-9">
  <dl class="row">
    <dt class="col-sm-2">August</dt>
    <dd class="col-sm-8">C203 Reaction Mechanism in Organic Chemistry</dd>
    </dl>
    <dl class="row">
      <dt class="col-sm-2"></dt>
      <dd class="col-sm-8"></dd>
      </dl>
    </dd>
</dl></li>
   
<li>
<dl class="row">
<dt class="col-sm-1">2020</dt>
<dd class="col-sm-9">
  <dl class="row">
    <dt class="col-sm-2">January</dt>
    <dd class="col-sm-8">C102 Chemistry II (Organic Chemistry Part)</dd>
    </dl>
    <dl class="row">
      <dt class="col-sm-2"></dt>
      <dd class="col-sm-8"></dd>
      </dl>
    </dd>
</dl></li>

<li>
<dl class="row">
<dt class="col-sm-1">2019</dt>
<dd class="col-sm-9">
  <dl class="row">
    <dt class="col-sm-2">January</dt>
    <dd class="col-sm-8">C102 Chemistry II (Organic Chemistry Part)</dd>
    </dl>
    <dl class="row">
      <dt class="col-sm-2">Summer</dt>
      <dd class="col-sm-8">C204 Reagents in Organic Syntheses</dd>
      </dl>
    <dl class="row">
      <dt class="col-sm-2">August</dt>
      <dd class="col-sm-8">C301 Physical Organic Chemistry</dd>
      </dl>
    </dd>
</dl></li>

<li>
<dl class="row">
<dt class="col-sm-1">2018</dt>
<dd class="col-sm-9">
  <dl class="row">
    <dt class="col-sm-2">January</dt>
    <dd class="col-sm-8">C102 Chemistry II</dd>
    </dl>
    <dl class="row">
      <dt class="col-sm-2">Summer</dt>
      <dd class="col-sm-8">C203 Reaction Mechanism in Organic Chemistry</dd>
      </dl>
    <dl class="row">
      <dt class="col-sm-2">August</dt>
      <dd class="col-sm-8">C141 Physical Chemistry Lab</dd>
      </dl>
    </dd>
</dl></li>

<li>
<dl class="row">
<dt class="col-sm-1">2017</dt>
<dd class="col-sm-9">
  <dl class="row">
    <dt class="col-sm-2">January</dt>
    <dd class="col-sm-8">C102 Chemistry II</dd>
    </dl>
    <dl class="row">
      <dt class="col-sm-2">August</dt>
      <dd class="col-sm-8">C142 Chemistry Lab II</dd>
      </dl>
    </dd>
</dl></li>

<li>
<dl class="row">
<dt class="col-sm-1">2016</dt>
<dd class="col-sm-9">
  <dl class="row">
    <dt class="col-sm-2">January</dt>
    <dd class="col-sm-8">C244 Biomolecular Chemistry Lab</dd>
    </dl>
    <dl class="row">
      <dt class="col-sm-2">August</dt>
      <dd class="col-sm-8">C559 Supramolecular Chemistry  </dd>
      </dl>
    </dd>
</dl></li>

<li>
<dl class="row">
<dt class="col-sm-1">2015</dt>
<dd class="col-sm-9">
  <dl class="row">
    <dt class="col-sm-2">January</dt>
    <dd class="col-sm-8">C344 Organic Chemistry II</dd>
    </dl>
    <dl class="row">
      <dt class="col-sm-2">Summer</dt>
      <dd class="col-sm-8">C102 Chemistry II</dd>
      </dl>
    <dl class="row">
      <dt class="col-sm-2">August</dt>
      <dd class="col-sm-8">C301 Physical Organic Chemistry</dd>
      </dl>
    </dd>
</dl></li>

  <li>
  <dl class="row">
  <dt class="col-sm-1">2014</dt>
  <dd class="col-sm-9">
    <dl class="row">
      <dt class="col-sm-2">January</dt>
      <dd class="col-sm-8">C102 Chemistry II, C244 Biomolecular Chemistry Lab</dd>
      </dl>
      <dl class="row">
        <dt class="col-sm-2">January</dt>
        <dd class="col-sm-8">C301 Physical Organic Chemistry </dd>
        </dl>
      </dd>
  </dl></li>

  <li>
  <dl class="row">
  <dt class="col-sm-1">2013</dt>
  <dd class="col-sm-9">
    <dl class="row">
      <dt class="col-sm-2">January</dt>
      <dd class="col-sm-8">C204 Reagents in Organic Synthesis</dd>
      </dl>
      <dl class="row">
        <dt class="col-sm-2">August</dt>
        <dd class="col-sm-8">C401 Physical Methods in Chemistry II</dd>
        </dl>
      </dd>
  </dl></li>

  <li>
  <dl class="row">
  <dt class="col-sm-1">2012</dt>
  <dd class="col-sm-9">
    <dl class="row">
      <dt class="col-sm-2">January</dt>
      <dd class="col-sm-8">C204 Organic Chemistry II</dd>
      </dl>
      <dl class="row">
        <dt class="col-sm-2">August</dt>
        <dd class="col-sm-8">C553 Physical Organic Chemistry</dd>
        </dl>
      </dd>
  </dl></li>

  <li>
  <dl class="row">
  <dt class="col-sm-1">2011</dt>
  <dd class="col-sm-9">
    <dl class="row">
      <dt class="col-sm-2">January</dt>
      <dd class="col-sm-8">CE801 Physical Organic Chemistry</dd>
      </dl>
      <dl class="row">
        <dt class="col-sm-2">August</dt>
        <dd class="col-sm-8">C559 Supramolecular Chemistry</dd>
        </dl>
      </dd>
  </dl></li>

  <li>
  <dl class="row">
  <dt class="col-sm-1">2010</dt>
  <dd class="col-sm-9">
    <dl class="row">
      <dt class="col-sm-2">January</dt>
      <dd class="col-sm-8">CE04 Organic Photochemistry</dd>
      </dl>
      <dl class="row">
        <dt class="col-sm-2">August</dt>
        <dd class="col-sm-8">CE702 Supramolecular Chemistry</dd>
        </dl>
      </dd>
  </dl></li>

</ul>
  </div>
  </div>
  </div>
    </div>
    </Layout>
  )
}

export default Pmal
