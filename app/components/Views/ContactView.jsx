'use client'
import Aos from 'aos'
import { useContext, useEffect, useRef, useState } from 'react'
import LangContext from '../../context/LangContext'
import styles from '../styles/ContactView.module.css'
import emailjs from '@emailjs/browser';

export const ContactView = () => {
    const form = useRef();
    const {texts} = useContext(LangContext) 
    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState(false)
    const [nice, setNice] = useState()
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();
        setModal(true)
        setLoading(true)
        emailjs.sendForm(
            'service_er9w69h', 
            'template_qr9ceft', 
            form.current, 
            'SkzhRrTte3ShlgxvS')
          .then((result) => {
            if(result.text === 'OK'){
                setNice(true)
                setLoading(false)
            setTimeout(() => {
                setModal(false)
            }, 3000);
            } else {
                setNice(false)
                setLoading(false)
                setTimeout(() => {
                    setModal(false)
                }, 3000);
            }
          }, (error) => {
              console.log(error.text);
          });

        form.current.reset();
      };

return (
    <>
    <section id='contact' className={styles.contact}>
        <div data-aos="zoom-in" className={styles.title}>
            <h1>
                {texts.contactTitle}
            </h1>
        </div>
        <form ref={form} onSubmit={sendEmail} className={styles.contactContainer}>
            <div className={styles.contactInputs}>
                <input  type="text" name='user_name' placeholder={texts.formNombre} />
                <input  type="email" name='user_email' placeholder={texts.formEmail} />
            </div>
            <div className={styles.contactMessage}>
                <textarea  name='message' placeholder={texts.formMensaje}></textarea>

                    <input type="submit" className={modal ? !loading ? nice ? styles.submitButtonOk : styles.submitButtonNok : styles.submitButtonNormal : styles.submitButtonNormal} value={modal ? loading ? texts.load : texts.emailSend : texts.formSubmit}/>

            </div>
        </form>
    </section>
    </>
)}