import React from 'react';
import {useRef, useState, useEffect} from 'react';
import axios from '../../api/axios';
import "./row.css";
import '../../resources/fonts/Poppins-Medium.ttf';

function Row({ title , fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [isLoaded, setLoaded] = useState(false);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data._embedded.items);
            setLoaded(true);
            return request;
        }
        fetchData();
        
    }, [fetchUrl]);

    const scrl = useRef();
    const scrlBtn1 = useRef();
    const scrlBtn2 = useRef();

    const scroll = (scrollOffset) => {
        scrl.current.scrollLeft += scrollOffset;
    };

    const displayScrollBtns = () => {
        scrlBtn1.current.style.visibility = "visible";
        scrlBtn2.current.style.visibility = "visible";
        scrlBtn1.current.style.opacity = "1";
        scrlBtn2.current.style.opacity = "1";
    }

    const hideScrollBtns = () => {
        scrlBtn1.current.style.visibility = "hidden";
        scrlBtn2.current.style.visibility = "hidden";
        scrlBtn1.current.style.opacity = "0";
        scrlBtn2.current.style.opacity = "0";
    }

    return(
        <div className="row" 
             onMouseOver={() => displayScrollBtns()}
             onMouseLeave={() => hideScrollBtns()}
        >
            <h2 className="row_title">{title}</h2>
            {isLoaded && <div 
                onClick={() => scroll(-820)}  
                className={`scroll_button scroll_left ${isLargeRow && "poster_button"}`}
                ref={scrlBtn1}>&lt;
            </div>}
            {isLoaded && <div 
                onClick={() => scroll(820)} 
                className={`scroll_button scroll_right ${isLargeRow && "poster_button"}`}
                ref={scrlBtn2}>&gt;
            </div>}
            <div className="row_posters" ref={scrl}>
                {movies.map(movie => (
                    <div className={`row_poster ${isLargeRow && "row_posterLarge" }`}>
                        <img
                        key ={movie.id}
                        src={`${isLargeRow ? movie.additional_images.aspect_ratio_2_3.large : movie.thumbnail.large}`} 
                        alt={movie.name} 
                        />
                        <div className={`poster_overlay ${isLargeRow && "largePoster_overlay"}`} />
                        <h3 className={`poster_name ${isLargeRow && "largePoster_name"}`}>{movie.name || movie.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Row;