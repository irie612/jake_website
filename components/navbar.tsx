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
            <ul className='flex xl:5/12 lg:w-7/12 md:w-8/12 sm:w-10/12 w-11/12'>
                <li className={checkActivePath("/") ? 'active-nav' : 'inactive-nav'}>
                    <Link href="/">TATTOOS</Link>
                </li>
                <li className={checkActivePath("/flash") ? 'active-nav' : 'inactive-nav'}>
                    <Link href="/flash">FLASH</Link>
                </li>
                <li className='px-4 w-1/3 text-center hover:bg-maire dark:hover:bg-ivory hover:text-ivory dark:hover:text-maire'>
                    <a href="https://jakecordal.bigcartel.com" target="_blank">SHOP</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
