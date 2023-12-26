import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className='flex justify-center'>
            <ul className='flex xl:5/12 lg:w-7/12 md:w-8/12 sm:w-10/12 w-11/12'>
                <li className='px-4 w-1/3 text-center'>
                    <a href="#tattoos">TATTOOS</a>
                </li>
                <li className='px-4 w-1/3 text-center'>
                    <a href="#flash">FLASH</a>
                </li>
                <li className='px-4 w-1/3 text-center'>
                    <a href="#shop">SHOP</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
