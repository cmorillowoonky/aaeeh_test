
import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"

import Header from "../components/header"
import tel from "../images/tel.png"
import mail from "../images/mail.png"
import location from "../images/location.png"
import header_comite_contacto from "../images/header_comite_contacto.png"

const Contacto = () =>(
    <Layout>
        <SEO title="Home" />
        <Header/>
        <img style={{width:'100%', height:'auto'}}  src={header_comite_contacto}/>
        
        <h2 style={{
            paddingLeft:'500px',
            color:'#747474',
            paddingTop:'200px',
        }}>Secretaría e Informes</h2>
        <h3 style={{
            paddingLeft:'500px',
            color:'#747474',
            fontWeight:'400'
        }}>Inés Escalada, Congreso y Eventos.</h3>

        <div class="contacto">
            

            <div class="itemscontacto">
                <div class="icon"> <img src ={tel}/></div>
                <div class="info"><p>(54-11) 48275816</p></div>
            </div>

            <div class="itemscontacto">
                <div class="icon"> <img src ={mail}/></div>
                <div class="info"><p>info@iescalada.com</p></div>
            </div>

            <div class="itemscontacto">
                <div class="icon"> <img src ={location}/></div>
                <div class="info"><p>Palais Rouge – Jerónimo Salguero 1441 – CABA</p></div>
            </div>
        </div>
      

    </Layout>
)

export default Contacto