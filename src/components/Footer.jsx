// src/components/Footer.jsx
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <h2 className="footer__title">Let's Connect</h2>

          <div className="footer__content">
            <div className="footer__left">
              <p className="footer__description">
                I'm David Matias, a Web & UI Designer based in London. Let's create something amazing together!
              </p>
              <a href="mailto:davidmatias333@gmail.com" className="footer__email">
                <i className="fas fa-envelope"></i> Email Me
              </a>
            </div>

            <div className="footer__right">
              <a className="footer__social" href="/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a className="footer__social" href="/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i> Instagram
              </a>
              <a className="footer__social" href="/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-dribbble"></i> Dribble
              </a>
              <a className="footer__social" href="/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-webflow"></i> Webflow
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2025 <a href="/" className="footer__brand">Ishali</a>. All rights reserved.
          </p>

          <ul className="footer__links">
            <li><a href="/">Terms &amp; Conditions</a></li>
            <li><a href="/">Privacy Policy</a></li>
          </ul>

          <a className="footer__to-top" href="/#hero">
            ↑ Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
