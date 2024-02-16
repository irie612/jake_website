import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-ivory dark:bg-maire text-maire dark:text-ivory py-4">
            <div className="flex flex-col w-full justify-center items-center">
                <div className="text-sm">
                    Copytright &copy; {new Date().getFullYear()} Jake Cordal Tattoo
                </div>
                <div className="text-sm">
                    <Link href="/" className="active:text-gold underline">Tattoo</Link> | <Link href="/flash" className="active:text-gold underline">Flash</Link> | <a href="https://jakecordal.bigcartel.com" className="active:text-gold underline">Shop</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;