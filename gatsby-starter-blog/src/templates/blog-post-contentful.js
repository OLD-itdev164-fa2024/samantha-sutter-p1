import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const BlogPostContentful = ({ data }) => {
  const post = data.contentfulPost;

  return (
    <Layout>
      <SEO title={post.title} />
      <h1>{post.title}</h1>
      <p>Author: {post.author}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content.childMarkdownRemark.html }} />
    </Layout>
  );
};

export default BlogPostContentful;

export const query = graphql`
  query ($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      author
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
