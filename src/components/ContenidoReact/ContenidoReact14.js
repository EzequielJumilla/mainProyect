import React from 'react'
import './ContenidoReact.css'
import Header from '../Header/Header'
import Footer from '../footer/footer'
const ContenidoReact14 = () => {
  return (
    <div>
        <Header/>
         <div className="flexArrows ">
    <a  href="/ContenidoReact13"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoReact15"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <div className="linea"></div>
    <h3>14-useMemo</h3>
    <p></p>
    <div className="centrar">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/Udpom1ZYr0I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
    <div className="linea"></div>
    <div className="flexArrows ">
    <a  href="/ContenidoReact13"><img className="izquierda" src="http://cdn.onlinewebfonts.com/svg/img_69720.png" /></a>
    <a href="/ContenidoReact15"><img className="derecha" src="http://cdn.onlinewebfonts.com/svg/img_231176.png" /></a>
    </div>
    <Footer/>
    </div>
  )
}

export default ContenidoReact14