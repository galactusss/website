import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-static'
import { Button, SafeLink } from '@aragon/ui'
import SidePanel from './SidePanel'
import menu from './assets/menu.svg'
import menuWhite from './assets/menu-white.svg'

class Panel extends React.Component {
  static propTypes = {
    items: PropTypes.array,
  }

  state = {
    opened: false,
  }
  render() {
    const { items, path } = this.props
    const { opened } = this.state
    return (
      <div>
        <Button mode="text" onClick={() => this.setState({ opened: true })}>
          <img src={path === '/downloads' ? menuWhite : menu } />
        </Button>
        <SidePanel
          title=""
          opened={opened}
          onClose={() => this.setState({ opened: false })}
        >
          <Container>
            {items.map(
              (item, i) =>
                item[0].startsWith('/') ? (
                  <Link to={item[0]} key={i}>
                    {item[1]}
                  </Link>
                ) : (
                  <SafeLink href={item[0]} key={i}>
                    {item[1]}
                  </SafeLink>
                )
            )}
          </Container>
        </SidePanel>
      </div>
    )
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  a {
    padding: 10px 0;
    text-decoration: none;
    color: #4a90e2;
  }
  a:hover {
    color: black;
  }
`

export default Panel
