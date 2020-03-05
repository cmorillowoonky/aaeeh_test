
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
       
      

    </Layout>
)

export default comiteOrganizador