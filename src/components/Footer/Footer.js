/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import "../Footer/Footer.css"

function Footer () {
    return (
        <footer>
           <div className="footerInfo">
                <p>Contact Info:</p>
                <a href="mailto: baileytrion@gmail.com" className="btn btn-outline-dark1"
                   target="_blank" rel="noopener noreferrer">Email</a>
                  <a href="https://github.com/trionb" 
                     target="_blank" rel="noopener noreferrer">
                       <i className="fab fa-github"
                          className="btn btn-outline-dark1">
                          GitHub</i>
                    </a> 
                      <a href="https://www.linkedin.com/in/trion-bailey-7717811a3/" 
                          target="_blank" rel="noopener noreferrer"><i
                          className="fab fa-linkedin" className="btn btn-outline-dark1">
                            LinkedIn</i>
                       </a>
                        <a href="download/Resume2020.pdf" 
                            className="btn btn-outline-dark1" 
                             target="_blank" type="submit"
                            download="resume2020.pdf">
                            Resume
                        </a>
            </div>
      </footer>
    );
}
export default Footer;