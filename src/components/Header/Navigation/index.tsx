import React, { RefObject } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'
import * as S from './styled'
import { NavLink } from '../../UI/'

interface ILinkType {
  node: {
    id: string
    label: string
    link: string
  }
}

interface INavigationQuery {
  allMenuYaml: {
    edges: ILinkType[]
  }
}

interface INavigationState {
  mobileMenu: boolean
}

class Navigation extends React.Component<
  { forceClose: boolean },
  INavigationState
> {
  menuWrapperRef: RefObject<HTMLElement> = React.createRef()

  state = { mobileMenu: false }

  toggleMenu = () => this.setState(state => ({ mobileMenu: !state.mobileMenu }))

  renderLinks = (items: ILinkType[]) =>
    items.map(({ node: { label, link, id } }) => (
      <NavLink to={link} key={id}>
        {label}
      </NavLink>
    ))

  getItemsHeight = (): number => {
    if (this.menuWrapperRef.current) {
      return Array.prototype.slice
        .call(this.menuWrapperRef.current.childNodes)
        .reduce((acc, child) => acc + child.offsetHeight, 0)
    }

    return 0
  }

  componentDidUpdate() {
    if (this.props.forceClose) {
      this.setState({ mobileMenu: false })
    }
  }

  render() {
    return (
      <S.Wrapper className="nav-wrp">
        <StaticQuery
          query={navigationQuery}
          render={(data: INavigationQuery) => {
            const { edges: items } = data.allMenuYaml

            return (
              <S.NavWrapper
                show={this.state.mobileMenu}
                itemsHeight={this.getItemsHeight()}
                ref={this.menuWrapperRef}
              >
                <Link
                  to="/covid-19"
                  activeClassName="active activec"
                  partiallyActive={true}
                  className="covid-menu"
                >
                  Low Touch Economy{' '}
                  <span className="badge badge-danger">NEW</span>
                </Link>
                <Link
                  to="/work"
                  activeClassName="active"
                  partiallyActive={true}
                >
                  Work
                </Link>
                <Link
                  to="/clients"
                  activeClassName="active"
                  partiallyActive={true}
                >
                  Clients
                </Link>
                <Link
                  to="/services"
                  activeClassName="active"
                  partiallyActive={true}
                >
                  Services
                </Link>
                <Link
                  to="/about"
                  activeClassName="active"
                  partiallyActive={true}
                >
                  About
                </Link>
                <Link
                  to="/career"
                  activeClassName="active"
                  partiallyActive={true}
                >
                  Careers
                </Link>
                <Link
                  to="/read"
                  activeClassName="active"
                  partiallyActive={true}
                >
                  Read
                </Link>
                <Link
                  to="/contact"
                  activeClassName="active"
                  partiallyActive={true}
                >
                  Contact
                </Link>
                {/* {this.renderLinks(items)} */}
              </S.NavWrapper>
            )
          }}
        />
        <S.Hamburguer
          aria-expanded={this.state.mobileMenu}
          show={this.state.mobileMenu}
          onClick={this.toggleMenu}
        />
      </S.Wrapper>
    )
  }
}

const navigationQuery = graphql`
  query NavigationQuery {
    allMenuYaml {
      edges {
        node {
          id
          label
          link
        }
      }
    }
  }
`

export default Navigation
