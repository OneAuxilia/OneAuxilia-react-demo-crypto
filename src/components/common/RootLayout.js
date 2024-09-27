import * as React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { OneAuxiliaProvider, SignedIn } from 'oneauxilia-react'
import 'oneauxilia-react/dist/index.css'
import ReactHeader from '../Navigation/ReactHeader'

const PUBLISHABLE_KEY = 'pk_prod_aW5zX2VxZGhmOHdrdHhwag=='

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

export default function RootLayout () {
  const navigate = useNavigate()

  return (
    <OneAuxiliaProvider
      routerPush={(to) => navigate(to)}
      routerReplace={(to) => navigate(to, { replace: true })}
      publishableKey={PUBLISHABLE_KEY}
    >
      <SignedIn>
        <ReactHeader />
      </SignedIn>
      <main>
        <Outlet />
      </main>
    </OneAuxiliaProvider>
  )
}
