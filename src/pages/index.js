import React from "react"
import Layout from "../components/layout"
import Overview from "../components/overview"
import GetInvolved from "../components/getInvolved"
import Plan from "../components/plan"
// import Renderings from "../components/renderings"
import News from "../components/news"
import Contact from "../components/contact"
import Admin from "../components/admin"
import Auth from '../utils/auth'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss'

const auth = new Auth()

const IndexPage = () => {
  const { isAuthenticated } = auth
  if (isAuthenticated()) {
    return <Admin auth={auth} />
  } else {
    return (
      <Layout isHome login={auth.login}>
        <Overview />
        <GetInvolved />
        <Plan />
        {/* <Renderings /> */}
        <News />
        <Contact />
      </Layout>
    )
  }
}

export default IndexPage
