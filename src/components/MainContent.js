import React from 'react'

function MainContent(){
    return(
        <div className='main-content'>
            <div className='intro'>
                <h1>Sean Brasse</h1>
                <h2>Full Stack Developer</h2>
                <a className='portfolio' href='https://sean-brasse-portfolio.webflow.io/' target="_blank" rel="noreferrer">My Portfolio</a>
            </div>
            <div className='contact'>
                <a className='email' href="mailto:seanbrasse@gmail.com?subject=Subject%20Here&body=Body%20Here" target="_blank" rel="noreferrer">
                    <i class="fas fa-envelope"></i> Email  
                </a>
                <a className='linkedin' href="https://www.linkedin.com/in/seanbrasse/" target="_blank" rel="noreferrer">
                    <i class="fab fa-linkedin"></i> LinkedIn 
                </a>
            </div>
            <div className='info'>
                <h3>About Me</h3>
                <p> I'm a Full Stack Software Engineer with a love for building simple and intuitive applications. I'm always paying really close attention to the apps I use and looking for ways to improve them to make both my life, and the life of others better. I work primarily in React with Node.js but I'm always open to learning something new. Hire me! </p>
                <h3>My Interests</h3>
                <p>Tech geek. Gym goer and car enthusiast. I love exploring my city and trying new things</p>
            </div>
        </div>
    )
}

export default MainContent;