import * as React from 'react'
import { UserProfile } from 'oneauxilia-react'

export default function UserInfo () {
  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <UserProfile path="/user-profile" />
    </div>
  )
}
