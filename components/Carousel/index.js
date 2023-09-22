import React, { useState } from 'react';

function Carousel() {

    const slides = [
        {
            url: 'https://i.ibb.co/pRzdDxv/QQ-20230920170310.jpg',
        },
        {
            url: 'https://i.ibb.co/Fs8Bvvj/64bb82c5a5d656e5955d872678b33f4a.jpg',
        },
        {
            url: 'https://i.ibb.co/D1Dy0kf/01d513413b93162f4178faab99a3f00b.jpg',
        },

        {
            url: 'https://i.ibb.co/JsWq4Tc/4fae5d1fb0a7b375ab970b4a94240dfa.jpg',
        },
        {
            url: 'https://i.ibb.co/wSHbnzx/f96859d3dc41325866db3ce320261a80.jpg',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div>
            <div className='max-w-[1400px] h-[500px] w-full m-auto py-16 px-4 relative group'>
                <div
                    style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                    className='w-full h-full rounded-xl bg-center bg-cover duration-500'
                ></div>
                <button type="button" className="arrow flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
                    <svg onClick={prevSlide} className="w-8 h-8 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                </button>
                <button type="button" className="arrow flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
                    <svg onClick={nextSlide} stroke="white" className="w-8 h-8 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
            </div>
        </div>
    );
}

export default Carousel;