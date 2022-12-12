import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Form } from 'react-router-dom'
import { useRef } from 'react'


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()
    const sendEmail = (e) => {
      e.preventDefault();
      
      emailjs.sendForm('service_zfn9u8n', 'template_92444aq', form.current, 'GotHIBHPj5_ug02Mx')
        .then(() => {
           alert('Message successfully sent!')
           window.location.reload(false)
        }, () => {
           alert('Failed to send the message, please try again')
        });
        e.target.reset()
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);

        return () => {
            clearTimeout(timer)
        }
    });


    return(
        <>
        <div className = 'container contact-page'>
            <div className ='text-zone'>
            <h1>
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={['İ','l','e','t','i','ş','i','m',' ','B','ö','l','ü','m','ü']}
                idx={15}
                />
            </h1>
            <p>
            Bu bölümden aklınızdaki projeleri ve görüşme taleplerinizi iletebilirsiniz, tarafımızdan en kısa sürede geri dönüş sağlanacaktır.
            </p>
            <div className='contact-form'>
            <form ref = {form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>

            </div>

            </div>
        </div>
        <Loader type = "pacman" />
        </>
    )
    
}



export default Contact