import React, {useState, useEffect} from 'react'

// source: https://swizec.com/blog/gatsby-auth0/swizec/8895
export default function useComponentDidMount(onMounted) {
  const [mounted, setMounted] = useState(false)
  useEffect(
    () => {
      setMounted(true)

      onMounted()
    },
    [mounted]
  )
}
