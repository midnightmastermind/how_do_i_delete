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
                <div>
                  <a href="tel:414-975-7542"><FontAwesomeIcon icon={faPhone} />414-975-7542</a>
                </div>
                <div><a href="mailto:josh@jpoms.com"><FontAwesomeIcon icon={faEnvelope} />josh@jpoms.com</a></div>
              </div>
              <div className="Landing-links">
                <a className="Landing-link" color="inherit" href="https://www.instagram.com/joshpoms"><FontAwesomeIcon className="icon" icon={faInstagram}/>Instagram</a>
                <a className="Landing-link" color="inherit" href="http://rainbowconnectionbus.com"><FontAwesomeIcon className="icon" icon={faBus}/>Skoolie</a>
                <a className="Landing-link" color="inherit" href="https://www.facebook.com/joshpoms"><FontAwesomeIcon className="icon" icon={faFacebookF}/>Facebook</a>
                <a className="Landing-link" color="inherit" href="https://www.twitter.com/joshpoms"><FontAwesomeIcon className="icon" icon={faTwitter}/>Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
