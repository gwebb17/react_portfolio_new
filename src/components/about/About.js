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
            
            <h2 className='about__header_text'>
                ABOUT
            </h2>
            <p className='about__text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Vestibulum sed arcu non odio euismod lacinia. Nunc vel risus commodo viverra maecenas accumsan lacus. Nunc id cursus metus aliquam. 
                Ac odio tempor orci dapibus ultrices in iaculis nunc. Lectus sit amet est placerat. Sed tempus urna et pharetra pharetra massa massa. 
                Fermentum iaculis eu non diam phasellus vestibulum. Dolor sit amet consectetur adipiscing elit duis tristique. Sed augue lacus viverra 
                vitae congue eu consequat ac felis. Tempor nec feugiat nisl pretium. Diam maecenas ultricies mi eget mauris pharetra et ultrices. Id 
                ornare arcu odio ut sem nulla. Nam aliquam sem et tortor consequat id. Morbi enim nunc faucibus a pellentesque. Sem nulla pharetra diam sit. 
                Aliquam nulla facilisi cras fermentum odio eu feugiat. Aliquet lectus proin nibh nisl condimentum id. Ac feugiat sed lectus vestibulum mattis 
                ullamcorper. Gravida cum sociis natoque penatibus et. Risus ultricies tristique nulla aliquet enim tortor at. Arcu bibendum at varius vel 
                pharetra. Pellentesque habitant morbi tristique senectus et.
            </p>
        </div>
    );
}

export default About;