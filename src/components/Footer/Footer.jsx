import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={logo} alt="" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
            reiciendis, fuga voluptas qui magnam dolorum at sunt, recusandae
            porro architecto aliquid? Vel, beatae dolore veniam nobis sequi
            dolor magni nisi. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Iure voluptatibus accusamus at, atque aliquid
            error? Provident vitae eum ex ullam et nostrum maxime vero
            laudantium praesentium tempora, fugit assumenda ipsum. Nesciunt
            soluta pariatur laudantium voluptate, dignissimos adipisci natus
            magni optio doloribus facilis corrupti, alias error expedita
            repellendus, eos molestias nemo ea dolor. Obcaecati mollitia enim
            ipsa autem nulla iste? Ipsam.
          </p>
          <div className="social-links"></div>
        </div>
        <div className="footer-content-center">
          <h1>Company</h1>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivary</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h1>Get in Touch</h1>
          <ul>
            <li>+91 98481-25269</li>
            <li>surajsai537@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
