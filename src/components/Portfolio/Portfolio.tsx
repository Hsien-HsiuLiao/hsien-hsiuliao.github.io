import React from 'react';
import { Container } from "./styles.ts";
/* import githubIcon from "../../assets/github-icon.svg"
import externalLinkIcon from "../../assets/external-link-icon.svg" */
import ScrollAnimation from "react-animate-on-scroll";


export function Portfolio(){
  return(
    <Container id="portfolio">
      <h2>My portfolio</h2>

      <div className="projects">

      <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
          <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          <div className="project-links">
           {/*  <a href="https://github.com/Hsien-HsiuLiao/multisig-wallet" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a> */}
          </div>
          </header>
          <div className="body">
            <h3>Cryptocurrency MultiSignature Wallet</h3>
            <p>This app will allow transactions to be created that will send ether from one Ethereum account to another. The transaction will be displayed in a list with an approve button. A quorum of at least 2 out of 3 people must occur in order for funds to be transferred. 
             <br></br>   <p><a href="https://github.com/Hsien-HsiuLiao/multisig-wallet">Github</a> (netlify link)</p>
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>Truffle</li>
              <li>Web3js</li>
              <li>React</li>
              <li>Solidity</li>
            </ul>
          </footer>
        </div>
      </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              {/* <a href="https://github.com/Hsien-HsiuLiao/near-dapp-musician" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a> */}
              {/* <a href="https://github-search-blond.vercel.app/" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a> */}
            </div>
            </header>
            <div className="body">
              <h3>near-dapp-musician</h3>
              <p>description <a href="https://github.com/Hsien-HsiuLiao/near-dapp-musician"> github</a>. description
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Nodejs</li>
                <li>Rust</li>
                <li>React</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              {/* <a href="https://github.com/Hsien-HsiuLiao/blockchain-ecommerce-app" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a> */}
            </div>
            </header>
            <div className="body">
              <h3>Full Stack Blockchain e-commerce</h3>
              <p>description <a href="https://github.com/Hsien-HsiuLiao/blockchain-ecommerce-app">github</a>
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Nodejs</li>
                <li>Koa</li>
                <li>Solidity</li>
                <li>Ethers.js</li>
                <li>MongoDB</li>
                <li>React</li>
                <li>Truffle</li>
                <li>RESTful API</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              {/* <a href="https://hh-nft.netlify.app/" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a> */}
            </div>
            </header>
            <div className="body">
              <h3>NFT App</h3>
              <p>displays Ethereum NFT</p> 
              <p><a href="https://hh-nft.netlify.app/" target="_blank" rel="noreferrer">
              deployed site
              </a></p>
              <p> <a href="https://github.com/Hsien-HsiuLiao/nft-app" target="_blank">Github</a>
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Docker</li>
                <li>React</li>
                <li>AWS</li>
                <li>IPFS</li>
                <li>Solidity</li>
                <li>Ethers js</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              {/* <a href="https://github.com/joaotuliojt/dtmoney-trilha-reactjs" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visitar site" />
              </a> */}
            </div>
            </header>
            <div className="body">
              <h3>DAO</h3>
              <p>Decentralized Autonomous Organization
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Solidity</li>
                <li>React</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              {/* <a href="https://github.com/joaotuliojt/dv-musica-library-page" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visitar site" />
              </a> */}
              {/* <a href="https://joaotuliojt.github.io/dv-musica-library-page/" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a> */}
            </div>
            </header>
            <div className="body">
              <h3>Music Audio Plugin</h3>
              <p>Coming soon 
              </p>
              <p> <a href="https://github.com/Hsien-HsiuLiao/audio-plugin-SimpleEQ" target="_blank">Github</a>
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>JUCE</li>
                <li>C++</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>



      </div>
    </Container>
  );
}