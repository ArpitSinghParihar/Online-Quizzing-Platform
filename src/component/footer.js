
const Footer = () => (
  <footer class="footer">
    <div className="footer-section">
      <div className="contact-container container">
        <h3>Contact Us</h3>
        <ul>
          <li className="list">
            Email :{" "}
            <a href="mailto:parihararpit455@gmail.com">parihararpit455@gmail.com <br/> 03shivam03@gmail.com</a>
          </li>
          <li>
            Mobile No. : <a href="tel:=+919691380973"> +919691380973,<br/>+918210671205 </a>
          </li>
          <li></li>
        </ul>
      </div>

      <div className="imp-container container">
        <h3>Important Links</h3>
        <ul>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms and Conditions</a>
          </li>
          <li>
            <a href="#">FAQs</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
        </ul>
      </div>

      <div className="quick-link-container container">
        <h3>Quick Links</h3>
        <ul>
          <li>
            <a href="#">Popular Quizzes</a>
          </li>
          <li>
            <a href="#">Leaderboard</a>
          </li>
          <li>
            <a href="#">Play Now</a>
          </li>
        </ul>
      </div>

      <div className="mail-container container">
        <form method="post">
          <input
            id="email"
            type="email"
            placeholder="Your email address"
          ></input>
          <button id="email-btn">Subscribe</button>
        </form>
      </div>
    </div>

    <div className="rights-section">
      <p>&reg; 2025 Online Quiz Gaming Platform. All rights reserved.</p>
      <p>
        <a href="#">Accessibility</a> | <a href="#">Cookie Policy</a>
      </p>
      <p>&copy; Product by Arpit's Team </p>
    </div>
  </footer>
);

export default Footer;
