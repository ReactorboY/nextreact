import React from 'react'
import '../styles/index.scss'
import Layout from '../components/Layout'
import BlogList from '../components/BlogList'

const Home = props => (
  <>
    <Layout pathname="/" siteTitle={props.title} siteDescription={props.description}>
      <section>
        <BlogList/>
      </section>
    </Layout>
  </>
)

export default Home

Home.getInitialProps = async function() {
  const configData = await import(`../data/config.json`)
  return {
    ...configData
  }
}