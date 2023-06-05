import AnchorLink from "react-anchor-link-smooth-scroll";

function Home(props){

    return(
        <div id="home" className={props.darkMode ? "dark" : ""}>
            
{/*            
                    <div id="squareElem"></div>
                    <div className="squares top"></div>
                    <div className="squares right"></div>
                
                    <div className="squares corner one"></div>
                    <div className="squares corner two"></div>
                    <div className="squares corner three"></div> */}
          
                
           
            
           
            
            <div id="hero">
                <div>
                    <h1>WELCOME</h1>
                    <h2>I am Ági and</h2>
                    <p> an enthusiastic</p>
                    <h3><span className="green">Frontend</span> developer / <span className="green">UI</span> designer</h3>
                    <hr></hr>
                </div>

                <AnchorLink href='#projects' ><button id="ctaBtn"  className="btn">See more</button></AnchorLink>
            </div>
               
        </div>
    )
}

export default Home