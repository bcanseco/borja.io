import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { name as domain } from '../../package.json';
import headshot from '../images/headshot.jpg';
import favicon from '../images/bc.png';

/**
 * This check is necessary for server-side rendering.
 * @see https://github.com/nfl/react-helmet/issues/310
 */
if (process.env.NODE_ENV === 'production') {
  Helmet.canUseDOM = false;
}

const SEO = ({ description, meta, title }) => {
  const fullTitle = `Borja Canseco :: ${title}`;

  return (
    <Helmet
      title={fullTitle}
      link={[
        {
          rel: 'canonical',
          href: `https://${domain}`,
        },
        {
          rel: 'sitemap',
          type: 'application/xml',
          href: '/sitemap.xml',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: favicon,
        },
      ]}
      meta={[
        {
          name: 'description',
          content: description,
        },
        {
          name: 'keywords',
          content: ['borja canseco', 'software engineer', 'denver'].join(','),
        },
        {
          property: 'og:site_name',
          content: 'Borja Canseco',
        },
        {
          property: 'og:title',
          content: fullTitle,
        },
        {
          property: 'og:description',
          content: description,
        },
        {
          property: 'og:type',
          content: 'profile',
        },
        {
          property: 'og:image',
          content: `https://${domain}${headshot}`,
        },
        {
          property: 'og:url', // canonical
          content: `https://${domain}`,
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: '@borja_canseco',
        },
        {
          name: 'twitter:title',
          content: fullTitle,
        },
        {
          name: 'twitter:description',
          content: description,
        },
        {
          name: 'twitter:image',
          content: `https://${domain}${headshot}`,
        },
      ].concat(meta)}
    />
  );
};

SEO.defaultProps = {
  description: 'Borja Canseco is a software engineer based in Denver, CO. He currently works under Twilio\'s Developer Experience unit. This is his personal website.',
  meta: [],
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
};

export default SEO;
