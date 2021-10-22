
import React from 'react';
import { AiFillFacebook, AiFillTwitterSquare, AiOutlineMail } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { FaMapMarkerAlt, FaPhoneAlt, FaYoutubeSquare } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_item">
        <h2>About us</h2>
        <p>Skylink creative success is attributed to the collective performance of its team. Effective, open communication in our workplace keeps us focused and driven towards providing you with an outstanding service.</p>
        <ul className="footer_list">
          {/* <a href=""></a> */}
          <li> <a href=""><AiFillFacebook size={25}  /></a> </li>
          <li> <a href=""> <AiFillTwitterSquare size={25}  /></a> </li>
          <li> <a href=""> <BsInstagram size={25}  /></a> </li>
          <li> <a href=""><FaYoutubeSquare size={25}  /></a></li>
         
      </ul>
      </div>
      <div className="footer_item">
      <h2>Quick Links</h2>
        {/* <h2>Skylink creative</h2> */}
        <div className="footer_link">
          {/* <div>
            <p>Sylhet 3100, Bangladesh</p>
            <p>contact@skylinkcreative.com</p>
            <p>Cell No</p>
          </div> */}
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
        <h2>Contact Info</h2>
        <ul className="footer_info">
          <li>
            
            <p><FaMapMarkerAlt size={20}/>  Sylhet 3100, Bangladesh</p>
          </li>
         
          <li>
            
            <p> <FaPhoneAlt size={20}/>   Cell No:+14465676676</p>
          </li>

          <li>
            <p><AiOutlineMail size={20}/>  contact@skylinkcreative.com</p>
          </li>

        </ul>
      </div>

      
   
        {/* <p style={{ textAlign: 'center', color: 'white',marginLeft:'600px',fontsize:'10px' }}>
          Sylhet 3100, Bangladesh</p>
        <br/>
        <p>contact@skylinkcreative.com</p>
        <br/>
            <p>Cell No</p> */}
          
        
    </div>
  );
};

export default Footer;