import React from 'react'
import {
    BashPlain,
    CPlain,
    GitPlain,
    HaskellPlain,
    IntellijPlain,
    JavaPlain,
    LinuxPlain,
    PythonPlain,
    RustPlain,
    SqlitePlain,
    TypescriptPlain,
    VimPlain,
} from 'devicons-react';

import '../styles/skills.css'

const Skills = () => (
    <section id="skills">
        <div className="greeting">
            <h1>Technical Skills 🛠</h1>
        </div>
        <p>
            Due to having programmed in various different languages, across both Windows and Unix systems, I am pretty versatile and will be able to assimilate into other tech stacks and software-development environments quickly, even if they are unknown to me.
        </p>
        <p>
            Here is my existing skillset:
        </p>
        <hr/>
        <h2>Programming Languages</h2>
        <ul id="languages">
            <li><CPlain size="8rem"/></li>
            <li><RustPlain size="8rem"/></li>
            <li><PythonPlain size="8rem"/></li>
            <li><TypescriptPlain size="8rem"/></li>

            <li><HaskellPlain size="8rem"/></li>
            <li><JavaPlain size="8rem"/></li>
            <li><BashPlain size="8rem"/></li>
            <li><SqlitePlain size="8rem"/></li>
        </ul>
        <hr/>
        <h2>Useful Tools</h2>
        <ul id="tools">
            <li><VimPlain size="8rem"/></li>
            <li><LinuxPlain size="8rem"/></li>
            <li><GitPlain size="8rem"/></li>
            <li><IntellijPlain size="8rem"/></li>
        </ul>
        <hr id="theory"/>
        <h2 id="theory">Theoretical Skills</h2>
        <ul id="theory">
            <li><p>Unified Modeling Language</p></li>
            <li><p>Entity Relation Diagrams</p></li>
            <li><p>Automata and Chomsky Grammars</p></li>
            <li><p>Data Structures and Algorithms</p></li>
            <li><p>Software design patterns</p></li>
            <li><p>Cryptography Concepts</p></li>
        </ul>
    </section>
);

export default Skills
