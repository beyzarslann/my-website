import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  const githubURL = 'https://github.com/beyzarslann'; 
  const linkedinURL = 'https://www.linkedin.com/in/beyza-arslan-21357a20a/'; 
  const instagramURL = 'https://www.instagram.com/byzrslnnn/'; 

  return (
    <div className='footer'>
        <div className='socialMedia'>
        <a href={githubURL} target="_blank" rel="noopener noreferrer">
            <GitHubIcon/>
          </a>
          <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon/>
          </a>
          <a href={instagramURL} target="_blank" rel="noopener noreferrer">
            <InstagramIcon/>
          </a>
        </div>
        <p>  &copy; 2023 Ekim </p>
    </div>
  )
}

export default Footer;