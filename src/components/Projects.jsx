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
                    <a href="https://github.com/agyk/weathherAPI" target="_blank">code </a>
                </div>
                <div className="work">
                    <img src={imgGal} />
                    <p className="work_name">Image Gallery</p>
                    <a href="https://github.com/agyk/PhotoGallery" target="_blank">code</a>
                </div>
                <div className="work">
                    <img src={warhol} />
                    <p className="work_name">Art gallery</p>
                    <a href="https://github.com/agyk/ArtGallery" target="_blank">code</a>
                </div>
                <div className="work">
                    <img src={aniart} />
                    <p className="work_name">Artist landing page</p>
                    <a href="https://github.com/agyk/ani-art" target="_blank">code</a>
                </div>
            </div>
            
            
        </div>
    )
}

export default Projects