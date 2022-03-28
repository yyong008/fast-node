import React from 'react'

const ButtonGroup = () => {
  const onConnect = () => {}
  const onDisconnect = () => {}
  return (
    <>
      <button
        onClick={onConnect}
        className="box-border flex w-10/12 justify-center  font-serif py-4 mb-8 m-auto rounded-sm bg-green-500 text-black-300 text-sm"
      >
        链接
      </button>
      <button
        onClick={onDisconnect}
        className="box-border flex w-10/12 justify-center  font-serif py-4 m-auto rounded-sm bg-cyan-500 text-black-300 text-sm"
      >
        断开链接
      </button>{' '}
    </>
  )
}

export default ButtonGroup
