import React from 'react'
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded w-full">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <FaFacebookF size='5em'></FaFacebookF>
          <FaTwitter size='5em'></FaTwitter>
          <FaYoutube size='5em'></FaYoutube>
        </div>
      </nav>
      <aside>
        <p>Copyright © 2023 - All right reserved by Tech Brand Online SHop Ltd</p>
      </aside>
    </footer>
  )
}

export default Footer