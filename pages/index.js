import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { faHome, faBus, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {
  return (
    <div className="App-page LandingLinks-page">
      <div className="App-content">
          <div className="App-splashscreen">
            <div className="App-welcomescreen">
              <div className="Landing-title">
                 <div className="App-logo" alt="logo" />
                  <h2>Saddie with a Faddie</h2>
                 <div className="titles">
                  <div>Only Fans Model</div>
                 </div>
              </div>
              <div className="Landing-contact">
                <div><a href="mailto:alexis@saddiewithafaddie.com"><FontAwesomeIcon icon={faEnvelope} />alexis@saddiewithafaddie.com</a></div>
              </div>
              <div className="Landing-links">
                <a className="Landing-link" color="inherit" href="http://onlyfans.com/saddiewithafaddie"><div className="onlyfans-icon"/>Only Fans</a>
                <a className="Landing-link" color="inherit" href="https://www.instagram.com/saddiewith.afaddie"><FontAwesomeIcon className="icon" icon={faInstagram}/>Instagram</a>
                <a className="Landing-link" color="inherit" href="https://www.twitter.com/saddywithafaddy"><FontAwesomeIcon className="icon" icon={faTwitter}/>Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
