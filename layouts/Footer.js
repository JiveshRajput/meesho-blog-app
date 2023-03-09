import React from 'react'
import { footerList } from '../helpers/config';

function Footer() {
  return (
    <>
      <footer className='p-6 mx-auto max-w-1000 flex max-md:gap-4 max-md:flex-col md:justify-between items-center border-t border-cus-grey'>
        <div className='grid grid-cols-2 md:flex gap-4'>
          {footerList.map(({ Icon, link, name }, ind) => {
            return (
              <div key={ind} className='col-span-1'>
                <a href={link} target="_blank" className='max-md:gap-2 max-md:flex max-md:items-center cursor-pointer'>
                  <Icon className='w-8 h-auto' />
                  <span className='md:hidden'>{name}</span>
                </a>
              </div>
            )
          })}
        </div>
        <div>Meesho | 2023 All Rights Reserved</div>
      </footer>
    </>
  )
}

export default Footer
