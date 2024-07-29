import React from 'react';
import styles from '../styles/Projects.module.scss'; // Adjust the path as necessary

interface ProjectProps {
    title: string;
    description: string;
    whatIDoesTags: string[];
    stackTags: string[];
    link?: string;
    style: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, whatIDoesTags, stackTags, link, style }) => {

    return (
        <div className={styles.card}>
            <div
                className={styles.edooko_card}
            >
                <div className={styles.header}>
                    <h1>{title}</h1>
                    {link && (
                        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.goToIcon}>
                            <i className="fas fa-external-link-alt"></i>
                        </a>
                    )}
                </div>
                <p>{description}</p>
                <h3>What it does</h3>

                <div className={styles.tags}>
                    {whatIDoesTags.map((tag, index) => (
                        <div key={index} className={styles.tag}>
                            <h4>{tag}</h4>
                        </div>
                    ))}
                </div>

                <h3>Stack</h3>

                <div className={styles.tags}>
                    {stackTags.map((tag, index) => (
                        <div key={index} className={styles.tag}>
                            <h4>{tag}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Project;
