// source: https://swizec.com/blog/gatsby-auth0/swizec/8895
import auth0 from 'auth0-js'
import { navigate } from 'gatsby'

const AUTH0_DOMAIN = 'process.env.AUTH0_DOMAIN'
const AUTH0_CLIENT_ID = 'process.env.AUTH0_CLIENT_ID'

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: AUTH0_DOMAIN,
    clientID: AUTH0_CLIENT_ID,
    redirectUri: 'https://millbraestation.com/auth0_callback',
    audience: `https://${AUTH0_DOMAIN}/api/v2/`,
    responseType: 'token id_token',
    scope: 'openid profile email',
  })

  login = () => {
    this.auth0.authorize()
  }

  logout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem('access_token')
      localStorage.removeItem('id_token')
      localStorage.removeItem('expires_at')
      localStorage.removeItem('user')
    }
  }

  handleAuthentication = () => {
    if (typeof window !== 'undefined') {
      // this must've been the trick
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult)
        } else if (err) {
          console.log(err)
        }

        // Return to the homepage after authentication.
        setTimeout(() => navigate('/'), 500)
      })
    }
  }

  isAuthenticated = () => {
    if (typeof window !== 'undefined') {
      const expiresAt = JSON.parse(localStorage.getItem('expires_at'))
      return new Date().getTime() < expiresAt
    }
  }

  setSession = authResult => {
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    )
    if (typeof window !== 'undefined') {
      localStorage.setItem('access_token', authResult.accessToken)
      localStorage.setItem('id_token', authResult.idToken)
      localStorage.setItem('expires_at', expiresAt)

      this.auth0.client.userInfo(authResult.accessToken, (err, user) => {
        localStorage.setItem('user', JSON.stringify(user))
      })
    }
  }

  getUser = () => {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('user')) {
        return JSON.parse(localStorage.getItem('user'))
      }
    }
  }

  getUserName = () => {
    if (this.getUser()) {
      return this.getUser().name
    }
  }
}
