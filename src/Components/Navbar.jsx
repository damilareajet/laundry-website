import { useState } from 'react';
import { Link } from "react-router-dom";
import { BiCart, BiPhone } from 'react-icons/bi';
import { BsClock, BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import {  CgMail } from 'react-icons/cg';
import { FaBars, FaTimes } from 'react-icons/fa';
import { GrLocation } from 'react-icons/gr';
import { RiPhoneFill } from 'react-icons/ri';
import { MdLocalLaundryService } from 'react-icons/md';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="home page-template page-template-elementor_header_footer page page-id-8 wp-embed-responsive theme-laundry woocommerce-js elementor-default elementor-template-full-width elementor-kit-267 elementor-page elementor-page-8 e--ua-blink e--ua-chrome e--ua-webkit btn-animation" data-elementor-device-mode="desktop" data-new-gr-c-s-check-loaded="14.1190.0" data-gr-ext-installed="">
    <div className="header-content-mobile">
        <div className="tt-mibilemenu-layout">
        <div className="tt-mibilemenu-icon">
              <div className="tt-item">
            <div className="tt-item__icon">
              <span> <GrLocation /></span>
            </div>
            <div className="tt-item__text">
              <address>
                TOS Beson Estate, Ikorodu, Lagos Sate, Nigeria</address>
            </div>
          </div>
                  <div className="tt-item">
            <div className="tt-item__icon">
              <span>< BsClock/></span>
            </div>
            <div className="tt-item__text">
              Mon-Fri 08:00 AM - 05:00 PM			
            </div>
          </div>
                  <div className="tt-item">
            <div className="tt-item__icon">
              <span> <CgMail/></span>
            </div>
            <div className="tt-item__text">
            <a href="mailto:deleajet15@gmail.com">deleajet15@gmail.com</a>
            </div>
          </div>
                  <div className="tt-item">
            <div className="tt-item__icon">
              <span> < BiPhone/></span>
            </div>
            <div className="tt-item__text">
              <address>
              <a className="not-style" href="tel:+234-807-655-2924">
              +234-807-655-2924</a>
              </address>
            </div>
          </div>
            </div>
            <button className="tt-btn" onClick={toggleModal}>
              <span className="mask">Schedule a Pickup</span>
              <div className="button">Schedule a Pickup</div>
            </button>
        </div>
    </div>
  <header id="tt-header">
      <div className="holder-top-desktop d-none d-md-block">
        {/* Desktop Info */}
        <div className="row">
          <div className="col-auto">
            <div className="h-info01">
              <div className="tt-item">
                <address>TOS Beson Estate, Ikorodu, Lagos Sate, Nigeria</address>
              </div>
              <div className="tt-item">Mon-Fri 08:00 AM - 05:00 PM</div>
              <div className="tt-item">
                <a href="mailto:deleajet15@gmail.com">deleajet15@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="col-auto ml-auto">
            <div className="tt-obj">
              <div className="h-info02">
                <div className="tt-item">
                  <address>
                    <a href="tel:+234-807-655-2924" className=' flex  justify-center gap-2'>
                      <span className='h-phone '>
                      <RiPhoneFill className=' flex justify-center'/>
                      </span>+234-807-655-2924</a>
                  </address>
                </div>
              </div>
            </div>
            <div className="tt-obj">
              <ul className="h-social">
                <li><a href="https://twitter.com" target="_blank" ><BsTwitter/></a></li>
                <li><a href="https://www.facebook.com/" target="_blank"><BsFacebook/></a></li>
                <li><a href="https://www.instagram.com/" target="_blank">< BsInstagram/></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="js-init-sticky">
        <div className="tt-holder-wrapper">
          <div className="tt-holder">
            <div className="tt-col-left">
              {/* Logo */}
              <Link to={'/'} className="tt-logo tt-logo-alignment">
                <span className="icons-logo tt-icon">
                  <MdLocalLaundryService color='black'/>
                </span>
                <span className="tt-base-color">AJET </span>Laundry
              </Link>
              {/* /Logo */}
            </div>
            <div className="tt-col-center tt-col-wide tt-col-objects text-center">
              <div className="tt-col__item">
                {/* Desktop Nav */}
                <nav id="tt-nav">
                  <ul id="menu-primary-menu" className="menu">
                    <li id="nav-menu-item-317" className="main-menu-item active">
                      <Link to={'/'} className="menu-link main-menu-link">Home</Link></li>
                    <li id="nav-menu-item-318" className="main-menu-item">
                      <Link to={'/About'} className="menu-link main-menu-link">About Us</Link></li>
                    <li id="nav-menu-item-527" className="main-menu-item subMenu">
                      <span className="icon-arrow"></span>
                      <Link to={'/Services'} className="menu-link main-menu-link">Services</Link>
                      <ul className="sub-menu">
                        <li id="nav-menu-item-763" className="sub-menu-item">
                          <Link to={'/Services_Item'} className="menu-link sub-menu-link">Services Item</Link></li>
                      </ul>
                    </li>
                    <li id="nav-menu-item-502" className="main-menu-item">
                      <Link to={'/Prices'}  className="menu-link main-menu-link">Prices</Link></li>
                    <li id="nav-menu-item-656" className="main-menu-item subMenu"><span className="icon-arrow"></span>
                    <Link to={'/Blog'} className="menu-link main-menu-link">Blog</Link>
                      <ul className="sub-menu">
                        <li id="nav-menu-item-1593" className="sub-menu-item"
                        ><Link to={'/Blog_Post'} className="menu-link sub-menu-link">Blog Post</Link></li>
                      </ul>
                    </li>
                    <li id="nav-menu-item-526" className="main-menu-item">
                      <Link to={'/FAQ'} className="menu-link main-menu-link">FAQ</Link></li>
                    <li id="nav-menu-item-604" className="main-menu-item">
                      <Link to={'/Contact'} className="menu-link main-menu-link">Contacts</Link></li>
                  </ul>
                </nav>
                {/* /Desktop Nav */}
              </div>
            </div>
            <div className="tt-col-right tt-col-objects">
              <div className="tt-col__item d-block d-lg-none">
                <div className="h-info02">
                  <div className="tt-item">
                  <address>
                    <a href="tel:+234-807-655-2924" className=' flex  justify-center gap-2'>
                      <span className='h-phone '>
                      <RiPhoneFill className=' flex justify-center'/>
                      </span>+234-807-655-2924</a>
                  </address>
                  </div>
                </div>
              </div>
              <div className="tt-col__item">
                <div className="tt-obj tt-obj-cart js-dropdown-cart">
                  <Link to={'/Cart'}  className="tt-obj__btn cart-contents">
                    <i> <BiCart/></i>
                    <div className="tt-obj__badge badge cart-contents-count">0</div>
                  </Link>
                </div>
              </div>
              <div className="tt-col__item d-none d-md-block">
              <button className="tt-btn explore-btn hover-slide-right" onClick={toggleModal}>
                  <span >Schedule a Pickup</span>
                </button>
              </div>
              <div className="tt-col__item toggle-wrapper">
              <button className="toggle-btn" onClick={toggleMenu}> {isOpen ? <FaTimes /> : <FaBars />} {/* Toggle between open/close icons */} </button>
                {/* <a href="#" id="tt-menu-toggle" className="icons-1828859" onClick={toggleMenu}></a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <nav className="mobile-menu">
          <ul>
            <li><Link to={'/'}  className="menu-link">Home</Link></li>
            <li><Link to={'/About'}  className="menu-link">About Us</Link></li>
            <li><Link to={'/Services'}  className="menu-link">Services</Link>
              <ul className="sub-menu">
                <li><Link to={'/Services_Item'} className="sub-menu-link">Services Item</Link></li>
              </ul>
            </li>
            <li><Link to={'/Prices'} className="menu-link">Prices</Link></li>
            <li>
              <aLink to={'/Blog'} className="menu-link">Blog</aLink>
              <ul className="sub-menu">
                <li><Link to={'/Blog_Post'} className="sub-menu-link">Blog Post</Link></li>
              </ul>
            </li>
            <li><Link to={'/FAQ'} className="menu-link">FAQ</Link></li>
            <li><Link to={'/Contact'} className="menu-link">Contacts</Link></li>
          </ul>
        </nav>
      )}
    </header>
    
    {isModalOpen && (
      <div className="modal fade show" role="dialog" style={{ display: 'block' }}>
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-body form-default modal-layout-dafault" style={{ maxHeight: '100vh', overflowY: 'auto' }}>
              <div>
              <button type="button" className="close" onClick={toggleModal} aria-hidden="true">
                <FaTimes className='text-xl' />
              </button>
              <div className="modal-titleblock">
                <div className="modal-title ">Schedule a Pickup</div>
              </div>
              </div>
              <div className="wpcf7 js" id="wpcf7-f822-o2" lang="en-US" dir="ltr">
                <div className="screen-reader-response"><p role="status" aria-live="polite" aria-atomic="true"></p> <ul></ul></div>
                <form action="/laundry-v2/demo2/#wpcf7-f822-o2" method="post" className="wpcf7-form init" aria-label="Contact form" noValidate="novalidate" data-status="init">
                  <div>
                    <input type="hidden" name="_wpcf7" value="822" data-has-listeners="true" />
                    <input type="hidden" name="_wpcf7_version" value="5.9.5" data-has-listeners="true" />
                    <input type="hidden" name="_wpcf7_locale" value="en_US" data-has-listeners="true" />
                    <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f822-o2" data-has-listeners="true" />
                    <input type="hidden" name="_wpcf7_container_post" value="0" data-has-listeners="true" />
                    <input type="hidden" name="_wpcf7_posted_data_hash" value="" data-has-listeners="true" />
                  </div>
                  <div className="form-group">
                    <p><span className="wpcf7-form-control-wrap" data-name="your-name">
                      <input size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control" aria-required="true" aria-invalid="false" placeholder="Your Name *" value="" type="text" name="your-name" data-has-listeners="true" /></span>
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <p><span className="wpcf7-form-control-wrap" data-name="your-email"><input size="40" className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email form-control" aria-required="true" aria-invalid="false" placeholder="Your e-mail address *" value="" type="email" name="your-email" data-has-listeners="true" /></span>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <p><span className="wpcf7-form-control-wrap" data-name="your-phone"><input size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control" aria-required="true" aria-invalid="false" placeholder="Your phone number" value="" type="text" name="your-phone" data-has-listeners="true" /></span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <p><span className="wpcf7-form-control-wrap" data-name="your-address"><input size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control" aria-required="true" aria-invalid="false" placeholder="Address *" value="" type="text" name="your-address" data-has-listeners="true" /></span>
                    </p>
                  </div>
                  <div className="form-group">
                    <div className="custom-select">
                      <p><span className="wpcf7-form-control-wrap" data-name="your-service"><select className="wpcf7-form-control wpcf7-select tt-select" aria-invalid="false" name="your-service"><option value="Service">Service</option><option value="Service 02">Service 02</option><option value="Service 03">Service 03</option><option value="Service 04">Service 04</option><option value="Service 05">Service 05</option></select></span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <p><input type="text" name="date-pick-up" value="" autoComplete="off" data-timepicker="true" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required js_datepicker-1 format24 form-control" aria-required="true" aria-invalid="false" placeholder="Pick-Up Date" data-has-listeners="true" />
                        </p>
                        <div className="form-group__icon icons-747310">
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <p><input type="text" name="date-delivery" value="" size="40" autoComplete="off" data-timepicker="true" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control js_datepicker-2 wpcf7-not-valid" aria-required="true" aria-invalid="true" placeholder="Delivery Date" aria-describedby="wpcf7-f822-o2-ve-date-delivery" data-has-listeners="true" />
                        </p>
                        <div className="form-group__icon icons-747310">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <p><span className="wpcf7-form-control-wrap" data-name="your-message"><textarea cols="40" rows="10" className="wpcf7-form-control wpcf7-textarea form-control" aria-invalid="false" placeholder="Your comment" name="your-message" data-has-listeners="true"></textarea></span>
                    </p>
                  </div>
                  <div className="tt-btn tt-btn__wide">
                    <p><span className="mask">Order Now</span><button type="submit" className="button wpcf7-form-control wpcf7-submit">Order Now</button>
                    </p>
                  </div><div className="wpcf7-response-output" aria-hidden="true"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}

    </div>
    )
  }
  
  export default Navbar
