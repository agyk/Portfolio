import mail from'../assets/img/mail.png'
import linked from'../assets/img/linkedin.png'

function Contact(props){
    return(
        <div>
            <div id="about" className={props.darkMode ? "dark" : ""}>

                <h4>About me</h4>
                <hr></hr>
                <h5>2022 - Codecool - Junior Frontend developer </h5>
                <p id="text_about">I finished my studies at Codecool in 2023 january. My hobbies are coding and photography. </p>
                
            </div>

            <div id="contact">
                <h4>Contact</h4>
                <hr></hr>
                <div id="contact_links">

                    <a href="https://www.linkedin.com/in/%C3%A1gnes-kov%C3%A1cs-a1331a25a/">
                        LinkedIn
                        <img id="linked" src={linked}/>
                    </a>
                    <a> Email
                        <img id="mail" src={mail}/>
                    </a>
                </div>
            </div>
            <p id="footer_text"> &lt; Let&apos; s work together! /&gt;</p>
        </div>
    )
}

export default Contact