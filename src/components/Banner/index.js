import { useState, useEffect } from 'react';
import axios from '../../api/axios';
import requests from '../../api/requests';
import "./Banner.css";

function Banner() {
    const [movie, setMovie] = useState([]);
    const [isloading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchUpcoming);
            const rand = Math.floor(Math.random() * request.data._embedded.items.length);
            setMovie(
                request.data._embedded.items[rand]
            );
            setIsLoading(false);
        }
        fetchData();
    }, []);

    console.log(movie?.thumbnail?.large);

    return (
        <header className="banner"
            style = {{
                backgroundSize: "cover",
                backgroundImage: `url(${movie?.additional_images?.aspect_ratio_2_3.large})`,
                backgroundPosition: "top center",
            }}
        >
            <div className = "banner_contents">
                <h1 className="banner_title">
                    {movie?.name}
                </h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List +</button>
                </div>
            </div>
            <div className="banner_fadeBottom" />
        </header>
        
    )
}

export default Banner