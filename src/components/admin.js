import React from 'react'
import Layout from './layout'

export default (props) => (
  <Layout isAdmin>
    <div>Admin View <button onClick={() => {
      props.auth.logout()
      // can't get redirects to work via auth0 api
      // so I'm cheating
      window.open("/", "_self")
    }}>Logout</button></div>
  </Layout>
)
