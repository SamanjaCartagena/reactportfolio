import React from 'react'
import Typed from 'react-typed';
import mark from '../images/markw.jpg';
import evergreen from '../images/evergreenPhoto.PNG';
import bride from '../images/bridal.jpg';
import mary from '../images/mary.jpg';
import sugar from '../images/sugar.PNG';

function Videos() {
  return (
      <center>
     
    <div id='videosContainer' >
    <h3 style={{color:'white'}}>Due to privacy concerns, I cannot display all the codes of my projects here.</h3>
   
      <Typed 
                className='typed-text2'
                strings={[ "Work Samples"]}
                typeSpeed={200}
                backSpeed={200}
                loop
                
            />
            <table>
            
                <tr>
                    <td>
                    <center>
                    <h4>Mark Wahlberg Youth Foundation</h4>
                    <a href="https://www.markwahlbergyouthfoundation.org/" target="_blank">
                        <img src={mark} width="560px" height="315px"/></a>
                        <p>Made with Squarespace</p>
                        </center>
                    </td>
                    <td>
                    <center>
                    <h4>Salon Ziba</h4>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/hSF2TMFj2UA" title="YouTube video player" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        <p>Made with wordpress woo commerce</p>

                    </center>
                    </td>

                </tr>
                
                <tr>
                    <td>
                    <center>
                    <h4>News Scraper App</h4>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/NLEHdVzik6k" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
                    <a href="https://medium.com/gitconnected/build-a-news-app-using-new-york-times-api-and-react-js-38faf2b3585" target="_blank">Click for codes</a>
                    </center>
                    </td>
                    <td>
                    <center>
                    <h4>Chat Apps</h4>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/p8KbhbG4FnI"
                     title="YouTube video player"
                      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                          
                      </iframe>
                      <a href="https://github.com/SamanjaCartagena/serverForChat" target="_blank">Click for codes</a>
                      </center>
                    </td>
                </tr>
                <tr>
                    <td>
                    <center><h4>Tesla Mobile App Clone</h4>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/UaXhqILPAjw" 
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                   <a href="https://github.com/SamanjaCartagena/TeslaMobile" target="_blank">Click for codes</a>
                   </center>
                    </td>
                    <td>
                    <center>
                    <h4>Evergreen Segment</h4>
                    <a href="https://evergreen.segment.com/">
                        <img src={evergreen} width="560px" height="315px"/></a>
                        <a href="https://github.com/SamanjaCartagena/evergreen" target="_blank">Click for codes</a>
                        </center>
                    </td>
                
                    
                </tr>
                <tr>
                <td>
                <center>
                <h4>Search filters with AI</h4>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/qGeateI0NsQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <a href="https://github.com/SamanjaCartagena/breakingBad" target="_blank">Click for Codes</a>
                    </center>
                    </td>
                    <td>
                    <center>
                    <h4>Netflix Clone with Machine Learning</h4>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/UP6kpQ5xTR8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>      
                                 <a href="https://github.com/SamanjaCartagena/NetflixProject" target="_blank">Click for codes</a>
                                 </center>
                                  </td>
                                  
                </tr>
                <tr>
                    <td>
                    <center>
                    <h4>Memorandum</h4>
                    <a href="https://www.memorandum.com/" target="_blank">
                        <img src={mary} width="560px" height="315px"/></a>
                        <p>Made with wordpress and PHP</p>
                        </center>
                    </td>
                    <td>
                    <center>
                    <h4>Beena Beauty Salon</h4>
                    <a href="http://www.beenabeautysalon.com/" target="_blank">
                        <img src={bride} width="560px" height="315px"/></a>
                        <p>Made with wordpress and PHP</p>
                        </center>
                    </td>
                </tr>
                <tr>
                <td>
                    <center>
                    <h4>Sugar Daddy Meet</h4>
                    <a href="https://www.sugardaddymeet.com/" target="_blank">
                        <img src={sugar} width="560px" height="315px"/></a>
                        <p>Made with Vanilla JavaScript, PHP and MYSQL</p>
                        </center>
                    </td>
                    <td>
                    <center>
                    <h4>CRUD Operations with Ruby on rails</h4>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/rYT48XW9n8o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <a href="https://github.com/SamanjaCartagena/rubyFromFreecodecamp" target="_blank">Click for codes</a>
                                            </center>
                    </td>
                </tr>
                
            </table>
    </div>
    </center>
  )
}

export default Videos