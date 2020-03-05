import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

import banner from "../images/banner.png"
import Header from "../components/header"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Header/>


        <div class="banner_container">
           <img class="banner"alt="banner" src={banner}/>
        </div>
    

        <div class="landingNav">

              <div class="row1">
                    <div class="landingNavitem">
                    <Link to="/comiteOrganizador"> <h2 class="linkitem" >Comité <br></br>Organizador</h2></Link>
                    </div>

                    <div class="landingNavitem">
                    <Link to="/invitadosExtranjeros"><h2 class="linkitem" >Invitados<br></br> Extranjeros</h2></Link>
                    </div>

                    <div class="landingNavitem">
                    <Link  to="/invitadosNacionales"><h2 class="linkitem" >Invitados <br></br>Nacionales</h2></Link>
                    </div>

              </div>


              <div class="row2">

              <div class="landingNavitem">
              <Link  to="/programaPreliminar"><h2 class="linkitem" >Programa<br></br> Preliminar</h2></Link>
              </div>

              <div class="landingNavitem">
              <Link  to="/inscripcion"><h2 class="linkitem" ><br></br>Inscripción</h2></Link>
              </div>

              <div class="landingNavitem">
              <Link  to="/contacto"><h2 class="linkitem" ><br></br>Contacto</h2></Link>
              </div>

              </div>
          
        </div>
    

  
  </Layout>
)

export default IndexPage
