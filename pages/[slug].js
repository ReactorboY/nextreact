import React from 'react'
import matter from 'gray-matter'
import ReactMarkDown from 'react-markdown'

import Layout from '../components/Layout'

export default function BlogTemplate(props) {
    const markdownbody = props.content
    const frontmatter = props.data
    return (
        <Layout siteTitle={props.siteTitle}>
            <article>
                <h1>{frontmatter.title}</h1>
                <div>
                    <ReactMarkDown source={markdownbody}/>
                </div>
            </article>
        </Layout>
    )
}

BlogTemplate.getInitialProps = async function(context) {
    const {slug} = context.query
    const content = await import(`../posts/${slug}.md`)
    const config = await import(`../data/config.json`)
    const data = matter(content.default)
    return {
        siteTitle : config.title,
        ...data
    }
}