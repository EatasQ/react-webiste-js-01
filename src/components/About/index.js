import './index.scss'
import React, { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders';

const About = () => {   
    const [letterClass, setLetterClass] = useState('text-animate')

    
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);

        return () => {
            clearTimeout(timer)
        }
    });

    return (
    <>
    <div className ='container about-page'>
        <div className = 'text-zone'>
            <h1>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={['H','a','k','k','ı','m','ı','z','d','a', ' ', 'B','ö','l','ü','m','ü']}
                idx={15}
                />
            </h1>
            <h2>
                * Java script + React frontend Web sitesi geliştirme <br/>
                * C# programlama dili kullanılarak özel otomasyon programı geliştirme <br/>
                * Java programlama dili kullanılarak özel cep telefonu uygulaması geliştirme <br/>
                * Metaverse - AR / VR - blockchain kurulumu <br/>
                * E-Commerce sitesi geliştirme <br />
                * Python/C#/Selenium kullanılarak automated web bot geliştirme <br />
                * Özel Telegram botu geliştirme  <br />
                * Sql Database yapılandırması ve programlama <br />
                * Kişiye özel portfolyo sitesi hazırlama <br />
                * Unreal Engine 5 / C ++ ile Oyun geliştirme <br />
                * Blender - Iclone - Character Creator - Marvelous Designer  <br /> 
                * Adobe İllustrator - Adobe Photoshop - Premiere Pro - After Effects - Elements 3d <br /> 
                * Terragen - Eon Vue - World Creator - World Machine - Speed Tree - Plant Factory ile arazi programlama  <br />

            </h2>

        </div>

        <div className ='stage-cube-cont'>
                <div className="cubespinner">
                    <div className ='face1'>
                        <FontAwesomeIcon icon= {faAngular} color= "#DD0031" />
                    </div>
                    <div className ='face2'>
                        <FontAwesomeIcon icon= {faHtml5} color= "#F06529" />
                    </div>
                    <div className ='face3'>
                        <FontAwesomeIcon icon= {faCss3} color= "#28A4D9" />
                    </div>
                    <div className ='face4'>
                        <FontAwesomeIcon icon= {faReact} color= "#5ED4F4" />
                    </div>
                    <div className ='face5'>
                        <FontAwesomeIcon icon= {faJsSquare} color= "#EFD81D" />
                    </div>
                    <div className ='face6'>
                        <FontAwesomeIcon icon= {faGitAlt} color= "#EC4D28" />
                    </div>
                </div>
            </div>
    </div>
    <Loader type='pacman' />
    </>
    )
}

export default About