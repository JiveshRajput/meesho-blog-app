import Link from 'next/link'
import React from 'react'
import Slider from "react-slick";
import { HiArrowLongRight } from "react-icons/hi2";
import { blogList } from '../helpers/config';
import BlogCard, { BigBlogCard } from './BlogCard';

function CategoryBlogSection(props) {
    const { sectionTitle, pageToredirect, sectionId, filterFunction, limit } = props;
    const currentBlogsDisplayList = blogList.filter(filterFunction || ((blog) => blog)).slice(0, limit);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <>
            {/* Section for showing  blogs of specific category */}
            <section id={sectionId} className='max-w-1200 mx-auto my-6 p-4'>
                {/*header title part */}
                <div className='flex justify-between items-center border-b border-cus-grey-1 py-4 mb-4'>
                    <h1 className='font-semibold text-2xl md:text-4xl'>{sectionTitle}</h1>
                    <Link href={pageToredirect} className='uppercase tracking-wide flex gap-2 items-center'>View all <HiArrowLongRight /> </Link>
                </div>
                {/* Top Card Image */}
                <div className="my-4 md:my-8 max-md:hidden">
                    <BigBlogCard blog={currentBlogsDisplayList[0]} />
                </div>
                {/*3 Cards Section */}
                <div className="grid grid-cols-card gap-7">
                    {currentBlogsDisplayList.slice(1).map((blog, ind) => <BlogCard key={ind} blog={blog} />)}
                </div>
            </section>
        </>
    )
}

export default CategoryBlogSection
