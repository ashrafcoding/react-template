import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from './Button'
import './footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the adventure newsletter to recieve our best vacation deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe any time
                </p>
                <div className="input-areas">
                    <form >
                        <input className="footer-input"  type="email" name="email" placeholder="Your email" />
                        <Button buttonStyle="btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/signup'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of services</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to='/signup'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of services</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/signup'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of services</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to='/signup'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of services</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            ASHRAF <i className="fab fa-typo3"></i>
                        </Link>
                    </div>
                    <div className="social-icons">
                        <Link 
                        className="social-icon-link facebook"
                        to='/'
                        target='_blank'
                        aria-label='facebook'
                        >
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link 
                        className="social-icon-link Instagram"
                        to='/'
                        target='_blank'
                        aria-label='Instagram'
                        >
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link 
                        className="social-icon-link youtube"
                        to='/'
                        target='_blank'
                        aria-label='youtube'
                        >
                            <i className="fab fa-youtube"></i>
                        </Link>
                        <Link 
                        className="social-icon-link twitter"
                        to='/'
                        target='_blank'
                        aria-label='twitter'
                        >
                            <i className="fab fa-twitter"></i>
                        </Link>
                        
                    </div>
                </div>
            </section>       
        </div>
    )
}

export default Footer
