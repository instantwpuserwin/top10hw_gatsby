import React from "react"
import { Link } from "gatsby"

const Footer = props => {
  return (
    <footer>
        <div className="footer_column">
          <h4>Important Links</h4>
          <ul>
            <li>
              <Link  rel="nofollow"  to="/AffiliateDisclosure">Affiliate Disclosure</Link>
            </li>
            <li>
              <Link  rel="nofollow"  to="/disclaimer">Disclaimer</Link>
            </li>
            <li>
              <Link  rel="nofollow"  to="/terms">Terms and Conditions</Link>
            </li>
            <li>
              <Link  rel="nofollow"  to="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link  rel="nofollow"  to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div  className="footer_column">
          <h4>About Us</h4>
          <p>
            At top10hostingonweb.com, we recommend best hosting web hosting companies that suits your business or personal needs. Please note that our reviews are independant. We are also affiliate of some the best web hosting companies and this means we earn a small commission when you sign up. You also get a better price since we offer coupons. 
          </p>
        </div>
 
    </footer>
  )
}

export default Footer
