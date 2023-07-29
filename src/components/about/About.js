import React from 'react';
import { useState, useRef, useContext } from 'react';
import styles from './About.css';
import { githubIconWhite } from '../../utils';
import AppContext from '../../AppContext.js';


const About = () => {
    return (
        <div className='about__outer_container'>
            <div className='about__top_row_container'>
                <div className='about__text_image'>
                    <img src={process.env.PUBLIC_URL + "/press_photo_2.jpg"} alt='about section image'/>
                </div>
                <div className='about__icons_container'>
                    <div className='about__top_row_link_one' id='about__id'>
                        <a href="https://github.com/gwebb17?tab=repositories"><img src={process.env.PUBLIC_URL + "/github_icon.png"} alt='about section image'/></a>                 
                    </div>
                    <div className='about__top_row_link_two'>
                        <a href="https://funkyouter.space"><img src={process.env.PUBLIC_URL + "/something"} alt='FOS logo'/></a>
                    </div>
                </div>
            </div>
            <div className='about__second_row_container'>
                <h2 className='about__header_text'>
                    ABOUT
                </h2>
                <div className='about__left_text_container'>
                    <p className='p_text_line_one'>
                        I've got a lifelong love of creating and learning
                    </p>
                    < p className='p_text_line_two'>
                        This manifests in the form of building websites or creating music
                    </p>
                    <p className='p_text_line_three'>
                        Currently a full-stack developer for <a href="https://funkyouter.space"></a>Funky Outer Space
                    </p>
                </div>
            </div>                  
        </div>
    );
}

export default About;