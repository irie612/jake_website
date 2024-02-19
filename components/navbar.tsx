'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const useActivePath = () => {
    const pathname = usePathname();
    console.log(pathname);
    const checkActivePath = (path: string) => pathname === path;
    return checkActivePath;
}

const Navbar: React.FC = () => {
    const checkActivePath = useActivePath()

    return (
        <nav className='flex justify-center'>
            <ul className='flex xl:w-6/12 lg:w-7/12 md:w-8/12 sm:w-10/12 w-11/12 font-bold'>
                <li className='px-4 w-1/3 text-center'>
                    <Link href="/" className={checkActivePath("/") ? 'active-nav' : 'nav'}>TATTOOS</Link>
                </li>
                <li className='px-4 w-1/3 text-center'>
                    <Link href="/flash" className={checkActivePath("/flash") ? 'active-nav' : 'nav'}>FLASH</Link>
                </li>
                <li className='px-4 w-1/3 text-center'>
                    <a href="https://jakecordal.bigcartel.com" className='nav'>SHOP</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
