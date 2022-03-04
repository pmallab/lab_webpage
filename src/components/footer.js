import React from "react"
import "../styles/footer.scss"
import { Link } from "gatsby"

const Footer = () => {
  return(
    <footer class="footer">
    <div className="footer_text">
    <hr/>
      <p>&copy;{ new Date().getFullYear()},PMal's Lab Group<br></br>
      <Link className="SCSlink" to="https://www.niser.ac.in/scs/" target="_blank">School of Chemical Sciences</Link><br></br>
      <Link className="NISERlink" to="https://www.niser.ac.in" target="_blank">National Institute of Science Education and Research</Link></p>
    </div>
    <p className="Web_creater">website created & designed by Abhishek Raj</p>
    <p className="Web_creater">website maintained by Tarun Kumar Dinda</p>
    </footer>
  )
}

export default Footer
