import React, { useState } from 'react';
import '../styles/projects.css'

class Project {
    public title: string;
    public description: string;
    public emoji: string;
    public href: string;

    constructor(title: string, description: string, imageUrl: string, link: string) {
        this.title = title;
        this.description = description;
        this.emoji = imageUrl;
        this.href = link;
    }
}

const projects = [
    new Project(
        'mdmake',
        'Generate static, interlinked HTML-Websites from markdown',
        '📚',
        'project-1-link'
    ),
    new Project(
        'shdoku',
        'A sudoku game for the terminal, featuring a scoreboard and difficulty levels.',
        '💡',
        'project-2-link'
    ),
    new Project(
        'snail-sort',
        'Implementations in various languages for the snail-sorting algorithm.',
        '🐌',
        'project-3-link'
    )
];

const Projects = () => {
    const [showAll, _] = useState(false);
    const toggleShow = () => {
        window.location.href = "https://github.com/markichnich"
    }

    return (
        <section id="projects">
            <h1>Previous Projects 🚀</h1>
            <div className="flex-container">
                <ul>
                    {projects.map((project: Project, idx: number) => (
                            <li key={idx} className="card">
                                <h2>
                                    <a href={project.href}>« {project.title} »</a>
                                </h2>
                                <p className="emoji">{project.emoji}</p>
                                <p className="description">{project.description}</p>
                            </li>
                        )
                    )}
                </ul>
            </div>
            <div className="flex-container">
                <button onClick={toggleShow} className="show-all">
                    {showAll ? "Hide All" : "Show All"}
                </button>
            </div>
        </section>
   );
};

export default Projects;
