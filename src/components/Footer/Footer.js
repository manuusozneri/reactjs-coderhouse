import React from 'react';
import './Footer.css';
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter} from 'react-icons/fa'
const footer = () => {
    return(
        <div className="footer">
            <div className="footer-container">
                <div className="footer-title">
                    <h2>JohnDoe</h2>
                    <h4>Sitio desarrollado por Manuel Usoz</h4>
                </div>
                <div className="footer-left-column">
                    <div className="location">
                        <FaSearchLocation size={20} style={{color: '#fffff', marginRight: '2rem'}}/>
                        <div>
                            <p>123 Houston St.</p>
                            <h4>Houston, Tx</h4>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{color: '#fffff', marginRight: '2rem'}}/>1-800-123-456</h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{color: '#fffff', marginRight: '2rem'}}/>john@example.com</h4>
                    </div>
                </div>
                <div className="footer-right-column">
                    <h4>About the company</h4>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <div className="social">
                    <FaFacebook style={{color: '#fffff', marginRight: '2rem'}}/>
                    <FaTwitter style={{color: '#fffff', marginRight: '2rem'}}/>
                    <FaLinkedin style={{color: '#fffff', marginRight: '2rem'}}/>
                </div>
                </div>
            </div>
        </div>

    );

}
export default footer;