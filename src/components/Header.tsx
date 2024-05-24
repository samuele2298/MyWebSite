import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.scss';

const Header: React.FC = () => {

    function handleLinkClick() {
        const checkbox = document.getElementById('menu-toggle') as HTMLInputElement;
        if (checkbox) {
            checkbox.checked = false;
        }
    }
    return (
        <>
            <div className={styles.header}>
                <div className={styles.container}>
                    <Link href="#">
                        <div className={styles.logoContainer}></div>
                    </Link>


                    <nav role="navigation">
                        <div className={styles.menuToggle} >

                            <input type="checkbox" id="menu-toggle" />


                            <span></span>
                            <span></span>


                            <ul className={styles.menu}>
                                <li className={styles.navItem}>
                                    <Link href="#" onClick={handleLinkClick}>Home</Link>
                                </li>
                                <li className={styles.navItem}>
                                    <Link href="#technologies" onClick={handleLinkClick}>Technology</Link>
                                </li>
                                <li className={styles.navItem}>
                                    <Link href="#projects" onClick={handleLinkClick}>Projects</Link>
                                </li>
                                <li className={styles.navItem}>
                                    <Link href="#experiences" onClick={handleLinkClick}>Experiences</Link>
                                </li>
                                <li className={styles.navItem}>
                                    <Link href="#education" onClick={handleLinkClick}>Education</Link>
                                </li>
                                <li className={styles.navItem}>
                                    <Link href="#passions" onClick={handleLinkClick}>Passion</Link>
                                </li>
                                <li className={styles.navItem}>
                                    <Link href="#contact" onClick={handleLinkClick}>Contact  </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>


                    <div className={styles.nav}>
                        <ul className={styles.navList}>
                            <li className={styles.navItem}>
                                <Link href="#technologies">Technology</Link>
                            </li>
                            <li className={styles.navItem}>
                                <Link href="#projects">Projects</Link>
                            </li>
                            <li className={styles.navItem}>
                                <Link href="#experiences">Experiences</Link>
                            </li>
                            <li className={styles.navItem}>
                                <Link href="#education">Education</Link>
                            </li>
                            <li className={styles.navItem}>
                                <Link href="#passions">Passion</Link>
                            </li>
                            <li className={styles.navItem}>
                                <Link href="#contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;

