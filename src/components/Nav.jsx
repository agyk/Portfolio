import { useState } from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import {IoHomeOutline} from 'react-icons/io5'
import {HiMenu} from 'react-icons/hi'

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

const [isNavExpanded, setIsNavExpanded] = useState(false)

    return(
        <>
        <HiMenu     

            onClick={() => {
                setIsNavExpanded(!isNavExpanded)}
                
            }
            id='menuIcon'></HiMenu>
      
        <nav className={
            // isNavExpanded ? "expand" : "" &&
            // color ? "nav_bg" :"" && 
             
            `${isNavExpanded ? "expand" : ""} ${color ? "nav_bg" :""} ${props.darkMode ? "dark" : ""}`
            }>
                <AnchorLink href='#home'><IoHomeOutline id='homeIcon'/></AnchorLink>
                <AnchorLink href='#works'><span>Works</span></AnchorLink>
                <AnchorLink href='#about'><span>About me</span></AnchorLink>
                <AnchorLink href='#contact'><span>Contact</span></AnchorLink>
                
                
                <div className="toggler">
                    <p className="toggler_light">Light</p>
                    <div className="toggler_slider" onClick={props.toggleDarkMode}>
                        <div className="toggler_slider_circle"></div>
                    </div>
                    <p className="toggler_dark">Dark</p>
                </div>
            </nav> 
               
            </>
    )
}

export default Nav