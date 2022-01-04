import Head from 'next/head'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown';
import styles from '../styles/Home.module.css';
import { faHome, faBus, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import applogo from '../styles/applogo2.png';
import applogored from '../styles/applogored.png';
import applogogreen from '../styles/applogogreen.png';
import applogopink from '../styles/applogopink.png';
import ReactPlayer from 'react-player';

Home.getInitialProps = async (ctx) => {
  const content = await require(`../doc/letter.md`)

  return { letter: content}
}
export default function Home({letter}) {
  const [showContent, setShowContent] = useState(false)
  const [question, setQuestion] = useState(true)
  const [videoPlayed, setVideoPlayed] = useState(false)

  return (
    <div className="App-page">
    { !showContent &&
      <div className="ageVerificationContainer">
        {question && <div className="ageVerification">
          <div className="ageVerificationQuestion">Are you over the age of 18?</div>
            <div className="ageVerificationAnswers">
              <button className="ageVerificationAnswer" onClick={() => setShowContent(true)}>Yes</button>
              <button className="ageVerificationAnswer" onClick={() => setQuestion(false)}>No</button>
            </div>
          </div>
        }
        {!question &&
          <div className="bye">
            <div className="byemessage">Bye Felicia</div>
          </div>
        }
      </div>
    }
    { showContent && !videoPlayed &&
      <div className="App-video">
        <ReactPlayer
          className='react-player'
          url='/test1.mp4'
          height="100vh"
          width="100%"
          playing={true}
          muted={true}
          controls
          playsInline={true}
          fileConfig={{ attributes: { muted: true, autoPlay: /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream }}}
          volume={0}
          style={{backgroundColor: 'black'}}
          onEnded={() => setVideoPlayed(true)}
        />
      </div>
      }
      { showContent && videoPlayed &&
      <div className="App-content">
        <div className="App-background">
        </div>
        <div className="Landing-letter">
          <ReactMarkdown
          components={{
               // Map `h1` (`# heading`) to use `h2`s.
               h1: 'h2',
               // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
               p: ({node, ...props}) => {return <p data={props.children[0]} {...props} /> }
              }}
            >
            {letter.default}
          </ReactMarkdown>
        </div>
        <div className="Landing-page-nav">
          <a className="schedule-button">Schedule</a>
          <a className="aboutme-button">About Me</a>
          <a className="contact-button">Contact</a>
          <a className="preview-button">Preview</a>
          <a className="video-button" onClick={() => setVideoPlayed(false)}>Watch Video</a>
        </div>
        <div className="Landing-main">
          <div className="example-three">
            <img src={applogo.src} alt="logo" className="App-logo" />
              <img src={applogored.src} alt="logo" className="App-logo App-logo-glitch" />
                <img src={applogogreen.src} alt="logo" className="App-logo  App-logo-glitch" />
                  <img src={applogopink.src} alt="logo" className="App-logo  App-logo-glitch" />
          </div>
          <div className="Landing-container">
            <div className="Landing-link">
              <a className="onlyfans-button" color="inherit" href="http://onlyfans.com/saddiewithafaddie"><div className="onlyfans-icon" />Only Fans</a>
            </div>
            <div className="Landing-link">
              <a className="insta-button" color="inherit" href="https://www.instagram.com/saddiewith.afaddie"><FontAwesomeIcon className="icon" icon={faInstagram}/>Instagram</a>
            </div>
            <div className="Landing-link">
              <a className="twitter-button" color="inherit" href="https://www.twitter.com/saddywithafaddy"><FontAwesomeIcon className="icon" icon={faTwitter}/>Twitter</a>
            </div>
          </div>
        </div>
      </div>
    }
    </div>
  )
}
