import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { isEnglish } from '../utils';

const KrishnPragya = () => {
    
  const lang = useSelector((state) => state.language.value);
  const isEng = isEnglish(lang)

    const Books = [
        {
            name: isEng ? 'Vol 1' : "खंड 1",
            link: 'Vol 1',
            img: "Book 1",
            date: isEng ? "Oct 2022" : "अक्टूबर 2022"
        },
        {
            name: isEng ? 'Vol 2' : "खंड 2",
            link: 'Vol 2',
            img: "Book 2",
            date: isEng ? "Nov 2022" : "नवंबर 2022"
        },
        {
            name: isEng ? 'Vol 3' : "खंड 3",
            link: 'Vol 3',
            img: "Book 3",
            date: isEng ? "Dec 2022" : "दिसंबर 2022",
            upcoming: true
        },
        {
            name: isEng ? 'Vol 4' : "खंड 4",
            link: 'Vol 4',
            img: "Book 4",
            date: isEng ? "Jan 2023" : "जनवरी 2023",
            upcoming: true
        },
        {
            name: isEng ? 'Vol 5' : "खंड 5",
            link: 'Vol 5',
            img: "Book 5",
            date: isEng ? "Feb 2023" : "फरवरी 2023",
            upcoming: true
        },
        {
            name: isEng ? 'Vol 6' : "खंड 6",
            link: 'Vol 6',
            img: "Book 6",
            date: isEng ? "Mar 2023" : "मार्च 2023",
            upcoming: true
        },
    ]

    return (
    <div className='min-h-screen krishn-pragya-linear-gradient'>
        <div className='md:px-20 xl:px-24  w-full py-8'>
            <div className='flex flex-row justify-center xl:justify-start flex-wrap gap-x-6 gap-y-6'>
                {
                    Books.map((item, index) => (
                        <Link to={ !item.upcoming ? item.link : '#'} key={index} className=''>
                            <div className='relative'>
                                <img className='w-60 h-80 object-cover' src={`/assets/krishn_pragya/${item?.img}.png`} alt="" />
                                {
                                    item?.upcoming && (
                                    <div className='absolute inset-0  bg-black/40'>
                                        <div className='flex flex-col justify-center items-center h-full text-center text-white uppercase font-bold text-xl'>
                                            Upcoming Issue
                                        </div>
                                    </div>
                                    )
                                }
                            </div>
                            <div className='text-center'>
                                <span className='text-[#0375A3] text-xl font-bold'>{item?.name} - </span>
                                <span className='text-[#3CA87B] text-xl font-bold'>{item?.date}</span>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default KrishnPragya