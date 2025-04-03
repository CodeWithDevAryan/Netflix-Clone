import '../CSS/TrendingNow.css';
import React, { useState, useRef } from "react";
import MovieCard from './MovieCard';

function TrendingNow({ToggleBGVisibility, SelectedIndexVal}) {
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);
    const scrollContainerRef = useRef(null);

    const scrollAmount = 840; // Adjust based on how much you want to scroll each time

    const MoveScrollToStart = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        }
    };

    const MoveScrollToEnd = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    

    return (
        <section className="TrendingNow">
            <div className="TrendingNow-Title">
                <h3>Trending Now</h3>
            </div>
            <section className='TrendingNowMoviesCoverDiv-Main-Container'>
                <button 
                    className='Scrolling-btn Left-Btn' 
                    style={{ 
                        opacity: showLeftButton ? 1 : 0, 
                        transform: showLeftButton ? 'translateX(0)' : 'translateX(-30px)', 
                        pointerEvents: showLeftButton ? 'auto' : 'none' 
                    }}
                    onClick={MoveScrollToStart}
                >
                    <i className="fa-solid fa-angle-left"></i>
                </button>

                <MovieCard 
                    setShowLeftButton={setShowLeftButton} 
                    setShowRightButton={setShowRightButton}  
                    scrollContainerRef={scrollContainerRef} 
                    BgVisibilty={ToggleBGVisibility}
                    SetSelectedMovieIndex={SelectedIndexVal}
                />

                <button 
                    className='Scrolling-btn Right-Btn' 
                    style={{ 
                        opacity: showRightButton ? 1 : 0, 
                        transform: showRightButton ? 'translateX(0)' : 'translateX(30px)', 
                        pointerEvents: showRightButton ? 'auto' : 'none' 
                    }}
                    onClick={MoveScrollToEnd}
                >
                    <i className="fa-solid fa-angle-right"></i>
                </button>
            </section>
        </section>
    );
}

export default TrendingNow;
