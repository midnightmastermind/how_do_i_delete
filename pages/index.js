import Head from 'next/head'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown';
import styles from '../styles/Home.module.css';
import { faHome, faBus, faPhone, faEnvelope, faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faGithub, faTwitter, faAmazon, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useRef, useEffect } from 'react';
import applogo from '../styles/applogo.png';
import applogored from '../styles/applogored.png';
import applogogreen from '../styles/applogogreen.png';
import applogopink from '../styles/applogopink.png';

Home.getInitialProps = async (ctx) => {
  const letter = await require(`../doc/letter.md`)
  const schedule = await require(`../doc/schedule.md`)
  const collab = await require(`../doc/collab.md`)
  const aboutme = await require(`../doc/aboutme.md`)
  return { letter: letter, schedule: schedule, collab: collab, aboutme: aboutme }
}

async function grabVideo(url) {
  const myVideo = document.getElementById('myVideo');

  if(myVideo) {
    //let blob = await fetch(url).then(r => r.blob());
    //const videoUrl= makeURL(blob);
    //myVideo.src = videoUrl;
    const test = myVideo.play();
  }
}
function makeURL(object) {
  return (window.URL) ? window.URL.createObjectURL(object) :
  window.webkitURL.createObjectURL(object);
}
export default function Home({letter, schedule, collab, aboutme}) {
  const [showContent, setShowContent] = useState(false)
  const [question, setQuestion] = useState(true)
  const [videoPlayed, setVideoPlayed] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [content, setContent] = useState("letter")

  useEffect(() => {
    grabVideo('./test1.mp4')
    const myVideo = document.getElementById('myVideo');

    if(myVideo) {
        myVideo.addEventListener('ended',setVideoPlayed,true);
        myVideo.muted = !myVideo.muted;
    }
  });
  return (
    <div className={`App-page`}>
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
      <div className="App-video" dangerouslySetInnerHTML={{ __html: `
        <video
          id="myVideo"
          class="video-js"

          preload="auto"
          muted={true}
          playsinline
          poster="vertical_background.jpg"
          data-setup="{}"
        ><source src="test1.mp4" type="video/mp4" /></video>
      ` }}>
      </div>
      }
      { showContent && videoPlayed &&
      <div className="App-content">
        <div className="App-background">
        </div>
        <div className={`Mobile-menu ${!showMenu ? 'Mobile-menu-closed' : ''}`}>
          <button className="close-button" onClick={() => setShowMenu(false)}>
            <FontAwesomeIcon className="icon" icon={faArrowLeft}/>
          </button>
          <div className="Mobile-menu-nav">
            <a className="menu-button" color="inherit" href="http://onlyfans.com/saddiewithafaddie"><div className="onlyfans-icon" />Only Fans</a>
            <a className="menu-button" color="inherit" href="https://www.instagram.com/thesaddiewithafaddie"><FontAwesomeIcon className="icon" icon={faInstagram}/>Instagram</a>
            <a className="menu-button" color="inherit" href="https://www.twitter.com/saddywithafaddy"><FontAwesomeIcon className="icon" icon={faTwitter}/>Twitter</a>
            <a className="menu-button" color="inherit" href="https://www.tiktok.com/@thefaddieonthissaddie"><FontAwesomeIcon className="icon" icon={faTiktok}/>TikTok</a>
            <a className="menu-item" onClick={() => { setContent("schedule"); setShowMenu(false);}}>
              Schedule
            </a>
            <a className="menu-item"  onClick={() => { setContent("collab"); setShowMenu(false); }}>
              Collab
            </a>
            <a className="menu-item" color="inherit" href="https://www.amazon.com/hz/wishlist/ls/31QHJLK01C33M?ref_=wl_share"><FontAwesomeIcon className="icon" icon={faAmazon}/>Buy Me Shit</a>
            <a className="menu-item" onClick={() => { setVideoPlayed(false); setShowMenu(false); }}>
              Watch Video
            </a>
          </div>
        </div>
        <div className="Landing-content">
          <div className={`Landing-${content}`}>
            <ReactMarkdown
            components={{
                 // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
                 p: ({node, ...props}) => {return <p data={props.children[0]} {...props} /> },
                 h1: ({node, ...props}) => {return <h1 data={props.children[0]} {...props} /> }
                }}
              >
              {eval(content).default}
            </ReactMarkdown>
          </div>
          <div className="Landing-page-nav">
            <div className="nav-left">
              <a className="schedule-button" onClick={() => setContent("schedule")} >Schedule</a>
              <a className="contact-button" onClick={() => setContent("collab")}>Collab</a>
            </div>
            <div className="nav-right">
              <a className="amazon-button" color="inherit" href="https://www.amazon.com/hz/wishlist/ls/31QHJLK01C33M?ref_=wl_share"><FontAwesomeIcon className="icon" icon={faAmazon}/>Buy Me Shit</a>
              <a className="video-button" onClick={() => setVideoPlayed(false)}>Watch Video</a>
            </div>
          </div>
          <div className="Landing-main">
            <div className="Top-menu">
            <button className="Mobile-button" onClick={() => setShowMenu(true)}>
              <FontAwesomeIcon className="icon" icon={faBars}/>
            </button>
              <div className="App-logo-container" onClick={() => setContent("letter")}>
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
                  <a className="insta-button" color="inherit" href="https://www.instagram.com/thesaddiewithafaddie"><FontAwesomeIcon className="icon" icon={faInstagram}/>Instagram</a>
                </div>
                <div className="Landing-link">
                  <a className="twitter-button" color="inherit" href="https://www.twitter.com/saddywithafaddy"><FontAwesomeIcon className="icon" icon={faTwitter}/>Twitter</a>
                </div>
                <div className="Landing-link">
                  <a className="tiktok-button" color="inherit" href="https://www.tiktok.com/@thefaddieonthissaddie"><FontAwesomeIcon className="icon" icon={faTiktok}/>TikTok</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    }
    </div>
  )
}
