import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import header_temario_preliminar from "../images/header_temario_preliminar.png"

const ProgramaPreliminar = () => (

    <Layout>
        <SEO tittle="Programa Preliminar"/>
        <Header/>

        <img style={{width:'100%', height:'auto'}} src={header_temario_preliminar} alt="programa preliminar"/>


        <div class="centerul">
            <ul class="temariopreliminar">
            <li>Hepatitis virales</li>
            </ul>  
            <p style={{marginLeft:'326px', fontSize:'12pt'}}>Coordinadores: </p>
            <p style={{marginLeft:'326px',fontSize:'12pt'}}>Dr. Hugo Fainboim – Dra. María Virginia Reggiardo</p>


            <ul class="temariopreliminar">
            <li>Esteatohepatitis no alcoholica </li>
            </ul>
            <p style={{marginLeft:'326px',fontSize:'12pt'}}>Coordinadores: </p>
            <p style={{marginLeft:'326px',fontSize:'12pt'}}>Dr. Eduardo Fassio – Dra. Valeria Descalzi</p>

            <ul class="temariopreliminar">
            <li>Tumores hepáticos</li>
            </ul>
            <p style={{marginLeft:'326px',fontSize:'12pt'}}>Coordinadores: </p>
            <p style={{marginLeft:'326px',fontSize:'12pt'}}>Dr. Federico Villamil – Dr. Federico Piñero</p>

            <ul class="temariopreliminar">
            <li>Hepatopatias autoinmunes </li>
            </ul>
            <p style={{marginLeft:'326px',fontSize:'12pt'}} >Coordinadores: </p>
            <p style={{marginLeft:'326px',fontSize:'12pt'}}>Dra. Alejandra Villamil – Dr. Juan Sordá</p>

            <ul class="temariopreliminar">
            <li>Complicaciones de la cirrosis – Sesión 1</li>
            </ul>
            <p style={{marginLeft:'326px',fontSize:'12pt'}}>Coordinadores:</p>
            <p style={{marginLeft:'326px',fontSize:'12pt'}}>Dr. Andrés Ruf – Dr. Luis Colombato</p>

            <ul class="temariopreliminar">
            <li>Complicaciones de la cirrosis – Sesión 2</li>
            </ul>
            <p style={{marginLeft:'326px',fontSize:'12pt'}}>Coordinadores:</p>
            <p style={{marginLeft:'326px',fontSize:'12pt'}}>Dra. Nora Fernández – Dr. Sebastián Marciano</p>
        </div>
    </Layout>
)

export default ProgramaPreliminar