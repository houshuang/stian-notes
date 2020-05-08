import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { navigate } from '@reach/router';
import '../style.css';

import components from 'gatsby-theme-andy/src/components/MdxComponents';

const PostLink = ({ post }) => (
  <div>
    <Link to={post.slug}>{post.title}</Link>
  </div>
);
const IndexPage = ({
  data: {
    allBrainNote: { edges },
  },
}) => {
  const Posts = edges.map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>All pages - Stian's notes</title>
      </Helmet>
      <div
        id="brainNote"
        className="container max-w-2xl px-4 mx-auto text-gray-900 flex flex-col min-h-screen"
      >
        <div onClick={() => navigate('about')} className="font-bold py-2 border-b -mx-4 px-4">
          Stian's notes
        </div>
        <div className="flex-1">
          <h1 className="my-4">All pages</h1>
          {Posts}
        </div>
      </div>
    </>
  );
};

export const pageQuery = graphql`
  query MyQuery {
    allBrainNote {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`;

export default IndexPage;
