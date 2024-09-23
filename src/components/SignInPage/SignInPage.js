import * as React from 'react'
import { SignIn } from 'oneauxilia-react'

export default function SignInPage () {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <SignIn path="/sign-in" />
    </div>
  )
}
