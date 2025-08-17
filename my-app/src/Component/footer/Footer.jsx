import React from 'react'
import './../footer/footer.css'
import Cactus from './../../img_home/Group 18.png'
import LineFooter from './../../img_home/Rectangle 36 (1).png'
import LogoFooter from './../../img_home/Logo.png'
import IconStreet from './../../img_home/Location.png'
import IconEmail from './../../img_home/Message.png'
import IconContact from './../../img_home/Calling.png'
import JoinNews from './components/JoinNews/JoinNews'


export default function Footer() {
  return (
  <footer>
    <div className="footer_container">
      <div className="top_footer">
        <div className="block_one">
          <div className="img_footer">
            <img src={Cactus} alt="" />
          </div>
          <p className="title_footer_block">Garden Care</p>
          <p className="desc_footer">We are an online plant shop <br />offering a wide range of cheap <br />and trendy plants.</p>
        </div>
        <div className="line_footer">
          <img src={LineFooter} alt="" />
        </div>
        <div className="block_one">
          <div className="img_footer">
            <img src={Cactus} alt="" />
          </div>
          <p className="title_footer_block">Plant Renovation</p>
          <p className="desc_footer">We are an online plant shop <br />offering a wide range of cheap <br />and trendy plants.</p>
        </div>
        <div className="line_footer">
          <img src={LineFooter} alt="" />
        </div>
        <div className="block_one">
          <div className="img_footer">
            <img src={Cactus} alt="" />
          </div>
          <p className="title_footer_block">Watering Graden</p>
          <p className="desc_footer">We are an online plant shop <br />offering a wide range of cheap <br />and trendy plants.</p>
        </div>
        <JoinNews/>
      </div>
      <div className="midle_footer">
        <div className="logo_footer">
          <img src={LogoFooter} alt="" />
        </div>
        <div className="icon_street_footer">
          <div className="icon_footer">
            <img src={IconStreet} alt="" />
          </div>
          <div className="p_street">
          <p className="street_footer">70 West Buckingham Ave. <br />
Farmingdale, NY 11735</p>
          </div>
        </div>
        <div className="icon_text_footer">
          <div className="icon_contact">
            <img src={IconEmail} alt="" />
          </div>
          <div className="email_footer">
            <p>contact@greenshop.com</p>
          </div>
        </div>
        <div className="icon_number_footer">
          <div className="icon_number">
            <img src={IconContact} alt="" />
          </div>
          <div className="contact_footer">
            <p>+88 01911 717 490</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}
