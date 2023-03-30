import React from 'react'

export default function Info() {
  return (
    <div id='info'> 
      <h4>Laura Smith</h4>
      <h5>Frontend Developer</h5>
      <h5>laurasmith.website</h5>
      <div className="social-media">
        <button> <img src={require("../assets/Mail.png")} alt="mail" /> Email</button>
        <button> <img src={require("../assets/linkedin.png")} alt="linkedIn" /> LinkedIn</button>
        <div className="about">
          <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        </div>
        <div className="interest">
          <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
      </div>
    </div>
  )
}