import React from 'react'
import './footer.css'
import { NavLink } from 'react-router-dom'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">
              Hack C is a platform for testing vulnerabilities in a smart
              contract hacker can hack a smart contract and claim its ownership
              of its assets, they may be able to transfer these bounty which are
              fixed by a company to their own account. while hacking a smart
              contract and claiming ownership be careful
            </p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Technologies</h6>
            <ul class="footer-links">
              <li>
                <a href="http://scanfcode.com/category/front-end-development/">
                  React
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/back-end-development/">
                  IPFS
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/java-programming-language/">
                  Solidity
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/android/">
                  Web 3 Storage
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/templates/">Node</a>
              </li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/">Contribute</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">
              Copyright &copy; 2023 All Rights Reserved by
              <a href="/#"> Jordav</a>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
