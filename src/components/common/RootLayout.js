import * as React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { OneAuxiliaProvider, SignedIn } from '@oneauxilia/oneauxilia-react'
import '@oneauxilia/oneauxilia-react/dist/index.css'
import ReactHeader from '../Navigation/ReactHeader'

const PUBLISHABLE_KEY = 'pk_prod_aW5zXzhuenR2YnVmd3BmZQ=='

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

export default function RootLayout () {
  const navigate = useNavigate()
  const isLocal = window.location.origin.includes('local')
  const [options, setOptions] = React.useState(null)

  React.useEffect(() => {
    if (isLocal) {
      setOptions({ tenantHeader: '4xubmhx1hg2u' })
    } else {
      setOptions({ publishableKey: PUBLISHABLE_KEY })
    }
  }, [])

  return (
    <>
      {options && <OneAuxiliaProvider
        routerPush={(to) => navigate(to)}
        routerReplace={(to) => navigate(to, { replace: true })}
        {...options}
      >
        <SignedIn>
          <ReactHeader />
        </SignedIn>
        <main>
          <Outlet />
        </main>
      </OneAuxiliaProvider>}
    </>
  )
}
