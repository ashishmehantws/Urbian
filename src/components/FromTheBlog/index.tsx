import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
// import slugify from '@sindresorhus/slugify'

// import linkResolver from '../../utils/linkResolver'
// import formatDate from '../../utils/formatDate'

// import { RightContent, Big } from '../UI/'

import * as S from './styled'
import { BlogPost } from '../Blog/types'
// import AuthorBox from '../Blog/AuthorBox/AuthorBox'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import './styles.css'
import bloglist1 from '../../assets/images/pasted-image-255.jpg'
import bloglist2 from '../../assets/images/pasted-image-331.jpg'

interface IFromTheBlogQuery {
  homeYaml: {
    fromTheBlog: {
      title: string
      cta: string
      link: string
    }
  }
  allPrismicBlogPost: {
    edges: Array<{
      node: BlogPost
    }>
  }
}

const FromTheBlog: React.FC<{}> = () => {
  return (
    <StaticQuery
      query={fromTheBlogQuery}
      render={({
        homeYaml: { fromTheBlog },
        allPrismicBlogPost: { edges },
      }: IFromTheBlogQuery) => {
        return (
          <S.Wrapper className="homeblog-list">
            <Container>
              <Row>
                <Col md="5">
                  <h4>Latest News</h4>
                </Col>
                <Col md="7">
                  <ul>
                    <li className="border-bottom pb-4">
                      <strong>
                        Covide-19: Our candid view on the most crucial things
                        companies need to get right now.
                      </strong>
                      <div className="d-flex flex-wrap align-items-center justify-content-start">
                        <div className="auther-img">
                          <img src={bloglist1} alt="liberty" />
                        </div>
                        <span>Anton Moulder . January 2020</span>
                      </div>
                    </li>
                    <li className="border-bottom pb-4 ">
                      <strong>
                        Introducing Sanlam Private Wealth's Design System.
                      </strong>
                      <div className="d-flex flex-wrap align-items-center justify-content-start">
                        <div className="auther-img">
                          <img src={bloglist2} alt="liberty" />
                        </div>
                        <span>Louis Bester . January 2020</span>
                      </div>
                    </li>
                  </ul>
                  <Link
                    className="styled__Link-d87459-1 fYDdlr colorblack"
                    to="/blog"
                  >
                    More news this way
                    <svg
                      className="styled__Arrow-d87459-0 bQLhSh"
                      width="14"
                      height="10"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g stroke="#212529" fill="none" fillRule="evenodd">
                        <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                        <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
                      </g>
                    </svg>
                  </Link>
                </Col>
              </Row>
            </Container>
            {/*<RightContent>
              
               <ul>
                {edges.map(({ node: post }, i) => {
                  const slugifyCategory = slugify(post.data.category)
                  const categoryMeta = {
                    type: 'blog_category',
                    uid: slugifyCategory,
                  }

                  const postLink = linkResolver(post)

                  return (
                    <S.ListItem key={i}>
                      <S.Link href={postLink}>
                        <Big>{post.data.title}</Big>
                        <S.More>{post.data.teaser}</S.More>
                      </S.Link>
                      <S.Author>
                        <AuthorBox
                          compact
                          author={post.data.author.document.data}
                        >
                          
                          <span>·</span>
                          <Link to={linkResolver(categoryMeta)}>
                            {post.data.category}
                          </Link>
                          <span>·</span>
                          {formatDate(post.data.date)}
                        </AuthorBox>
                      </S.Author>
                    </S.ListItem>
                  )
                })}
              </ul>
              <S.ArrowLink highlight to={fromTheBlog.link}>
                {fromTheBlog.cta}
              </S.ArrowLink> 
            </RightContent>*/}
          </S.Wrapper>
        )
      }}
    />
  )
}

const fromTheBlogQuery = graphql`
  query FromTheBlogQuery {
    homeYaml {
      fromTheBlog {
        title
        cta
        link
      }
    }

    allPrismicBlogPost(limit: 3, sort: { fields: data___date, order: DESC }) {
      edges {
        node {
          uid
          type

          data {
            title
            teaser
            category
            date

            author {
              document {
                ... on PrismicBlogAuthor {
                  uid
                  type

                  data {
                    name
                    profile_pic {
                      fluid {
                        ...GatsbyPrismicImageFluid_noBase64
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default FromTheBlog
