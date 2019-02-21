import React from "react"
import Layout from "../components/layout"
import Overview from "../components/overview"
import GetInvolved from "../components/getInvolved"
import Plan from "../components/plan"
// import Renderings from "../components/renderings"
import News from "../components/news"
import Contact from "../components/contact"
import Footer from "../components/footer"

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss'

const IndexPage = () => (
  <Layout>
    <Overview />
    <GetInvolved />
    <Plan />
    {/* <Renderings /> */}
    <News />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage
