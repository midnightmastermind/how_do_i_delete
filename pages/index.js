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
                 <div className="titles">
                  <div className="onlyfans-icon" />
                  <div className="onlyfans-title">Only Fans Model</div>
                 </div>
              </div>
              <div className="Landing-contact">
                <div><a href="mailto:alexis@saddiewithafaddie.com"><FontAwesomeIcon className="icon" icon={faEnvelope} />alexis@saddiewithafaddie.com</a></div>
              </div>
              <div className="Landing-container">
                <div className="Landing-links">
                  <a className="Landing-link" color="inherit" href="http://onlyfans.com/saddiewithafaddie"><div className="onlyfans-icon" />Only Fans</a>
                  <a className="Landing-link" color="inherit" href="https://www.instagram.com/saddiewith.afaddie"><FontAwesomeIcon className="icon" icon={faInstagram}/>Instagram</a>
                  <a className="Landing-link" color="inherit" href="https://www.twitter.com/saddywithafaddy"><FontAwesomeIcon className="icon" icon={faTwitter}/>Twitter</a>
                </div>
                <div className="Landing-schedule">
                  <div className="schedule-title">Schedule</div>
                  <div className="schedule">
                    <table>
                      <tr>
                          <td>Monday</td>
                          <td>Mini Set</td>
                      </tr>
                      <tr>
                          <td>Tuesday</td>
                          <td>Alt Content</td>
                      </tr>
                      <tr>
                          <td>Wednesday</td>
                          <td>Full Set</td>
                      </tr>
                      <tr>
                          <td>Thursday</td>
                          <td>Teaser + PPV</td>
                      </tr>

                      <tr>
                          <td>Friday</td>
                          <td>Full Set</td>
                      </tr>
                      <tr>
                          <td>Saturday</td>
                          <td>Teaser + PPV</td>
                      </tr>
                      <tr>
                          <td>Sunday</td>
                          <td>No Posts</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
