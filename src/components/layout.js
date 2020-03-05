/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"


import "./layout.css"
import sponsor1 from "../images/sponsor1.png"
import sponsor2 from "../images/sponsor2.png"
import sponsor3 from "../images/sponsor3.png"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1920,
          
        }}
      >
        <main>{children}</main>
        <footer>
        <div class="auspicios">
          Auspicios

        </div>
        <div class="sponsors">
        Sponsors
        
          <div style={{
            padding:'20px'
          }}>
          <img style={{
            padding:'20px'
          }} src={sponsor1}></img>
          <img style={{
            padding:'20px'
          }}  src={sponsor2}></img>
          <img style={{
            padding:'20px'
          }}  src={sponsor3}></img>
          </div>
        </div>
        <div class="sede">
          SEDE
          <p class="sede2">Palais Rouge -  Jeronimo Salguero 1441 - CABA</p>
        </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
