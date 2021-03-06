import React from "react"
import Layout from "../components/layout"
import Slider from "../components/slider/slider"

import SEO from "../components/seo"

import "./index.scss"

import ImageUps from "../images/imageUps"
import ImageAts from "../images/imageAts"
import ImageMdc from "../images/imageMdc"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Slider />
    <div className="products-linker">
      <p>Find your Power Solution</p>
      <div className="links">
        <a className="link" href={'/upsProducts/?type=0'}>
          <div className="text">
            <p>UPS</p>
            <div className="underLine"/>
            <div className="underLine ul-width-s"/>
          </div>
          <div className="image"><ImageUps /></div>
        </a>
        <a className="link" href={'/upsProducts/?type=1'}>
          <div className="text">
            <p>Transfer Switch</p>
            <div className="underLine"/>
            <div className="underLine ul-width-s"/>
          </div>
          <div className="image"><ImageAts /></div>
        </a>
        <a className="link" href={'/upsProducts/?type=2'}>
          <div className="text">
            <p>Micro Data Center</p>
            <div className="underLine"/>
            <div className="underLine ul-width-s"/>
          </div>
          <div className="image"><ImageMdc /></div>
        </a>
      </div>
    </div>
  </Layout>
)

export default IndexPage
