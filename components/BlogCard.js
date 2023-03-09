import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function BlogCard(props) {
    const { img, author, title, desc, publishedOn, slug } = props.blog;
    return (
        <>
            <Link href={`/blog/${slug}`} className='ease-in duration-75 hover:scale-[1.05]'>
                <div className="w-full">
                    <Image src={img} alt={author} className='aspect-video w-full h-auto rounded-2xl' width={160} height={90} />
                    <h2 className='text-xl font-semibold text-secondary my-4'>{title}</h2>
                    <p className="text-base mb-4">{desc}</p>
                    <p className="text-base text-cus-grey font-semibold mb-2 uppercase">{author}</p>
                    <p className="text-base text-cus-grey font-semibold mb-2">{publishedOn}</p>
                </div>
            </Link>
        </>
    )
}

export default BlogCard
