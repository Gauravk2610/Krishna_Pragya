import React from 'react'
import { Link } from 'react-router-dom'

const Subscribe = () => {
  return (
    <Link className='subscribe_button fixed z-20 right-0 bottom-24 linear-bg px-4 py-2 font-semibold rounded-md uppercase text-white text-lg' to={'/subscription'}>
        Subscribe
    </Link>
  )
}

export default Subscribe