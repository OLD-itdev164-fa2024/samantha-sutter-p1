const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  // Define the template for the blog post
  const blogPostTemplate = path.resolve(`./src/templates/blog-post-contentful.js`);

  return graphql(`
    {
      allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    const posts = result.data.allContentfulPost.edges;

    posts.forEach(({ node }) => {
      createPage({
        path: `/blog/${node.slug}`,
        component: blogPostTemplate,
        context: {
          slug: node.slug,
        },
      });
    });
  });
};
