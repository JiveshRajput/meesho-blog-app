import React,{useState, useEffect} from 'react'
import { FeatureBlogCard } from './BlogCard';
import { blogList } from '../helpers/config';

function FeatureBlogSection(props) {
    const { sectionTitle, sectionId, } = props;
    const [currentBlogsDisplayList, setCurrentBlogsDisplayList] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setCurrentBlogsDisplayList(blogList.filter(((blog) => blog.featured === true)).slice(0, 3));
        }, 3000)
    }, [])

    return (
        <>
            <section id={sectionId} className='max-w-1200 mx-auto my-6 p-4'>
                {/*header title part */}
                <div className='flex justify-between items-center border-b border-cus-grey-1 py-4 mb-4'>
                    <h1 className='font-semibold text-2xl md:text-4xl'>{sectionTitle}</h1>
                </div>
                {/*Cards part */}
                {
                    currentBlogsDisplayList ? <div className="grid lg:grid-cols-3 gap-7">
                        {currentBlogsDisplayList.map((blog, ind) => <FeatureBlogCard key={ind} blog={blog} />)}
                    </div> : <div className='w-full my-16 text-center text-xl md:text-3xl lg:text-5xl'>Loading...</div>
                }

            </section>
        </>
    )
}

export default FeatureBlogSection
