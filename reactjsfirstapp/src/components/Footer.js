import React from 'react'
import { Link } from 'react-router-dom';

import Button from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    join the Adventure newsleter to receive our best vacation deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time
                </p>
                <div className="input-areas">
                    <form action="">
                        <input type='email' name='email' placeholder='Your Email' className='footer-input'/>
                        <Button buttonStyle='btn--outline' className='btn'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-link">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Inventors</Link>
                        <Link to='/'>Terms of Services</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Inventors</Link>
                        <Link to='/'>Terms of Services</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Inventors</Link>
                        <Link to='/'>Terms of Services</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Inventors</Link>
                        <Link to='/'>Terms of Services</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            TRVL <i className='fab fa-typo3'/>
                        </Link>
                        <small className='website-rights'>TRVL ©  2020</small>
                        <div className="social-icons">
                            <Link 
                              className="social-icon-link facebook"
                              to='/'
                              target='_blank'
                              aria-label='Facebook'
                            >
                                <i className='fab fa-facebook-f'/>
                            </Link>
                            <Link 
                              className="social-icon-link instagram"
                              to='/'
                              target='_blank'
                              aria-label='Instagram'
                            >
                                <i className='fab fa-instagram'/>
                            </Link>
                            <Link 
                              className="social-icon-link linkedin"
                              to='/'
                              target='_blank'
                              aria-label='LinkedIn'
                            >
                                <i className='fab fa-linkedin'/>
                            </Link>
                            <Link 
                              className="social-icon-link youtube"
                              to='/'
                              target='_blank'
                              aria-label='Youtube'
                            >
                                <i className='fab fa-youtube'/>
                            </Link>
                            <Link 
                              className="social-icon-link twitter"
                              to='/'
                              target='_blank'
                              aria-label='Twitter'
                            >
                                <i className='fab fa-twitter'/>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;
