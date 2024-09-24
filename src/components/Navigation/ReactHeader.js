import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { iconStyle } from '../../styles'
import { HomeOutlined, InfoCircleOutlined, GithubOutlined, AreaChartOutlined } from '@ant-design/icons'
import logoImage from '../../images/logo/logo.png'
import { connect } from 'react-redux'
import { setHeaderMenuItem } from '../../redux_actions'
import { UserButton } from 'oneauxilia-react'
import 'oneauxilia-react/dist/index.css'

const { Header } = Layout

class ReactHeader extends Component {
  render () {
    const { selected } = this.props
    return (
      <React.Fragment>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: 0, right: 20, height: '100%', display: 'flex', alignItems: 'center' }}>
            <UserButton pathSetting="/user-profile" />
          </div>
          <Header className="header">
            <div>
              <Menu
                theme="dark"
                mode="horizontal"
                selectedKeys={[selected]}
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="logo" onClick={() => this.props.setHeaderMenuItem('home')}>
                  <Link to="/">
                    <img alt="daniel corcorans crypto react app logo"
                      style={{ maxHeight: '40px' }}
                      src={logoImage}></img>
                  </Link>
                </Menu.Item>
                <Menu.Item key="home" onClick={() => this.props.setHeaderMenuItem('home')}>
                  <Link to="/">

                    <HomeOutlined style={iconStyle}/>Home
                  </Link>
                </Menu.Item>
                <Menu.Item key="dashboard" onClick={() => this.props.setHeaderMenuItem('dashboard')}>
                  <Link to="/asset-platforms">
                    <AreaChartOutlined style={iconStyle}/>Dashboard
                  </Link>
                </Menu.Item>
                <Menu.Item key="about" onClick={() => this.props.setHeaderMenuItem('about')}>
                  <Link to="/about">
                    <InfoCircleOutlined style={iconStyle}/>About
                  </Link>
                </Menu.Item>
                <Menu.Item key="source">
                  <a rel="noopener noreferrer" target="_blank" href="https://github.com/danielc92/react-crypto-app">
                    <GithubOutlined style={iconStyle}/>Source
                  </a>
                </Menu.Item>
              </Menu>
            </div>
          </Header>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selected: state.header_selected
  }
}

const mapActionsToProps = {
  setHeaderMenuItem
}

export default connect(mapStateToProps, mapActionsToProps)(ReactHeader)
