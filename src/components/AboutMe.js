import React from 'react'
import Typed from 'react-typed';
import photo from '../images/portfolioPhoto.jpg';

function AboutMe() {
  return (
    <div id="aboutSection">
    <center>
    <Typed 
                className='typed-text1'
                strings={[ "About Me"]}
                typeSpeed={200}
                backSpeed={200}
                loop
                
            />
            <div id="aboutContainer">
            <div id="pic">
            <img className='portfolioPhoto' src={photo} />
                
            </div>
            <div id="rightText">
       <p style={{fontWeight:'bold',textAlign:'left'}}> My name is Samanja Cartagena. I am a developer, designer, programmer and digital markerter. Marketing is my forte I am extremely good at digital marketing and its 
       not only because I understand the technicalities of it. <br/>
       I have aggressive marketing strategies and SEO techniques that actually work. My clients are people from all over the world and from  all walks of life.
       My clients include beauty experts, animal lovers,dogs, a koala bear, celebrities, investment experts, professional sugar babies, stockbrokers, writers, hikers, 
       professional snugglers,
        body part models, amazon sellers, social media personalities, private investigators, only fans models etc.
         I will not just create your blog/e-commerce/website/app/software I will market it to the right people.
        You can expect a lot of exposure of your materials and if your work/idea is good you can expect some regular visitors and users.  
       I like working for the unusual. Any person with a great idea, great taste and great vision is very appealing to  me. If your ideas suck, I won't reply. My rate varies with the
       work involved but if I like you I will show you some million dollar projects I have worked on. I will share the secrets of their success. Why their online idea made so much money?   
       How it all happened? I will show you what I did for my high profile clients when we talk. Please do not contact me with boring ideas and dumb projects.  
       
       </p>
       </div>
       </div>
       </center>
    </div>
  )
}

export default AboutMe