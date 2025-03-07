import React from 'react';

import { Container } from "./styles.ts";

/* import profileImage from "../../assets/profile-image.jpg"
*/
import ScrollAnimation from "react-animate-on-scroll";


export function About(){
  return(
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About Me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft">
          <p> I’m a passionate musician and tech enthusiast, blending my love for music with my expertise in technology. 
            With a Bachelor of Science in Electrical Engineering, I have a solid foundation in the principles of electronics and signal processing.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft"  style={{marginTop: "2rem", marginBottom: "2rem"}}>

          <p>As a musician, I thrive on creativity and expression, whether I’m composing original pieces, performing live, 
            or collaborating with other artists. Music is not just a hobby for me; 
            it’s a way to connect with others and convey emotions that words often can’t capture. 
            My exploration of sound healing and sound meditation allows me to harness the therapeutic power of music, 
            creating immersive experiences that promote well-being and mindfulness.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" >

          <p>On the tech side, I specialize in programming and am particularly fascinated by the potential of blockchain technology 
            to revolutionize the music industry through decentralized platforms and smart contracts.</p>

            <p>I believe that the intersection of music and technology is where the magic happens. 
                Whether I’m coding a new audio tool, composing a track, or integrating sound healing practices into my work, 
                I’m always looking for ways to push boundaries and create something unique. 
                I’m excited to connect with fellow musicians, developers, and tech enthusiasts who share my passion for innovation in the music space!</p>
        </ScrollAnimation>

      </div>
    
    </Container>
  )
}
