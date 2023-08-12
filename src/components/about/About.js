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
                    <img src={process.env.PUBLIC_URL + "/press_photo_2.jpg"} alt='portrait'/>
                </div>
                <div className='about__icons_container'>
                    <div className='about__top_row_link_one' id='about__id'>
                        <a href="https://github.com/gwebb17?tab=repositories"><img src={process.env.PUBLIC_URL + "/github_icon.png"} alt='portrait'/></a>                 
                    </div>
                    <div className='about__top_row_link_two'>
                        <a href="https://www.linkedin.com/in/grant-webb17/"><img src={process.env.PUBLIC_URL + "/linked_in_icon.png"} alt='LinkedIn Logo'/></a>
                    </div>
                    <div className='about__top_row_link_three'>
                        <a href="https://www.instagram.com/oligarchywithers/"><img src={process.env.PUBLIC_URL + "/ig_icon.png"} alt='IG Logo'/></a>
                    </div>
                </div>
            </div>
            <div className='about__second_row_container'>
                <h2 className='about__header_text'>
                    ABOUT
                </h2>
                <div className='about__left_text_container'>
                    <p className='p_text_line_one'>
                        My name is Grant Webb, based in Portland OR 
                    </p>
                    < p className='p_text_line_two'>
                        I'm passionate about programming and music
                    </p>
                    <p className='p_text_line_three'>
                        Currently a full-stack developer for <a href="https://funkyouter.space" target="_blank" className={'fos_glow_link'}>Funky Outer Space</a>
                    </p>
                    <p className='p_text_line_three'>
                        Open for collaboration {/*make collaboration a link to contact section*/}
                    </p>
                </div>
            </div>                  
        </div>
    );
}

export default About;