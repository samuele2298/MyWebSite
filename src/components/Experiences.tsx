import React from 'react';
import styles from '../styles/Experiences.module.scss';

const Experiences: React.FC = () => {
    return (
        <section id="experiences" className={styles.experiences}>
            <div className={styles.title}>
                <h4>Experience</h4>
                <h2>My Work Timeline</h2>
            </div>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.col_md_12}>
                        <div className={styles.main_timeline}>
                            <div className={styles.timeline}>
                                <div className={styles.timeline_content}>
                                    <div className={styles.timeline_icon}>
                                        <i className={styles.fa_fa_rocket}></i>
                                    </div>
                                    <h3 className={styles.title}>Graduated in Engineering</h3>
                                    <p className={styles.description}>
                                        The culmination of my computer engineering journey: a triumphant finale marking the completion of my undergraduate studies, filled with invaluable experiences and newfound knowledge.                                    </p>
                                    <div className={styles.timeline_year}>2023</div>
                                </div>
                            </div>
                            <div className={styles.timeline}>
                                <div className={styles.timeline_content}>
                                    <div className={styles.timeline_icon}>
                                        <i className={styles.fa_fa_rocket}></i>
                                    </div>
                                    <h3 className={styles.title}>Edooko</h3>
                                    <p className={styles.description}>
                                        Embark on a fun-filled educational adventure with Malienutica, a captivating e-learning quiz app designed to engage and inspire kids.                                    </p>
                                    <div className={styles.timeline_year}>2023</div>
                                </div>
                            </div>
                            <div className={styles.timeline}>
                                <div className={styles.timeline_content}>
                                    <div className={styles.timeline_icon}>
                                        <i className={styles.fa_fa_rocket}></i>
                                    </div>
                                    <h3 className={styles.title}>UnipolSai</h3>
                                    <p className={styles.description}>
                                        Steering deployment operations seamlessly with UnipolSai, leveraging IBM technologies such as DB2 and WebSphere Application Server to ensure robust and efficient system functionality.                                    </p>
                                    <div className={styles.timeline_year}>2023</div>
                                </div>
                            </div>
                            <div className={styles.timeline}>
                                <div className={styles.timeline_content}>
                                    <div className={styles.timeline_icon}>
                                        <i className="fa fa-rocket"></i>
                                    </div>
                                    <h3 className={styles.title}>UndiciZeroUno</h3>
                                    <p className={styles.description}>
                                        Driving innovation and excellence as a Java developer at UnidiciZeroUno, contributing to cutting-edge projects and pushing the boundaries of technology.                                    </p>
                                    <div className={styles.timeline_year}>2024</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Experiences;
