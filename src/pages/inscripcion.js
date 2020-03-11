
import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"

import Header from "../components/header"
import header_inscripcion from "../images/header_inscripcion.png"

import form from "../images/form.png"
import boton from "../images/boton.png"
import { Link } from "gatsby"


const Inscripcion = () =>(
    <Layout>
        <SEO title="Home" />
        <Header/>
        <img src={header_inscripcion}/>


        <div style={{
            
            marginTop:'200px',
            textAlign: 'center'

        }}>

            <h2>Aranceles de Inscripción</h2>
            
         
        </div>
        <table style={{
            width:'50%',
            height: 'auto',
            fontFamily:'Montserrat',
            fontSize:'0.7em',
            marginLeft:'27rem',
            borderCollapse: 'collapse',
            border: '3px solid #00A97D',
            marginTop:'10rem'

        }}>
            <tr>
                <td style={{paddingLeft:'2rem',border: '3px solid #00A97D',}}>
                Socios A.A.E.E.H.,<br></br> con cuota al día
                </td>
                <td style={{border: '3px solid #00A97D',}}>Sin Cargo</td>
             </tr>

             <tr>
                <td style={{paddingLeft:'2rem',border: '3px solid #00A97D',}}>
                No Socios
                </td>
                <td style={{border: '3px solid #00A97D',}}>$3000</td>
             </tr>
             <tr>
                <td style={{paddingLeft:'2rem',border: '3px solid #00A97D',}}>
                Alumnos Curso Bienal de Hepatología <br></br> Presencial o a distancia, con cuota al día
                </td>
                <td style={{border: '3px solid #00A97D',}}>Sin Cargo</td>
             </tr>
             <tr>
                <td style={{paddingLeft:'2rem',border: '3px solid #00A97D',}}>
                Socios SAP, con cuota al día
                </td>
                <td style={{border: '3px solid #00A97D',}}>Sin Cargo</td>
             </tr>
             <tr>
                <td style={{paddingLeft:'2rem',border: '3px solid #00A97D',}}>
                Médicos con menos de 5 años de recibidos
                </td>
                <td style={{border: '3px solid #00A97D',}}>$1500</td>
             </tr>
             <tr>
                <td style={{paddingLeft:'2rem',border: '3px solid #00A97D',}}>
                Profesionales no médicos
                </td>
                <td style={{border: '3px solid #00A97D',}}>$1500</td>
             </tr>

             <tr>
                <td style={{paddingLeft:'2rem',border: '3px solid #00A97D',}}>
                Estudiantes de Medicina<br></br>  <span>Deberán presentar la libreta universitaria que los acredite como tal.</span>

                </td>
                <td style={{border: '3px solid #00A97D',}}>$ 1.200</td>
             </tr>

             <tr>
                <td style={{paddingLeft:'2rem',border: '3px solid #00A97D',}}>
                Profesionales Extranjeros
                </td>
                <td style={{border: '3px solid #00A97D',}}>200 USD</td>
             </tr>


             

            
        </table>


        <div style={{
            height:'1000px',
            marginTop:'200px',
            textAlign: 'center'

        }}>

           
            
            <a  href="https://intercongress-latam.com/Inscripciones_Web/2020/hepatologia/registro.php
" ><img style={{
                
    marginLeft:'150px',
    marginBottom:'200px',
    
}}src={boton}/></a>
        </div>

        
      

    </Layout>
)

export default Inscripcion