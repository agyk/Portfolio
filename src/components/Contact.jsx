function Contact(){
    return(
        <div>
            <div id="about">

                <h4>About me</h4>
                <hr></hr>
                <h5>2022 - Codecool - Frontend developer </h5>
                <p id="text_about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit tempore nulla consectetur aut facere, cum sunt, aperiam necessitatibus consequatur distinctio voluptate, dignissimos nobis id ut voluptatem cupiditate repudiandae laudantium harum.</p>
                
            </div>

            <div id="contact">
                <h4>Contact</h4>
                <hr></hr>
                <div id="contact_links">

                    <a href="https://www.linkedin.com/in/%C3%A1gnes-kov%C3%A1cs-a1331a25a/">
                        LinkedIn
                        <img id="linked" src="img/linkedin.png"/>
                    </a>
                    <a> Email
                        <img id="mail" src="img/mail.png"/>
                    </a>
                </div>
            </div>
            <p id="footer_text"> &lt; Let&apos; s work together! /&gt;</p>
        </div>
    )
}

export default Contact