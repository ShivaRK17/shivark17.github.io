import React, { useState,useEffect } from 'react'
import './Footer.css'
import { FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
    const [views, setViews] = useState(0)
    const getCount = async () => {
        const url = 'https://counter10.p.rapidapi.com/?ID=shahrukh&COLOR=black&CLABEL=srk';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'acd0415517msh71ac912bea0fdedp1bf0f5jsn035042cc9694',
                'X-RapidAPI-Host': 'counter10.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            setViews(result.message)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getCount();
    }, [])
    
    return (
        <>
            <div className="footer">
                <div className="footer-container">
                    <div className="left">
                        <div className="location it">
                            <FaHome size={20} className='ficon' />
                            <span className='socdet'>Hanumakonda Telangana</span>
                        </div>
                        <div className="phone it">
                            <FaPhoneAlt size={20} className='ficon' />
                            <span className='socdet'>+91 8688603971</span>
                        </div>
                        <div className="email it">
                            <FaMailBulk size={20} className='ficon' />
                            <span className='socdet'>shivarkcodes@gmail.com</span>
                        </div>
                    </div>
                    <div className="right">
                        <h3>About Me</h3><br />
                        <p>I am Shiva Rama Krishna, Student at NIT Warangal. I enjoy Reading Books, Origami and Playing Keyboard.</p>
                        <div className="social">
                            <Link target='_blank' to='https://github.com/ShivaRK17/'><FaGithub size={40} className='ficon fgithub' /></Link>
                            <Link target='_blank' to='https://www.linkedin.com/in/shiva-rama-krishna-jakkepalli'><FaLinkedin size={40} className='ficon flinkedin' /></Link>
                            <Link target='_blank' to='https://www.instagram.com/_.shivark._/'><FaInstagram size={40} className='ficon finsta' /></Link>
                            <Link target='_blank' to='https://wa.me/+918688603971'><FaWhatsapp size={40} className='ficon fwap' /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="views-container">
                Number of Visits: {views} 
            </div>
        </>
    )
}

export default Footer