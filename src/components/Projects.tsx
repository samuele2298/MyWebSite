import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../styles/Projects.module.scss';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Project from './Project';
import Link from 'next/link';

const Projects: React.FC = () => {
    return (
        <section id="projects" className={styles.projects}>

            <div className={styles.title}>

                <h4>Projects</h4>
                <h2>Creative Work</h2>

            </div>


            <div className={styles.cards}>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={10}

                    modules={[Pagination]}

                >
                    <SwiperSlide>
                        <div className={styles.card}>
                            <Link
                                style={{ textDecoration: 'none' }}
                                href={"https://www.edooko.it/"}
                            >
                                <div className={styles.edooko_card}>

                                    <h1>Edooko</h1>

                                    <p>
                                        Edooko is a cutting-edge math tutoring app designed to help students improve their math skills through personalized and interactive lessons. Built with Flutter, Edooko offers a seamless and engaging user experience across both Android and iOS devices.                                    </p>

                                    <h3>What i does</h3>

                                    <div className={styles.tags}>
                                        <div className={styles.tag}>
                                            <h4>Front End</h4>
                                        </div>

                                        <div className={styles.tag}>
                                            <h4>Web Design</h4>
                                        </div>

                                        <div className={styles.tag}>
                                            <h4>UI/UX Design</h4>
                                        </div>
                                    </div>

                                    <h3>Stack</h3>

                                    <div className={styles.tags}>
                                        <div className={styles.tag}>
                                            <h4>Flutter</h4>
                                        </div>
                                        <div className={styles.tag}>
                                            <h4>Node.js</h4>
                                        </div>

                                    </div>


                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className={styles.card}>
                            <Link
                                style={{ textDecoration: 'none' }}
                                href={"https://github.com/samuele2298/LinearCar"}
                            >
                                <div className={styles.website_card}>
                                    <h1>LineaCar</h1>

                                    <p>
                                        Explore our innovative platform where cutting-edge technology meets the automotive world. Discover a seamless blend of user-friendly design and powerful functionality, crafted by a front-end developer with a passion for excellence.

                                    </p>
                                    <h3>What i does</h3>

                                    <div className={styles.tags}>
                                        <div className={styles.tag}>
                                            <h4>Front End</h4>
                                        </div>

                                        <div className={styles.tag}>
                                            <h4>Web Design</h4>
                                        </div>

                                    </div>

                                    <h3>Stack</h3>

                                    <div className={styles.tags}>
                                        <div className={styles.tag}>
                                            <h4>React.js</h4>
                                        </div>
                                        <div className={styles.tag}>
                                            <h4>Next.js</h4>
                                        </div>

                                    </div>



                                </div>
                            </Link>
                        </div>

                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={styles.card}>
                            <div className={styles.risiko_card}>

                                <h1>Risiko</h1>
                                <p>Experience strategic conquest in a digital realm with our Flutter and Node.js powered Risko game, backed by PostgreSQL for seamless multiplayer action.</p>
                                <h3>What i does</h3>

                                <div className={styles.tags}>
                                    <div className={styles.tag}>
                                        <h4>Full Stack</h4>
                                    </div>

                                    <div className={styles.tag}>
                                        <h4>Web Design</h4>
                                    </div>
                                    <div className={styles.tag}>
                                        <h4>Ui/Ux Design</h4>
                                    </div>
                                </div>

                                <h3>Stack</h3>

                                <div className={styles.tags}>
                                    <div className={styles.tag}>
                                        <h4>Flutter</h4>
                                    </div>
                                    <div className={styles.tag}>
                                        <h4>Node.js</h4>
                                    </div>
                                    <div className={styles.tag}>
                                        <h4>PostGreeSQL</h4>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={styles.card}>
                            <div className={styles.thesis_card}>

                                <h1>Thesis</h1>
                                <p>
                                    Discover our groundbreaking project harnessing Torch.js for deep learning LSTM models. Revolutionizing industries with unparalleled predictive capabilities, from healthcare to finance.                                </p>
                                <h3>What i does</h3>

                                <div className={styles.tags}>
                                    <div className={styles.tag}>
                                        <h4>Full Stack</h4>
                                    </div>

                                    <div className={styles.tag}>
                                        <h4>Data Engineer</h4>
                                    </div>

                                </div>

                                <h3>Stack</h3>

                                <div className={styles.tags}>
                                    <div className={styles.tag}>
                                        <h4>Pytorch</h4>
                                    </div>
                                    <div className={styles.tag}>
                                        <h4>Torch.js</h4>
                                    </div>
                                    <div className={styles.tag}>
                                        <h4>Html</h4>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </SwiperSlide>


                    ...
                </Swiper>

            </div>

            <div className={styles.mobile_cards}>


                <div className={styles.card}>
                    <div className={styles.edooko_card}>
                        <h1>Edooko</h1>
                        <p>Empower your math skills with Malieutica: a dynamic Flutter app offering interactive quizzes for seamless e-learning on both Android and the web.</p>
                        <h3>What i does</h3>

                        <div className={styles.tags}>
                            <div className={styles.tag}>
                                <h4>Front End</h4>
                            </div>
                            <div className={styles.tag}>
                                <h4>Web Design</h4>
                            </div>
                            <div className={styles.tag}>
                                <h4>Ui/Ux Design</h4>
                            </div>
                        </div>

                        <h3>Stack</h3>

                        <div className={styles.tags}>
                            <div className={styles.tag}>
                                <h4>Flutter</h4>
                            </div>
                            <div className={styles.tag}>
                                <h4>Node.js</h4>
                            </div>
                            <div className={styles.tag}>
                                <h4>MongoDB</h4>
                            </div>
                        </div>


                    </div>
                </div>


                <div className={styles.card}>
                    <div className={styles.risiko_card}>

                        <h1>Risiko</h1>
                        <p>Experience strategic conquest in a digital realm with our Flutter and Node.js powered Risko game, backed by PostgreSQL for seamless multiplayer action.</p>
                        <h3>What i does</h3>

                        <div className={styles.tags}>
                            <div className={styles.tag}>
                                <h4>Front End</h4>
                            </div>
                            <div className={styles.tag}>
                                <h4>Back End</h4>
                            </div>
                            <div className={styles.tag}>
                                <h4>Web Design</h4>
                            </div>
                            <div className={styles.tag}>
                                <h4>Ui/Ux Design</h4>
                            </div>
                        </div>

                        <h3>Stack</h3>

                        <div className={styles.tags}>
                            <div className={styles.tag}>
                                <h4>Flutter</h4>
                            </div>
                            <div className={styles.tag}>
                                <h4>Node.js</h4>
                            </div>
                            <div className={styles.tag}>
                                <h4>PostGreeSQL</h4>
                            </div>
                        </div>

                    </div>
                </div>


                <div className={styles.card}>
                    <div className={styles.thesis_card}>

                        <h1>Thesis</h1>
                        <p>
                            Discover our groundbreaking project harnessing Torch.js for deep learning LSTM models. Revolutionizing industries with unparalleled predictive capabilities, from healthcare to finance.                                </p>
                        <h3>What i does</h3>

                        <div className={styles.tags}>
                            <div className={styles.tag}>
                                <h4>Full Stack</h4>
                            </div>

                            <div className={styles.tag}>
                                <h4>Data Engineer</h4>
                            </div>

                        </div>

                        <h3>Stack</h3>

                        <div className={styles.tags}>
                            <div className={styles.tag}>
                                <h4>Pytorch</h4>
                            </div>
                            <div className={styles.tag}>
                                <h4>Torch.js</h4>
                            </div>
                            <div className={styles.tag}>
                                <h4>Html</h4>
                            </div>
                        </div>

                    </div>
                </div>


                <div className={styles.card}>
                    <div className={styles.website_card}>
                        <h1>This</h1>
                        <p>
                            Dive into my showcase of captivating projects, each a testament to my front-end development expertise. From dynamic websites to interactive
                            applications, explore a presentation of innovation and skill.

                        </p>
                        <h3>What i does</h3>

                        <div className={styles.tags}>
                            <div className={styles.tag}>
                                <h4>Front End</h4>
                            </div>

                            <div className={styles.tag}>
                                <h4>Web Design</h4>
                            </div>
                            <div className={styles.tag}>
                                <h4>Ui/Ux Design</h4>
                            </div>
                        </div>

                        <h3>Stack</h3>

                        <div className={styles.tags}>
                            <div className={styles.tag}>
                                <h4>React.js</h4>
                            </div>
                            <div className={styles.tag}>
                                <h4>Next.js</h4>
                            </div>

                        </div>

                    </div>
                </div>






            </div>

        </section>
    );
};

export default Projects;
