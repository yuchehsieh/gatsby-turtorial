/**
 *
 * create for using path that match the specific template. See:
 * https://www.gatsbyjs.org/docs/api-files-gatsby-node/
 */

const path = require("path")
//
// exports.createPages = async ({ actions, graphql }) => {
//   const { createPage } = actions
//
//   const { data } = await graphql(`
//     query {
//       tours: allContentfulTour {
//         totalCount
//         edges {
//           node {
//             slug
//           }
//         }
//       }
//     }
//   `)
//
//   const template = path.resolve("./src/templates/tour-templates.js")
//
//   data.tours.edges.forEach(({ node }) => {
//     createPage({
//       path: `tours/${node.slug}`,
//       component: template,
//       context: {
//         slug: node.slug,
//       },
//     })
//   })
// }

exports.onCreatePage = async ({page, actions}) => {
  const {createPage} = actions;


  console.log("Page - ", page.path);

  if(page.path.match(/^\/hoda_router/)) {
    createPage({
      path: "/hoda_router",
      matchPath: "/hoda_router/*",
      component: path.resolve(`src/pages/hoda_router.js`)
    })
  }

}