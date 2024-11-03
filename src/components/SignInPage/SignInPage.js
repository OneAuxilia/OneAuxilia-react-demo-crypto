import * as React from 'react'
import { SignIn } from '@oneauxilia/oneauxilia-react'

export default function SignInPage () {
  return (
    <div style={{ height: '100vh', marginTop: window.innerHeight > 700 ? 0 : '4rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <SignIn path="/sign-in" />
    </div>
  )
}
