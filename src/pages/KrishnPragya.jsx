import React from 'react'
import { Link } from 'react-router-dom'

const Books = [
    {
        name: 'Vol 1',
        img: "Book 1",
        date: "Oct 2022"
    },
    {
        name: 'Vol 2',
        img: "Book 2",
        date: "Nov 2022"
    },
    {
        name: 'Vol 3',
        img: "Book 3",
        date: "Dec 2022",
        upcoming: true
    },
    {
        name: 'Vol 4',
        img: "Book 4",
        date: "Jan 2023",
        upcoming: true
    },
    {
        name: 'Vol 5',
        img: "Book 5",
        date: "Feb 2023",
        upcoming: true
    },
    {
        name: 'Vol 6',
        img: "Book 6",
        date: "Mar 2023",
        upcoming: true
    },
]

const KrishnPragya = () => {
  return (
    <div className='min-h-screen krishn-pragya-linear-gradient'>
        <div className='md:px-20 xl:px-24  w-full py-8'>
            <div className='flex flex-row justify-center xl:justify-start flex-wrap gap-x-6 gap-y-6'>
                {
                    Books.map((item, index) => (
                        <Link to={ !item.upcoming ? item.name : '#'} key={index} className=''>
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
            KrishnPragya
        </div>
    </div>
  )
}

export default KrishnPragya