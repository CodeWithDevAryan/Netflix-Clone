// MovieCard.jsx
import { useState, useEffect ,useRef} from "react";
import '../CSS/MovieCard.css';
import Movies from "../Javascript/MovieData";

function MovieCard({ setShowLeftButton, setShowRightButton, scrollContainerRef,BgVisibilty,SetSelectedMovieIndex }) {

    useEffect(() => {
        if (!scrollContainerRef || !scrollContainerRef.current) return;
        const Scroll_Container = scrollContainerRef.current;
        if (!Scroll_Container) return;

        const handleScroll = () => {
            const scrollLeft = Scroll_Container.scrollLeft;
            const maxScrollLeft = Scroll_Container.scrollWidth - Scroll_Container.clientWidth;

            setShowLeftButton(scrollLeft > 15);
            setShowRightButton(scrollLeft < maxScrollLeft - 1);

            if (scrollLeft <= 15) {
                Scroll_Container.style.WebkitMaskImage = Scroll_Container.style.maskImage =
                    'linear-gradient(to right, rgba(0, 0, 0, 1) 0%, #000 10%, #000 90%, rgba(0, 0, 0, 0) 100%)';
            } else if (scrollLeft >= maxScrollLeft - 1) {
                Scroll_Container.style.WebkitMaskImage = Scroll_Container.style.maskImage =
                    'linear-gradient(to left, rgba(0, 0, 0, 1) 0%, #000 10%, #000 90%, rgba(0, 0, 0, 0) 100%)';
            } else {
                Scroll_Container.style.WebkitMaskImage = Scroll_Container.style.maskImage =
                    'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, #000 10%, #000 90%, rgba(0, 0, 0, 0) 100%)';
            }
        };

        Scroll_Container.addEventListener("scroll", handleScroll);
        return () => {
            Scroll_Container.removeEventListener("scroll", handleScroll);
        };
    }, [setShowLeftButton, setShowRightButton, scrollContainerRef]);

    const handleClick = (SelectedIndex) => {
        BgVisibilty();      
        SetSelectedMovieIndex(SelectedIndex);  
    };

    return (
        <section>
            <section className='scroll-container' id="Scroll-Container" ref={scrollContainerRef}>
                {Movies.map((Movie, index) => (
                    <section key={index}>
                        <div className='child' onClick={() => handleClick(index)}>
                            <span className='Span-movieCard'>{index + 1}</span>
                            <div className={`Movie-card movie-${index}`}>
                                <img src={Movie.Frame} alt={`Movie ${index + 1}`} className='imgcard' />
                            </div>
                        </div>
                    </section>
                ))}
                
            </section>
        </section>
    );
}

export default MovieCard;