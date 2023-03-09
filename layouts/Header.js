import Image from 'next/image'
import Link from 'next/link'
import Logo from '../public/meesho-logo.png'
import { FaBars } from "react-icons/fa";
import { HiXMark } from "react-icons/hi2";
import { useState } from 'react';
import { navMenu } from '../helpers/config';

function Header() {
    const [toggle, setToggle] = useState(false);

    function toggleNav(){
        setToggle(!toggle);
    }
    
    return (
        <>
            {/* Header for Pc */}
            <header className='bg-black py-4 px-5 text-white flex justify-between sticky top-0 left-0 z-40'>
                <FaBars className='text-white h-auto lg:hidden w-[20px]' onClick={toggleNav} />
                <Link href="/" className='flex items-center'> <Image src={Logo} alt='logo' className='h-[30px] w-auto max-lg:h-[25px]' /></Link>
                <div className='flex items-center gap-6'>
                    <ul className='flex gap-12 max-lg:hidden' role='navigation'>
                    {navMenu.map((nav, ind)=> <li key={ind}><Link href={nav.nav} className='hover:text-secondary font-semibold text-lg'>{nav.title}</Link></li>)}
                    </ul>
                    <button className='uppercase bg-primary rounded-full px-6 py-2 tracking-wide hover:bg-secondary max-lg:py-1'>join us</button>
                </div>
            </header>

            {/* Side Navbar */}
            <nav className={`ease-in duration-200 fixed top-0 w-full h-[100vh] bg-black z-50 lg:hidden ${toggle ? 'left-0' : 'left-[calc(-100vw-0px)]'} `}>
                <div className='bg-black py-4 px-5 text-white flex justify-between sticky top-0 left-0'>
                    <HiXMark className='text-white h-auto lg:hidden w-[20px] stroke-3' onClick={toggleNav} />
                    <Link href="/" className='flex items-center'> <Image src={Logo} alt='logo' className='h-[30px] w-auto max-lg:h-[25px]' /></Link>
                    <div className='flex items-center gap-6'>
                        <button className='uppercase bg-primary rounded-full px-6 py-2 tracking-wide hover:bg-secondary max-lg:py-1'>join us</button>
                    </div>
                </div>
                <ul className='flex flex-col py-20 px-4 text-white divide-y divide-cus-grey-1' role='navigation'>
                {navMenu.map((nav, ind)=> <li key={ind}><Link href={nav.nav}  className='hover:text-secondary font-normal block text-2xl my-4'>{nav.title}</Link></li>)}
                </ul>
            </nav>
        </>
    )
}

export default Header
