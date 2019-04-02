import React from 'react';

const Footer = () => (
  <footer>
    <section className="social-links">
      {/* <h3>Acompanhe nossas redes sociais</h3> */}
      <ul>
        <li>
          <a href=" ">
            <i className="fab fa-facebook fa-2x" />
          </a>
        </li>
        <li>
          <a href=" ">
            <i className="fab fa-linkedin fa-2x" />
          </a>
        </li>
        <li>
          <a href=" ">
            <i className="fab fa-twitter fa-2x" />
          </a>
        </li>
        <li>
          <a href=" ">
            <i className="fab fa-youtube fa-2x" />
          </a>
        </li>
      </ul>
    </section>
    <section className="copyright">
      <div className="footer-text">Copyright &copy; 2019 - SMTech</div>
    </section>
  </footer>
);

export default Footer;
