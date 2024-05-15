import React from 'react'
import BannerCard from '../home/BannerCard'
const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            {/* left side */}
            <div className='md:w-1/2 space-y-8 h-full'>
                <h2 className='text-5xl font-bold leading-snug text-black'>Library Management System <span className='text-blue-700'>Add or Borrow Books</span></h2>
                <p className='md:w-4/5'>Libraries are essential in a process of giving citizens access to knowledge. In digital times they are needed more than ever before. In times of the internet, everyone can visit a library without leaving home. It’s just a matter of opening a library website, and you can not only borrow an ebook but also ask the librarian an online question. </p>
                <div>
                    <input type="search" name='search' id='search' placeholder='Search a Book' className='py-2 px-2 rounded-s-sm outline-none'/>
                    <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-20'>Search</button>
                </div>
            </div>

            {/* right side */}
            <div>
                <BannerCard />
            </div>
        </div>
    </div>
  )
}

export default Banner