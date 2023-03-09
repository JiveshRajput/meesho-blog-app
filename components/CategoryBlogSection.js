
import Link from 'next/link'
import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";
import { blogList } from '../helpers/config';
import BlogCard from './BlogCard';

function CategoryBlogSection(props) {
    const { sectionTitle, pageToredirect, sectionId, filterFunction, limit } = props;
    const currentBlogsDisplayList = blogList.filter(filterFunction).slice(0, limit);

    return (
        <>
            {/* Section for showing  blogs of specific category */}
            <section id={sectionId} className='max-w-1200 mx-auto p-4 '>
                {/*header title part */}
                <div className='flex justify-between items-center border-b border-cus-grey-1 py-4 mb-4'>
                    <h1 className='font-semibold text-2xl md:text-4xl'>{sectionTitle}</h1>
                    <Link href={pageToredirect} className='uppercase tracking-wide flex gap-2 items-center'>View all <HiArrowLongRight /> </Link>
                </div>
                {/*header title part */}
                <div className="grid grid-cols-3 gap-7">
                    {currentBlogsDisplayList.map((blog, ind) => <BlogCard key={ind} blog={blog} />)}
                </div>
            </section>
        </>
    )
}

export default CategoryBlogSection