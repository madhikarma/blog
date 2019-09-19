import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Hemlet from 'react-helmet'

import Layout from '../components/Layout'
import DisplayImage from './../assets/images/pokhara.jpg'

class SiteIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    return (
      <Layout>
        <Hemlet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Hemlet>
        <div>
          <p>Hi, I'm Shagun Madhikarmi</p>
          <p>
            I work at <a href="https://www.ustwo.com">ustwo</a> as a Tech Lead
            (full stack web and native mobile) and formerly as an iOS developer
            there.
          </p>
          <p>
            I've been in software a little over 10 years - mostly iOS
            development using{' '}
            <a href="https://en.wikipedia.org/wiki/Agile_software_development">
              agile methodologies -
            </a>{' '}
            before stepping into a lead and management role.
          </p>
          <p>
            I believe in the inherent good nature of people - and that we can
            all learn from and support each other regardless of title or
            experience. I enjoy shipping or helping teams ship products and also
            learning to be the best manager I can be.
          </p>
          <p>
            If you'd like to know more <a href="/contact">contact</a> me.
          </p>
          <p>
            Thanks for visiting and checkout the <a href="/blog">blog</a> for more
            from me.
          </p>
        </div>
        <img src={DisplayImage} alt={siteTitle} />
      </Layout>
    )
  }
}

export default SiteIndex

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
