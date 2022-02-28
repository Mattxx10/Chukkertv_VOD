import image from "../../resources/images/newCTVLogo.svg";
import "./Nav.css";
import { useEffect, useState } from "react";

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100){
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return(
        <div className={`nav ${show && "nav_black"}`}>
            <img
                className="nav_logo"
                src={image}
                alt="chukkertv Logo"
            />
        </div>
    )
}

export default Nav