import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_item">
        <h2>About us</h2>
        <p>Skylink creative success is attributed to the collective performance of its team. Effective, open communication in our workplace keeps us focused and driven towards providing you with an outstanding service.</p>
      </div>
      <div className="footer_item">
        <h2>Skylink creative</h2>
        <div className="footer_link">
          <div>
            <p>Sylhet 3100, Bangladesh</p>
            <p>contact@skylinkcreative.com</p>
            <p>Cell No</p>
          </div>
          <div className="footer_link_items">
            <p>Services</p>
            <p>Portfolio</p>
            <p>Terms & condition</p>
            <p>Privacy policy</p>
          </div>
        </div>

      </div>
      {/* <div className="footer_item">
        <p>Services</p>
        <p>Portfolio</p>
        <p>Terms & condition</p>
        <p>Privacy policy</p>
      </div> */}
      <div className="footer_item">
        <h2>Join Newsletter</h2>
        <form>
          <input
            required
            name="email"
            type="text"
            className="footer_input"
            placeholder="Enter Your Email Address"
          />
          <button type="submit" className="btn">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Footer;