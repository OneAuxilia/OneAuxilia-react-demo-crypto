import * as React from 'react'
import { SignUp } from 'oneauxilia-react'

export default function SignUpPage () {
  return (
    <div style={{ height: '100vh', marginTop: window.innerHeight > 700 ? 0 : '10rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <SignUp path="/sign-up" />
    </div>
  )
}
