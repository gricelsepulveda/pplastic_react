import React, {useState} from "react"

//Styles
import "../styles/home.scss"

//Components
import Banner from "../components/Banner/Banner"

//Data
import bannerData from "./bannerData"

const Home:React.FunctionComponent = () => {

  return (
    <>
      <nav className="pp-nav flex row around">
        <div className="flex row start pp-title-nav">
          <img className="pp-logo" src="https://gricel.sfo2.digitaloceanspaces.com/pplastic/logo.svg" alt="logo precious plastic" title="logo precious plastic"/>
          <h1 className="pp-title">Precious Plastic</h1>
        </div>
        <p className="pp-description">Buscamos en el mediano plazo una alternativa de reciclaje para TODO tipo de plástico producidos como desecho por cada uno de nosotros.</p>
        <span className="pp-contact">
          ¡
          <a href="mailto:info@preciousplastic.cl">Escríbenos&nbsp;&nbsp;</a>
          y aportemos!
        </span>
      </nav>
      <section className="pp-body-landing">
        <Banner data={bannerData}/>
        <section className="pp-que-hacemos">
          <h3 className="pp-que-hacemos-title">¿Qué hacemos?</h3>
          <ul className="pp-hacemos-container">
            <li className="pp-hacemos-item">
              <article className="pp-hacemos">
                <figure className="pp-hacemos-img" style={{backgroundImage: "url('https://gricel.sfo2.digitaloceanspaces.com/pplastic/maquinas.jpg')"}} />
                <div className="pp-hacemos-wrapper-content flex col center">
                  <h4 className="pp-hacemos-title">Máquinas de reciclaje</h4>
                  <p className="pp-hacemos-text">
                    Fabricamos en Santiago de Chile nuestras propias versiones de las máquinas del proyecto Precious Plastic.
                  </p>
                </div>
              </article>
            </li>
            <li className="pp-hacemos-item">
              <article className="pp-hacemos">
                <figure className="pp-hacemos-img" style={{backgroundImage: "url('https://gricel.sfo2.digitaloceanspaces.com/pplastic/talleres.jpg')"}} />
                <div className="pp-hacemos-wrapper-content flex col center">
                  <h4 className="pp-hacemos-title">Educación ambiental</h4>
                  <p className="pp-hacemos-text">
                    Desarrollamos programas y talleres de concientización y educación ambiental para niños, jóvenes y adultos.
                  </p>
                </div>
              </article>
            </li>
            <li className="pp-hacemos-item">
              <article className="pp-hacemos">
                <figure className="pp-hacemos-img" style={{backgroundImage: "url('https://gricel.sfo2.digitaloceanspaces.com/pplastic/creaciones.jpg')"}} />
                <div className="pp-hacemos-wrapper-content flex col center">
                  <h4 className="pp-hacemos-title">Taller creativo</h4>
                  <p className="pp-hacemos-text">
                    Nuestra línea creativa explora periódicamente formas y nuevos usos para el plástico que desechamos a diario.
                  </p>
                </div>
              </article>
            </li>
          </ul>
        </section>
        <footer className="pp-footer flex row between">
          <img src="https://gricel.sfo2.digitaloceanspaces.com/pplastic/logo_small.png"/>
          <a href="mailto:info@preciousplastic.cl">info@preciousplastic.cl</a>
        </footer>
      </section>

    </>
  )
}

export default Home