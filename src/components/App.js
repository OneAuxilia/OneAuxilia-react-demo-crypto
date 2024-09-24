import React, { Component, Fragment } from 'react'
import ReactCoinsList from './Coins/ReactCoinsList'
import ReactCoinsDetail from './Coins/ReactCoinsDetail'
import ReactHome from './General/ReactHome'
import UserInfo from './UserInfo'
import ReactAbout from './General/ReactAbout'
import ReactEmpty from './Empty/ReactEmpty'
import ReactGlobal from './Global/ReactGlobal'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ConfigProvider } from 'antd'
// import ReactHeader from './Navigation/ReactHeader'
import ReactExchangesList from './Exchanges/ReactExchangesList'
import ReactExchangeRates from './ExchangeRates/ReactExchangeRates'
import ReactTrendingCoins from './Coins/ReactTrendingCoins'
// import ReactFooter from './Navigation/ReactFooter'
import './App.css'
import ReactAssetPlatforms from './AssetPlatforms/ReactAssetPlatforms'
import RootLayout from './common/RootLayout'
import DashboardLayout from './common/DashboardLayout'
import SignInPage from './SignInPage/SignInPage'
import SignUpPage from './SignUpPage/SignUpPage'

// [NOTE] React prefix used with React.Components in order to differentiate from Ant Design UI components.

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <SignInPage /> },
      { path: '/sign-in/*', element: <SignInPage /> },
      { path: '/sign-up/*', element: <SignUpPage /> },
      {
        element: <DashboardLayout />,
        path: '/',
        children: [
          { path: '/dashboard', element: <ReactHome /> },
          { path: '/user-profile', element: <UserInfo /> },
          { path: '/about', element: <ReactAbout /> },
          { path: '/trending-coins', element: <ReactTrendingCoins /> },
          { path: '/coins', element: <ReactCoinsList /> },
          { path: '/coins/:coinId/', element: <ReactCoinsDetail /> },
          { path: '/exchanges/list', element: <ReactExchangesList /> },
          { path: '/global', element: <ReactGlobal /> },
          { path: '/empty', element: <ReactEmpty /> },
          { path: '/exchange-rates', element: <ReactExchangeRates /> },
          { path: '/asset-platforms', element: <ReactAssetPlatforms /> }
        ]
      }
    ]
  }
])

export default class App extends Component {
  render () {
    return (
      // <Layout style={{ minHeight: '100vh', lineHeight: '1.6rem' }}>
      //   <ReactHeader/>
      //   <Layout>
      //     <Route path='/' exact component={ReactHome}/>
      //     <Route path='/about' exact component={ReactAbout}/>
      //     <Route path='/trending-coins' exact component={ReactTrendingCoins}/>
      //     <Route path='/coins' exact component={ReactCoinsList}/>
      //     <Route path='/coins/:coinId/' exact component={ReactCoinsDetail}/>
      //     <Route path='/exchanges/list' exact component={ReactExchangesList}/>
      //     <Route path='/global' exact component={ReactGlobal}/>
      //     <Route path='/empty' exact component={ReactEmpty}/>
      //     <Route path='/exchange-rates' exact component={ReactExchangeRates}/>
      //     <Route path='/asset-platforms' exact component={ReactAssetPlatforms}/>
      //   </Layout>
      //   <ReactFooter/>
      // </Layout>
      <Fragment>
        <ConfigProvider>
          {/* <Routes /> */}
          <RouterProvider router={router} />
        </ConfigProvider>
      </Fragment>
    )
  }
}
