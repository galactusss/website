import React from 'react'
import { Link, SiteData, RouteData, Head } from 'react-static'
import styled from 'styled-components'
import { AppBar, BaseStyles, PublicUrl, breakpoint } from '@aragon/ui'
import Navbar from './Navbar'
const medium = css => breakpoint('medium', css)

class Page extends React.Component {
  render() {
    const { children, path } = this.props
    const items = menuItems.map(item => [...item, item[0] === path])
    return (
      <SiteData
        render={({ title: siteTitle }) => (
          <RouteData
            render={({ title }) => (
              <PublicUrl.Provider url="/aragon-ui/">
                <BaseStyles enableLegacyFonts />
                <Head>
                  <title>{title || siteTitle}</title>
                </Head>
                <Navbar menuItems={items} path={path} />
                <Content>{children}</Content>
              </PublicUrl.Provider>
            )}
          />
        )}
      />
    )
  }
}

const Content = styled.div`
  min-height: calc(100vh - 116px) !important;
  background: white;
  h2 {
    font-size: 3.8rem;
    color: #5e8fbf;
    letter-spacing: 0.58px;
    text-align: center;
  }
  a {
    outline: none;
    text-decoration: none;
  }
`

const menuItems = [
  ['/', 'Overview'],
  ['https://lorikeetui.github.io/docs', 'Docs'],
  ['/downloads', 'Downloads'],
]

export default Page
