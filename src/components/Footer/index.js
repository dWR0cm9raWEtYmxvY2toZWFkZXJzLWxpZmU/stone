import React from 'react'
import './index.css'
import { footer } from '../../assets/text/cn'

const Footer = () => (
    <section className="footer ctn" style={{color:'white'}}>
        <h5>{footer.title}</h5>
        <div className="bar"></div>
        <p>{footer.cp}</p>
        <p>{footer.tel}</p>
        <p>{footer.email}</p>        
    </section>
)

export default Footer
