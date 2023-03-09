import Head from 'next/head'
import Link from 'next/link'
import { sectionList } from '../helpers/config'
import { FaSearch } from "react-icons/fa";
import { HiXMark } from "react-icons/hi2";
import { useState } from 'react';
import CategoryBlogSection from '../components/CategoryBlogSection';
import FeatureBlogSection from '../components/FeatureBlogSection';

export default function Home() {
  const [toggleSearchBar, setToggleSearchBar] = useState(true);
  
  function toggleSearchBarBtn() {
    setToggleSearchBar(!toggleSearchBar)
  }

  return (
    <>
      <Head>
        <title>Meesho Blog | Meesho</title>
        <meta name="description" content="Stories from the folks building for a billion Indians" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Home main banner  */}
      <main id='blog-home' className='max-w-1200 mx-auto p-4 flex max-[800px]:gap-4 max-[800px]:flex-col items-center'>
        <div className="min-[800px]:flex-1 ">
          <h1 className='font-semibold max-[500px]:text-2xl min-[800px]:text-5xl lg:text-7xl max-[800px]:text-center '>Stories from the folks building for a billion Indians</h1>
        </div>
        <div className="min-[800px]:flex-1 ">
          <video src='/videos/home-banner.mp4' autoPlay loop muted type='video/mp4'>
          </video>
        </div>
      </main>
      {/* Search Bar and section link words */}
      <section className='max-w-1200 mx-auto mb-8 p-4 flex justify-between max-[750px]:hidden'>
        {toggleSearchBar && <div className='flex gap-2'>
          {sectionList.map((link, ind) =>
            <a key={ind} href={`#${link.nav}`} className={`rounded-full flex-shrink-0 py-2 px-6 text-white capitalize cursor-pointer bg-cus-grey bg-opacity-80 hover:bg-[#007aff] ${link.hoverColor}`}>{link.title}</a>
          )}
        </div>}
        {/* Toggling search bar with fields  */}
        <div className={`flex ${!toggleSearchBar && 'w-full'}`}>
          {
            toggleSearchBar ? <div onClick={toggleSearchBarBtn} className="flex gap-2 items-center cursor-pointer">
              <FaSearch className='w-5 h-auto' />
              <span>Search</span>
            </div> : <div className='flex justify-between gap-4 border-b border-cus-grey-1 py-2 w-full'>
              <input type="text" className='text-white bg-transparent outline-none border-none w-full' placeholder='Search for specific article' />
              <HiXMark onClick={toggleSearchBarBtn} className='h-full w-6 cursor-pointer' />
            </div>
          }
        </div>
      </section>
      {/* Searchbar for mobile with section link words*/}
      <section className='mb-10 p-4 min-[750px]:hidden'>
        <div className="relative mb-5">
          <input type="text" className='text-white bg-transparent outline-none border-cus-grey1 border w-full rounded-full py-3 px-5' placeholder='Search for specific article' />
          <FaSearch className='h-full w-6 cursor-pointer absolute top-0 right-5' />
        </div>
        <div className='flex gap-2 flex-wrap justify-center'>
          {sectionList.map((link, ind) =>
            <Link key={ind} href={`#${link.nav}`} className={`rounded-full flex-shrink-0 py-2 px-6 text-white capitalize cursor-pointer bg-cus-grey bg-opacity-80 hover:bg-[#007aff] ${link.hoverColor}`}>{link.title}</Link>
          )}
        </div>
      </section>
      {/* Product Section */}
      <CategoryBlogSection sectionTitle='Product' pageToredirect='/blog' sectionId='product' limit={4} filterFunction={(blog) => blog.category === 'product'} />
      {/* Feature Section */}
      <FeatureBlogSection sectionTitle='Feature' sectionId='feature' />
      {/* Design & UR Section */}
      <CategoryBlogSection sectionTitle='Design & UR' pageToredirect='/' sectionId='design' limit={4} filterFunction={(blog) => blog.category === 'design'} />
      {/* EngineeringSection */}
      <CategoryBlogSection sectionTitle='Engineering' pageToredirect='/' sectionId='engineering' limit={4} filterFunction={(blog) => blog.category === 'engineering'} />
      {/* Culture Section */}
      <CategoryBlogSection sectionTitle='Culture' pageToredirect='/' sectionId='culture' limit={4} filterFunction={(blog) => blog.category === 'culture'} />
    </>
  )
}
