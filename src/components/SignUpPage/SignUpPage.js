import * as React from 'react'
import { SignUp } from 'oneauxilia-react'

export default function SignUpPage () {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <SignUp path="/sign-up" />
    </div>
  )
}
