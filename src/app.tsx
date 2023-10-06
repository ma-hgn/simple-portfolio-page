import React from 'react';
import { createRoot } from 'react-dom/client'

import { Navbar, Main, About, Projects, Skills, Contact } from './components'
import './styles/app.css'

const sections = [
    'About',
    'Projects',
    'Skills',
    'Contact',
]

const App = () => <>
    <Navbar items={sections} />
    <Main>
        <About />
        <Projects />
        <Skills />
        <Contact />
    </Main>
</>

createRoot(document.getElementById('root')!)
    .render(<App />)
