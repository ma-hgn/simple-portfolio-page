import React, { useEffect } from 'react';
import '../styles/main.css'

const Main = ({ children }) => {
//    useEffect(() => {
//        const height = (document.querySelector('main') as HTMLElement).clientHeight;
//        document.documentElement.style.setProperty('--parallax-height', height + 'px');
//    });

    return <>
        <div className="parallax">
            <main>
                {children}
            </main>
        </div>
    </>
};

export default Main
