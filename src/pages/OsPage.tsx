import React from 'react'

// components
import ContentList from '../components/ContentList'

// hooks
import useSocket from '../hooks/useSocket'

const OsPage = () => {
  const [data] = useSocket()
  return <ContentList data={data.os} />
}

export default OsPage
