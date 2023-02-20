import React from 'react'
import Navbar from './DashboardComponents/Navbar'
import Footer from './DashboardComponents/footer'
import './About.css'
import img from '../images/logo.png'
import rajat from '../images/rajat.jpeg'
import divanshu from '../images/divanshu.jpeg'
import vishnu from '../images/vishnu.jpeg'
import jay from '../images/jay.jpeg'
function Viewcertificate() {
  return (
    <div>
      <Navbar />

      <div class="about-section">
        <h1 class="titleclass">About Us</h1>

        <p class="description">
          Hack C is a platform for testing vulnerabilities in a smart contract
          hacker can hack a smart contract and claim its ownership of its
          assets, they may be able to transfer these bounty which are fixed by a
          company to their own account. while hacking a smart contract and
          claiming ownership be careful{' '}
        </p>

        <div class="image-container">
          <img class="imagec" src={img} alt="About us" />
        </div>
        <p class="description">

      
        </p>
      </div>

      <div class="team-section">
        <h1 class="title">Our Team</h1>
        <p class="description" style={{ marginLeft: '20%' }}>
          We call ourselves as JORDAV
        </p>
        <div class="team-members">
          <div class="team-member">
            <img src={jay} alt="Team Member 1" />
            <p class="member-name">Jay Patel</p>
            <p class="member-position">Gujarat</p>
          </div>
          <div class="team-member">
            <img src={rajat} alt="Team Member 2" />
            <p class="member-name">Rajat Singh</p>
            <p class="member-position">Dehradun</p>
          </div>
          <div class="team-member">
            <img src={divanshu} alt="Team Member 3" />
            <p class="member-name">Divanshu Prajapat</p>
            <p class="member-position">Rajasthan</p>
          </div>
          <div class="team-member">
            <img src={vishnu} alt="Team Member 4" />
            <p class="member-name">K V Vishnu Swaroop</p>
            <p class="member-position">Andhra Pradesh</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Viewcertificate
