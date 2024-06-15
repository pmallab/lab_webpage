import React from "react"
import Layout from "../components/layout"
import "../styles/contacts.scss"
import {Carousel} from "react-bootstrap";
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Contacts = () => {
  const data = useStaticQuery(graphql`
          query {

              file(relativePath: {eq: "images/download.png"}) {
                      childImageSharp {
                        fixed(width: 50) {
                          ...GatsbyImageSharpFixed
                        }
                    }
                }
        }
    `)

  return(
    <Layout>
    <div className="contacts">

    <div class="container">
<div class="row">
  <div class="col-sm">
  <div className="Address">
  <pre></pre>
  <div class="card" >
<div class="card-body">
  <h3 class="card-title">Address</h3>
    <p>Lab no 219, Office no 220, 2nd floor<br></br>
    School of Chemical Sciences<br></br>
    National Institute of Science Education and Research<br></br>
    Bhubaneswar, P.O. Jatni, Khurda 752050<br></br>
    Odisha, India</p>
    </div>
    <pre></pre>
    <pre></pre>
    <div className="Phone">
    <p><a href="mailto: pmal@niser.ac.in"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
</svg>&nbsp;pmal@niser.ac.in</a><br></br>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>&nbsp; +91-6742494188 (office), +91-6742494187 (Lab)<br></br></p>
  </div>
  </div>
  </div>
  </div>
  <div class="col-sm">
  <pre></pre>
  <div className="Links">
  <div class="card" >
<div class="card-body">
  <h3 class="card-title">Quick Links</h3>
    <p>
    <Link className="Contacts_link" to="https://www.niser.ac.in/users/pmal#profile-main" target="_blank">Dr. P Mal's Institute page</Link><br></br>
    <pre></pre>
    <Link className="Contacts_link" to="https://www.niser.ac.in/" target="_blank"><Img className="Niser_logo" fixed={data.file.childImageSharp.fixed}>
            </Img><br></br>NISER</Link><br></br>
            <pre></pre>
    <Link className="Contacts_link" to="http://www.niser.ac.in/scs/" target="_blank">SCS,NISER</Link>

    </p>
    </div>
    </div>
    </div>
  </div>

</div>
</div>



    </div>
    </Layout>
  )
}

export default Contacts
