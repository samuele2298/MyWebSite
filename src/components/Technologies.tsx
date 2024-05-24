import React from 'react';
import styles from '../styles/Technologies.module.scss';

const Technologies: React.FC = () => {
    return (
        <section id="technologies" className={styles.technologies}>
            <div className={styles.title}>

                <h4>Technologies</h4>
                <h2>My Favorite Technologies</h2>

            </div>

            <div className={styles.cards}>
                <div className={styles.card}>
                    <div className={styles.flutter_card}>
                        <h2>Flutter</h2>
                        <p>Flutter: A versatile framework for crafting high-performance, natively compiled applications across multiple platforms with a single codebase.</p>

                    </div>

                </div>

                <div className={styles.card}>
                    <div className={styles.react_card}>
                        <h2>React.js</h2>
                        <p>React: A JavaScript library for building interactive user
                            interfaces efficiently, favored for its
                            component-based architecture and virtual DOM.</p>

                    </div>

                </div>

                <div className={styles.card}>
                    <div className={styles.node_card}>
                        <h2>Node.js</h2>
                        <p>A runtime environment for executing JavaScript code
                            server-side, renowned for its speed, scalability, and event-driven architecture.</p>

                    </div>

                </div>


            </div>


        </section>
    );
};

export default Technologies;
