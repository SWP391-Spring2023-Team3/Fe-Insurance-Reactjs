import React, { useState } from "react";

import '../Style/default.css'
import '../Style/layout.css'
import '../Style/media-queries.css'
import '../Style/magnific-popup.css'





const Home = () => {
    
    


    return (
        <div >
        {/* Header
   ================================================== */}
        < header id = "home" >
            <nav id="nav-wrap">
                
                <ul id="nav" className="nav"  >
                    <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                    <li><a className="smoothscroll" href="#about">About Insurance</a></li>
                    <li><a className="smoothscroll" href="#resume">Resume</a></li>
                    <li><a className="smoothscroll" href="#portfolio">register</a></li>
                    <li><a className="smoothscroll" href="#register">Contact</a></li>
                </ul> {/* end #nav */}
            </nav> {/* end #nav-wrap */ }
    <div className="row banner">
      <div className="banner-text">
        <h1 className="responsive-headline">Insurance Card Online</h1>
        <h3>Life around always contains <span>many risks</span> and <span>uncertainties</span>. Why don't we find effective financial solutions to deal with risks?
          <hr />
          <ul className="social">
            <li><a href="#"><i className="fa fa-facebook" /></a></li>
            <li><a href="#"><i className="fa fa-twitter" /></a></li>
            <li><a href="#"><i className="fa fa-google-plus" /></a></li>
            <li><a href="#"><i className="fa fa-linkedin" /></a></li>
            <li><a href="#"><i className="fa fa-instagram" /></a></li>
            <li><a href="#"><i className="fa fa-dribbble" /></a></li>
            <li><a href="#"><i className="fa fa-skype" /></a></li>
          </ul>
        </h3></div>
    </div>
    <p className="scrolldown">
      <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
    </p>
  </header > {/* Header End */ }
{/* About Section
   ================================================== */}
<section id="about">
    <div className="row">
        <div className="three columns">
            <img src="images/GettyImages-1297366388-3116-1634201616.jpg" alt="" />
        </div>
        <div className="nine columns main-col">
            <h2>About Insurance</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
            </p>
            <div className="row">
                <div className="columns download">
                    <p>
                        <a href="Login" className="button">Login </a>
                    </p>
                </div>
            </div> {/* end row */}
        </div> {/* end .main-col */}
    </div>
</section> {/* About Section End*/ }
{/* Resume Section
   ================================================== */}
<section id="resume">
    {/* Education
----------------------------------------------- */}
    <div className="row education">
        <div className="three columns header-col">
            <h1><span>Education</span></h1>
        </div>
        <div className="nine columns main-col">
            <div className="row item">
                <div className="twelve columns">
                    <h3>University of Life</h3>
                    <p className="info">Master in Graphic Design <span>•</span> <em className="date">April 2007</em></p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium.
                    </p>
                </div>
            </div> {/* item end */}
            <div className="row item">
                <div className="twelve columns">
                    <h3>School of Cool Designers</h3>
                    <p className="info">B.A. Degree in Graphic Design <span>•</span> <em className="date">March 2003</em></p>
                    <p>
                        This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                        Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                        nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
                        ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat
                    </p>
                </div>
            </div> {/* item end */}
        </div> {/* main-col end */}
    </div> {/* End Education */}
    {/* Work
----------------------------------------------- */}
    <div className="row work">
        <div className="three columns header-col">
            <h1><span>Work</span></h1>
        </div>
        <div className="nine columns main-col">
            <div className="row item">
                <div className="twelve columns">
                    <h3>Awesome Design Studio</h3>
                    <p className="info">Senior UX Designer <span>•</span> <em className="date">March 2010 - Present</em></p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium.
                    </p>
                </div>
            </div> {/* item end */}
            <div className="row item">
                <div className="twelve columns">
                    <h3>Super Cool Studio</h3>
                    <p className="info">UX Designer <span>•</span> <em className="date">March 2007 - February 2010</em></p>
                    <p>
                        This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                        Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                        nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
                        ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat
                    </p>
                </div>
            </div> {/* item end */}
        </div> {/* main-col end */}
    </div> {/* End Work */}
    {/* Skills
----------------------------------------------- */}
</section> {/* Resume Section End*/ }
{/* Portfolio Section
   ================================================== */}
<section id="portfolio">
    <div className="row">
        <div className="twelve columns collapsed">
            <h2>Register here</h2>
            <div className="row">
                <div className="eight columns">
                    {/* form */}
                    <form >
                        <div>
                            <label>Enter Name <span className="required">*</span></label>
                            <input type="text" defaultValue size={35} name="name" />
                        </div><div>
                            <label>Enter Email <span className="required">*</span></label>
                            <input type="text" defaultValue size={35} name="email" />
                        </div><div>
                            <label>Enter Password</label>
                            <input type="text" defaultValue size={35} name="password" />
                        </div><div>
                            <label>Re-Password</label>
                            <input type="text" defaultValue size={35} name="repassword" />
                        </div><div>
                            <button type="submit">Register</button>
                            <span id="image-loader">
                                <img alt="" src="images/loader.gif" />
                            </span>
                        </div><table>
                        </table>
                    </form> {/* Form End */}
                </div> {/* portfolio-wrapper end */}
            </div> {/* twelve columns end */}
            <div id="modal-02" className="popup-modal mfp-hide">
                <img className="scale-with-grid" src="images/portfolio/modals/m-console.jpg" alt="" />
                <div className="description-box">
                    <h4>Console</h4>
                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                    <span className="categories"><i className="fa fa-tag" />Branding, Web Development</span>
                </div>
                <div className="link-box">
                    <a href="http://srikrishnacommunication.com/Giridesigns.html" target="_blank">Details</a>
                    <a className="popup-modal-dismiss">Close</a>
                </div>
            </div>{/* modal-02 End */}
            <div id="modal-03" className="popup-modal mfp-hide">
                <img className="scale-with-grid" src="images/portfolio/modals/m-judah.jpg" alt="" />
                <div className="description-box">
                    <h4>Judah</h4>
                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                    <span className="categories"><i className="fa fa-tag" />Branding</span>
                </div>
                <div className="link-box">
                    <a href="http://srikrishnacommunication.com/Giridesigns.html" target="_blank">Details</a>
                    <a className="popup-modal-dismiss">Close</a>
                </div>
            </div>{/* modal-03 End */}
            <div id="modal-04" className="popup-modal mfp-hide">
                <img className="scale-with-grid" src="images/portfolio/modals/m-intothelight.jpg" alt="" />
                <div className="description-box">
                    <h4>Into the Light</h4>
                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                    <span className="categories"><i className="fa fa-tag" />Photography</span>
                </div>
                <div className="link-box">
                    <a href="http://srikrishnacommunication.com/Giridesigns.html" target="_blank">Details</a>
                    <a className="popup-modal-dismiss">Close</a>
                </div>
            </div>{/* modal-04 End */}
            <div id="modal-05" className="popup-modal mfp-hide">
                <img className="scale-with-grid" src="images/portfolio/modals/m-farmerboy.jpg" alt="" />
                <div className="description-box">
                    <h4>Farmer Boy</h4>
                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                    <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
                </div>
                <div className="link-box">
                    <a href="http://srikrishnacommunication.com/Giridesigns.html" target="_blank">Details</a>
                    <a className="popup-modal-dismiss">Close</a>
                </div>
            </div>{/* modal-05 End */}
            <div id="modal-06" className="popup-modal mfp-hide">
                <img className="scale-with-grid" src="images/portfolio/modals/m-girl.jpg" alt="" />
                <div className="description-box">
                    <h4>Girl</h4>
                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                    <span className="categories"><i className="fa fa-tag" />Photography</span>
                </div>
                <div className="link-box">
                    <a href="http://srikrishnacommunication.com/Giridesigns.html" target="_blank">Details</a>
                    <a className="popup-modal-dismiss">Close</a>
                </div>
            </div>{/* modal-06 End */}
            <div id="modal-07" className="popup-modal mfp-hide">
                <img className="scale-with-grid" src="images/portfolio/modals/m-origami.jpg" alt="" />
                <div className="description-box">
                    <h4>Origami</h4>
                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                    <span className="categories"><i className="fa fa-tag" />Branding, Illustration</span>
                </div>
                <div className="link-box">
                    <a href="http://srikrishnacommunication.com/Giridesigns.html" target="_blank">Details</a>
                    <a className="popup-modal-dismiss">Close</a>
                </div>
            </div>{/* modal-07 End */}
            <div id="modal-08" className="popup-modal mfp-hide">
                <img className="scale-with-grid" src="images/portfolio/modals/m-retrocam.jpg" alt="" />
                <div className="description-box">
                    <h4>Retrocam</h4>
                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                    <span className="categories"><i className="fa fa-tag" />Webdesign, Photography</span>
                </div>
                <div className="link-box">
                    <a href="http://srikrishnacommunication.com/Giridesigns.html" target="_blank">Details</a>
                    <a className="popup-modal-dismiss">Close</a>
                </div>
            </div>{/* modal-01 End */}
        </div> {/* row End */}
    </div></section> {/* Portfolio Section End*/ }
{/* Contact Section
   ================================================== */}
<section id="register">
    <div className="row section-head">
        <div className="widget widget_contact">
            <h4>Address and Phone</h4>
            <p className="address">
                SWP-Group3<br />
                Insurance Card Systems <br />
                FPT UNIVERSITY<br />
                <span>+123 456789</span>
            </p>
        </div>
    </div>
</section> {/* Contact Section End*/ }
{/* footer
   ================================================== */}
<footer>
    <div className="row">
        <div className="twelve columns">
            <ul className="social-links">
                <li><a href="#"><i className="fa fa-facebook" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                <li><a href="#"><i className="fa fa-instagram" /></a></li>
                <li><a href="#"><i className="fa fa-dribbble" /></a></li>
                <li><a href="#"><i className="fa fa-skype" /></a></li>
            </ul>
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
    </div>
</footer> {/* Footer End*/ }
{/* Java Script
   ================================================== */}
</div >

    )
}


export default Home