import React from 'react'
import { TwitterOriginal, GithubOriginal } from 'devicons-react'
import '../styles/contact.css'

const Contact = () => (
    <section id="contact">
        <h1>Get in touch</h1>
        <ul>
            <li><a href="https://twitter.com/markichnich69"><TwitterOriginal size="8rem"/></a></li>
            <li><a href="https://github.com/markichnich"><GithubOriginal size="8rem"/></a></li>
        </ul>
    </section>
)

export default Contact
