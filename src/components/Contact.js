import React from 'react'

function Contact() {
  return (
      <>
      <center>
          <div id="contactContainer">
    
    
    <h4>Contact me</h4>
    <center>
    <form>
       <table className='table2' style={{textAlign:'center'}}>
        <tr>
            <td>
                <input type="text" placeholder='Name'/>
            </td>

        </tr>
        <tr>
            <td>
                <input type="email" placeholder='Email'/>
            </td>
        </tr>
        <tr>
            <td>
            <textarea rows='4' cols='50' placeholder="Enter text here"></textarea>
            </td>
        </tr>
        <tr>
            <input type='submit' value='Submit'/>
        </tr>
       </table>
     
    </form>
    </center>
      <br></br>
            <p style={{color:'white'}}>I have many more exciting projects! But I hope you understood what I can bring to the table.</p>
            <p style={{color:'white'}}>Copyrights &copy;  SamanjaCartagena. 2022</p>

            </div>
            </center>
            </>
  )
}

export default Contact