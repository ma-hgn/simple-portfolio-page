import React, { useEffect, useState } from 'react'
import '../styles/about.css'

const age = Math.floor((new Date().getTime() - new Date('2003-12-20').getTime()) / (3.15576e10));

const About = () => (
    <section id="about">
        <div className="greeting">
            <h1>
                <span>Hey</span>
                <span className="wave">👋</span>
            </h1>
        </div>
        <p>
            I'm Mark, a {age}-year-old software developer from Germany.
        </p>
        <p>
            While pursuing my Bachelor of Science in Computer Science at Goethe-University in Frankfurt, I also work on various <a href="#projects">«projects»</a> in my free time.
        </p>
        <p>
            Since I enjoy learning new things to become the best coder i can be, I am familiar with a fairly wide range of software-development paradigms, -languages and -tooling and am constantly working on improving my <a href="#skills">«skillset»</a>.
        </p>
        <p>
            When coding, my main concerns are the speed of the finished product and concision of the source code, which is why my projects are preferably written in compiled low-level languages such as Rust or C. I can also adapt my knowledge to modern web-development stacks. The page you are reading, for example, is written in TypeScript using React.
        </p>
        <p>
            Want to get to know me better or work together?
        </p>
        <p>
            <a href="#contact">«Get in touch»</a>. I am looking forward to it.
        </p>
    </section>
);

export default About














const lorem =     <p>
    This is a sample about-section
    Play gains horror abstract pinnacle self moral ideal spirit disgust. Oneself decieve reason mountains faith against horror evil philosophy ideal grandeur endless grandeur love. Holiest ubermensch justice insofar derive burying overcome christian.

    Law play reason oneself faithful suicide overcome intentions right prejudice reason. Ultimate sexuality noble joy of oneself self. Ideal hope pious aversion burying sea inexpedient insofar merciful disgust justice war law. Enlightenment gains free justice christian hatred ubermensch zarathustra decieve.

    Chaos snare decrepit disgust derive good decieve love revaluation ascetic of passion endless. Sexuality christianity overcome salvation ascetic god eternal-return value ideal against sexuality burying sexuality. Madness zarathustra spirit hatred truth. Ocean ubermensch spirit selfish spirit war. Merciful of god noble joy. God contradict passion overcome deceptions prejudice ultimate free society reason. Oneself burying ultimate right enlightenment law intentions depths hope madness hatred grandeur.

    Depths love ideal war hope ascetic pious law transvaluation inexpedient oneself zarathustra will. Suicide dead burying burying spirit oneself philosophy free ocean christian love endless. Victorious snare ascetic love decieve faithful superiority transvaluation overcome value prejudice prejudice strong. Noble good contradict merciful philosophy zarathustra prejudice war ultimate sea marvelous revaluation value. Society abstract ideal superiority morality superiority horror revaluation against against free revaluation horror evil. Ultimate evil sea holiest virtues deceptions inexpedient spirit horror mountains. Intentions aversion transvaluation ultimate sea burying transvaluation decieve.

    Will hope justice pious sea strong endless society truth zarathustra derive mountains. Selfish ocean chaos love virtues ideal convictions. Mountains free inexpedient intentions madness free revaluation snare.

    Selfish ultimate abstract free self ideal. Insofar dead chaos hatred disgust ultimate noble against ocean dead victorious intentions disgust spirit. Ubermensch selfish sexuality prejudice snare ultimate decieve virtues. Convictions.
    </p>

