import React from 'react';
import Typical from 'react-typical'; 

import "../Home/Profile.css"

export default function Profile() {

    return (
      <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                    <a href='https://www.facebook.com/profile.php?id=100060437647445' target='_blank' rel="noreferrer">
                        <i className='fa fa-facebook-square'></i>
                    </a>
                    <a href='https://twitter.com/narek2000000000' target='_blank' rel="noreferrer">
                        <i className='fa fa-twitter-square'></i>
                    </a>
                    <a href='https://www.instagram.com/narek_sargsyan_444/' target='_blank' rel="noreferrer">
                        <i className='fa fa-instagram'></i>
                    </a>
                    </div>
                </div>

                <div className='profile-details-name'>
                    <span className='primary-text'>
                    {" "}
                    Hello, I`M <span className='highlighted-text'>Narek</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                            {" "}
                            <Typical
                                loop={Infinity}
                                steps={[
                                    "Web Dev🖥️",
                                    2350,
                                    "Full Stack Dev😎",
                                    2350,
                                    "Game Developer🌐",
                                    2350,
                                    "React/React Native Dev⚛️",
                                    2350,
                                    "Ethusiastic Dev🔵",
                                    2350,
                                ]}
                            />
                        </h1>
                        <span className='profile-role-tagline'>
                            Knack of buildin applications with front and back end operations.
                        </span>
                    </span>
                </div>
                <div className='profile-options'>
                    <a href='https://www.upwork.com/freelancers/~01b7d6c709cac5d4f2'>
                        <button className='btn primary-btn'>
                            {""}
                            Hire Me
                        </button>
                        </a>
                        <a href='resume.pdf' download='Narek`s Resume'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                </div>
            </div>
            <div className='profile-picture'>
                <div className='profile-picture-background'>

                </div>
            </div>
        </div>
      </div>
    )
}
