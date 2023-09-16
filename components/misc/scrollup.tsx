import React, { useEffect, useState } from 'react';

const Scrollup = () => {
    const [showScroll, setShowScroll] = useState(false);

    const handleScroll = () => {
        if (window.scrollY >= 200) {
            setShowScroll(true);
        } else {
            setShowScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            {showScroll && (
                <a
                    href="#"
                    className="fixed right-4 bg-slate-200 p-2 flex opacity-90 z-50"
                    style={{
                        transition: '0.4s',
                        bottom: "5rem"
                    }}
                    id="scroll-up"
                    onClick={scrollToTop}
                >
                    <i className="ri-arrow-up-line" style={{ fontSize: '1.2rem' }}></i>
                </a>
            )}
        </div>
    );
};

export default Scrollup;
