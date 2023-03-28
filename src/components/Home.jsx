import {IoHomeOutline} from 'react-icons/io5'
import AnchorLink from "react-anchor-link-smooth-scroll";

function Home(props){
    let index = 0,
    interval = 1000;

const rand = (min, max) => 
  Math.floor(Math.random() * (max - min + 1)) + min;

const animate = star => {
  star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
  star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

  star.style.animation = "none";
  star.offsetHeight;
  star.style.animation = "";
}

for(const star of document.getElementsByClassName("magic-star")) {
  setTimeout(() => {
    animate(star);
    
    setInterval(() => animate(star), 1000);
  }, index++ * (interval / 3))
}

    return(
        <div id="home" className={props.darkMode ? "dark" : ""}>
            <div id="squareElem"></div>
            <div className="squares top"></div>
            <div className="squares right"></div>
          
                 <div className="squares corner one"></div>
                 <div className="squares corner two"></div>
                 <div className="squares corner three"></div>
                 {/* <div className="squares corner four"></div> */}
           
            <nav>
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
            <div id="hero">
                <div className="magic">
                    <span className='magic-star'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"> <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                    </span>
                    <span className='magic-star'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"> <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                    </span>
                    <span className='magic-star'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"> <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                    </span>
                    <h1>WELCOME</h1>
                </div>
                <h2>I am Ági and</h2>
                <p> an enthusiastic</p>
                <h3><span className="green">Frontend</span> developer/<span className="green">UI</span> designer</h3>
                <AnchorLink href='#projects' ><button id="ctaBtn"  className="btn">See more</button></AnchorLink>
            </div>
                <hr></hr>
        </div>
    )
}

export default Home