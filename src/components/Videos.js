import React from 'react'
import Typed from 'react-typed';
import mark from '../images/markw.jpg';
import evergreen from '../images/evergreenPhoto.PNG';
import bride from '../images/bridal.jpg'

function Videos() {
  return (
      <center>
     
    <div id='videosContainer' >
    <h3 style={{color:'white'}}>Due to privacy concerns, I cannot show you all the codes of all of my projects but I will show as much as possible</h3>
      <Typed 
                className='typed-text2'
                strings={[ "Interesting Projects"]}
                typeSpeed={200}
                backSpeed={200}
                loop
                
            />
            <table>
            
                <tr>
                    <td>
                    <center>
                    <h4>Mark Wahlberg Youth Foundation</h4>
                    <a href="https://www.markwahlbergyouthfoundation.org/">
                        <img src={mark} width="560px" height="315px"/></a>
                        </center>
                    </td>
                    <td>
                    <center>
                    <h4>Salon Ziba</h4>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/hSF2TMFj2UA" title="YouTube video player" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                    </center>
                    </td>
                    <td>
                    <center>
                    <h4>Chat Apps</h4>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/p8KbhbG4FnI"
                     title="YouTube video player"
                      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                          
                      </iframe>
                      </center>
                    </td>
                </tr>
                <tr>
                    <td>
                    <center><h4>Tesla Front End</h4>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/UaXhqILPAjw" 
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                   </center>
                    </td>
                    <td>
                    <center><h4>Chat App with MongoDB</h4>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/2bFbO-J93JQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </center>
                    </td>
                
                    
                </tr>
                <tr>
                <td>
                <center>
                <h4>Search filters with AI</h4>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/qGeateI0NsQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </center>
                    </td>
                    <td>
                    <center>
                    <h4>Netflix Clone with Machine Learning</h4>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/UP6kpQ5xTR8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>      
                                 </center>
                                  </td>
                                  
                </tr>
                <tr>
                    <td>
                    <center>
                    <h4>Evergeen Segment Library</h4>
                    <a href="https://evergreen.segment.com/">
                        <img src={evergreen} width="560px" height="315px"/></a>
                        </center>
                    </td>
                    <td>
                    <center>
                    <h4>Beena Beauty Salon</h4>
                    <a href="http://www.beenabeautysalon.com/">
                        <img src={bride} width="560px" height="315px"/></a>
                        </center>
                    </td>
                </tr>
                
            </table>
    </div>
    </center>
  )
}

export default Videos