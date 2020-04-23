import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import * as S from './styled'
import { Small, Link, Segg, Social } from '../../UI/'
import foterlogo from '../../../assets/images/footer-logo.png'
interface IItemType {
  label: string
  link: string
}

interface IColumnType {
  node: {
    id: string
    title: string
    type: 'column' | 'social'
    items: IItemType[]
  }
}

interface INavFooterQuery {
  allFooterYaml: {
    edges: IColumnType[]
  }
}

class FooterNav extends React.Component<{}, {}> {
  renderSocialItems = (items: IItemType[]) => {
    return items.map(({ label, link }, i) => (
      <Social key={i} type={label} link={link} />
    ))
  }

  renderItems = (items: IItemType[]) => {
    return items.map(({ label, link }, i) => (
      <S.FooterLink key={i} to={link}>
        {label}
      </S.FooterLink>
    ))
  }

  renderColumns = (columns: IColumnType[]) => {
    return columns.map(({ node: { id, title, type, items } }) => {
      if (title === 'Contact') {
        return (
          <div key={id} className="footer-logo">
            <S.LogoLink to="/" title="Go to homepage">
              {/* <Segg /> */}
              <img src={foterlogo} alt="foterlogo" width="50px" />
            </S.LogoLink>

            {/* <S.ContactColumn>{this.renderItems(items)}</S.ContactColumn> */}

            <Small>&copy;{new Date().getFullYear()} Urbian Group.</Small>
            <Link to="">Privacy Policy</Link>
          </div>
        )
      }

      if (type === 'social') {
        return (
          <div key={id}>
            <S.Title>{title}</S.Title>
            <S.Row>{this.renderSocialItems(items)}</S.Row>
          </div>
        )
      }

      return (
        <div key={id}>
          <S.Title>{title}</S.Title>
          <S.Column>{this.renderItems(items)}</S.Column>
        </div>
      )
    })
  }

  render() {
    return (
      <StaticQuery
        query={footerNavQuery}
        render={(data: INavFooterQuery) => {
          const { edges: columns } = data.allFooterYaml
          return this.renderColumns(columns)
        }}
      />
    )
  }
}

const footerNavQuery = graphql`
  query FooterNavQuery {
    allFooterYaml {
      edges {
        node {
          id
          title
          type
          items {
            label
            link
          }
        }
      }
    }
  }
`

export default FooterNav
