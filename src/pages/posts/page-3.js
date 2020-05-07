import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'

export default () => {
  return (
    <Layout>
      <h1>Hello from page 3</h1>
      <Link to='/page-2'>Go to Page 2</Link>
    </Layout>
  )
}
