import React from 'react';
import {
  Layout, SEO, Details, Links, Link, Fireworks,
} from '../components';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" />
    <Details>
      <strong>
        <code>Error 404:</code>
      </strong>
      {`
        Can't find what you're looking for.
      `}
    </Details>
    <Links>
      <Link primary to="/" title="Homepage">Home</Link>
    </Links>
    <Fireworks />
  </Layout>
);

export default NotFoundPage;
