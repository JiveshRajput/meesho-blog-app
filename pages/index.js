import Head from 'next/head'
import Link from 'next/link'
import {sectionList} from '../helpers/config'

export default function Home() {
  // const sectionList = ['Product', 'Design & UR', 'Engineering', 'Culture', 'All']

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
          <h1 className='font-semibold  min-[800px]:text-5xl lg:text-7xl max-[800px]:text-center '>Stories from the folks building for a billion Indians</h1>
        </div>
        <div className="min-[800px]:flex-1 ">
          <video src='/videos/home-banner.mp4' autoPlay loop muted type='video/mp4'>
          </video>
        </div>
      </main>
      {/* Search Bar and parameters */}
      <section className='max-w-1200 mx-auto p-4 flex justify-between'>
        <div>
          {sectionList.map((link, ind) =>
            <Link id={ind} href={`#${link.nav}`} className='rounded-full flex-shrink-0 py-2 px-6 text-white capitalize mb-6 lg:mb-3 cursor-pointer bg-cus-grey'>{link.title}</Link>
          )}
        </div>
      </section>
    </>
  )
}
