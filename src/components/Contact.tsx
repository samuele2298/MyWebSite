import React from 'react';
import styles from '../styles/Contact.module.scss';

const Contact: React.FC = () => {

    const handleLinkedinClick = () => {
        window.open('https://www.linkedin.com/in/samuelecarpani/', '_blank');
    }

    const handleGithubClick = () => {
        window.open('https://github.com/samuele2298', '_blank');
    }
    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.map}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.9379730986176!2d10.790988715571452!3d45.16055647909973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47814d2e0bc86c8f%3A0xb6eaee4a1c4d90f!2sMantua%2C%20Province%20of%20Mantua%2C%20Italy!5e0!3m2!1sen!2sus!4v1627016901544!5m2!1sen!2sus" allowFullScreen></iframe>

                <div className={styles.map_marker}></div>
            </div>

            <div className={styles.info} >
                <h4>Contact</h4>
                <h2>Stay in touch</h2>
                <h4>Email</h4>

                <p>samuelecarpani2@gmail.com</p>
                <h4>Phone</h4>

                <p>+39 345 7679 526</p>

                <div className={styles.social} >
                    <div className={styles.social_buttons} >



                        <div className={styles.linkedin} onClick={handleLinkedinClick}>
                        </div>

                        <div className={styles.github} onClick={handleGithubClick}>
                        </div>

                    </div>
                    <h6>@2024 Samuele Carpani</h6>

                </div>

            </div>


        </section >
    );
};

export default Contact;
