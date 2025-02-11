import React from 'react';
import { Container } from './styles'

/* import reactIcon from '../../assets/react-icon.svg'
import linkedinIcon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github.png'
import instagramIcon from '../../assets/instagram.png'
import discordIcon from '../../assets/discord.png'
 */
export function Footer() {
  return (
    <Container className="footer">
      {/* <a href="/" className="logo">
        <span>J</span>
        <span>Tulio</span>
      </a> */}
     {/*  <div>
        <p>
          Este site foi feito com <img src={reactIcon} alt="React" /> e muito
          <span>❤️</span>
        </p>
      </div> */}

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/hsienhsiu-liao"
          target="_blank"
        >
         {/*  <img src={linkedinIcon} alt="Linkedin" /> */}LinkedIn
        </a>

        <a
          href="https://github.com/hsien-hsiuliao"
          target="_blank"
          rel="noreferrer"
        >
        {/*   <img src={githubIcon} alt="GitHub" /> */}Github
        </a>

        {/* <a
          href="https://www.instagram.com/tulio_joaob/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a> */}

       {/*  <a
          href="https://discord.com/users/426120432991862784"
          target="_blank"
          rel="noreferrer"
        >
          <img src={discordIcon} alt="Discord" />
        </a> */}
      </div>
    </Container>
  )
}
