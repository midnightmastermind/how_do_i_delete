import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { faHome, faBus, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';


export default function Home() {
  const [showContent, setShowContent] = useState(false)
  const [question, setQuestion] = useState(true)
  const [videoPlayed, setVideoPlayed] = useState(true)
  const removeGif = () => {
    setTimeout(() => {
      setVideoPlayed(true);
    }, 21000);
  }

  return (
    <div className="App-page LandingLinks-page">
      { !showContent &&
        <div className="ageVerificationContainer">
          {question && <div className="ageVerification">
            <div className="ageVerificationQuestion">Are you over the age of 18?</div>
              <div className="ageVerificationAnswers">
                <a className="ageVerificationAnswer" onClick={() => setShowContent(true)}>Yes</a>
                <a className="ageVerificationAnswer" onClick={() => setQuestion(false)}>No</a>
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
        <div
          className="VideoPlayer"
          />
      }
      { showContent && videoPlayed &&
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
                        <tbody>
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
                        </tbody>
                      </table>
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
