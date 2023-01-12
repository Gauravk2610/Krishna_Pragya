import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { isEnglish } from '../utils';

const Subscribe = () => {
  const language = useSelector((state) => state.language.value);
  const isLang = isEnglish(language)

  return (
    <Link className='subscribe_button fixed z-20 right-0 bottom-24 linear-bg px-4 py-2 font-semibold rounded-md uppercase text-white text-base md:text-lg' to={'/subscription'}>
        {
          isLang ? 'Subscribe' : 'सब्सक्राइब'
        }
    </Link>
  )
}

export default Subscribe