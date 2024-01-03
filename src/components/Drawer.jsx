import Image from 'next/image';
import React from 'react';

const Drawer = () => {
    return (
        <>
        <div className="drawer lg:hidden">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer">
                    <Image 
                        src={'/assets/images/hamburger.svg'} width={25} height={25}
                        className="w-[40px]"
                    />
                </label>
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <li><a>Sidebar Item 1</a></li>
                <li><a>Sidebar Item 2</a></li>
                
                </ul>
            </div>
        </div>
        </>
    );
}

export default Drawer;
