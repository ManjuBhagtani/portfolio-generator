import { connect } from "react-redux";

const Code = ({
  FullName,
  FirstName,
  LastName,
  Tagline,
  Thubmnail,
  Description,
  Keywords,
  Address,
  Phone,
  Email,
  Colour1,
  Colour2,
  services,
  projects,
  blogs,
  experiences,
  educations,
  skills,
  interests,
  awards,

}) => {
  return (
    <div className="Code">
      <pre className="border rounded bg-light p-3 codefile">
        {`<!doctype html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <meta name="description" content="">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <title>Unfold - Personal Portfolio & CV Template</title>
      <link rel="shortcut icon" href="https://preview.uideck.com/items/unfold/assets/images/favicon.png" type="image/png">
      <link rel="stylesheet" href="https://preview.uideck.com/items/unfold/assets/css/bootstrap.min.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <link rel="stylesheet" href="https://preview.uideck.com/items/unfold/assets/css/magnific-popup.css">
      <link rel="stylesheet" href="https://preview.uideck.com/items/unfold/assets/css/default.css">
      <link rel="stylesheet" href="https://preview.uideck.com/items/unfold/assets/css/style.css">
      <style>
         .preloader .loader_34 .ytp-spinner-circle{
            border-color:${Colour1} ${Colour1} #ddd;
         }
         .navigation .navbar .navbar-nav .nav-item:hover a{
            color: ${Colour1};
         }
         .navigation .navbar .navbar-nav .nav-item.active a, .navigation .navbar .navbar-nav .nav-item:hover a {
            color: ${Colour1};
         }
         .navigation .navbar .navbar-nav .nav-item a::before {
            background-color: ${Colour1};
         }
         .header-social .header-social-icon ul li a:hover{
            background-color:${Colour1};
            border-color: ${Colour1};
         }
         .header-social .header-social-icon::before {
            background-color: ${Colour1};
         }
         .main-btn {
            border: 1px solid ${Colour1};
            background-color: ${Colour1};
         }
         .main-btn:hover{
            color:${Colour1};
            border-color:${Colour1};
         }
         .header-content-right .sub-title{
            color: ${Colour1};
         }
         .header-image::after {
            background-color: ${Colour1};
         }
         .about-skills .skill-item .skill-bar .bar-inner .progress-line{
            background-color: ${Colour1};
         }
         .single-service .service-content .service-title a:hover{
            color: ${Colour1};
         }
         .call-to-action::before {
            background-color: ${Colour1};
         }
         .call-action-content ul li .main-btn.custom{
            color: ${Colour1};
         }
         .call-action-content ul li .main-btn.custom:hover{
            background-color: ${Colour1};
            border-color: ${Colour1};
         }
         .single-work .work-overlay{
            background-color: ${Colour1};
         }
         .single-work .work-overlay .work-content ul li a:hover{
            color: ${Colour1};
         }
         .single-blog:hover .blog-content{
            background-color: ${Colour1};
         }
         .contact-box .contact-icon i {
            color: ${Colour1};
         }
         .footer-content ul li a:hover{
            background-color: ${Colour1};
         }
         .back-to-top:hover{
            background-color: ${Colour1};
            border-color: ${Colour1};
         }
         .single-form input:focus, .single-form textarea:focus{
            border-color: ${Colour1};
         }
         .blog-image {
            background-color: ${Colour1};
         }
      </style>
   </head>
   <body>
      <div class="preloader">
         <div class="loader_34">
            <div class="ytp-spinner">
               <div class="ytp-spinner-container">
                  <div class="ytp-spinner-rotator">
                     <div class="ytp-spinner-left">
                        <div class="ytp-spinner-circle"></div>
                     </div>
                     <div class="ytp-spinner-right">
                        <div class="ytp-spinner-circle"></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <header id="home" class="header-area">
         <div class="navigation fixed-top">
            <div class="container">
               <div class="row">
                  <div class="col-lg-12">
                     <nav class="navbar navbar-expand-lg">
                        <a class="navbar-brand" href="index.html">
                        <img src="https://preview.uideck.com/items/unfold/assets/images/logo.png" alt="Logo">
                        </a> 
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="toggler-icon"></span>
                        <span class="toggler-icon"></span>
                        <span class="toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                           <ul class="navbar-nav ml-auto">
                              <li class="nav-item active"><a class="page-scroll" href="#home">Home</a></li>
                              <li class="nav-item"><a class="page-scroll" href="#about">About</a></li>
                              <li class="nav-item"><a class="page-scroll" href="#service">Services</a></li>
                              <li class="nav-item"><a class="page-scroll" href="#work">Portfolio</a></li>
                              <li class="nav-item"><a class="page-scroll" href="#blog">Blog</a></li>
                              <li class="nav-item"><a class="page-scroll" href="#contact">Contact</a></li>
                           </ul>
                        </div>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
         <div id="parallax" class="header-content d-flex align-items-center">
            <div class="header-shape shape-one layer" data-depth="0.10">
               <img src="https://preview.uideck.com/items/unfold/assets/images/banner/shape/shape-1.png" alt="Shape">
            </div>
            <div class="header-shape shape-tow layer" data-depth="0.30">
               <img src="https://preview.uideck.com/items/unfold/assets/images/banner/shape/shape-2.png" alt="Shape">
            </div>
            <div class="header-shape shape-three layer" data-depth="0.40">
               <img src="https://preview.uideck.com/items/unfold/assets/images/banner/shape/shape-3.png" alt="Shape">
            </div>
            <div class="header-shape shape-fore layer" data-depth="0.60">
               <img src="https://preview.uideck.com/items/unfold/assets/images/banner/shape/shape-2.png" alt="Shape">
            </div>
            <div class="header-shape shape-five layer" data-depth="0.20">
               <img src="https://preview.uideck.com/items/unfold/assets/images/banner/shape/shape-1.png" alt="Shape">
            </div>
            <div class="header-shape shape-six layer" data-depth="0.15">
               <img src="https://preview.uideck.com/items/unfold/assets/images/banner/shape/shape-4.png" alt="Shape">
            </div>
            <div class="header-shape shape-seven layer" data-depth="0.50">
               <img src="https://preview.uideck.com/items/unfold/assets/images/banner/shape/shape-5.png" alt="Shape">
            </div>
            <div class="header-shape shape-eight layer" data-depth="0.40">
               <img src="https://preview.uideck.com/items/unfold/assets/images/banner/shape/shape-3.png" alt="Shape">
            </div>
            <div class="header-shape shape-nine layer" data-depth="0.20">
               <img src="https://preview.uideck.com/items/unfold/assets/images/banner/shape/shape-6.png" alt="Shape">
            </div>
            <div class="header-shape shape-ten layer" data-depth="0.30">
               <img src="https://preview.uideck.com/items/unfold/assets/images/banner/shape/shape-3.png" alt="Shape">
            </div>
            <div class="container">
               <div class="row align-items-center">
                  <div class="col-xl-5 col-lg-6">
                     <div class="header-content-right">
                        <h4 class="sub-title">Hello, I’m</h4>
                        <h1 class="title">${FullName}</h1>
                        <p>${Tagline}</p>
                        <a class="main-btn" href="#work">View my Work</a>
                     </div>
                  </div>
                  <div class="col-lg-6 offset-xl-1">
                     <div class="header-image d-none d-lg-block">
                        <img src="${Thubmnail}" alt="hero">
                     </div>
                  </div>
               </div>
            </div>
            <div class="header-social">
               <div class="container">
                  <div class="row">
                     <div class="col-lg-12">
                        <div class="header-social-icon">
                           <ul>
                              <li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
                              <li><a href="#"><i class="fa fa-twitter"></i></i></a></li>
                              <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </header>
      <section id="about" class="about-area pt-125 pb-130">
         <div class="container">
            <div class="row justify-content-center">
               <div class="col-lg-8">
                  <div class="section-title text-center">
                     <h2 class="title">About Me</h2>                  
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-lg-6">
                  <div class="about-content mt-50">
                     <h5 class="about-title">Hi There! I'm ${FullName}</h5>
                     <p>${Description}</p>
                     <ul class="clearfix">
                        <li>
                           <div class="single-info d-flex align-items-center">
                              <div class="info-icon">
                                 <i class="lni-envelope"></i>
                              </div>
                              <div class="info-text">
                                 <p><span>Email:</span> <a href="mailto:${Email}">${Email}</a></p>
                              </div>
                           </div>
                        </li>
                        <li>
                           <div class="single-info d-flex align-items-center">
                              <div class="info-icon">
                                 <i class="lni-phone-handset"></i>
                              </div>
                              <div class="info-text">
                                 <p><span>Phone:</span> ${Phone} </p>
                              </div>
                           </div>
                        </li>
                        <li>
                           <div class="single-info d-flex align-items-center">
                              <div class="info-icon">
                                 <i class="lni-map-marker"></i>
                              </div>
                              <div class="info-text">
                                 <p><span>Location:</span> ${Address}</p>
                              </div>
                           </div>
                        </li>
                     </ul>
                  </div>
               </div>
               <div class="col-xl-5 offset-xl-1 col-lg-6">
                  <div class="about-skills pt-25">
                     <div class="skill-item mt-25">
                        <div class="skill-header">
                           <h6 class="skill-title">HTML</h6>
                           <div class="skill-percentage">
                              <div class="count-box counted">
                                 <span class="counter">80</span>
                              </div>
                              %
                           </div>
                        </div>
                        <div class="skill-bar">
                           <div class="bar-inner">
                              <div class="bar progress-line" data-width="80"></div>
                           </div>
                        </div>
                     </div>
                     <div class="skill-item mt-25">
                        <div class="skill-header">
                           <h6 class="skill-title">CSS</h6>
                           <div class="skill-percentage">
                              <div class="count-box counted">
                                 <span class="counter">60</span>
                              </div>
                              %
                           </div>
                        </div>
                        <div class="skill-bar">
                           <div class="bar-inner">
                              <div class="bar progress-line" data-width="60"></div>
                           </div>
                        </div>
                     </div>
                     <div class="skill-item mt-25">
                        <div class="skill-header">
                           <h6 class="skill-title">Photoshop</h6>
                           <div class="skill-percentage">
                              <div class="count-box counted">
                                 <span class="counter">50</span>
                              </div>
                              %
                           </div>
                        </div>
                        <div class="skill-bar">
                           <div class="bar-inner">
                              <div class="bar progress-line" data-width="50"></div>
                           </div>
                        </div>
                     </div>
                     <div class="skill-item mt-25">
                        <div class="skill-header">
                           <h6 class="skill-title">Sketch</h6>
                           <div class="skill-percentage">
                              <div class="count-box counted">
                                 <span class="counter">90</span>
                              </div>
                              %
                           </div>
                        </div>
                        <div class="skill-bar">
                           <div class="bar-inner">
                              <div class="bar progress-line" data-width="90"></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section id="service" class="services-area gray-bg pt-125 pb-130">
         <div class="container">
            <div class="row justify-content-center">
               <div class="col-lg-8">
                  <div class="section-title text-center pb-30">
                     <h2 class="title">My Services</h2>                  
                  </div>
               </div>
            </div>
            <div class="row justify-content-center">
               ${services.map(
                  service => `
                  <div class="col-lg-4 col-md-6 col-sm-8">
                  <div class="single-service text-center mt-30">
                     <div class="service-icon">
                        <i class="fa-solid fa-display-code"></i>
                     </div>
                     <div class="service-content">
                        <h4 class="service-title"><a href="#">${service.serviceName}</a></h4>
                        <p>${service.desc}</p>
                     </div>
                  </div>
                  </div>
                  `
               ).join(`
`)}
            </div>
         </div>
      </section>
      <section id="call-to-action" class="call-to-action pt-125 pb-130 bg_cover" style="background-image: url(https://preview.uideck.com/items/unfold/assets/images/call-to-action.jpg)">
         <div class="container">
            <div class="row justify-content-center">
               <div class="col-xl-8 col-lg-9">
                  <div class="call-action-content text-center">
                     <h2 class="action-title">Have any project on mind?</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua nostrud.</p>
                     <ul>
                        <li><a class="main-btn custom" href="#">download cv</a></li>
                        <li><a class="main-btn custom-2" href="#">hire me</a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section id="work" class="work-area pt-125 pb-130">
         <div class="container">
            <div class="row">
               <div class="col-lg-8">
                  <div class="section-title pb-25">
                     <h2 class="title">My Recent Work</h2>                    
                  </div>
               </div>
            </div>
            <div class="row">
            ${projects.map(
                        project => `
               <div class="col-lg-4 col-md-6 col-sm-6">
                  <div class="single-work text-center mt-30">
                     <div class="work-image">
                        <img src="${project.screenshot}" alt="work">
                     </div>
                     <div class="work-overlay">
                        <div class="work-content">
                           <h3 class="work-title">Product Design</h3>
                           <ul>
                              <li><a class="image-popup" href="${project.screenshot}"><i class="fa fa-plus"></i></a></li>
                              <li><a href="${project.deployedLink}" target="_blank"><i class="fa fa-link"></i></a></li>
                              <li><a href="${project.github}" target="_blank"><i class="fa fa-github"></i></a></li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
               `).join(`
               `)}
            </div>
            <div class="row">
               <div class="col-lg-12">
                  <div class="work-more text-center mt-50">
                     <a class="main-btn" href="#">more work</a>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section id="blog" class="blog-area pt-125 pb-130 gray-bg">
         <div class="container">
            <div class="row justify-content-center">
               <div class="col-lg-8">
                  <div class="section-title text-center pb-25">
                     <h2 class="title">From The Blog</h2>                    
                  </div>
               </div>
            </div>
            <div class="row justify-content-center">
               ${blogs.map(blog => `
               <div class="col-lg-4 col-md-8 col-sm-9">
                  <div class="single-blog mt-30">
                     <div class="blog-image">
                        <img src="https://img.wallpapersafari.com/desktop/800/450/12/83/vZylnb.png" alt="Blog">
                     </div>
                     <div class="blog-content">
                        <h4 class="blog-title"><a href="${blog.link}">${blog.blogTitle}</a></h4>
                        <span>July 26, 2022</span>
                     </div>
                  </div>
               </div>
               `).join(`
               `)}
            </div>
            <div class="row">
               <div class="col-lg-12">
                  <div class="blog-more text-center mt-50">
                     <a class="main-btn" href="#">More posts</a>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section id="contact" class="contact-area pt-125 pb-130">
         <div class="container">
            <div class="row justify-content-center">
               <div class="col-lg-8">
                  <div class="section-title text-center pb-25">
                     <h2 class="title">Get In Touch</h2>                    
                  </div>
               </div>
            </div>
            <div class="row justify-content-center">
               <div class="col-lg-4 col-md-6 col-sm-7">
                  <div class="contact-box text-center mt-30">
                     <div class="contact-icon">
                        <i class="fa fa-globe"></i>
                     </div>
                     <div class="contact-content">
                        <h6 class="contact-title">Address</h6>
                        <p>${Address}</p>
                     </div>
                  </div>
               </div>
               <div class="col-lg-4 col-md-6 col-sm-7">
                  <div class="contact-box text-center mt-30">
                     <div class="contact-icon">
                        <i class="fa fa-phone"></i>
                     </div>
                     <div class="contact-content">
                        <h6 class="contact-title">Phone</h6>
                        <p>${Phone}</p>
                     </div>
                  </div>
               </div>
               <div class="col-lg-4 col-md-6 col-sm-7">
                  <div class="contact-box text-center mt-30">
                     <div class="contact-icon">
                        <i class="fa fa-envelope"></i>
                     </div>
                     <div class="contact-content">
                        <h6 class="contact-title">Email</h6>
                        <p><a href="mailto:${Email}">${Email}</a></p>
                     </div>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-lg-6">
                  <div class="contact-form pt-30">
                     <form id="contact-form" action="assets/contact.php">
                        <div class="single-form">
                           <input type="text" name="name" placeholder="Name">
                        </div>
                        <div class="single-form">
                           <input type="email" name="email" placeholder="Email">
                        </div>
                        <div class="single-form">
                           <textarea name="message" placeholder="Message"></textarea>
                        </div>
                        <p class="form-message"></p>
                        <div class="single-form">
                           <button class="main-btn" type="submit">Send Message</button>
                        </div>
                     </form>
                  </div>
               </div>
               <div class="col-lg-6">
                  <div class="contact-map mt-60">
                     <div class="gmap_canvas">
                        <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=Mission%20District%2C%20San%20Francisco%2C%20CA%2C%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <footer id="footer" class="footer-area">
         <div class="footer-widget pt-130 pb-130">
            <div class="container">
               <div class="row justify-content-center">
                  <div class="col-lg-8">
                     <div class="footer-content text-center">
                        <a href="index.html">
                        <img src="https://preview.uideck.com/items/unfold/assets/images/logo-2.png" alt="Logo">
                        </a>                       
                        <ul>
                           <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                           <li><a href="#"><i class="fa fa-twitter"></i></i></a></li>
                           <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                           <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="footer-copyright pb-20">
            <div class="container">
               <div class="row">
                  <div class="col-lg-12">
                     <div class="copyright-text text-center pt-20">
                        <p>Copyright © 2022. All rights reserved by ${FullName}.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
      <a href="#" class="back-to-top"><i class="fa fa-angle-up"></i></a>
      <script data-cfasync="false" src="https://preview.uideck.com/items/unfold//cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
	  <script src="https://preview.uideck.com/items/unfold/assets/js/vendor/modernizr-3.6.0.min.js"></script>
      <script src="https://preview.uideck.com/items/unfold/assets/js/vendor/jquery-1.12.4.min.js"></script>
      <script src="https://preview.uideck.com/items/unfold/assets/js/bootstrap.min.js"></script>
      <script src="https://preview.uideck.com/items/unfold/assets/js/popper.min.js"></script>
      <script src="https://preview.uideck.com/items/unfold/assets/js/jquery.magnific-popup.min.js"></script>
      <script src="https://preview.uideck.com/items/unfold/assets/js/parallax.min.js"></script>
      <script src="https://preview.uideck.com/items/unfold/assets/js/waypoints.min.js"></script>
      <script src="https://preview.uideck.com/items/unfold/assets/js/jquery.counterup.min.js"></script>
      <script src="https://preview.uideck.com/items/unfold/assets/js/ajax-contact.js"></script>
      <script src="https://preview.uideck.com/items/unfold/assets/js/jquery.appear.min.js"></script>
      <script src="https://preview.uideck.com/items/unfold/assets/js/scrolling-nav.js"></script>
      <script src="https://preview.uideck.com/items/unfold/assets/js/jquery.easing.min.js"></script>
      <script src="https://preview.uideck.com/items/unfold/assets/js/validator.min.js"></script>
      <script src="https://preview.uideck.com/items/unfold/assets/js/main.js"></script>
   </body>
</html>
`}
      </pre>
    </div>
  );
};

const mapStateToProps = state => ({
  experiences: state.experiences,
  educations: state.educations,
  awards: state.awards,
  interests: state.interests,
  skills: state.skills,
  services: state.services,
  projects: state.projects,
  blogs: state.blogs,
});

export default connect(mapStateToProps)(Code);
