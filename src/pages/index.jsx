import React from 'react';
import {
  Layout, SEO, Details, Links, Link,
} from '../components';

const IndexPage = () => (
  <Layout>
    <SEO title="Software Engineer" />
    <Details>
      {`
        Hello! I'm a software engineer in Austin, TX.
        It looks like you stumbled across my personal website.
        Someday I'll find the time to actually put something interesting on here.
        In the meantime, feel free to check out the links below.
      `}
    </Details>
    <Links>
      <Link href="https://github.com/bcanseco" title="Borja's GitHub profile">GitHub</Link>
      <Link href="https://linkedin.com/in/bcanseco" title="Borja's LinkedIn profile">LinkedIn</Link>
    </Links>
  </Layout>
);

export default IndexPage;
