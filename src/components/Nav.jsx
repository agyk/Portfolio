import { useState } from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import {IoHomeOutline} from 'react-icons/io5'

function Nav(props){

    const [color,setNavColor]=useState(false)
    const changeColor = () =>{
        if(window.scrollY >= 120){
            setNavColor(true)
        }else{
            setNavColor(false)
    }
}

window.addEventListener("scroll", changeColor)
    return(
        <nav className={color? "nav_bg" :"" && props.darkMode ? "dark" : ""}>
                <AnchorLink href='#home'><IoHomeOutline id='homeIcon'/></AnchorLink>
                <AnchorLink href='#works'><a>Works</a></AnchorLink>
                <AnchorLink href='#about'><a>About me</a></AnchorLink>
                <AnchorLink href='#contact'><a>Contact</a></AnchorLink>
              
                <div className="toggler">
                    <p className="toggler_light">Light</p>
                    <div className="toggler_slider" onClick={props.toggleDarkMode}>
                        <div className="toggler_slider_circle"></div>
                    </div>
                    <p className="toggler_dark">Dark</p>
                </div>
            </nav>
    )
}

export default Nav