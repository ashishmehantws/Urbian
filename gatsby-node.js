/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const slugify = require('@sindresorhus/slugify')

/** Creating alias in webpack config */
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@theme': path.resolve(__dirname, 'src/theme'),
      },
      extensions: ['.ts', '.tsx'],
    },
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  /**
   * Redirects
   */
  createRedirect({
    fromPath: '/studio',
    toPath: '/about',
    isPermanent: true,
    redirectInBrowser: true,
  })

  createRedirect({
    fromPath: '/enquiry',
    toPath: '/contact',
    isPermanent: true,
    redirectInBrowser: true,
  })

  // createRedirect({
  //   fromPath: '/work',
  //   toPath: '/showcase',
  //   isPermanent: true,
  //   redirectInBrowser: true,
  // })

  createRedirect({
    fromPath: '/labs/css-only-slider',
    toPath: '/labs',
    isPermanent: true,
    redirectInBrowser: true,
  })

  // Authors
  // TODO: uncomment when templates/blog-author.tsx is ready

  const works = await graphql(`
    {
      allContentfulWork(filter: {node_locale: {eq: "en-US"}}) {
        nodes {
          title
          id
        }
      }
    }
  `)
  works.data.allContentfulWork.nodes.forEach(({ title, id }) => {
    var slug = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    createPage({
      path: `/casestudy/${slug}`,
      component: path.resolve(`./src/templates/casestudy.js`),
      context: { id },
    })
  })
}
