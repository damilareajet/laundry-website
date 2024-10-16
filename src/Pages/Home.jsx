// import React from 'react'


import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';
import Navbar from "../Components/Navbar"
// import required modules
import { Autoplay, Pagination} from 'swiper/modules';
// import React, { useRef, useState } from 'react';
import { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { BiPhoneCall } from 'react-icons/bi';
import { TbIroning } from 'react-icons/tb';
import { BsPlayCircleFill } from 'react-icons/bs';
import Footer from '../Components/Footer';
// import { Link } from "react-router-dom";
const Home = () => {
  const [activeStep, setActiveStep] = useState(1);

  const handleStepClick = (stepNumber) => {
    setActiveStep(stepNumber);
  };
  return (
    <div className="home page-template page-template-elementor_header_footer page page-id-8 wp-embed-responsive theme-laundry woocommerce-js elementor-default elementor-template-full-width elementor-kit-267 elementor-page elementor-page-8 e--ua-blink e--ua-chrome e--ua-webkit btn-animation" >
      <Navbar/>
      <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
        <section className="swiper-section ">
              <div className="swiper-wrapper">
                  <SwiperSlide>
                    <div className="swiper-slide1  swiper-slide-duplicate swiper-slide-duplicate-next">
                      <div className="container">
                        <div className="row">
                            <div className="col-md-9 col-lg-7">
                              <div className="text-block text-block-4 pt-16">
                                  <h3 className="swiper_title">Lorem ipsum <span className="text-primary"> consectetur </span>dolor,  adipisicing.
                                  </h3>
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aperiam minus ex repellendus veniam ab, aliquam quis distinctio est modi ipsam architecto sed necessitatibus sunt et inventore quod iure dolores!</p>
                                  {/* <Link to={"/About_us_2"} className="btn tt-btn explore-btn hover-slide-right">Read More</Link> */}
                                  <div className=" pt-14"><button className="tt-btn explore-btn hover-slide-right"><span>Read More</span></button></div>
                              </div>
                            </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide2  swiper-slide-prev">
                              <div className="container">
                                <div className="row">
                                    <div className="col-md-9 col-lg-7">
                                      <div className="text-block text-block-4 pt-16">
                                      <h3 className="swiper_title" >Lorem ipsum <span className="text-primary"> consectetur </span>dolor,  adipisicing.
                                      </h3>
                                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aperiam minus ex repellendus veniam ab, aliquam quis distinctio est modi ipsam architecto sed necessitatibus sunt et inventore quod iure dolores!</p>
                                          <div className=" pt-14"><button className="tt-btn explore-btn hover-slide-right"><span>Read More</span></button></div>
                                      </div>
                                    </div>
                                </div>
                              </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide3  swiper-slide-active">
                              <div className="container">
                                <div className="row">
                                  <div className="col-md-9 col-lg-7">
                                    <div className="text-block text-block-4 pt-16">
                                    <h3 className="swiper_title">Lorem ipsum <span className="text-primary"> consectetur </span>dolor,  adipisicing.
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aperiam minus ex repellendus veniam ab, aliquam quis distinctio est modi ipsam architecto sed necessitatibus sunt et inventore quod iure dolores!</p>
                                        <div className=" pt-14"><button className="tt-btn explore-btn hover-slide-right"><span>Read More</span></button></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                    </div>
                  </SwiperSlide>
              </div>
        </section>
      </Swiper>
      <section className="elementor-section elementor-top-section elementor-element elementor-element-e6f7f52 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="e6f7f52" data-element_type="section">
            <div className="elementor-container elementor-column-gap-no">
              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-af5bf31" data-id="af5bf31" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-32ab8e8 elementor-widget elementor-widget-laundry_about" data-id="32ab8e8" data-element_type="widget" data-widget_type="laundry_about.default">
                      <div className="elementor-widget-container">	 
                        <div className="section-inner bg-top-left move-top-bottom tt-overflow-hidden lazyloaded " data-bg="/wrapper01.png" 
                        // style="background-image: url(&quot;https://smartdata.tonytemplates.com/laundry-v2/demo2/wp-content/uploads/sites/2/2020/11/wrapper01.png&quot;);"
                        >
                          <div className="container container-fluid-xl">
                            <div className="box01">
                              <div className="box01__img">
                              <img loading="lazy" decoding="async" width="594" height="493" src="\img01.jpg" className="attachment-full size-full" alt="" srcSet="\img01.jpg 300w" sizes="(max-width: 594px) 100vw, 594px"/>
                              <img loading="lazy" decoding="async" width="138" height="65" src="\arrow-img-right.png" className="tt-arrow" alt=""/>					
                              <div className="box01__img-label">
                                  <div className="tt-text01">20</div>
                                years of <br/> experience								</div>
                              </div>
                              <div className="box01__content">
                                <div className="title-block">
                                  <div className="title-block__label" >
                                    [More than 20 Years of Experience]									</div>
                                  <h4 className="title-block__title">
                                  We are Passionate About Laundry									</h4>
                                </div>
                                <div className="box01__wrapper-img">
                                  <img loading="lazy" decoding="async" width="594" height="493" src="\img01.jpg" className="attachment-full size-full" alt="" srcSet="\img01.jpg 300w" sizes="(max-width: 594px) 100vw, 594px"/>									<div className="box01__img-label">
                                    <div className="tt-text01" >20</div>
                                  years of <br/> experience									</div>
                                </div>
                                <p>
                                We are professionals in the laundry and dry cleaning business, which means we always stay up to date on the latest technologies, cleaning methods, and solutions for dealing with stains or delicate fabrics. Plus, we maintain the highest standards of business integrity by following local and national regulations and environmental safety rules. We are passionate about changing the way you think about laundry!								</p>
                                <div className="row row-custom01 no-gutters">
                                  <div className="col-lg-6">
                                    <ul className="tt-list01">
                                    <li>100% Customer Satisfaction</li>
                                  <li>Free Collection &amp; Delivery</li>
                                  <li>Affordable Prices</li>
                                  <li>Best Quality</li>										</ul>
                                  </div>
                                  <div className="col-lg-6">
                                    <a href="tel:+234-807-655-2924" className="info01">
                                      <div className="info01__icon"><i className=""><BiPhoneCall/></i></div>
                                      <div className="info01__content">
                                      <div className="info01__title">Call for Quality Services</div>
                                        <address>+234-807-655-2924</address>											</div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="added-info added-info__top row js-init-carusel-tablet slick-default">
                                              <a href="https://smartdata.tonytemplates.com/laundry-v2/demo2/#_" className="added-info__item col-md-4">
                                <div className="added-info__icon  icons-806765"></div>
                                <div className="added-info__description">
                                  <h6 className="added-info__title"><span>Save Time &amp; Money</span></h6>
                                  No more wasted time driving to the laundromats, we pickup and deliver for free!								</div>
                              </a> 
                                              <a href="https://smartdata.tonytemplates.com/laundry-v2/demo2/#_" className="added-info__item col-md-4">
                                <div className="added-info__icon  icons-1485715"></div>
                                <div className="added-info__description">
                                  <h6 className="added-info__title"><span>Pay Online in Seconds</span></h6>
                                  Manage your Press account and billing online from your smartphone or computer.								</div>
                              </a> 
                                              <a href="https://smartdata.tonytemplates.com/laundry-v2/demo2/#_" className="added-info__item col-md-4">
                                <div className="added-info__icon  icons-3037040"></div>
                                <div className="added-info__description">
                                  <h6 className="added-info__title"><span>Eco-Friendly</span></h6>
                                  We use safe and clean perc-free solvents, so you, and the Earth, can look good.								</div>
                              </a> 
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
      </section>
      <section className="elementor-section elementor-top-section elementor-element elementor-element-fb25071 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="fb25071" data-element_type="section">
        <div className="elementor-container elementor-column-gap-no">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d7c4b79" data-id="d7c4b79" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-f568c96 elementor-widget elementor-widget-laundry_service_box_carousel" data-id="f568c96" data-element_type="widget" data-widget_type="laundry_service_box_carousel.default">
                <div className="elementor-widget-container">
                      <div className="section-indent no-margin">
                        <div className="container-fluid no-gutters">
                          <div className="title-block text-center">
                            <div className="title-block__label">
                              [Our Services]							</div>
                            <h4 className="title-block__title">
                            Dry Cleaning &amp; Laundry,<br/>Free Delivery</h4>
                          </div>
                          <div className="slick-default slick-arrow-align imgbox-inner__wrapper slick-initialized slick-slider slick-dotted">
                            <div className="slick-list draggable">
                              <div className="slick-track slick_transform">
                                <div className="tt-item slick-slide slick-cloned slick_width">
                                    <a href="https://smartdata.tonytemplates.com/laundry-v2/demo2/laundry-helper/laundry-services/" className="imgbox-inner svg-animation-02" tabIndex="-1">
                                      <div className="imgbox-inner__img">
                                      <img loading="lazy" decoding="async" width="600" height="520" src="/imgbox-inner__img02.jpg" className="attachment-full size-full" alt="" srcSet="/imgbox-inner__img02.jpg 600w, /imgbox-inner__img02-300x260.jpg 300w" sizes="(max-width: 600px) 100vw, 600px"/>									</div>
                                      <div className="imgbox-inner__description" data-aos="fade-up-right">
                                        <div className="imgbox-inner__row">
                                          <div className="imgbox-inner__icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="tt-size-01" width="1024" height="1024" viewBox="0 0 1024 1024"><title></title><g id="">											</g><path fill="currentColor" d="M928.001 928.001c0 48.605-39.407 87.999-87.999 87.999h-655.998c-48.594 0-87.999-39.394-87.999-87.999v-832.002c0-48.605 39.406-87.999 87.999-87.999h655.998c48.594 0 87.999 39.394 87.999 87.999v832.002zM880.002 95.999c0-22.094-17.905-39.999-39.999-39.999h-655.998c-22.094 0-39.999 17.905-39.999 39.999v832.002c0 22.094 17.905 39.999 39.999 39.999h655.998c22.094 0 39.999-17.905 39.999-39.999v-832.002z"></path><path fill="currentColor" d="M897.167 312.003h-784.003c-13.25 0-17.168-10.739-17.168-24v-184.306c0-49.182 39.248-95.696 87.981-95.696h649.921c51.426 0 94.093 50.431 94.093 95.696v184.306c0 13.261-17.585 24-30.835 24zM143.998 264h735.997v-160.303c0-21.599-24.35-47.697-46.094-47.697h-649.921c-21.873 0-39.982 25.41-39.982 47.697v160.303z"></path><path fill="currentColor" d="M376.002 304.003c-13.25 0-24-10.739-24-24v-239.998c0-13.262 10.75-24 24-24s24 10.739 24 24v239.998c0 13.261-10.75 24-24 24z"></path><path fill="currentColor" d="M819.283 163.827c0 22.863-18.511 41.392-41.374 41.392s-41.374-18.529-41.374-41.392c0-22.846 18.511-41.374 41.374-41.374s41.374 18.529 41.374 41.374z"></path><path fill="currentColor" d="M703.426 163.827c0 22.863-18.511 41.392-41.374 41.392s-41.374-18.529-41.374-41.392c0-22.846 18.511-41.374 41.374-41.374s41.374 18.529 41.374 41.374z"></path><path fill="currentColor" d="M587.569 163.827c0 22.863-18.546 41.392-41.374 41.392-22.863 0-41.374-18.529-41.374-41.392 0-22.846 18.511-41.374 41.374-41.374 22.835 0 41.374 18.529 41.374 41.374z"></path><path fill="currentColor" d="M499.63 893.345c-126.752 0-229.87-103.101-229.87-229.856s103.119-229.856 229.87-229.856c126.734 0 229.87 103.101 229.87 229.856s-103.137 229.856-229.87 229.856zM499.63 481.632c-100.287 0-181.871 81.566-181.871 181.853 0 100.27 81.584 181.853 181.871 181.853 100.27 0 181.871-81.584 181.871-181.853 0-100.287-81.602-181.853-181.871-181.853z"></path><path fill="currentColor" d="M412.033 739.395c-56.127 0-104.85-32.734-129.519-58.942-9.090-9.649-8.641-24.833 1.026-33.923 9.585-9.090 24.769-8.659 33.87 0.962v0c3.327 3.473 82.243 84.351 163.022 16.658 91.425-76.497 187.506-33.17 225.507 0.431 9.934 8.769 10.878 23.936 2.098 33.87-8.787 9.923-23.953 10.867-33.87 2.098-3.17-2.768-80.672-68.433-162.911 0.413-33.439 27.985-67.505 38.432-99.215 38.432z"></path><path fill="currentColor" d="M628.946 710.034c0 9.154-7.405 16.559-16.559 16.559-9.136 0-16.541-7.405-16.541-16.559 0-9.136 7.405-16.541 16.541-16.541 9.154 0 16.559 7.405 16.559 16.541z"></path><path fill="currentColor" d="M612.387 776.242c0 9.136-7.405 16.559-16.541 16.559s-16.559-7.423-16.559-16.559 7.423-16.541 16.559-16.541c9.136 0 16.541 7.405 16.541 16.541z"></path><path fill="currentColor" d="M546.19 726.593c0 9.136-7.405 16.541-16.559 16.541s-16.559-7.405-16.559-16.541c0-9.154 7.405-16.559 16.559-16.559s16.559 7.405 16.559 16.559z"></path><path fill="currentColor" d="M513.072 792.801c0 9.136-7.405 16.541-16.541 16.541s-16.541-7.405-16.541-16.541c0-9.154 7.405-16.559 16.541-16.559s16.541 7.405 16.541 16.559z"></path><path fill="currentColor" d="M413.758 759.694c0 9.136-7.405 16.541-16.541 16.541s-16.541-7.405-16.541-16.541 7.405-16.559 16.541-16.559c9.136 0 16.541 7.423 16.541 16.559z"></path></svg>											</div>
                                          <div className="imgbox-inner__content">
                                            <h4 className="imgbox-inner__title">Laundry Services</h4>
                                            <p>Let us pick up your dirty laundry, sort it, pre-treat stains, wash, dry, fold and deliver back to you in one neat, easy package.</p>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="tt-item slick-slide slick-cloned slick_width">
                                    <a href="https://smartdata.tonytemplates.com/laundry-v2/demo2/laundry-helper/laundry-services/" className="imgbox-inner svg-animation-03" tabIndex="-1">
                                      <div className="imgbox-inner__img">
                                      <img loading="lazy" decoding="async" width="600" height="520" src="/imgbox-inner__img03.jpg" className="attachment-full size-full" alt="" srcSet="/imgbox-inner__img03.jpg 600w, /imgbox-inner__img03-300x260.jpg 300w" sizes="(max-width: 600px) 100vw, 600px"/>									</div>
                                      <div className="imgbox-inner__description">
                                        <div className="imgbox-inner__row">
                                          <div className="imgbox-inner__icon">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                        // xmlns:xlink="http://www.w3.org/1999/xlink"
                                          className="tt-size-02" width="300" height="300" viewBox="0 0 35 32"><path className="hanger" d="M32.702 20.62l-13.413-12.155c-0.15-0.137-0.316-0.252-0.489-0.352v-1.965h-0.128c-0.088-0.27-0.301-0.497-0.673-0.583-0.831-0.191-1.748-0.465-2.315-1.143-0.274-0.328-0.359-0.76-0.242-0.988 0.664-1.294 2.593-0.9 3.702-0.421 1.181 0.51 2.21-1.211 1.019-1.725-2.057-0.889-5.404-1.289-6.511 1.245-0.855 1.956 0.436 3.464 2.078 4.32v1.245c-0.184 0.104-0.36 0.223-0.52 0.367l-13.411 12.155c-1.127 1.021-0.748 1.849 0.845 1.849h6.377v-2.155h-3.674l11.312-10.251c0.145-0.132 0.361-0.208 0.592-0.208s0.447 0.075 0.592 0.208l11.312 10.251h-3.747v2.155h6.45c1.593 0 1.971-0.828 0.845-1.849z"></path><path className="clothes" d="M10.097 20.314v11.686l3.376-1.023-0.031-6.447c-0.003-0.594 0.477-1.081 1.072-1.083 0.002 0 0.004 0 0.005 0 0.593 0 1.075 0.479 1.077 1.072l0.028 5.806 8.704-2.636v-9.561h-14.232v2.186z"></path></svg>											</div>
                                          <div className="imgbox-inner__content">
                                            <h4 className="imgbox-inner__title">Dry Cleaning Services</h4>
                                            <p>SMU students and local residents love on our reliable dry cleaning services for the fast, accurate, top quality results.</p>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="tt-item slick-slide slick-cloned slick_width" >
                                    <a href="https://smartdata.tonytemplates.com/laundry-v2/demo2/laundry-helper/laundry-services/" className="imgbox-inner " tabIndex="-1">
                                      <div className="imgbox-inner__img">
                                      <img loading="lazy" decoding="async" width="600" height="520" src="/imgbox-inner__img05.jpg" className="attachment-full size-full" alt="" srcSet="/imgbox-inner__img05.jpg 600w, /imgbox-inner__img05-300x260.jpg 300w" sizes="(max-width: 600px) 100vw, 600px"/>									</div>
                                      <div className="imgbox-inner__description">
                                        <div className="imgbox-inner__row">
                                          <div className="imgbox-inner__icon">
                                        <i aria-hidden="true" className=""><TbIroning/></i>											</div>
                                          <div className="imgbox-inner__content">
                                            <h4 className="imgbox-inner__title">Ironing</h4>
                                            <p>These services are accomplished under the guidance of adroit personnel who have affluent industry proficiency. </p>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="elementor-section elementor-top-section elementor-section-full_width">
      <div className="elementor-container">
        <div className="elementor-column elementor-col-100">
          <div className="elementor-widget-wrap">
            <div className="elementor-widget">
              <div className="elementor-widget-container">
                <div className="section-indent">
                  <div className="container">
                    <div className="row align-items-center stepbox_wrapper">
                      <div className="col-md-6 col-lg-5 stepbox__layout">
                        <div className="title-block">
                          <div className="title-block__label">Get Your Clothes Collected & Delivered</div>
                          <h4 className="title-block__title">How We Work</h4>
                        </div>
                        <p>Our Service is dedicated to making your life easier by providing pick up laundry service. Give yourself one less thing to worry about and try our residential wash and fold service that includes pick up and delivery.</p>
                        <p>We have been in the laundry business for more than 12 years and would love to earn your business. Try us today and save $10 Off your first laundry service of 20 pounds or more.</p>
                        <a href="https://smartdata.tonytemplates.com/laundry-v2/demo2/services/" className="tt-btn tt-btn__top">
                          <button className="explore-btn hover-slide-right"><span>Get Service Now</span></button>
                        </a>
                      </div>
                      <div className="col-md-6 col-lg-6 offset-lg-1">
                        <div className="slider-stepbox" id="js-stepbox__layout">
                          {[1, 2, 3, 4].map((step) => (
                            <div
                              key={step}
                              className={`tt-item ${activeStep === step ? 'active' : ''}`}
                              data-number={step}
                              onClick={() => handleStepClick(step)}
                            >
                              <div className="stepbox">
                                <div className="stepbox__img">
                                  <img src={`/stepbox-img0${step}.png`} alt={`Step ${step}`} />
                                </div>
                                <div className="stepbox__content">
                                  <div className="stepbox__number">{`0${step}`}</div>
                                  <div className="stepbox__limitation">
                                    <h6 className="stepbox__title">
                                      {step === 1 && <span className="tt-base-color">Bag Up</span>} All Your Dirty Clothes
                                    </h6>
                                    <p>Some descriptive text for step {step}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="stepbox-dots__wrapper" id="js-stepbox__nav">
                          <ul className="stepbox-dots" role="tablist">
                            {[1, 2, 3, 4].map((step) => (
                              <li
                                key={step}
                                className={`nav-0${step} ${activeStep === step ? 'active' : ''}`}
                                data-number={step}
                              >
                                <button type="button" role="tab" onClick={() => handleStepClick(step)}>
                                  {step}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      <section className="elementor-section elementor-top-section elementor-element elementor-element-7c87b6c elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="7c87b6c" data-element_type="section">
        <div className="elementor-container elementor-column-gap-no">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-561c7bb" data-id="561c7bb" data-element_type="column">
              <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-963b8a4 elementor-widget elementor-widget-laundry_service_box_two" data-id="963b8a4" data-element_type="widget" data-widget_type="laundry_service_box_two.default">
                <div className="elementor-widget-container">
              <div className="section-inner">
                <div className="box02 box02__img-left">
                  <div className="box02__img">
                              <picture>
                      <source srcSet="\box02-img01.jpg" media="(max-width: 650px)" type="image/png"/>
                      <source srcSet="\box02-img01.jpg" media="(max-width: 1024px)" type="image/png"/>
                      <img loading="lazy" decoding="async" width="945" height="694" src="\box02-img01.jpg" className="attachment-full size-full" alt="" srcSet="\box02-img01.jpg 945w, \box02-img01.jpg 300w, \box02-img01.jpgg 768w" sizes="(max-width: 945px) 100vw, 945px"/>						</picture>
                                  <img loading="lazy" decoding="async" width="141" height="58" src="/arrow-img-right03.png" className="tt-arrow" alt=""/>					</div>
                  <div className="box02__content">
                    <div className="title-block">
                      <div className="title-block__label">
                        Laundry service for your business!							</div>
                      <h4 className="title-block__title">Commercial Laundry<br/> Service</h4>
                    </div>
                      <p>Large corporations have determined that there is a financial benefit to outsourcing back office work because it saves money. Allowing us to do your laundry is cost effective and will allow you and your employees to focus on your core business. We offer smart solutions to meet your commercial laundry needs. Our Commercial Laundry Clients include:</p>
        <div className="row tt-list01__top">
        <div className="col-lg-6">
        <ul className="tt-list01">
        <li>Salons &amp; Spas</li>		<li>Restaurants and Caterers</li>		<li>Religious Organizations</li>	<li>Daycare centers</li>
        </ul>
        </div>
        <div className="col-lg-6">
        <ul className="tt-list01">
          <li>Assisted Living / Nursing Homes</li>	 
        <li>Hotels &amp; Motels</li>	 
        <li>Nail Salons</li>	 
        <li>Athletic Facilities / Gyms</li>
        </ul>
          </div>
        </div>						<div className="box02-list-col"></div>
                  </div>
                </div>
              </div> 
                        </div>
                </div>
                  </div>
          </div>
        </div>
      </section>
      <section className="elementor-section elementor-top-section elementor-element elementor-element-f2991b0 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="f2991b0" data-element_type="section">
        <div className="elementor-container elementor-column-gap-no">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-863409c" data-id="863409c" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-aa5f86e elementor-widget elementor-widget-laundry_service_tab" data-id="aa5f86e" data-element_type="widget" data-widget_type="laundry_service_tab.default">
                <div className="elementor-widget-container">
                  <div className="tt-position-relative">
                      <div className="lazyload tt-obj01-bg" data-bg="https://smartdata.tonytemplates.com/laundry-v2/demo2/wp-content/uploads/sites/2/2020/11/wrapper04.png"></div>
                        <div className="section-indent no-margin ">
                          <div className="container container-fluid-lg">
                            <div className="title-block text-center">
                              <div className="title-block__label">
                                Important Information				</div>
                              <h4 className="title-block__title">Trusted Laundry Service</h4>
                            </div>
                            <div className="tabs-default tab-layout01">
                              <div className="tt-ajax-tabs tt-ajax-tabs-hight ">
                                <ul className="nav nav-tabs" role="tablist">
                                  <li className="nav-item"><a className="nav-link show active" data-toggle="tab"
                                  //  href="https://smartdata.tonytemplates.com/laundry-v2/demo2/#tt-tab-01"
                                   role="tab">Our Approach</a></li> 
                                  <li className="nav-item"><a className="nav-link " data-toggle="tab" 
                                  // href="https://smartdata.tonytemplates.com/laundry-v2/demo2/#tt-tab-02"
                                   role="tab">Questions / Answers</a></li> 
                                  <li className="nav-item"><a className="nav-link " data-toggle="tab" 
                                  href="#tt-tab-03"
                                  role="tab">Why Choose Us</a></li> 
                                </ul>
                              </div>
                              <div className="tab-content">
                                <div className="tab-pane active fade" id="tt-tab-01" role="tabpanel">
                                        <div data-elementor-type="section" data-elementor-id="151" className="elementor elementor-151">
                                      <section className="elementor-section elementor-top-section elementor-element elementor-element-9e718c6 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="9e718c6" data-element_type="section">
                                      <div className="elementor-container elementor-column-gap-default">
                                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7fe9ffe" data-id="7fe9ffe" data-element_type="column">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                      <div className="elementor-element elementor-element-a06118d elementor-widget elementor-widget-laundry_our_approach" data-id="a06118d" data-element_type="widget" data-widget_type="laundry_our_approach.default">
                                  <div className="elementor-widget-container">  
                                  <div className="row align-items-lg-center">
                                    <div className="col-sm-6 col-lg-5">
                                      <h5 className="tab-layout01__title">Our Approach</h5>
                                      <p>We approach workforce accommodations with a property development mindset. Our “Develop. Own. Operate.” business model produces integrated solutions that enable clients to focus on their core business.</p>
                            <p>Clients benefit from consistent service delivery with greater cost and quality control as well as more efficient use of their operational and financial resources.</p>					</div>
                                    <div className="divider-sm d-block d-sm-none"></div>
                                    <div className="col-sm-6 col-lg-6 offset-lg-1">
                                      <a href="https://www.youtube.com/watch?v=_sI_Ps7JSEk" className="tt-obj-video js-video-popup">
                                      <img loading="lazy" decoding="async" width="569" height="321" src="/video-img01.jpg" className="attachment-full size-full" alt="" srcSet="/video-img01.jpg 569w, /video-img01-300x169.jpg 300w" sizes="(max-width: 569px) 100vw, 569px"/>									
                                      <div className="btn-video-holder" data-video="https://www.youtube.com/watch?v=_sI_Ps7JSEk">
                                          <div> < BsPlayCircleFill size={40}/></div>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="added-info02 added-info02__top row">
                                    <a href="https://smartdata.tonytemplates.com/laundry-v2/demo2/#_" className="added-info02__item col-md-4">
                                        <div className="added-info02__icon  icons-3022225"></div>
                                        <div className="added-info02__description">
                                          <h6 className="added-info02__title"><span>High Quality</span></h6>
                                          We work hard to make sure that the clothes you get back are spotless and ready for action.							</div>
                                      </a> 
                                        <a href="https://smartdata.tonytemplates.com/laundry-v2/demo2/#_" className="added-info02__item col-md-4">
                                        <div className="added-info02__icon  icons-3096677"></div>
                                        <div className="added-info02__description">
                                          <h6 className="added-info02__title"><span>Cleaner &amp; Greener</span></h6>
                                          We work with the environment in mind. No harsh chemicals.							</div>
                                      </a> 
                                          <a href="https://smartdata.tonytemplates.com/laundry-v2/demo2/#_" className="added-info02__item col-md-4">
                                        <div className="added-info02__icon  icons-686308"></div>
                                        <div className="added-info02__description">
                                          <h6 className="added-info02__title"><span>Happiness Guarantee</span></h6>
                                          If you&apos;re not completely satisfied with the wash or dry cleaning, we will re-process your clothes for free!							</div>
                                      </a> 
                                </div> 
                                  </div>
                                  </div>
                                    </div>
                              </div>
                                    </div>
                              </section>
                                  </div>
                                </div>
                                <div className="tab-pane " id="tt-tab-02" role="tabpanel">
                                    <div data-elementor-type="section" data-elementor-id="155" className="elementor elementor-155">
                                  <section className="elementor-section elementor-top-section elementor-element elementor-element-4474a0d elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="4474a0d" data-element_type="section">
                                  <div className="elementor-container elementor-column-gap-default">
                                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f14228c" data-id="f14228c" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-3d5e545 elementor-widget elementor-widget-laundry_questions_answers" data-id="3d5e545" data-element_type="widget" data-widget_type="laundry_questions_answers.default">
                              <div className="elementor-widget-container">
                          <div className="row">
                            <div className="col-md-5">
                              <img loading="lazy" decoding="async" width="449" height="497" src="\img05.jpg" className="tt-align-img02" alt="" srcSet="\img05.jpg 271w" sizes="(max-width: 449px) 100vw, 449px"/>			</div>
                            <div className="divider-sm d-block d-md-none"></div>
                            <div className="col-md-7">
                              <h5 className="tab-layout01__title">Questions / Answers</h5>
                              <div className="js-accordeon accordeon-01 init-accordeon">
                                        <div className="tt-item tt-item__open">
                                  <div className="tt-item__title">What if my clothes are heavily stained?</div>
                                  <div className="tt-item__content">
                                  We try our best to remove the stains by adapting the best washing cycle, detergent, temperature suitable for the garment, however in case of tough stains, we would recommend you to use our stain removal or dry cleaning service.						</div>
                                </div> 
                                          <div className="tt-item ">
                                  <div className="tt-item__title">How long you take to return the garments?</div>
                                  <div className="tt-item__content">
                                  We try our best to remove the stains by adapting the best washing cycle, detergent, temperature suitable for the garment, however in case of tough stains, we would recommend you to use our stain removal or dry cleaning service.						</div>
                                </div> 
                                          <div className="tt-item ">
                                  <div className="tt-item__title">How can I pay for the services?</div>
                                  <div className="tt-item__content">
                                  We try our best to remove the stains by adapting the best washing cycle, detergent, temperature suitable for the garment, however in case of tough stains, we would recommend you to use our stain removal or dry cleaning service.						</div>
                                </div> 
                                          <div className="tt-item ">
                                  <div className="tt-item__title">Does Dry cleaning process removes all the stains?</div>
                                  <div className="tt-item__content">
                                  We try our best to remove the stains by adapting the best washing cycle, detergent, temperature suitable for the garment, however in case of tough stains, we would recommend you to use our stain removal or dry cleaning service.						</div>
                                </div>                            
                              </div>
                            </div>
                          </div>

                              </div>
                              </div>
                                </div>
                          </div>
                                </div>
                          </section>
                              </div>
                                </div>
                                <div className="tab-pane " id="tt-tab-03" role="tabpanel">
                                <div data-elementor-type="section" data-elementor-id="282" className="elementor elementor-282">
                              <section className="elementor-section elementor-top-section elementor-element elementor-element-80552d3 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="80552d3" data-element_type="section">
                              <div className="elementor-container elementor-column-gap-default">
                            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-dc5ab90" data-id="dc5ab90" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                              <div className="elementor-element elementor-element-2301f69 elementor-widget elementor-widget-laundry_why_choose_us" data-id="2301f69" data-element_type="widget" data-widget_type="laundry_why_choose_us.default">
                          <div className="elementor-widget-container">
                        <div className="row">
                          <div className="col-md-12 col-lg-4">
                            <h5 className="tab-layout01__title">Why Choose Us</h5>
                    <p>We know that a strong, client-focused business is a smart business. We have a 20,000-square-foot, state-of-the-art workshop where all cleaning, specialized spot removal, pressing, inspection and packaging of your items take place.</p>
                    <h5 className="tt-subtitle indent-top">Values &amp; Experience</h5>
                    <p>We know that a strong, client-focused business is a smart business. We have a 20,000-square-foot, state-of-the-art workshop where all cleaning, specialized spot removal, pressing, inspection and packaging of your items take place.</p>											<a href="https://smartdata.tonytemplates.com/laundry-v2/demo2/services/" className="tt-btn tt-btn__top">
                                        <span className="mask">Get Service Now</span>
                              <div className="button">Get Service Now</div>
                            </a>
                          </div>
                          <div className="divider d-block d-lg-none"></div>
                          <div className="col-md-6 col-lg-4">
                            <div className="info02__wrapper">
                                            <div className="info02__item">
                                  <div className="info02">
                                    <div className="info02__icon"><i aria-hidden="true" className=" icons-bright-lightbulb"></i></div>
                                    <div className="info02__content">
                                      <h6 className="info02__title">Persionalized Experience</h6>
                                      <p>We take utmost care of your clothes, segregating based on the cloth type and giving you instant clothes to make a statement.</p>
                                    </div>
                                  </div>
                                </div> 
                                              <div className="info02__item">
                                  <div className="info02">
                                    <div className="info02__icon"><i aria-hidden="true" className=" icons-reading-book"></i></div>
                                    <div className="info02__content">
                                      <h6 className="info02__title">Convenience</h6>
                                      <p>With just a tap of a button, your laundry gets done, giving your leisure time to spend with family and friends.</p>
                                    </div>
                                  </div>
                                </div> 
                                              <div className="info02__item">
                                  <div className="info02">
                                    <div className="info02__icon"><i aria-hidden="true" className=" icons-express-delivery"></i></div>
                                    <div className="info02__content">
                                      <h6 className="info02__title">Express Delivery</h6>
                                      <p>With our super express delivery, we would get your laundry done in less than 8 hours.</p>
                                    </div>
                                  </div>
                                </div> 		
                            </div>
                          </div>
                          <div className="divider-sm d-block d-md-none"></div>
                          <div className="col-md-6 col-lg-4">
                            <div className="info02__wrapper">
                                        <div className="info02__item">
                              <div className="info02">
                                <div className="info02__icon"><i aria-hidden="true" className=" icons-tag-1"></i></div>
                                <div className="info02__content">
                                  <h6 className="info02__title">Affordable Pricing</h6>
                                  <p>Prices that suits your pocket is one of our USP. An option of choosing between 2 types of pricing is available.</p>
                                </div>
                              </div>
                            </div> 
                                          <div className="info02__item">
                              <div className="info02">
                                <div className="info02__icon"><i aria-hidden="true" className=" icons-3022225"></i></div>
                                <div className="info02__content">
                                  <h6 className="info02__title">Quality</h6>
                                  <p>We use the best in class products, to assure that your favorite clothes are always there for you to wear.</p>
                                </div>
                              </div>
                            </div> 
                                          <div className="info02__item">
                              <div className="info02">
                                <div className="info02__icon"><i aria-hidden="true" className=" icons-interface"></i></div>
                                <div className="info02__content">
                                  <h6 className="info02__title">Instant Order Update</h6>
                                  <p>Regular updates of your order, to help you keep a track of your laundry and plan accordingly.</p>
                                </div>
                              </div>
                            </div> 
                                          <div className="info02__item">
                              <div className="info02">
                                <div className="info02__icon"></div>
                                <div className="info02__content">
                                  <h6 className="info02__title">Persionalized Experience</h6>
                                  <p>We take utmost care of your clothes, segregating based on the cloth type and giving you instant clothes to make a statement.</p>
                                </div>
                              </div>
                            </div>                 
                            </div>
                          </div>
                        </div> 
                            </div>
                          </div>
                            </div>
                      </div>
                            </div>
                      </section>
                          </div>
                                </div>					
                              </div>
                            </div>
                          </div>
                      </div>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="elementor-section elementor-top-section elementor-element elementor-element-6ac9291 elementor-section-full_width tt-position-relative bg-top-left move-bottom-top elementor-section-height-default elementor-section-height-default" data-id="6ac9291" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
						<div className="elementor-container elementor-column-gap-no">
					<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5b69154" data-id="5b69154" data-element_type="column">
			<div className="elementor-widget-wrap elementor-element-populated">
						<div className="elementor-element elementor-element-ca3aea0 elementor-widget elementor-widget-laundry_price" data-id="ca3aea0" data-element_type="widget" data-widget_type="laundry_price.default">
				<div className="elementor-widget-container">

			<div className="tt-position-relative">
				<div className="section-indent">
										<div className="lazyload tt-obj02-bg" data-bg="https://smartdata.tonytemplates.com/laundry-v2/demo2/wp-content/uploads/sites/2/2020/11/wrapper05.png"></div>
										<div className="container">
						<div className="title-block text-center">
							<div className="title-block__label">
								Affordable Prices							</div>
							<h4 className="title-block__title">
							Our Dry Cleaning &amp; Laundry Prices							</h4>
							<div className="title-block__text">
							Our prices are simple and affordable which are easy on pocket<br/> in comparison with the high street prices							</div>
						</div>
						<div className="slick-default promo03__wrapper slick-initialized slick-slider slick-dotted">
															<div className="slick-list draggable"><div className="slick-track slick-cont ">
                                <div className="tt-item slick-slide slick-cloned slick-cloned-width " data-slick-index="-4" id="" aria-hidden="true" tabIndex="-1">
									<div className="promo03 js-handler">
										<div className="promo03__move">
											<div className="promo03__icon"><i aria-hidden="true" className=" icons-2737832"></i></div>
											<div className="promo03__title">Blanket Service</div>
											<div className="promo03__subtitle">Washed and Pressed</div>
											<div className="promo03__price">
												From <span className="tt-value">
												€25.00												</span>
											</div>
											<div className="promo03__show-btn">
																							<a href="javascript:void(0)" className="tt-btn service-cart" data-product_id="9995" data-type="service" data-price="25" data-quantity="1" data-product_sku="" data-service-title="Blanket Service" id="" tabIndex="-1">
																								<span className="mask">Order Now</span>
													<div className="button">Order Now</div>
												</a>
											
											</div>
										</div>
										<div className="promo03__btn-toggle"></div>
									</div>
								</div><div className="tt-item slick-slide slick-cloned slick-cloned-width" data-slick-index="-3" id="" aria-hidden="true" tabIndex="-1">
									<div className="promo03 js-handler">
										<div className="promo03__move">
											<div className="promo03__icon"><i aria-hidden="true" className=" icons-863958"></i></div>
											<div className="promo03__title">Curtains Service</div>
											<div className="promo03__subtitle">Washed and Pressed</div>
											<div className="promo03__price">
												From <span className="tt-value">
												€22.00												</span>
											</div>
											<div className="promo03__show-btn">
																							<a href="javascript:void(0)" className="tt-btn service-cart" data-product_id="9996" data-type="service" data-price="22" data-quantity="1" data-product_sku="" data-service-title="Curtains Service" id="" tabIndex="-1">
																								<span className="mask">Order Now</span>
													<div className="button">Order Now</div>
												</a>
											
											</div>
										</div>
										<div className="promo03__btn-toggle"></div>
									</div>
								</div><div className="tt-item slick-slide slick-cloned slick-cloned-width" data-slick-index="-2" id="" aria-hidden="true" tabIndex="-1">
									<div className="promo03 js-handler">
										<div className="promo03__move">
											<div className="promo03__icon"><i aria-hidden="true" className=" icons-486676"></i></div>
											<div className="promo03__title">Ironing Service</div>
											<div className="promo03__subtitle">Iron and Fold</div>
											<div className="promo03__price">
												From <span className="tt-value">
												€3.00												</span>
											</div>
											<div className="promo03__show-btn">
																							<a href="javascript:void(0)" className="tt-btn service-cart" data-product_id="9997" data-type="service" data-price="3" data-quantity="1" data-product_sku="" data-service-title="Ironing Service" id="" tabIndex="-1">
																								<span className="mask">Order Now</span>
													<div className="button">Order Now</div>
												</a>
											
											</div>
										</div>
										<div className="promo03__btn-toggle"></div>
									</div>
								</div><div className="tt-item slick-slide slick-cloned slick-cloned-width" data-slick-index="-1" id="" aria-hidden="true" tabIndex="-1">
									<div className="promo03 js-handler">
										<div className="promo03__move">
											<div className="promo03__icon"><i aria-hidden="true" className=" icons-1072668"></i></div>
											<div className="promo03__title">Repairs &amp; Alterations</div>
											<div className="promo03__subtitle">Simple Sewing</div>
											<div className="promo03__price">
												From <span className="tt-value">
												€12.00												</span>
											</div>
											<div className="promo03__show-btn">
																							<a href="javascript:void(0)" className="tt-btn service-cart" data-product_id="9998" data-type="service" data-price="12" data-quantity="1" data-product_sku="" data-service-title="Repairs &amp; Alterations" id="" tabIndex="-1">
																								<span className="mask">Order Now</span>
													<div className="button">Order Now</div>
												</a>
											
											</div>
										</div>
										<div className="promo03__btn-toggle"></div>
									</div>
								</div><div className="tt-item slick-slide slick-cloned-width" data-slick-index="0" aria-hidden="true" tabIndex="-1" role="tabpanel" id="slick-slide10" aria-describedby="slick-slide-control10" >
									<div className="promo03 js-handler">
										<div className="promo03__move">
											<div className="promo03__icon"><i aria-hidden="true" className=" icons-884417"></i></div>
											<div className="promo03__title">Shirts Service</div>
											<div className="promo03__subtitle">Washed and Pressed</div>
											<div className="promo03__price">
												From <span className="tt-value">
												€2.00												</span>
											</div>
											<div className="promo03__show-btn">
																							<a href="javascript:void(0)" className="tt-btn service-cart" data-product_id="9991" data-type="service" data-price="2" data-quantity="1" data-product_sku="" data-service-title="Shirts Service" id="target-btn-1-ta" tabIndex="-1">
																								<span className="mask">Order Now</span>
													<div className="button">Order Now</div>
												</a>
											
											</div>
										</div>
										<div className="promo03__btn-toggle"></div>
									</div>
								</div><div className="tt-item slick-slide slick-cloned-width" data-slick-index="1" aria-hidden="true" tabIndex="-1" role="tabpanel" id="slick-slide11" >
									<div className="promo03 js-handler">
										<div className="promo03__move">
											<div className="promo03__icon"><i aria-hidden="true" className=" icons-868044"></i></div>
											<div className="promo03__title">Day Dress Service</div>
											<div className="promo03__subtitle">Dry Clean</div>
											<div className="promo03__price">
												From <span className="tt-value">
												€10.50												</span>
											</div>
											<div className="promo03__show-btn">
																							<a href="javascript:void(0)" className="tt-btn service-cart" data-product_id="9992" data-type="service" data-price="10.50" data-quantity="1" data-product_sku="" data-service-title="Day Dress Service" id="target-btn-2-ta" tabIndex="-1">
																								<span className="mask">Order Now</span>
													<div className="button">Order Now</div>
												</a>
											
											</div>
										</div>
										<div className="promo03__btn-toggle"></div>
									</div>
								</div><div className="tt-item slick-slide slick-cloned-width" data-slick-index="2" aria-hidden="true" tabIndex="-1" role="tabpanel" id="slick-slide12" >
									<div className="promo03 js-handler">
										<div className="promo03__move">
											<div className="promo03__icon"><i aria-hidden="true" className=" icons-1233149"></i></div>
											<div className="promo03__title">Dry Cleaning</div>
											<div className="promo03__subtitle">Wash, Dry and Fold</div>
											<div className="promo03__price">
												From <span className="tt-value">
												€2.00												</span>
											</div>
											<div className="promo03__show-btn">
																							<a href="javascript:void(0)" className="tt-btn service-cart" data-product_id="9993" data-type="service" data-price="2" data-quantity="1" data-product_sku="" data-service-title="Dry Cleaning" id="target-btn-3-ta" tabIndex="-1">
																								<span className="mask">Order Now</span>
													<div className="button">Order Now</div>
												</a>
											
											</div>
										</div>
										<div className="promo03__btn-toggle"></div>
									</div>
								</div><div className="tt-item slick-slide slick-cloned-width" data-slick-index="3" aria-hidden="true" tabIndex="-1" role="tabpanel" id="slick-slide13" >
									<div className="promo03 js-handler">
										<div className="promo03__move">
											<div className="promo03__icon"><i aria-hidden="true" className=" icons-495018"></i></div>
											<div className="promo03__title">Bedding</div>
											<div className="promo03__subtitle">Bed Set (Wash and Press)</div>
											<div className="promo03__price">
												From <span className="tt-value">
												€10.50												</span>
											</div>
											<div className="promo03__show-btn">
																							<a href="javascript:void(0)" className="tt-btn service-cart" data-product_id="9994" data-type="service" data-price="10.50" data-quantity="1" data-product_sku="" data-service-title="Bedding" id="target-btn-4-ta" tabIndex="-1">
																								<span className="mask">Order Now</span>
													<div className="button">Order Now</div>
												</a>
											
											</div>
										</div>
										<div className="promo03__btn-toggle"></div>
									</div>
								</div><div className="tt-item slick-slide slick-current slick-active slick-cloned-width" data-slick-index="4" aria-hidden="false" tabIndex="0" role="tabpanel" id="slick-slide14" aria-describedby="slick-slide-control11" >
									<div className="promo03 js-handler">
										<div className="promo03__move">
											<div className="promo03__icon"><i aria-hidden="true" className=" icons-2737832"></i></div>
											<div className="promo03__title">Blanket Service</div>
											<div className="promo03__subtitle">Washed and Pressed</div>
											<div className="promo03__price">
												From <span className="tt-value">
												€25.00												</span>
											</div>
											<div className="promo03__show-btn">
																							<a href="javascript:void(0)" className="tt-btn service-cart" data-product_id="9995" data-type="service" data-price="25" data-quantity="1" data-product_sku="" data-service-title="Blanket Service" id="target-btn-5-ta" tabIndex="0">
																								<span className="mask">Order Now</span>
													<div className="button">Order Now</div>
												</a>
											
											</div>
										</div>
										<div className="promo03__btn-toggle"></div>
									</div>
								</div><div className="tt-item slick-slide slick-active slick-cloned-width" data-slick-index="5" aria-hidden="false" tabIndex="0" role="tabpanel" id="slick-slide15" >
									<div className="promo03 js-handler">
										<div className="promo03__move">
											<div className="promo03__icon"><i aria-hidden="true" className=" icons-863958"></i></div>
											<div className="promo03__title">Curtains Service</div>
											<div className="promo03__subtitle">Washed and Pressed</div>
											<div className="promo03__price">
												From <span className="tt-value">
												€22.00												</span>
											</div>
											<div className="promo03__show-btn">
																							<a href="javascript:void(0)" className="tt-btn service-cart" data-product_id="9996" data-type="service" data-price="22" data-quantity="1" data-product_sku="" data-service-title="Curtains Service" id="target-btn-6-ta" tabIndex="0">
																								<span className="mask">Order Now</span>
													<div className="button">Order Now</div>
												</a>
											
											</div>
										</div>
										<div className="promo03__btn-toggle"></div>
									</div>
								</div><div className="tt-item slick-slide slick-active slick-cloned-width" data-slick-index="6" aria-hidden="false" tabIndex="0" role="tabpanel" id="slick-slide16" >
									<div className="promo03 js-handler">
										<div className="promo03__move">
											<div className="promo03__icon"><i aria-hidden="true" className=" icons-486676"></i></div>
											<div className="promo03__title">Ironing Service</div>
											<div className="promo03__subtitle">Iron and Fold</div>
											<div className="promo03__price">
												From <span className="tt-value">
												€3.00												</span>
											</div>
											<div className="promo03__show-btn">
																							<a href="javascript:void(0)" className="tt-btn service-cart" data-product_id="9997" data-type="service" data-price="3" data-quantity="1" data-product_sku="" data-service-title="Ironing Service" id="target-btn-7-ta" tabIndex="0">
																								<span className="mask">Order Now</span>
													<div className="button">Order Now</div>
												</a>
											
											</div>
										</div>
										<div className="promo03__btn-toggle"></div>
									</div>
								</div><div className="tt-item slick-slide slick-active slick-cloned-width" data-slick-index="7" aria-hidden="false" tabIndex="0" role="tabpanel" id="slick-slide17" >
									<div className="promo03 js-handler">
										<div className="promo03__move">
											<div className="promo03__icon"><i aria-hidden="true" className=" icons-1072668"></i></div>
											<div className="promo03__title">Repairs &amp; Alterations</div>
											<div className="promo03__subtitle">Simple Sewing</div>
											<div className="promo03__price">
												From <span className="tt-value">
												€12.00												</span>
											</div>
											<div className="promo03__show-btn">
																							<a href="javascript:void(0)" className="tt-btn service-cart" data-product_id="9998" data-type="service" data-price="12" data-quantity="1" data-product_sku="" data-service-title="Repairs &amp; Alterations" id="target-btn-8-ta" tabIndex="0">
																								<span className="mask">Order Now</span>
													<div className="button">Order Now</div>
												</a>
											
											</div>
										</div>
										<div className="promo03__btn-toggle"></div>
									</div>
								</div><div className="tt-item slick-slide slick-cloned slick-cloned-width" data-slick-index="8" id="" aria-hidden="true" tabIndex="-1" >
									<div className="promo03 js-handler">
										<div className="promo03__move">
											<div className="promo03__icon"><i aria-hidden="true" className=" icons-884417"></i></div>
											<div className="promo03__title">Shirts Service</div>
											<div className="promo03__subtitle">Washed and Pressed</div>
											<div className="promo03__price">
												From <span className="tt-value">
												€2.00												</span>
											</div>
											<div className="promo03__show-btn">
																							<a href="javascript:void(0)" className="tt-btn service-cart" data-product_id="9991" data-type="service" data-price="2" data-quantity="1" data-product_sku="" data-service-title="Shirts Service" id="" tabIndex="-1">
																								<span className="mask">Order Now</span>
													<div className="button">Order Now</div>
												</a>
											
											</div>
										</div>
										<div className="promo03__btn-toggle"></div>
									</div>
								</div><div className="tt-item slick-slide slick-cloned slick-cloned-width" data-slick-index="9" id="" aria-hidden="true" tabIndex="-1">
									<div className="promo03 js-handler">
										<div className="promo03__move">
											<div className="promo03__icon"><i aria-hidden="true" className=" icons-868044"></i></div>
											<div className="promo03__title">Day Dress Service</div>
											<div className="promo03__subtitle">Dry Clean</div>
											<div className="promo03__price">
												From <span className="tt-value">
												€10.50												</span>
											</div>
											<div className="promo03__show-btn">
																							<a href="javascript:void(0)" className="tt-btn service-cart" data-product_id="9992" data-type="service" data-price="10.50" data-quantity="1" data-product_sku="" data-service-title="Day Dress Service" id="" tabIndex="-1">
																								<span className="mask">Order Now</span>
													<div className="button">Order Now</div>
												</a>
											
											</div>
										</div>
										<div className="promo03__btn-toggle"></div>
									</div>
								</div><div className="tt-item slick-slide slick-cloned slick-cloned-width" data-slick-index="10" id="" aria-hidden="true" tabIndex="-1">
									<div className="promo03 js-handler">
										<div className="promo03__move">
											<div className="promo03__icon"><i aria-hidden="true" className=" icons-1233149"></i></div>
											<div className="promo03__title">Dry Cleaning</div>
											<div className="promo03__subtitle">Wash, Dry and Fold</div>
											<div className="promo03__price">
												From <span className="tt-value">
												€2.00												</span>
											</div>
											<div className="promo03__show-btn">
																							<a href="javascript:void(0)" className="tt-btn service-cart" data-product_id="9993" data-type="service" data-price="2" data-quantity="1" data-product_sku="" data-service-title="Dry Cleaning" id="" tabIndex="-1">
																								<span className="mask">Order Now</span>
													<div className="button">Order Now</div>
												</a>
											
											</div>
										</div>
										<div className="promo03__btn-toggle"></div>
									</div>
								</div><div className="tt-item slick-slide slick-cloned slick-cloned-width" data-slick-index="11" id="" aria-hidden="true" tabIndex="-1" >
									<div className="promo03 js-handler">
										<div className="promo03__move">
											<div className="promo03__icon"><i aria-hidden="true" className=" icons-495018"></i></div>
											<div className="promo03__title">Bedding</div>
											<div className="promo03__subtitle">Bed Set (Wash and Press)</div>
											<div className="promo03__price">
												From <span className="tt-value">
												€10.50												</span>
											</div>
											<div className="promo03__show-btn">
																							<a href="javascript:void(0)" className="tt-btn service-cart" data-product_id="9994" data-type="service" data-price="10.50" data-quantity="1" data-product_sku="" data-service-title="Bedding" id="" tabIndex="-1">
																								<span className="mask">Order Now</span>
													<div className="button">Order Now</div>
												</a>
											
											</div>
										</div>
										<div className="promo03__btn-toggle"></div>
									</div>
								</div><div className="tt-item slick-slide slick-cloned slick-cloned-width" data-slick-index="12" id="" aria-hidden="true" tabIndex="-1" >
									<div className="promo03 js-handler">
										<div className="promo03__move">
											<div className="promo03__icon"><i aria-hidden="true" className=" icons-2737832"></i></div>
											<div className="promo03__title">Blanket Service</div>
											<div className="promo03__subtitle">Washed and Pressed</div>
											<div className="promo03__price">
												From <span className="tt-value">
												€25.00												</span>
											</div>
											<div className="promo03__show-btn">
																							<a href="javascript:void(0)" className="tt-btn service-cart" data-product_id="9995" data-type="service" data-price="25" data-quantity="1" data-product_sku="" data-service-title="Blanket Service" id="" tabIndex="-1">
																								<span className="mask">Order Now</span>
													<div className="button">Order Now</div>
												</a>
											
											</div>
										</div>
										<div className="promo03__btn-toggle"></div>
									</div>
								</div><div className="tt-item slick-slide slick-cloned slick-cloned-width" data-slick-index="13" id="" aria-hidden="true" tabIndex="-1" >
									<div className="promo03 js-handler">
										<div className="promo03__move">
											<div className="promo03__icon"><i aria-hidden="true" className=" icons-863958"></i></div>
											<div className="promo03__title">Curtains Service</div>
											<div className="promo03__subtitle">Washed and Pressed</div>
											<div className="promo03__price">
												From <span className="tt-value">
												€22.00												</span>
											</div>
											<div className="promo03__show-btn">
																							<a href="javascript:void(0)" className="tt-btn service-cart" data-product_id="9996" data-type="service" data-price="22" data-quantity="1" data-product_sku="" data-service-title="Curtains Service" id="" tabIndex="-1">
																								<span className="mask">Order Now</span>
													<div className="button">Order Now</div>
												</a>
											
											</div>
										</div>
										<div className="promo03__btn-toggle"></div>
									</div>
								</div><div className="tt-item slick-slide slick-cloned slick-cloned-width" data-slick-index="14" id="" aria-hidden="true" tabIndex="-1" >
									<div className="promo03 js-handler">
										<div className="promo03__move">
											<div className="promo03__icon"><i aria-hidden="true" className=" icons-486676"></i></div>
											<div className="promo03__title">Ironing Service</div>
											<div className="promo03__subtitle">Iron and Fold</div>
											<div className="promo03__price">
												From <span className="tt-value">
												€3.00												</span>
											</div>
											<div className="promo03__show-btn">
																							<a href="javascript:void(0)" className="tt-btn service-cart" data-product_id="9997" data-type="service" data-price="3" data-quantity="1" data-product_sku="" data-service-title="Ironing Service" id="" tabIndex="-1">
																								<span className="mask">Order Now</span>
													<div className="button">Order Now</div>
												</a>
											
											</div>
										</div>
										<div className="promo03__btn-toggle"></div>
									</div>
								</div><div className="tt-item slick-slide slick-cloned slick-cloned-width" data-slick-index="15" id="" aria-hidden="true" tabIndex="-1">
									<div className="promo03 js-handler">
										<div className="promo03__move">
											<div className="promo03__icon"><i aria-hidden="true" className=" icons-1072668"></i></div>
											<div className="promo03__title">Repairs &amp; Alterations</div>
											<div className="promo03__subtitle">Simple Sewing</div>
											<div className="promo03__price">
												From <span className="tt-value">
												€12.00												</span>
											</div>
											<div className="promo03__show-btn">
																							<a href="javascript:void(0)" className="tt-btn service-cart" data-product_id="9998" data-type="service" data-price="12" data-quantity="1" data-product_sku="" data-service-title="Repairs &amp; Alterations" id="" tabIndex="-1">
																								<span className="mask">Order Now</span>
													<div className="button">Order Now</div>
												</a>
											
											</div>
										</div>
										<div className="promo03__btn-toggle"></div>
									</div>
								</div></div></div> 
						<ul className="slick-dots" role="tablist" ><li className="" role="presentation"><button type="button" role="tab" id="slick-slide-control10" aria-controls="slick-slide10" aria-label="1 of 2" tabIndex="-1">1</button></li><li role="presentation" className="slick-active"><button type="button" role="tab" id="slick-slide-control11" aria-controls="slick-slide14" aria-label="2 of 2" tabIndex="-1">2</button></li></ul></div>
					</div>
				</div>
			</div> 
				</div>
				</div>
					</div>
		</div>
					</div>
      </section>
      <section className="elementor-section elementor-top-section elementor-element elementor-element-d1fc773 elementor-section-full_width elementor-section-height-default elementor-section-height-default pb-24" data-id="d1fc773" data-element_type="section">
        <div className="elementor-container elementor-column-gap-no">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-a51d09d" data-id="a51d09d" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-9a5633d elementor-widget elementor-widget-laundry_testimonial_two" data-id="9a5633d" data-element_type="widget" data-widget_type="laundry_testimonial_two.default">
                <div className="elementor-widget-container">
                  <div className="section-indent">
                    <div className="container container-fluid-lg">
                      <div className="blog-slider" id="blog-slider">
                        <div className="blog-slider__img">
                          <div className="tt-item-wrapper">
                                    <div className="tt-item number-1">
                              <i><img decoding="async" className=" lazyloaded" src="/quotes-img01.png" data-src="/quotes-img01.png" alt=""/></i>
                              <img loading="lazy" decoding="async" width="289" height="244" src="/blog-slider-img01.jpg" className="attachment-full size-full" alt=""/>					</div>
                                      <div className="tt-item number-2">
                              <i><img decoding="async" className=" lazyloaded" src="/quotes-img01.png" data-src="/quotes-img01.png" alt=""/></i>
                              <img loading="lazy" decoding="async" width="289" height="244" src="/blog-slider-img02.jpg" className="attachment-full size-full" alt=""/>					</div>
                                      <div className="tt-item number-3">
                              <i><img decoding="async" className=" lazyloaded" src="/quotes-img01.png" data-src="/quotes-img01.png" alt=""/></i>
                              <img loading="lazy" decoding="async" width="289" height="244" src="/blog-slider-img03.jpg" className="attachment-full size-full" alt=""/>					</div>
                                      <div className="tt-item number-4 active">
                              <i><img decoding="async" className=" lazyloaded" src="/quotes-img01.png" data-src="/quotes-img01.png" alt=""/></i>
                              <img loading="lazy" decoding="async" width="289" height="244" src="/blog-slider-img04.jpg" className="attachment-full size-full" alt=""/>					</div>
                          </div>
                        </div>
                        <div className="blog-slider__layout slick-default slick-dots-left slick-initialized slick-slider slick-dotted">
                                
                            <div className="slick-list draggable draggable_width"><div className="slick-track slick_track_width"><div className="tt-item slick-slide slick-cloned tt-item_width" data-slick-index="-1" id="" aria-hidden="true" tabIndex="-1" >
                              <div className="title-block">
                                <div className="title-block__label">
                                  Our Testimonials							</div>
                                <h4 className="title-block__title">
                                  The Quality of Work Was Excellent!							</h4>
                              </div>
                              <blockquote>
                                <p>
                                  “The washer and dryer at my apartment building are not so great, so this has become my go-to spot every weekend. The prices are pretty reasonable, and they have big washers so I can get a lot done at once. There are plenty of couches and tables and chairs. They have TVs, arcade games, and a pool table. It’s not a bad place to hang out and do laundry.”							</p>
                                <p><strong className="tt-base-color02">- Beverly Garmon</strong></p>
                              </blockquote>
                            </div><div className="tt-item slick-slide tt-item_width" data-slick-index="0" aria-hidden="true" tabIndex="-1" role="tabpanel" id="slick-slide20" aria-describedby="slick-slide-control20" >
                              <div className="title-block">
                                <div className="title-block__label">
                                  Our Testimonials							</div>
                                <h4 className="title-block__title">
                                  Professional, Reliable &amp; Cost Effective							</h4>
                              </div>
                              <blockquote>
                                <p>
                                &quot;This was my first time coming to a Laundromat ever. I was greeted by a woman with a warm smile. I was looking around and she could tell I needed help. She started me up with purchasing a Laundry Card. She then gave me recommendations per the clothes I had. She was so helpful and friendly. Being new to the city this is now my go to. Very clean and up date machines.&quot;							</p>
                                <p><strong className="tt-base-color02">- Teresa and Kevin K.</strong></p>
                              </blockquote>
                            </div><div className="tt-item slick-slide tt-item_width" data-slick-index="1" aria-hidden="true" tabIndex="-1" role="tabpanel" id="slick-slide21" aria-describedby="slick-slide-control21" >
                              <div className="title-block">
                                <div className="title-block__label">
                                  Our Testimonials							</div>
                                <h4 className="title-block__title">
                                  Very Pleased. Will Definitely be Back.							</h4>
                              </div>
                              <blockquote>
                                <p>
                                  I don’t dry clean a lot of clothes, but I’ve been going here for 5 years and they have never once been late, the customer service is always great, and I’ve never had a quality concern. As I recall from my previous dry cleaner, they might be slightly above market cost, but I’m willing to pay a small premium for consistency though I recognize that cost may be the most important consideration.							</p>
                                <p><strong className="tt-base-color02">- Alice Munguia</strong></p>
                              </blockquote>
                            </div><div className="tt-item slick-slide tt-item_width" data-slick-index="2" aria-hidden="true" tabIndex="-1" role="tabpanel" id="slick-slide22" aria-describedby="slick-slide-control22">
                              <div className="title-block">
                                <div className="title-block__label">
                                  Our Testimonials							</div>
                                <h4 className="title-block__title">
                                  Excellent and Superb Customer Service							</h4>
                              </div>
                              <blockquote>
                                <p>
                                  “The washer and dryer at my apartment building are not so great, so this has become my go-to spot every weekend. The prices are pretty reasonable, and they have big washers so I can get a lot done at once. There are plenty of couches and tables and chairs. They have TVs, arcade games, and a pool table. It’s not a bad place to hang out and do laundry.”							</p>
                                <p><strong className="tt-base-color02">- Lena Broughton</strong></p>
                              </blockquote>
                            </div><div className="tt-item slick-slide slick-current slick-active tt-item_width" data-slick-index="3" aria-hidden="false" tabIndex="0" role="tabpanel" id="slick-slide23" aria-describedby="slick-slide-control23" >
                              <div className="title-block">
                                <div className="title-block__label">
                                  Our Testimonials							</div>
                                <h4 className="title-block__title">
                                  The Quality of Work Was Excellent!							</h4>
                              </div>
                              <blockquote>
                                <p>
                                  “The washer and dryer at my apartment building are not so great, so this has become my go-to spot every weekend. The prices are pretty reasonable, and they have big washers so I can get a lot done at once. There are plenty of couches and tables and chairs. They have TVs, arcade games, and a pool table. It’s not a bad place to hang out and do laundry.”							</p>
                                <p><strong className="tt-base-color02">- Beverly Garmon</strong></p>
                              </blockquote>
                            </div><div className="tt-item slick-slide slick-cloned tt-item_width" data-slick-index="4" id="" aria-hidden="true" tabIndex="-1">
                              <div className="title-block">
                                <div className="title-block__label">
                                  Our Testimonials							</div>
                                <h4 className="title-block__title">
                                  Professional, Reliable &amp; Cost Effective							</h4>
                              </div>
                              <blockquote>
                                <p>
                                &quot;This was my first time coming to a Laundromat ever. I was greeted by a woman with a warm smile. I was looking around and she could tell I needed help. She started me up with purchasing a Laundry Card. She then gave me recommendations per the clothes I had. She was so helpful and friendly. Being new to the city this is now my go to. Very clean and up date machines.&quot;							</p>
                                <p><strong className="tt-base-color02">- Teresa and Kevin K.</strong></p>
                              </blockquote>
                            </div><div className="tt-item slick-slide slick-cloned tt-item_width" data-slick-index="5" id="" aria-hidden="true" tabIndex="-1" >
                              <div className="title-block">
                                <div className="title-block__label">
                                  Our Testimonials							</div>
                                <h4 className="title-block__title">
                                  Very Pleased. Will Definitely be Back.							</h4>
                              </div>
                              <blockquote>
                                <p>
                                  I don’t dry clean a lot of clothes, but I’ve been going here for 5 years and they have never once been late, the customer service is always great, and I’ve never had a quality concern. As I recall from my previous dry cleaner, they might be slightly above market cost, but I’m willing to pay a small premium for consistency though I recognize that cost may be the most important consideration.							</p>
                                <p><strong className="tt-base-color02">- Alice Munguia</strong></p>
                              </blockquote>
                            </div><div className="tt-item slick-slide slick-cloned tt-item_width" data-slick-index="6" id="" aria-hidden="true" tabIndex="-1" >
                              <div className="title-block">
                                <div className="title-block__label">
                                  Our Testimonials							</div>
                                <h4 className="title-block__title">
                                  Excellent and Superb Customer Service							</h4>
                              </div>
                              <blockquote>
                                <p>
                                  “The washer and dryer at my apartment building are not so great, so this has become my go-to spot every weekend. The prices are pretty reasonable, and they have big washers so I can get a lot done at once. There are plenty of couches and tables and chairs. They have TVs, arcade games, and a pool table. It’s not a bad place to hang out and do laundry.”							</p>
                                <p><strong className="tt-base-color02">- Lena Broughton</strong></p>
                              </blockquote>
                            </div><div className="tt-item slick-slide slick-cloned tt-item_width " data-slick-index="7" id="" aria-hidden="true" tabIndex="-1" >
                              <div className="title-block">
                                <div className="title-block__label">
                                  Our Testimonials							</div>
                                <h4 className="title-block__title">
                                  The Quality of Work Was Excellent!							</h4>
                              </div>
                              <blockquote>
                                <p>
                                  “The washer and dryer at my apartment building are not so great, so this has become my go-to spot every weekend. The prices are pretty reasonable, and they have big washers so I can get a lot done at once. There are plenty of couches and tables and chairs. They have TVs, arcade games, and a pool table. It’s not a bad place to hang out and do laundry.”							</p>
                                <p><strong className="tt-base-color02">- Beverly Garmon</strong></p>
                              </blockquote>
                            </div></div></div>			 									
                        <ul className="slick-dots" role="tablist"><li className="" role="presentation"><button type="button" role="tab" id="slick-slide-control20" aria-controls="slick-slide20" aria-label="1 of 4" tabIndex="-1">1</button></li><li role="presentation" className=""><button type="button" role="tab" id="slick-slide-control21" aria-controls="slick-slide21" aria-label="2 of 4" tabIndex="-1">2</button></li><li role="presentation" className=""><button type="button" role="tab" id="slick-slide-control22" aria-controls="slick-slide22" aria-label="3 of 4" tabIndex="-1">3</button></li><li role="presentation" className="slick-active"><button type="button" role="tab" id="slick-slide-control23" aria-controls="slick-slide23" aria-label="4 of 4" tabIndex="0" aria-selected="true">4</button></li></ul></div>
                      </div>
                    </div>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="elementor-section elementor-top-section elementor-element elementor-element-847f288 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="847f288" data-element_type="section">
						<div className="elementor-container elementor-column-gap-no">
					<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5322eea" data-id="5322eea" data-element_type="column">
			<div className="elementor-widget-wrap elementor-element-populated">
						<div className="elementor-element elementor-element-b8f74ad elementor-widget elementor-widget-text-editor" data-id="b8f74ad" data-element_type="widget" data-widget_type="text-editor.default">
				<div className="elementor-widget-container">
							<div id="map-bottom">
<div className="mapouter">
<div className="gmap_canvas"><iframe id="gmap_canvas " src="https://maps.google.com/maps?q=brownsville&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe></div>
</div>
</div>						</div>
				</div>
					</div>
		</div>
					</div>
		</section>
      {/* Footer */}
      <Footer/>
    </div>
    )
}

export default Home