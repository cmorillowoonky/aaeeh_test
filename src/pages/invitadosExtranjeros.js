
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import header_invitados_extranjeros from "../images/header_invitados_extranjeros.png"
import salvatorepiano from "../images/salvatorepiano.png"


const InvitadosExtranjeros = () =>(
    <Layout>
        <SEO title="Invitados Extranjeros" />
        <Header/>
        <img src={header_invitados_extranjeros}/>
        

        <div class="extranjerosBadge">
            <div class="badgerow1">
                <img src={salvatorepiano}/>

            </div>

            <div class="badgerow2">
                <b>Dr. Salvatore Piano</b>
                <p>Unidad de Medicina Interna y Hepatología</p>
                <p>Departamento de Medicina - DIMED</p>
                <p>Universidad de Padua</p>
                <p>Italia</p>
            </div>

        </div>
      

    </Layout>
)

export default InvitadosExtranjeros