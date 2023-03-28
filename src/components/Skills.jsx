import figma from '../assets/img/figma.png'
import ps from '../assets/img/ps.png'
import html from '../assets/img/html.png'
import css from '../assets/img/css.png'
import js from '../assets/img/js.png'
import React from '../assets/img/React.png'

function Skills(props){
    return(
        <div id="skills" className={props.darkMode ? "dark" : ""}>
            <p>Skills</p>
            <hr></hr>
            <div id="imgSkills">
                <img src={figma}/>
                <img src={ps}/>
                <img src={html}/>
                <img src={css}/>
                <img src={js}/>
                <img src={React}/>

            </div>
        </div>
    )
}

export default Skills