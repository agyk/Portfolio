function Home(){
    return(
        <div id="home">
            <div id="squareElem"></div>
            <div class="squares top"></div>
            <div class="squares right"></div>
          
                 <div class="squares corner one"></div>
                 <div class="squares corner two"></div>
                 {/* <div class="squares corner three"></div> */}
                 {/* <div class="squares corner four"></div> */}
           
            <nav>
                <img id="homeImg" src="/img/home.svg" alt="home icon"/>
                <a >About me</a>
                <a >Contact</a>
            </nav>
            <div id="hero">
                <h1>WELCOME</h1>
                <h2>I'am Ági and</h2>
                <p>i am an enthusiastic</p>
                <h3><span className="green">Frontend</span> developer/<span className="green">UI</span> designer</h3>
                <button id="ctaBtn">See more</button>
            </div>
                <hr></hr>
        </div>
    )
}

export default Home