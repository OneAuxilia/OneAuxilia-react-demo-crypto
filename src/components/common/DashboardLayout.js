import React, { useEffect } from 'react'
import { useAuth } from '@oneauxilia/oneauxilia-react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Layout } from 'antd'
import ReactFooter from '../Navigation/ReactFooter'

export default function DashboardLayout () {
  const { userId, isLoaded } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate('/sign-in')
    }
  }, [isLoaded, userId])

  if (!isLoaded) return 'Loading...'

  return <React.Fragment>
    <Layout>
      <Outlet />
    </Layout>
    <ReactFooter />
  </React.Fragment>
}
