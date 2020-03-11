import React from "react"
import { Link } from "gatsby"
import logo from "../images/AAEEH-Logo.png"

const Header = () => (
   
<div style={{
      display: 'flex',
      justifyContent: 'center',
      textAlign:'center',
      marginBottom:'0px',}}>
        
        <ul style={{
            listStyle:'none',
            display:'flex',
            justifyContent: 'space-evenly',
            
            
           }}>

            <li>
                <Link to="/"><img  style={{width:'100%', height:'auto'}}alt="AAEEH logo" src={logo} alt="aaeeh home"/></Link>
            </li>
            <li class="centerLogo">
                <Link  class="hoverlindo" to="/comiteOrganizador">Comité Organizador</Link>
            </li>
            <li class="centerLogo">
                <Link class="hoverlindo" to="/invitadosExtranjeros">Invitados Extranjeros</Link>
            </li>
            <li class="centerLogo">
                <Link class="hoverlindo" to="/invitadosNacionales">Invitados Nacionales</Link>
            </li>
            <li class="centerLogo">
                <Link class="hoverlindo" to="/programaPreliminar">Programa Preliminar</Link>
            </li>
            <li class="centerLogo">
                <Link class="hoverlindo" to="/inscripcion">Inscripción</Link>
            </li>
            <li class="centerLogo" >
                <Link class="hoverlindo" to="/contacto">Contacto</Link>
            </li>
        </ul>
</div>
    
)

export default Header