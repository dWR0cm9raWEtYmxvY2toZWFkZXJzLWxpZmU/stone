import React from 'react'
import './index.css'
import { footer } from '../../assets/text/en'
const Footer = () => (
  <section className="footer ctn" style={{ color: 'white' }}>
    <h5>Contact us</h5>
    <div className="bar" />
    <p>Linda</p>
    <p>{footer.tel}</p>
    <p>{footer.email}</p>
  </section>
)

export default Footer
