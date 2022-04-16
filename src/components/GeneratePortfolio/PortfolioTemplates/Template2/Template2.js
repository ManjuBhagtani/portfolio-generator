import { connect } from "react-redux";

const Code = ({
  FullName,
  FirstName,
  LastName,
  Tagline,
  BannerImage,
  Thubmnail,
  Keywords, 
  Description,
  Address,
  Phone,
  Email,
  experiences,
  educations,
  skills,
  interests,
  awards,
  Colour
}) => {
  return (
    <div className="Code">
      <pre className="border rounded bg-light p-3 codefile">
        {`<!DOCTYPE html>
<html lang="en">
    <head>

        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="${Keywords}">
        <meta name="description" content="${FirstName}'s Portfolio">
        <meta name="author" content="cosmos-themes">

        <title>${FirstName} - Portfolio</title>

        <!-- favicon -->
        <link href="https://kalvin.netlify.app/images/favicon.ico" rel="icon" type="image/png">

        <!--Font Awesome css-->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

        <!--Bootstrap css-->
        <link rel="stylesheet" href="https://kalvin.netlify.app/css/bootstrap.css">

        <!--Owl Carousel css-->
        <link rel="stylesheet" href="https://kalvin.netlify.app/css/owl.carousel.min.css">
        <link rel="stylesheet" href="https://kalvin.netlify.app/css/owl.theme.default.min.css">

        <!--Magnific Popup css-->
        <link rel="stylesheet" href="https://kalvin.netlify.app/css/magnific-popup.css">

        <!-- Google Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:200,300,400,500,600,700,800,900%7cOpen+Sans:400,600,700,800" rel="stylesheet">

        <!--Site Main Style css-->
        <link rel="stylesheet" href="https://kalvin.netlify.app/css/style.css">

        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-122650090-1"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-122650090-1');
        </script>
        <style>
            #home{
                background-image: url(${BannerImage});
            }
        </style>
    </head>

    <body>

        <!--Preloader-->
        <div class="preloader">
            <div class="loader "></div>
        </div>
        <!--Preloader-->

        <!--Navbar Start-->
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container">
                <!-- LOGO -->
                <a class="navbar-brand logo" href="index.html">
                    ${FirstName}
                </a>

                <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="navbar-collapse collapse" id="navbarCollapse">
                    <ul class="navbar-nav ml-auto">
                        <!--Nav Links-->
                        <li class="nav-item">
                            <a href="#" class="nav-link active" data-scroll-nav="0" >Home</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" data-scroll-nav="1" >About</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" data-scroll-nav="2" >Services</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" data-scroll-nav="3">Works</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" data-scroll-nav="4">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" data-scroll-nav="5">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <!--Navbar End-->

        <!--Home Section Start-->
        <section id="home" class="banner" data-stellar-background-ratio=".7" data-scroll-index="0">
            <div class="container">
                <!--Banner Content-->
                <div class="banner-caption">
                    <h1>Hi! I'm ${FirstName}.</h1>
                    <p class="cd-headline clip mt-30">
                        <span>${Tagline}</span><br>
                    </p>
                </div>
                <div class="arrow bounce">
                    <a class="fa fa-chevron-down fa-2x" href="#" data-scroll-nav="1"></a>
                </div>
            </div>
        </section>
        <!--Home Section End-->

        <!--About Section Start-->
        <section class="about pt-100 pb-100" data-scroll-index="1">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 col-md-6">
                        <!--About Image-->
                        <div class="about-img">
                            <img src="${Thubmnail}" alt="">
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-6">
                        <!--About Content-->
                        <div class="about-content">
                            <div class="about-heading">
                                <h2>About Me.</h2>
                                <span><!-- UI/UX Designer & Web Developer --></span>
                            </div>
                            <p>I'm <b>${FullName}.</b> ${Description}</p>
                            <!--About Social Icons-->
                            <div class="social-icons">
                                <a href="#"><i class="fa fa-facebook"></i></a>
                                <a href="#"><i class="fa fa-twitter"></i></a>
                                <a href="#"><i class="fa fa-dribbble"></i></a>
                                <a href="#"><i class="fa fa-google-plus"></i></a>
                                <a href="#"><i class="fa fa-pinterest"></i></a>
                            </div>
                            <span class="about-button">
                                <a class="main-btn" href="#">Download CV</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--About Section End-->

        <!--Services Section Start-->
        <section class="services bg-gray pt-100 pb-50" data-scroll-index="2">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="heading text-center">
                            <h6>Services</h6>
                            <h2>What I Can Do</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <!--Service Item-->
                        <div class="service-item">
                            <span class="icon">
                                <i class="fa fa-laptop"></i>
                            </span>
                            <h4>Web Design</h4>
                            <p>Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text ever.</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <!--Service Item-->
                        <div class="service-item">
                            <span class="icon">
                                <i class="fa fa-gears"></i>
                            </span>
                            <h4>Web Development</h4>
                            <p>Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text ever.</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <!--Service Item-->
                        <div class="service-item">
                            <span class="icon">
                                <i class="fa fa-mobile"></i>
                            </span>
                            <h4>Responsive Design</h4>
                            <p>Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text ever.</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <!--Service Item-->
                        <div class="service-item">
                            <span class="icon">
                                <i class="fa fa-rocket"></i>
                            </span>
                            <h4>Branding Identity</h4>
                            <p>Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text ever.</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <!--Service Item-->
                        <div class="service-item">
                            <span class="icon">
                                <i class="fa fa-pencil"></i>
                            </span>
                            <h4>Creative Design</h4>
                            <p>Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text ever.</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <!--Service Item-->
                        <div class="service-item">
                            <span class="icon">
                                <i class="fa fa-support"></i>
                            </span>
                            <h4>Support</h4>
                            <p>Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text ever.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--Services Section End-->

        <!--Stats Section Start-->
        <section class="stats pt-100 pb-100" style="background-image: url('https://kalvin.netlify.app/images/background/stats-bg.jpg')">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                        <!--Stats Item-->
                        <div class="single-stat">
                            <span class="stat-icon">
                                <i class="fa fa-users" aria-hidden="true"></i>
                            </span>
                            <h2 class="counter" data-count="220">10</h2>
                            <p>Happy Clients</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <!--Stats Item-->
                        <div class="single-stat">
                            <span class="stat-icon">
                                <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                            </span>
                            <h2 class="counter" data-count="700">20</h2>
                            <p>Projects Completed</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <!--Stats Item-->
                        <div class="single-stat">
                            <span class="stat-icon">
                                <i class="fa fa-edit" aria-hidden="true"></i>
                            </span>
                            <h2 class="counter" data-count="1100">10</h2>
                            <p>Lines Of Code</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <!--Stats Item-->
                        <div class="single-stat">
                            <span class="stat-icon">
                                <i class="fa fa-trophy" aria-hidden="true"></i>
                            </span>
                            <h2 class="counter" data-count="160">15</h2>
                            <p>Awards Achieved</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--Stats Section End-->


        <!--Portfolio Section Start-->
        <section class="portfolio pt-100 pb-70" data-scroll-index="3">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="heading text-center">
                            <h6>Portfolio</h6>
                            <h2>Work I Have Done</h2>
                        </div>
                    </div>
                </div>
                <div class="row portfolio-items">
                    <!--Portfolio Item-->
                    <div class="col-lg-4 col-md-6 item application">
                        <div class="item-content">
                            <img src="https://kalvin.netlify.app/images/portfolio/img-1.jpg" alt="">
                            <div class="item-overlay">
                                <h6>Application</h6>
                                <div class="icons">
                                    <span class="icon link">
                                        <a href="https://kalvin.netlify.app/images/portfolio/img-1.jpg">
                                            <i class="fa fa-link"></i>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--Portfolio Item-->
                    <div class="col-lg-4 col-md-6 item design">
                        <div class="item-content">
                            <img src="https://kalvin.netlify.app/images/portfolio/img-2.jpg" alt="">
                            <div class="item-overlay">
                                <h6>Web Design</h6>
                                <div class="icons">
                                    <span class="icon link">
                                        <a href="https://kalvin.netlify.app/images/portfolio/img-2.jpg">
                                            <i class="fa fa-link"></i>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--Portfolio Item-->
                    <div class="col-lg-4 col-md-6 item development">
                        <div class="item-content">
                            <img src="https://kalvin.netlify.app/images/portfolio/img-3.jpg" alt="">
                            <div class="item-overlay">
                                <h6>Application</h6>
                                <div class="icons">
                                    <span class="icon link">
                                        <a href="https://kalvin.netlify.app/images/portfolio/img-3.jpg">
                                            <i class="fa fa-link"></i>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--Portfolio Item-->
                    <div class="col-lg-4 col-md-6 item design development">
                        <div class="item-content">
                            <img src="https://kalvin.netlify.app/images/portfolio/img-4.jpg" alt="">
                            <div class="item-overlay">
                                <h6>Development</h6>
                                <div class="icons">
                                    <span class="icon link">
                                        <a href="https://kalvin.netlify.app/images/portfolio/img-4.jpg">
                                            <i class="fa fa-link"></i>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--Portfolio Item-->
                    <div class="col-lg-4 col-md-6 item development application">
                        <div class="item-content">
                            <img src="https://kalvin.netlify.app/images/portfolio/img-5.jpg" alt="">
                            <div class="item-overlay">
                                <h6>Web Design</h6>
                                <div class="icons">
                                    <span class="icon link">
                                        <a href="https://kalvin.netlify.app/images/portfolio/img-5.jpg">
                                            <i class="fa fa-link"></i>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--Portfolio Item-->
                    <div class="col-lg-4 col-md-6 item application development">
                        <div class="item-content">
                            <img src="https://kalvin.netlify.app/images/portfolio/img-6.jpg" alt="">
                            <div class="item-overlay">
                                <h6>Web Design</h6>
                                <div class="icons">
                                    <span class="icon link">
                                        <a href="https://kalvin.netlify.app/images/portfolio/img-6.jpg">
                                            <i class="fa fa-link"></i>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--Portfolio Section End-->

		<!--Blogs Section Start-->
		<section class="blogs pt-100 pb-100 bg-gray" data-scroll-index="4">
		   <div class="container">
			  <div class="row">
				 <div class="col text-center">
					<div class="heading text-center">
					   <h6>Blog</h6>
					   <h2>Latest News</h2>
					</div>
				 </div>
			  </div>
			  <div class="row">
				 <div class="owl-carousel owl-theme owl-loaded owl-drag">					
					<div class="owl-stage-outer">
					   <div class="owl-stage" style="transform: translate3d(-750px, 0px, 0px); transition: all 0.5s ease 0s; width: 3000px;">
						  
						  <div class="owl-item active" style="width: 345px; margin-right: 30px;">
							 <div class="blog-item">
								<div class="blog-img">
								   <a href="single-blog.html">
								   <img src="https://kalvin.netlify.app/images/blog/img-1.jpg" alt="">
								   </a>
								</div>
								<div class="blog-content">
								   <h3>The best of web design and web design inspiration</h3>								   
								   <div class="blog-meta">
									  <span class="more">
									  <a href="single-blog.html">Read More</a>
									  </span>
								   </div>
								</div>
							 </div>
						  </div>
						  <div class="owl-item" style="width: 345px; margin-right: 30px;">
							 <div class="blog-item">
								<div class="blog-img">
								   <a href="single-blog.html">
								   <img src="https://kalvin.netlify.app/images/blog/img-3.jpg" alt="">
								   </a>
								</div>
								<div class="blog-content">
								   <h3>The best of web design and web design inspiration</h3>
								   <div class="blog-meta">
									  <span class="more">
									  <a href="single-blog.html">Read More</a>
									  </span>
								   </div>
								</div>
							 </div>
						  </div>
						  <div class="owl-item" style="width: 345px; margin-right: 30px;">
							 <div class="blog-item">
								<div class="blog-img">
								   <a href="single-blog.html">
								   <img src="https://kalvin.netlify.app/images/blog/img-4.jpg" alt="">
								   </a>
								</div>
								<div class="blog-content">
								   <h3>The best of web design and web design inspiration</h3>
								   <div class="blog-meta">
									  <span class="more">
									  <a href="single-blog.html">Read More</a>
									  </span>
								   </div>
								</div>
							 </div>
						  </div>
					   </div>
					</div>
					<div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button></div>
					<div class="owl-dots disabled"></div>
				 </div>
			  </div>
			  <div class="row">
				 <div class="col text-center">
					<div class="blog-button pt-40">
					   <a class="main-btn" href="blogs-page.html">View More</a>
					</div>
				 </div>
			  </div>
		   </div>
		</section>
		<!--Blogs section end-->
		
		<!--Testimonials Section Start-->
		<section class="testimonials pt-100 pb-100" style="background-image: url('https://kalvin.netlify.app/images/background/testimonials-bg.jpg')">
		   <div class="container">
			  <div class="row">
				 <div class="col-lg-10 offset-lg-1">
					<div class="owl-carousel owl-theme text-center owl-loaded owl-drag">
					   <div class="owl-stage-outer">
						  <div class="owl-stage" style="transform: translate3d(-3080px, 0px, 0px); transition: all 0.5s ease 0s; width: 5390px;">
							 <div class="owl-item" style="width: 770px;">
								<div class="testimonial-item">
								   <div class="author-img">
									  <img src="https://kalvin.netlify.app/images/testimonial/img-1.jpg" alt="">
								   </div>
								   <h5>Mr John Doe</h5>
								   <span>Creative Director</span>
								   <p>Dolor facilis veritatis doloremque dicta eos Voluptate earum nulla ad et esse Saepe asperiores nisi facere ipsam corporis. Dolorem praesentium tenetur tempore dolorem illum autem? Veritatis fuga quasi sunt tenetur. Expedita id eaque incidunt beatae nesciunt! In similique exercitationem tempore excepturi placeat Nostrum ducimus dicta temporibus quas!</p>
								</div>
							 </div>
							 <div class="owl-item active" style="width: 770px;">
								<div class="testimonial-item">
								   <div class="author-img">
									  <img src="https://kalvin.netlify.app/images/testimonial/img-1.jpg" alt="">
								   </div>
								   <h5>Mr John Doe</h5>
								   <span>Creative Director</span>
								   <p>Dolor facilis veritatis doloremque dicta eos Voluptate earum nulla ad et esse Saepe asperiores nisi facere ipsam corporis. Dolorem praesentium tenetur tempore dolorem illum autem? Veritatis fuga quasi sunt tenetur. Expedita id eaque incidunt beatae nesciunt! In similique exercitationem tempore excepturi placeat Nostrum ducimus dicta temporibus quas!</p>
								</div>
							 </div>
							 <div class="owl-item cloned" style="width: 770px;">
								<div class="testimonial-item">
								   <div class="author-img">
									  <img src="https://kalvin.netlify.app/images/testimonial/img-1.jpg" alt="">
								   </div>
								   <h5>Mr John Doe</h5>
								   <span>Creative Director</span>
								   <p>Dolor facilis veritatis doloremque dicta eos Voluptate earum nulla ad et esse Saepe asperiores nisi facere ipsam corporis. Dolorem praesentium tenetur tempore dolorem illum autem? Veritatis fuga quasi sunt tenetur. Expedita id eaque incidunt beatae nesciunt! In similique exercitationem tempore excepturi placeat Nostrum ducimus dicta temporibus quas!</p>
								</div>
							 </div>
						  </div>
					   </div>
					   <div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button></div>
					   <!-- <div class="owl-dots"><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot active"><span></span></button></div> -->
					</div>
				 </div>
			  </div>
		   </div>
		</section>
		<!--Testimonials Section End-->
		
        <!--Contact Section Start-->
        <section class="contact pt-100 pb-100" data-scroll-index="5">
            <div class="container">
                <div class="row">
                    <div class="col text-center">
                        <div class="heading">
                            <h6>Contact</h6>
                            <h2>Get In Touch</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <!--Contact Form-->
                        <form id='contact-form' method='POST'><input type='hidden' name='form-name' value='contactForm' />
                            <div class="row">
                                <div class="col-md-6 form-group">
                                    <!--name-->
                                    <input type="text" class="form-control con-validate" id="contact-name" placeholder="Name" minlength=3 >
                                </div>
                                <div class="col-md-6 form-group">
                                    <!--email-->
                                    <input type="email" class="form-control con-validate" id="contact-email" placeholder="Email" >
                                </div>
                                <div class="col-md-12 form-group">
                                    <!--message box-->
                                    <textarea class="form-control con-validate" id="contact-message" placeholder="How can we help you?" rows=6 ></textarea>
                                </div>
                                <div class="col-md-12 text-center">
                                    <!--contact button-->
                                    <button id="contact-submit" class="mt-30 main-btn">
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <!--Contact Section End-->

        <!--Footer Start-->
        <footer class="pt-50 pb-50">
            <div class="container">
                <div class="row text-center">
                    <div class="col-md-3 col-sm-6">
                        <!--Contant Item-->
                        <div class="contact-info">
                            <h5>${FirstName}</h5>
                            <p><!-- lorem Ipsum donor sit. --></p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <!--Contant Item-->
                        <div class="contact-info">
                            <h5>Phone No.</h5>
                            <p>${Phone}</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <!--Contant Item-->
                        <div class="contact-info">
                            <h5>Email</h5>
                            <p>${Email}</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <!--Contant Item-->
                        <div class="contact-info">
                            <h5>Address</h5>
                            <p>${Address}</p>
                        </div>
                    </div>
                </div>
                <div class="row text-center">
                    <div class="col-md-12">
                        <hr>
                        <p class="copy pt-30">
                            ${FirstName} &copy; 2021. All Right Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        <!--Footer End-->

        <!--Jquery js-->
        <script src="https://kalvin.netlify.app/js/jquery.min.js"></script>
        <!--Bootstrap js-->
        <script src="https://kalvin.netlify.app/js/bootstrap.min.js"></script>
        <!--Stellar js-->
        <script src="https://kalvin.netlify.app/js/jquery.stellar.js"></script>
        <!--Animated Headline js-->
        <script src="https://kalvin.netlify.app/js/animated.headline.js"></script>
        <!--Owl Carousel js-->
        <script src="https://kalvin.netlify.app/js/owl.carousel.min.js"></script>
        <!--ScrollIt js-->
        <script src="https://kalvin.netlify.app/js/scrollIt.min.js"></script>
        <!--Isotope js-->
        <script src="https://kalvin.netlify.app/js/isotope.pkgd.min.js"></script>
        <!--Magnific Popup js-->
        <script src="https://kalvin.netlify.app/js/jquery.magnific-popup.min.js"></script>
        <!--Site Main js-->
        <script src="https://kalvin.netlify.app/js/main.js"></script>

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
  skills: state.skills
});

export default connect(mapStateToProps)(Code);
