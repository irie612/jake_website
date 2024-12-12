import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-ivory dark:bg-maire text-maire dark:text-ivory py-4 flex justify-center" data-nosnippet>
            <div className="flex flex-col text-xs lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12">
                <p className='text-sm'>
                    <Link href="/" className="nav underline">Tattoos</Link> | 
                    <Link href="/flash" className="nav underline">Flash</Link> | 
                    <a href="https://shop.jakecordaltattoo.co.uk" className="nav underline">Shop</a> |
                    <Link href="/faq" className='nav underline'>FAQ</Link>
                </p>
                <br />
                <div className='flex justify-between flex-col sm:flex-row'>
                    <p>Copyright &copy; {new Date().getFullYear()} Jake Cordal Tattoo</p>
                    <p>Website by <a href='https://irie612.github.io' className='nav underline'>Irie Railton</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;