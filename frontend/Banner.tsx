import React from "react";

interface BannerProps {
    isVisible?: boolean;
}

const Banner: React.FC<BannerProps> = ({ isVisible = true }) => (
    <div 
        className={`fixed top-0 left-0 right-0 z-[60] flex flex-wrap items-center justify-center w-full h-[40px] sm:h-[44px] px-3 sm:px-4 font-medium text-xs sm:text-sm text-white text-center bg-gradient-to-b from-sky-500 to-sky-600 gap-2 sm:gap-3 transition-opacity duration-300 ${
            isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
    >
        <p className="flex-shrink-0">
            <span className="hidden sm:inline">EduVeda is 100% offline and runs entirely on your device. </span>
            <span className="sm:hidden">100% offline - needs local setup</span>
        </p>
    </div>
);

export default Banner;