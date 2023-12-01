import React from 'react';
import { useSpring, animated } from 'react-spring';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


function Anasayfa() {
  const mailtoURL = 'mailto:beyzarslan865@gmail.com'; 
  const githubURL = 'https://github.com/beyzarslann'; 
  const linkedinURL = 'https://www.linkedin.com/in/beyza-arslan-21357a20a/'; 
  const instagramURL = 'https://www.instagram.com/byzrslnnn/'; 

  const imageAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 450, 
  });

  const textAnimation1 = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 500, 
  });

  const textAnimation2 = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 1000,  
  });

  const textAnimation3 = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 1800,  
  });

  const iconAnimation1 = useSpring({
    from: { opacity: 0, transform: 'scale(0.5)' },
    to: { opacity: 1, transform: 'scale(1)' },
    delay: 2100,  
  });

  const iconAnimation2 = useSpring({
    from: { opacity: 0, transform: 'scale(0.5)' },
    to: { opacity: 1, transform: 'scale(1)' },
    delay: 2200,  
  });

  const iconAnimation3 = useSpring({
    from: { opacity: 0, transform: 'scale(0.5)' },
    to: { opacity: 1, transform: 'scale(1)' },
    delay: 2300,  
  });

  const iconAnimation4 = useSpring({
    from: { opacity: 0, transform: 'scale(0.5)' },
    to: { opacity: 1, transform: 'scale(1)' },
    delay: 2400,  
  });

  return (
    <div className='anasayfa'>
      <div className='about'>
      <animated.img
        src='/images/cv-photo.jpeg'
        alt='beyza arslan'
        className='cvphoto'
        style={imageAnimation} />
        <animated.h2 style={textAnimation1}> Merhaba  </animated.h2>
        <animated.h2 style={textAnimation2}> Ben Beyza Arslan </animated.h2>
        <animated.p style={textAnimation3}> {"<Hello, World />"}  </animated.p>

        <div className='prompt'>
          <animated.a style={iconAnimation1} href={mailtoURL} target="_blank" rel="noopener noreferrer">
            <MailIcon/>
          </animated.a>
          
          <animated.a style={iconAnimation2} href={githubURL} target="_blank" rel="noopener noreferrer">
            <GitHubIcon/>
          </animated.a>
          
          <animated.a style={iconAnimation3} href={linkedinURL} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon/>
          </animated.a>

          <animated.a style={iconAnimation4} href={instagramURL} target="_blank" rel="noopener noreferrer">
            <InstagramIcon/>
          </animated.a>
          
        </div>
      </div>
      <div className='skills'>
        <h1> Yetenekler </h1>
        <ol className='list'>
          <li className='item'>
            <h3> Front-end </h3>
            <span> Html | CSS | JavaScript | Angular </span>
          </li>
          <li className='item'>
            <h3> Back-end </h3>
            <span> Java | Spring Boot </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Anasayfa;
