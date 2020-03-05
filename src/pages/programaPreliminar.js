import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import header_temario_preliminar from "../images/header_temario_preliminar.png"

const TemarioPreliminar = () => (

    <Layout>
        <SEO tittle="Programa Preliminar"/>
        <Header/>

        <img src={header_temario_preliminar}/>


        <div class="centerul">
        <ul class="temariopreliminar">
            <li>Hepatitis virales</li>

            <li>Esteatohepatitis no alcoholica </li>

            <li>Tumores hepáticos</li>

            <li>Hepatopatias autoinmunes</li>

            <li>Complicaciones de la cirrosis</li>
        </ul>
        </div>
    </Layout>
)

export default TemarioPreliminar