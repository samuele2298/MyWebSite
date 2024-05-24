import React from 'react';
import styles from '../styles/Passions.module.scss';

const Passions: React.FC = () => {
    return (
        <section id="passions" className={styles.passions}>
            <div className={styles.title}>

                <h4>Passions</h4>
                <h2>My interest and passions</h2>

            </div>

            <div className={styles.cards}>

                <div className={styles.card}>
                    <div className={styles.comunication_card}>
                        <h2>Public Speaking</h2>
                        <p>
                            In every word spoken and every gesture shared, lies the vibrant melody of my passion for communication, orchestrating harmonies that resonate across hearts and minds.
                        </p>

                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.youtube_card}>
                        <h2>Youtube</h2>
                        <p>
                            For the past year on YouTube, I&apos;ve woven narratives and painted moments, transforming the ordinary into extraordinary tales that dance across screens and hearts alike.
                        </p>

                    </div>
                </div>


                <div className={styles.card}>
                    <div className={styles.chess_card}>
                        <h2>Chess</h2>
                        <p>
                            In the silent dance of pieces and the thunderous roar of minds clashing, my passion for chess blooms, a tapestry of strategy and tactics woven with each move, each choice a stroke of genius on the infinite canvas of the board.
                        </p>

                    </div>
                </div>


                <div className={styles.card}>
                    <div className={styles.investment_card}>
                        <h2>Investment</h2>
                        <p>
                            Amidst the ever-shifting tides of markets, I&apos;ve honed my craft, blending analysis with intuition, riding the currents of opportunity, and sculpting wealth from the chaos of uncertainty.
                        </p>

                    </div>
                </div>


            </div>

        </section>
    );
};

export default Passions;
