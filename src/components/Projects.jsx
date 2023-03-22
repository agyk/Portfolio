function Projects(props){
    return(
        <div id="projects" className={props.darkMode ? "dark" : ""}>
            <h4>Projects / works</h4>
            <hr></hr>
            <div id="works">

                <div className="work">
                    <img src="/img/weather.png"/>
                    <p className="work_name">Weather App usig weather API</p>
                </div>
                <div className="work">
                    <img src="/img/imgGal.png" />
                    <p className="work_name">Image Gallery</p>
                </div>
                <div className="work">
                    <img src="/img/imgGal.png" />
                    <p className="work_name">Art gallery</p>
                </div>
                <div className="work">
                    <img src="/img/imgGal.png" />
                    <p className="work_name">Artist landing page</p>
                </div>
            </div>
            
            
        </div>
    )
}

export default Projects