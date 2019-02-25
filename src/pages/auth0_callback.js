import React from 'react'
import { ClipLoader } from 'react-spinners'

import Auth from '../utils/auth'
import Layout from '../components/layout'
import useComponentDidMount from '../useComponentDidMount'

const Auth0CallbackPage = () => {
  useComponentDidMount(() => {
    const auth = new Auth()
    auth.handleAuthentication()
  })

  return (
    <Layout>
      <div className="d-flex flex-column align-items-center">
        <h3>
          This is the auth callback page, you should be redirected immediately.
        </h3>
        <ClipLoader sizeUnit="px" size={75} />
      </div>
    </Layout>
  )
}

export default Auth0CallbackPage
