import React from 'react';
import Link from 'next/link';
import styles from '../styles/Profile.module.scss';

const Profile: React.FC = () => {
    const handleLinkedinClick = () => {
        window.open('https://www.linkedin.com/in/samuelecarpani/', '_blank');
    }

    const handleGithubClick = () => {
        window.open('https://github.com/samuele2298', '_blank');
    }

    const scrollToContacts = () => {
        const contactsSection = document.getElementById('contact');
        if (contactsSection) {
            contactsSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error('Contacts section not found.');
        }
    }

    return (
        <section id="profile" className={styles.profile}>


            <div className={styles.image}> </div>

            <div className={styles.container}>

                <div className={styles.content}>
                    <h6>Hi, I am</h6>
                    <h5>Samuele Carpani</h5>
                    <h1>Front End Developer</h1>
                    <p>
                        I&apos;m a dedicated front-end developer, adept at crafting engaging user interfaces and responsive web experiences. With
                        a focus on intuitive design and client satisfaction, I&apos;m committed to delivering creative solutions and exceptional user experiences.
                    </p>
                </div>

                <div className={styles.link}>

                    <div className={styles.button} onClick={scrollToContacts}>
                        <p>Hire Me</p>

                    </div>

                    <div className={styles.social}>
                        <button className={styles.social_button}>
                            <div className={styles.linkedin} onClick={handleLinkedinClick}></div>
                        </button>
                        <button className={styles.social_button}>
                            <div className={styles.github} onClick={handleGithubClick}></div>

                        </button>

                    </div>


                </div>



            </div>


        </section>
    );
};

export default Profile;
