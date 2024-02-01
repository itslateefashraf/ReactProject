import './Footer.scss'
const Footer = () => {
  return (
    <footer className=" footer mt-auto py-3 ">
  <div className=" footer container">
    <span > © 2023 Your Company</span>
    <div className="footer-wrapper container ">
  <div className="row">
    <div className="col">
      <span>Company</span>
      <hr />
      <ul className='list-unstyled my-3'>
        <li>Home</li>
        <li>About</li>
        <li>MarketPlace</li>
        <li>List Property</li>
        <li>Resources</li>
        <li>Features</li>
      </ul>
    </div>
    <div className="col">
      <span>Resources</span>
      <hr />
      <ul className='list-unstyled my-3'>
        <li>How it works</li>
        <li>Faq</li>
        <li>Knowledge Center</li>
        <li>Learn</li>
        <li>Career</li>
      </ul>
    </div>
    <div className="col ">
      <span>Contact</span>
      <hr />
      <ul className='list-unstyled my-3 '>
        <li>spancall us at any time</li>
        <li>+ 1 888-666-3176 (US)</li>
        <li>+ 1 888-666-0441 (US) </li>
        <li>Stay connected with an email</li>
        <li>info@cryptoassetrating.com</li>
      </ul>
    </div>
    <div className="col ">
      <span>Legal</span> 
      <hr />
      <ul className='list-unstyled my-3'>
      <li>Privacy Policy</li>
      <li>Disclaimer Terms and Conditions </li>
      <li> Contact Us</li>
      </ul>
    </div>
  </div>
</div>
  </div>
   
   <div>
    <h4></h4>
   </div>
</footer>
  )
}

export default Footer;