import React from 'react'

// components
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const CustomLink = ({ to, ...props }) => {
  const resolved = useResolvedPath(to)
  let match = useMatch({ path: resolved.pathname, end: true })
  return (
    <Link
      {...props}
      to={to}
      className={`flex justify-center items-center mx-2 hover:text-orange-300 ${
        match ? 'text-orange-500' : ''
      }`}
    >
      {props.children}
    </Link>
  )
}

export default CustomLink
