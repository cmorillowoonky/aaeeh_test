
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
import luis from "../images/luis.png"
import marciano from "../images/marciano.png"


const InvitadosNacionales = () =>(
    <Layout>
        <SEO title="Home" />
        <Header/>
        
        <img style={{width:'100%', height:'auto'}} src={header_invitados_nacionales}/>

       
        
      
        
       
        
        
       
       

        <h2 style={{display:'grid', alignContent:'center', justifyContent:'center', marginTop:'3em', fontSize:'30pt'}}>Coordinadores</h2><br></br>
       
      <div style={{display:'flex', alignContent:'center', justifyContent:'center', paddingLeft:'5em'}}>
        

        <div style={{display:'grid', margin:'3em'}}>


            <div class="bgnac">
            <img class="bgimg" src={luis}/>
                <p>Dr. Luis Colombato</p>

                </div>
                
            

                <div class="bgnac">
                <img class="bgimg" src={descalzi}/>
                <p> Dra. Valeria Descalzi</p>
                </div>
                


                <div class="bgnac">
                <img  class="bgimg"src={fainboim}/>
                <p>  Dr. Hugo Fainboim</p>
                </div>

                <div  class="bgnac">
                <img class="bgimg" src={fassio}/>
                <p>Dr. Eduardo Fassio</p>
                </div>

                <div class ="bgnac">
                <img class="bgimg" src={fassio}/>
                <p>Dra. Nora Fernández</p>
                </div>

                <div class ="bgnac">
                <img class="bgimg" src={marciano}/>
                <p>Dr. Sebastián Marciano</p>
                </div>

        </div>


        <div style={{display:'grid',margin:'3em'}}>
        <div class="bgnac">
        <img class="bgimg" src={pinero}/>
        <p>Dr. Federico Piñero</p>
        </div>

        <div class="bgnac">
        <img class="bgimg" src={reggiardo}/>
        <p>Dra. María Virginia Reggiardo</p>
        </div>
        
        

        <div class="bgnac">
        <img class="bgimg" src={ruf}/>
        <p>  Dr. Andrés Ruf</p>
        </div>

        <div class="bgnac">
        <img class="bgimg" src={sorda}/>
        <p>  Dr. Juan Sordá</p>
        </div>
        
        
      
        <div class="bgnac">
        <img class="bgimg" src={villamil}/>
        <p>   Dra. Alejandra Villamil</p>
        </div>

      


        <div  class="bgnac">
        <img class="bgimg"src={fvillamil}/>
        <p>   Dr. Federico Villamil</p>
        </div>


       </div>


        
        </div>
      

    </Layout>
)

export default InvitadosNacionales