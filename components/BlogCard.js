import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function BlogCard(props) {
    const { img, author, title, desc, publishedOn, slug } = props.blog;
    return (
        <>
            <Link href={`/blog/${slug}`} className='ease-in duration-100 hover:scale-[1.05]'>
                <div className="md:w-full">
                    <Image src={img} alt={author} className='aspect-video w-full h-auto rounded-2xl' width={480} height={270} />
                    <h2 className='text-lg md:text-xl font-semibold text-secondary my-2 md:my-4'>{title}</h2>
                    <p className="text-sm md:text-base mb-2 md:mb-4">{desc}</p>
                    <p className="text-xs md:text-base text-cus-grey font-semibold mb-2 uppercase">{author}</p>
                    <p className="text-xs md:text-base text-cus-grey font-semibold mb-2">{publishedOn}</p>
                </div>
            </Link>
        </>
    )
}

export function FeatureBlogCard(props) {
    const { img, title, author, slug } = props.blog;
    return (
        <>
            <Link href={`/blog/${slug}`} className='ease-in duration-100 hover:scale-[1.05]'>
                <div className="max-md:grid max-md:gap-3 max-md:grid-cols-2 w-full">
                    <div className='aspect-square md:aspect-video lg:aspect-square rounded-2xl relative'>
                        <Image src={img} className='rounded-2xl' alt={author} fill objectFit='cover' />
                    </div>
                    <h2 className='text-sm min-[500px]:text-lg md:text-xl font-semibold md:my-4'>{title}</h2>
                </div>
            </Link>
        </>
    )
}

export function BigBlogCard(props) {
    const { img, author, title, desc, publishedOn, slug } = props.blog;
    return (
        <>
            <Link href={`/blog/${slug}`}>
                <div className='ease-in duration-100 hover:scale-[1.05]'>
                    <div className="flex md:grid md:grid-cols-3 gap-6 max-md:flex-col">
                        <Image src={img} alt={author} className='aspect-video w-full h-auto rounded-3xl md:col-span-2' width={490} height={275} />
                        <div className='md:cols-span-1'>
                            <h2 className='text-lg lg:text-3xl font-semibold text-secondary mb-2 lg:mb-4'>{title}</h2>
                            <p className="text-sm lg:text-base mb-2 lg:mb-4">{desc}</p>
                            <p className="text-sm lg:text-base text-cus-grey font-semibold mb-2 uppercase">{author}</p>
                            <p className="text-sm lg:text-base text-cus-grey font-semibold mb-2">{publishedOn}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}


export default BlogCard
