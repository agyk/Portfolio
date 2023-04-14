import weather from'../assets/img/weather.png'
import imgGal from'../assets/img/photoGal.png'
import aniart from'../assets/img/aniart.png'
import warhol from'../assets/img/warhol.png'

function Projects(props){
    return(
        <div id="projects" className={props.darkMode ? "dark" : ""}>
            <h4>Projects / works</h4>
            <hr></hr>
            <div id="works">

                <div className="work">
                    <img src={weather}/>
                    <p className="work_name">Weather App usig weather API</p>
                </div>
                <div className="work">
                    <img src={imgGal} />
                    <p className="work_name">Image Gallery</p>
                </div>
                <div className="work">
                    <img src={warhol} />
                    <p className="work_name">Art gallery</p>
                </div>
                <div className="work">
                    <img src={aniart} />
                    <p className="work_name">Artist landing page</p>
                </div>
            </div>
            
            
        </div>
    )
}

export default Projects