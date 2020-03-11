
import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"

import Header from "../components/header"
import header_invitados_nacionales from "../images/header_invitados_nacionales.png"
import ruf from "../images/ruf.png"
import descalzi from "../images/descalzi.png"
import fainboim from "../images/fainboim.png"
import fassio from "../images/fassio.png"
import fvillamil from "../images/fvillamil.png"
import pinero from "../images/pinero.png"
import reggiardo from "../images/reggiardo.png"
import sorda from "../images/sorda.png"
import villamil from "../images/villamil.png"


const InvitadosNacionales = () =>(
    <Layout>
        <SEO title="Home" />
        <Header/>
        
        <img src={header_invitados_nacionales}/>

       
        
      
        
       
        
        
       
       


       
      
        

        <h2>Coordinadores</h2><br></br>


       
        
        <p>Dr. Luis Colombato</p>
        
       <br></br>


        <div class="bgnac">
        <img class="bgimg" src={descalzi}/>
        <p> Dra. Valeria Descalzi</p>
        </div>
        <br></br>


        <div class="bgnac">
        <img  class="bgimg"src={fainboim}/>
        <p>  Dr. Hugo Fainboim</p><br></br>
        </div>

        <div  class="bgnac">
        <img class="bgimg" src={fassio}/>
        <p>Dr. Eduardo Fassio</p>
        </div>


        <p>Dra. Nora Fernández</p>
        <p>Dr. Sebastián Marciano</p><br></br>





        <div class="bgnac">
        <img class="bgimg" src={pinero}/>
        <p>Dr. Federico Piñero</p>
        </div>

        <div class="bgnac">
        <img class="bgimg" src={reggiardo}/>
        <p>Dra. María Virginia Reggiardo</p>
        </div>
        
        <br></br>


        <div class="bgnac">
        <img class="bgimg" src={ruf}/>
        <p>  Dr. Andrés Ruf</p>
        </div>

        <div class="bgnac">
        <img class="bgimg" src={sorda}/>
        <p>  Dr. Juan Sordá</p>
        </div>
        
        <br></br>
      
        <div class="bgnac">
        <img class="bgimg" src={villamil}/>
        <p>   Dra. Alejandra Villamil</p>
        </div>

        <br></br>


        <div  class="bgnac">
        <img class="bgimg"src={fvillamil}/>
        <p>   Dr. Federico Villamil</p>
        </div>


        <br></br>


        

      

    </Layout>
)

export default InvitadosNacionales