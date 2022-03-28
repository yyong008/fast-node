import React from 'react'

// components
import CustomLink from './CustomLink'

const MainNav = () => {
  return (
    <div className="flex item-center w-screen  h-14 border-b bg-slate-50">
      <div className="flex py-2 h-14 w-28 justify-center items-center text-xl">
        导航配置：
      </div>
      <CustomLink to="/">首页</CustomLink>
      <CustomLink to="/process">进程</CustomLink>
    </div>
  )
}

export default MainNav
