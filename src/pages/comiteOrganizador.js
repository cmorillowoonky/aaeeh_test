
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import header_comite_organizador from "../images/header_comite_organizador.png"


const comiteOrganizador = () =>(
    <Layout>
        <SEO title="Home" />
        <Header/>
        <img src={header_comite_organizador}/>

        <div style={{marginLeft:'500px', marginTop:'100px', marginBottom:'100px'}}>
        <h2>COMITÉ ORGANIZADOR</h2>
        <br></br>
        <br></br>
        <h2>COMISIÓN DIRECTIVA AAEEH 2020</h2>
        <br></br>

        <h3>Presidente</h3>
        <p>Dr. Omar Andrés Galdame</p>
      
        <h3>Vicepresidente</h3>
           <p> Dr. Sebastián Ferretti</p><br></br>


            <h3>Secretario</h3>
            <p> Dr. Manuel Mendizabal</p><br></br>
           <h3> Prosecretaria</h3>
           <p>Dra. Mónica Marino</p><br></br>
            <h3>Tesorera</h3>
            <p>Dra. María Margarita Anders</p><br></br>
            <h3>Protesorero</h3>
            <p>Dr. Federico Tanno</p><br></br>
            <h3>Vocales Titulares  </h3>
            <p> Dr. José Angel Allevato</p>
            <p> Dra. Carolina Giselle Zulatto</p>
            <p> Dr. Manuel Barbero</p><br></br>
            <h3> Vocales Suplentes</h3>
            <p> Dra. Melina Ferreiro</p>
            <p>  Dr. Andrián Narváez </p><br></br>
            <h3>Órgano de Fiscalización </h3>
            <h3>Titular</h3>
            <p> Dr. Carlos Leonardo Guma</p><br></br>
            <h3>Suplente </h3>
            <p> Dr. Hugo Enrique Tanno</p><br></br>


            </div>

    </Layout>
)

export default comiteOrganizador