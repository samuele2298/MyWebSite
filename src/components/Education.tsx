import React from 'react';
import styles from '../styles/Education.module.scss';

const Education: React.FC = () => {
    return (
        <section id="education" className={styles.education}>
            <div className={styles.title}>

                <h4>Education</h4>
                <h2>My background</h2>

            </div>

            <div className={styles.cards}>


                <div className={styles.card}>

                    <div className={styles.university_card}>
                        <h4>ALMA MATER</h4>

                        <h2>Computer Engineering</h2>
                        <h4>Sept. 2019 - Sept.2023</h4>

                        <p>Summarizing my three-year computer
                            engineering trinale: a transformative
                            journey of theoretical learning, practical
                            projects, and collaborative problem-solving,
                            fostering a deep understanding of computer
                            systems and technologies.
                        </p>
                    </div>

                </div>



                <div className={styles.card}>
                    <div className={styles.aloud_card}>
                        <h4>ALOUD</h4>

                        <h2>Music Production</h2>
                        <h4>Sept. 2017 - Sept.2019</h4>

                        <p>
                            An immersive journey blending theoretical knowledge, hands-on experience, and artistic exploration, nurturing my passion for music and honing my skills in audio production and composition.
                        </p>

                    </div>

                </div>

                <div className={styles.card}>
                    <div className={styles.luosi_card}>
                        <h4>I.G. LUOSI</h4>

                        <h2>Accounting</h2>
                        <h4>Sept. 2012 - Sept.2017</h4>

                        <p>
                            A comprehensive educational pursuit blending financial theory, practical application, and analytical skills, equipping me with a strong foundation in accounting principles and practices.
                        </p>

                    </div>

                </div>






            </div>

        </section>
    );
};

export default Education;
