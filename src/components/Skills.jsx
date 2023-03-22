

function Skills(props){
    return(
        <div id="skills" className={props.darkMode ? "dark" : ""}>
            <p>Skills</p>
            <hr></hr>
            <div id="imgSkills">
                <img src="/img/figma.png"/>
                <img src="/img/ps.png"/>
                <img src="/img/html.png"/>
                <img src="/img/css.png"/>
                <img src="/img/js.png"/>
                <img src="/img/React.png"/>

            </div>
        </div>
    )
}

export default Skills