import { connect } from "react-redux";

const Code = ({
  FullName,
  FirstName,
  LastName,
  Thubmnail,
  Tagline,
  URL,
  Description,
  Keywords,
  City,
  Phone,
  Email,
  Colour1,
  Colour2,
  Colour3,
  Colour4,
  experiences,
  educations,
  skills, 
}) => {
  return (
    <div className="Code">
      <pre className="border rounded bg-light p-3 codefile">
        {`<!DOCTYPE html>
<html lang="en-US">
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <link media="all" href="https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/cache/autoptimize/css/autoptimize_3a48c67a15ad3f22dbd718497bad4d2c.css" rel="stylesheet" />
      <title>${FullName}</title>
      <style id="cocobasic-customizer-style" type="text/css"></style>
      <meta name='robots' content='max-image-preview:large' />
      <!-- <link rel='dns-prefetch' href='//fonts.googleapis.com' /> -->
	  <!-- <link rel='stylesheet' id='cocobasic-google-fonts-css'  href='//fonts.googleapis.com/css?family=Montserrat%3A200%2C300%2C400%2C500%2C600%2C700%2C800%7CPrata&#038;ver=1.0.0' type='text/css' media='all' /> -->
      <link rel='stylesheet' id='elementor-post-530-css'  href='https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/cache/autoptimize/css/autoptimize_single_20c942e1b8f9aa9cee1658521390e3fd.css' type='text/css' media='all' />
      <link rel='stylesheet' id='elementor-post-181-css'  href='https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/cache/autoptimize/css/autoptimize_single_28218aaa313c8033198e1dec9870c429.css' type='text/css' media='all' />
      <link rel='stylesheet' id='google-fonts-1-css'  href='https://fonts.googleapis.com/css?family=Roboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto+Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&#038;display=auto&#038;ver=5.9.1' type='text/css' media='all' />
      <!--[if lt IE 9]> <script type='text/javascript' src='https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/themes/teoro-wp/js/html5shiv.min.js' id='html5shiv-js'></script> <![endif]--> <!--[if lt IE 9]> <script type='text/javascript' src='https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/themes/teoro-wp/js/respond.min.js' id='respond-js'></script> <![endif]--> <script type='text/javascript' src='https://demo.cocobasic.com/teoro-wp/demo-1/wp-includes/js/jquery/jquery.min.js' id='jquery-core-js'></script> 
      <link rel="https://api.w.org/" href="https://demo.cocobasic.com/teoro-wp/demo-1/wp-json/" />
      <link rel="alternate" type="application/json" href="https://demo.cocobasic.com/teoro-wp/demo-1/wp-json/wp/v2/pages/181" />
      <link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://demo.cocobasic.com/teoro-wp/demo-1/xmlrpc.php?rsd" />
      <link rel="wlwmanifest" type="application/wlwmanifest+xml" href="https://demo.cocobasic.com/teoro-wp/demo-1/wp-includes/wlwmanifest.xml" />
      <meta name="generator" content="WordPress 5.9.1" />
      <link rel="canonical" href="https://demo.cocobasic.com/teoro-wp/demo-1/" />
      <link rel='shortlink' href='https://demo.cocobasic.com/teoro-wp/demo-1/' />
      <link rel="alternate" type="application/json+oembed" href="https://demo.cocobasic.com/teoro-wp/demo-1/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fdemo.cocobasic.com%2Fteoro-wp%2Fdemo-1%2F" />
      <link rel="alternate" type="text/xml+oembed" href="https://demo.cocobasic.com/teoro-wp/demo-1/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fdemo.cocobasic.com%2Fteoro-wp%2Fdemo-1%2F&#038;format=xml" />
      <link rel="icon" href="https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2019/11/cropped-favicon-32x32.png" sizes="32x32" />
      <link rel="icon" href="https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2019/11/cropped-favicon-192x192.png" sizes="192x192" />
      <link rel="apple-touch-icon" href="https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2019/11/cropped-favicon-180x180.png" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	  <link rel='stylesheet' href='https://manjubhagtani.github.io/portfolio-templates/Template2_AnnaPeterson/style.css' type='text/css' />
	  <meta name="msapplication-TileImage" content="https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2019/11/cropped-favicon-270x270.png" />
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-90924782-1"></script> <script>window.dataLayer = window.dataLayer || [];
         function gtag() {
             dataLayer.push(arguments);
         }
         gtag('js', new Date());
         gtag('config', 'UA-90924782-1', {'anonymize_ip': true});
      </script> 
   </head>
   <body class="home page-template page-template-onepage page-template-onepage-php page page-id-181 chrome windows elementor-default elementor-kit-530 elementor-page elementor-page-181">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;" >
         <defs>
            <filter id="wp-duotone-dark-grayscale">
               <feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " />
               <feComponentTransfer color-interpolation-filters="sRGB" >
                  <feFuncR type="table" tableValues="0 0.49803921568627" />
                  <feFuncG type="table" tableValues="0 0.49803921568627" />
                  <feFuncB type="table" tableValues="0 0.49803921568627" />
                  <feFuncA type="table" tableValues="1 1" />
               </feComponentTransfer>
               <feComposite in2="SourceGraphic" operator="in" />
            </filter>
         </defs>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;" >
         <defs>
            <filter id="wp-duotone-grayscale">
               <feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " />
               <feComponentTransfer color-interpolation-filters="sRGB" >
                  <feFuncR type="table" tableValues="0 1" />
                  <feFuncG type="table" tableValues="0 1" />
                  <feFuncB type="table" tableValues="0 1" />
                  <feFuncA type="table" tableValues="1 1" />
               </feComponentTransfer>
               <feComposite in2="SourceGraphic" operator="in" />
            </filter>
         </defs>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;" >
         <defs>
            <filter id="wp-duotone-purple-yellow">
               <feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " />
               <feComponentTransfer color-interpolation-filters="sRGB" >
                  <feFuncR type="table" tableValues="0.54901960784314 0.98823529411765" />
                  <feFuncG type="table" tableValues="0 1" />
                  <feFuncB type="table" tableValues="0.71764705882353 0.25490196078431" />
                  <feFuncA type="table" tableValues="1 1" />
               </feComponentTransfer>
               <feComposite in2="SourceGraphic" operator="in" />
            </filter>
         </defs>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;" >
         <defs>
            <filter id="wp-duotone-blue-red">
               <feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " />
               <feComponentTransfer color-interpolation-filters="sRGB" >
                  <feFuncR type="table" tableValues="0 1" />
                  <feFuncG type="table" tableValues="0 0.27843137254902" />
                  <feFuncB type="table" tableValues="0.5921568627451 0.27843137254902" />
                  <feFuncA type="table" tableValues="1 1" />
               </feComponentTransfer>
               <feComposite in2="SourceGraphic" operator="in" />
            </filter>
         </defs>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;" >
         <defs>
            <filter id="wp-duotone-midnight">
               <feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " />
               <feComponentTransfer color-interpolation-filters="sRGB" >
                  <feFuncR type="table" tableValues="0 0" />
                  <feFuncG type="table" tableValues="0 0.64705882352941" />
                  <feFuncB type="table" tableValues="0 1" />
                  <feFuncA type="table" tableValues="1 1" />
               </feComponentTransfer>
               <feComposite in2="SourceGraphic" operator="in" />
            </filter>
         </defs>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;" >
         <defs>
            <filter id="wp-duotone-magenta-yellow">
               <feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " />
               <feComponentTransfer color-interpolation-filters="sRGB" >
                  <feFuncR type="table" tableValues="0.78039215686275 1" />
                  <feFuncG type="table" tableValues="0 0.94901960784314" />
                  <feFuncB type="table" tableValues="0.35294117647059 0.47058823529412" />
                  <feFuncA type="table" tableValues="1 1" />
               </feComponentTransfer>
               <feComposite in2="SourceGraphic" operator="in" />
            </filter>
         </defs>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;" >
         <defs>
            <filter id="wp-duotone-purple-green">
               <feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " />
               <feComponentTransfer color-interpolation-filters="sRGB" >
                  <feFuncR type="table" tableValues="0.65098039215686 0.40392156862745" />
                  <feFuncG type="table" tableValues="0 1" />
                  <feFuncB type="table" tableValues="0.44705882352941 0.4" />
                  <feFuncA type="table" tableValues="1 1" />
               </feComponentTransfer>
               <feComposite in2="SourceGraphic" operator="in" />
            </filter>
         </defs>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;" >
         <defs>
            <filter id="wp-duotone-blue-orange">
               <feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " />
               <feComponentTransfer color-interpolation-filters="sRGB" >
                  <feFuncR type="table" tableValues="0.098039215686275 1" />
                  <feFuncG type="table" tableValues="0 0.66274509803922" />
                  <feFuncB type="table" tableValues="0.84705882352941 0.41960784313725" />
                  <feFuncA type="table" tableValues="1 1" />
               </feComponentTransfer>
               <feComposite in2="SourceGraphic" operator="in" />
            </filter>
         </defs>
      </svg>
      <div class="doc-loader"></div>
      <header>
         <div class="header-left-part">
            <div class="toggle-holder">
               <div id="toggle" class="">
                  <div></div>
                  <div></div>
                  <div></div>
               </div>
            </div>
            <div class="site-title" title="Full name"> <a href="https://demo.cocobasic.com/teoro-wp/demo-1/"> ${FirstName} ${LastName} </a></div>
            <div class="menu-social"><a href="https://linkedin.com" target="_blank">LI.</a> <a href="https://twitter.com" target="_blank">TW.</a> <a href="https://linkedin.com" target="_blank">IN.</a> <a href="https://facebook.com" target="_blank">FB.</a></div>
         </div>
         <div class="header-right-part">
            <div class="menu-wrapper center-relative relative">
               <div class="menu-holder">
                  <nav id="header-main-menu" class="menu-menu-1-container">
                     <ul id="menu-menu-1" class="main-menu sm sm-clean">
                        <li id="menu-item-496" class="one-page-section menu-item menu-item-type-custom menu-item-object-custom menu-item-496"><a href="#home">Home</a></li>
                        <li id="menu-item-494" class="one-page-section menu-item menu-item-type-custom menu-item-object-custom menu-item-494"><a href="#about">About</a></li>
                        <li id="menu-item-494" class="one-page-section menu-item menu-item-type-custom menu-item-object-custom menu-item-494"><a href="#portfolio">Portfolio</a></li>
						<li id="menu-item-500" class="one-page-section menu-item menu-item-type-custom menu-item-object-custom menu-item-500"><a href="#skills">Skills</a></li>
                        <li id="menu-item-545" class="one-page-section menu-item menu-item-type-custom menu-item-object-custom menu-item-545"><a href="#education">Education</a></li>
                        <li id="menu-item-602" class="one-page-section menu-item menu-item-type-custom menu-item-object-custom menu-item-602"><a href="#facts">Facts</a></li>
                        <li id="menu-item-537" class="one-page-section menu-item menu-item-type-custom menu-item-object-custom menu-item-537"><a href="#experience">Experience</a></li>
                        <li id="menu-item-495" class="one-page-section menu-item menu-item-type-custom menu-item-object-custom menu-item-495"><a href="#contact">Contact</a></li>
                     </ul>
                  </nav>
               </div>
               <div class="clear"></div>
            </div>
         </div>
      </header>
      <div id="post-181" class="post-181 page type-page status-publish hentry" >
         <div class="one-page-content-wrapper">
            <div data-elementor-type="wp-page" data-elementor-id="181" class="elementor elementor-181" data-elementor-settings="[]">
               <div class="elementor-inner">
                  <div class="elementor-section-wrap">
                     <section class="elementor-section elementor-top-section elementor-element elementor-element-3cda06bf op-section elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="3cda06bf" data-element_type="section" id="home" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                        <div class="elementor-container elementor-column-gap-no">
                           <div class="elementor-row">
                              <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-589a8709" data-id="589a8709" data-element_type="column">
                                 <div class="elementor-column-wrap elementor-element-populated">
                                    <div class="elementor-widget-wrap">
                                       <div class="elementor-element elementor-element-59838137 elementor-widget elementor-widget-image" data-id="59838137" data-element_type="widget" data-widget_type="image.default">
                                          <div class="elementor-widget-container">
                                             <div class="elementor-image"> <img width="600" height="760" src=${Thubmnail} class="attachment-full size-full" alt="" loading="lazy" srcset=${Thubmnail} sizes="(max-width: 600px) 100vw, 600px" /></div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-a8c012a" data-id="a8c012a" data-element_type="column">
                                 <div class="elementor-column-wrap elementor-element-populated">
                                    <div class="elementor-widget-wrap">
                                       <div class="elementor-element elementor-element-3f957272 elementor-widget elementor-widget-heading" data-id="3f957272" data-element_type="widget" data-widget_type="heading.default">
                                          <div class="elementor-widget-container">
                                             <h1 class="elementor-heading-title elementor-size-default" title="Full name">Hello <br>I’m ${FirstName} <br>${LastName}</h1>
                                          </div>
                                       </div>
                                       <div class="elementor-element elementor-element-7ac381db elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-id="7ac381db" data-element_type="widget" data-widget_type="text-editor.default">
                                          <div class="elementor-widget-container">
                                             <div class="elementor-text-editor elementor-clearfix" title="Tagline"> ${Tagline}</div>
                                          </div>
                                       </div>
                                       <div class="elementor-element elementor-element-160c4806 cocobasic-left-rigt elementor-widget__width-initial elementor-absolute elementor-widget elementor-widget-image" data-id="160c4806" data-element_type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="image.default">
                                          <div class="elementor-widget-container">
                                             <div class="elementor-image"> <img width="310" height="70" src="https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2020/08/zigzag.png" class="attachment-full size-full" alt="" loading="lazy" srcset="https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2020/08/zigzag.png 310w, https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2020/08/zigzag-300x68.png 300w" sizes="(max-width: 310px) 100vw, 310px" /></div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </section>
                     <section class="elementor-section elementor-top-section elementor-element elementor-element-3c2f0808 op-section elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="3c2f0808" data-element_type="section" id="about" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                        <div class="elementor-container elementor-column-gap-default">
                           <div class="elementor-row">
                              <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-4e2591d8" data-id="4e2591d8" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                 <div class="elementor-column-wrap elementor-element-populated">
                                    <div class="elementor-widget-wrap">
                                       <div class="elementor-element elementor-element-570ae41d elementor-widget elementor-widget-heading" data-id="570ae41d" data-element_type="widget" data-widget_type="heading.default">
                                          <div class="elementor-widget-container">
                                             <h2 class="elementor-heading-title elementor-size-default">About</h2>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-1a7fbc57" data-id="1a7fbc57" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                 <div class="elementor-column-wrap elementor-element-populated">
                                    <div class="elementor-widget-wrap">
                                       <div class="elementor-element elementor-element-35fa5410 elementor-widget elementor-widget-text-editor" data-id="35fa5410" data-element_type="widget" data-widget_type="text-editor.default">
                                          <div class="elementor-widget-container">
                                             <div class="elementor-text-editor elementor-clearfix" title="About">
                                                <p>${Description}</p>
                                             </div>
                                          </div>
                                       </div>
                                       <section class="elementor-section elementor-inner-section elementor-element elementor-element-4cd330f8 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="4cd330f8" data-element_type="section">
                                          <div class="elementor-container elementor-column-gap-no">
                                             <div class="elementor-row">
                                                <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-2d15cbe9" data-id="2d15cbe9" data-element_type="column">
                                                   <div class="elementor-column-wrap elementor-element-populated">
                                                      <div class="elementor-widget-wrap">
                                                         <div class="elementor-element elementor-element-52896c2 elementor-widget elementor-widget-text-editor" data-id="52896c2" data-element_type="widget" data-widget_type="text-editor.default">
                                                            <div class="elementor-widget-container">
                                                               <div class="elementor-text-editor elementor-clearfix">
                                                                  <p><strong>NAME:</strong> <span title="Full name">${FullName}</span><br />
																	<strong>CITY:</strong> <span title="City">${City}</span><br />
																	<strong>PHONE:</strong> <span title="Phone number">${Phone}</span><br />
																	<strong>EMAIL:</strong> <span title="Email">${Email}</span><br />
																	<strong>WEBSITE:</strong> <span title="Website">${URL}</span></p>
                                                               </div>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-177ba07f" data-id="177ba07f" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                   <div class="elementor-column-wrap elementor-element-populated">
                                                      <div class="elementor-widget-wrap">
                                                         <div class="elementor-element elementor-element-4ec03c3a elementor-widget elementor-widget-image" data-id="4ec03c3a" data-element_type="widget" data-widget_type="image.default">
                                                            <div class="elementor-widget-container">
                                                               <div class="elementor-image"> <a href="https://demo.cocobasic.com/documentation/MANUAL-TeoroWP.pdf" target="_blank" rel="nofollow"> <img width="400" height="360" src="https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2020/08/icon_download_cv.png" class="attachment-full size-full" alt="" loading="lazy" srcset="https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2020/08/icon_download_cv.png 400w, https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2020/08/icon_download_cv-300x270.png 300w" sizes="(max-width: 400px) 100vw, 400px" /> </a></div>
                                                            </div>
                                                         </div>
                                                         <div class="elementor-element elementor-element-4f9bfd94 elementor-widget elementor-widget-heading" data-id="4f9bfd94" data-element_type="widget" data-widget_type="heading.default">
                                                            <div class="elementor-widget-container">
                                                               <div class="elementor-heading-title elementor-size-default"><a href="https://demo.cocobasic.com/documentation/MANUAL-TeoroWP.pdf" target="_blank" rel="nofollow">DOWNLOAD CV</a></div>
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
                     </section>
					 <section class="elementor-section elementor-top-section elementor-element elementor-element-2d537bad op-section elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="2d537bad" data-element_type="section" id="portfolio" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                        <div class="elementor-container elementor-column-gap-default">
                           <div class="elementor-row">
                              <div class="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-1659d356" data-id="1659d356" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                 <div class="elementor-column-wrap elementor-element-populated">
                                    <div class="elementor-widget-wrap">
                                       <div class="elementor-element elementor-element-6298d834 cocobasic-left-down-rigt-up elementor-widget__width-initial elementor-absolute elementor-widget elementor-widget-image" data-id="6298d834" data-element_type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="image.default">
                                          <div class="elementor-widget-container">
                                             <div class="elementor-image"> <img width="214" height="164" src="https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2020/08/triangle.png" class="attachment-full size-full" alt="" loading="lazy" /></div>
                                          </div>
                                       </div>
                                       <div class="elementor-element elementor-element-139ca579 elementor-widget elementor-widget-coco-portfolio" data-id="139ca579" data-element_type="widget" data-widget_type="coco-portfolio.default">
                                          <div class="elementor-widget-container">
                                             <div id="portfolio-wrapper" class="relative">
                                                <div class="portfolio-load-content-holder content-670"></div>
                                                <div class="grid" id="portfolio-grid">
                                                   <div class="grid-sizer"></div>
                                                   <div id="p-item-65" class="grid-item element-item p_one ">
                                                      <a class="item-link ajax-portfolio" href="https://demo.cocobasic.com/teoro-wp/demo-1/portfolio/item-1/" data-id="65">
                                                         <img loading="lazy" width="800" height="400" src="https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2019/11/portfolio_img_01.jpg" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" srcset="https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2019/11/portfolio_img_01.jpg 800w, https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2019/11/portfolio_img_01-300x150.jpg 300w, https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2019/11/portfolio_img_01-768x384.jpg 768w" sizes="(max-width: 800px) 100vw, 800px" />
                                                         <div class="portfolio-text-holder">
                                                            <div class="portfolio-text-wrapper">
                                                               <p class="portfolio-text">Office</p>
                                                               <p class="portfolio-cat">Setup</p>
                                                            </div>
                                                         </div>
                                                      </a>
                                                   </div>
                                                   <div id="p-item-62" class="grid-item element-item p_one_half ">
                                                      <a class="item-link ajax-portfolio" href="https://demo.cocobasic.com/teoro-wp/demo-1/portfolio/item-2/" data-id="62">
                                                         <img width="400" height="800" src="https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2019/11/portfolio_img_03.jpg" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" loading="lazy" srcset="https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2019/11/portfolio_img_03.jpg 400w, https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2019/11/portfolio_img_03-150x300.jpg 150w" sizes="(max-width: 400px) 100vw, 400px" />
                                                         <div class="portfolio-text-holder">
                                                            <div class="portfolio-text-wrapper">
                                                               <p class="portfolio-text">Shore</p>
                                                               <p class="portfolio-cat">Photography</p>
                                                            </div>
                                                         </div>
                                                      </a>
                                                   </div>
                                                   <div class="grid-item element-item p_one_half">
                                                      <a class="item-link" href="https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2019/11/blog_img_02.jpg" data-rel="prettyPhoto[portfolio1]">
                                                         <img width="400" height="400" src="https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2019/11/portfolio_img_02.jpg" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" loading="lazy" srcset="https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2019/11/portfolio_img_02.jpg 400w, https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2019/11/portfolio_img_02-300x300.jpg 300w, https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2019/11/portfolio_img_02-150x150.jpg 150w" sizes="(max-width: 400px) 100vw, 400px" />
                                                         <div class="portfolio-text-holder">
                                                            <div class="portfolio-text-wrapper">
                                                               <p class="portfolio-text">Comfort</p>
                                                               <p class="portfolio-cat">Office</p>
                                                            </div>
                                                         </div>
                                                      </a>
                                                   </div>
                                                   <div class="grid-item element-item p_one_half">
                                                      <a class="item-link" href="https://vimeo.com/199192931" data-rel="prettyPhoto[portfolio1]">
                                                         <img width="400" height="400" src="https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2019/11/portfolio_img_04.jpg" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" loading="lazy" srcset="https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2019/11/portfolio_img_04.jpg 400w, https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2019/11/portfolio_img_04-300x300.jpg 300w, https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2019/11/portfolio_img_04-150x150.jpg 150w" sizes="(max-width: 400px) 100vw, 400px" />
                                                         <div class="portfolio-text-holder">
                                                            <div class="portfolio-text-wrapper">
                                                               <p class="portfolio-text">Notebook</p>
                                                               <p class="portfolio-cat">Setup</p>
                                                            </div>
                                                         </div>
                                                      </a>
                                                   </div>
                                                </div>
                                                <div class="clear"></div>
                                             </div>
                                             <div class = "block more-posts-portfolio-holder"><span class = "more-posts-portfolio">LOAD MORE</span><span class = "more-posts-portfolio-loading">LOADING</span><span class = "no-more-posts-portfolio">NO MORE</span></div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-ff90d72" data-id="ff90d72" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                 <div class="elementor-column-wrap elementor-element-populated">
                                    <div class="elementor-widget-wrap">
                                       <div class="elementor-element elementor-element-57569195 elementor-widget elementor-widget-heading" data-id="57569195" data-element_type="widget" data-widget_type="heading.default">
                                          <div class="elementor-widget-container">
                                             <h2 class="elementor-heading-title elementor-size-default">Portfolio</h2>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </section>
                     <section class="elementor-section elementor-top-section elementor-element elementor-element-48198d00 op-section elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="48198d00" data-element_type="section" id="skills" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                        <div class="elementor-container elementor-column-gap-default">
                           <div class="elementor-row">
                              <div class="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-67f9096e" data-id="67f9096e" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                 <div class="elementor-column-wrap elementor-element-populated">
                                    <div class="elementor-widget-wrap">
                                       <div class="elementor-element elementor-element-51c9fb72 elementor-widget elementor-widget-coco-skills-lines" data-id="51c9fb72" data-element_type="widget" data-widget_type="coco-skills-lines.default">
                                          <div class="elementor-widget-container">
                                             <div class="skills-holder">
                                                <div class="skill-holder">
                                                   <div class="skill">
                                                      <div class="skill-text">PHOTOSHOP</div>
                                                      <div class="skill-fill" data-fill="62%"></div>
                                                   </div>
                                                   <div class="skill-num">62%</div>
                                                </div>
                                                <div class="skill-holder">
                                                   <div class="skill">
                                                      <div class="skill-text">ILLUSTRATOR</div>
                                                      <div class="skill-fill" data-fill="84%"></div>
                                                   </div>
                                                   <div class="skill-num">84%</div>
                                                </div>
                                                <div class="skill-holder">
                                                   <div class="skill">
                                                      <div class="skill-text">MARKETING</div>
                                                      <div class="skill-fill" data-fill="78%"></div>
                                                   </div>
                                                   <div class="skill-num">78%</div>
                                                </div>
                                                <div class="skill-holder">
                                                   <div class="skill">
                                                      <div class="skill-text">SUPER MARIO</div>
                                                      <div class="skill-fill" data-fill="92%"></div>
                                                   </div>
                                                   <div class="skill-num">92%</div>
                                                </div>
                                                <div class="skill-holder">
                                                   <div class="skill">
                                                      <div class="skill-text">FIGMA</div>
                                                      <div class="skill-fill" data-fill="85%"></div>
                                                   </div>
                                                   <div class="skill-num">85%</div>
                                                </div>
                                                <div class="skill-holder">
                                                   <div class="skill">
                                                      <div class="skill-text">DIGITAL PAINTING</div>
                                                      <div class="skill-fill" data-fill="69%"></div>
                                                   </div>
                                                   <div class="skill-num">69%</div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-696e0f2e" data-id="696e0f2e" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                 <div class="elementor-column-wrap elementor-element-populated">
                                    <div class="elementor-widget-wrap">
                                       <div class="elementor-element elementor-element-48629353 elementor-widget elementor-widget-heading" data-id="48629353" data-element_type="widget" data-widget_type="heading.default">
                                          <div class="elementor-widget-container">
                                             <h2 class="elementor-heading-title elementor-size-default">Skills​</h2>
                                          </div>
                                       </div>
                                       <div class="elementor-element elementor-element-1380b9f8 cocobasic-up-down elementor-widget__width-initial elementor-absolute elementor-widget elementor-widget-image" data-id="1380b9f8" data-element_type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="image.default">
                                          <div class="elementor-widget-container">
                                             <div class="elementor-image"> <img width="200" height="200" src="https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2020/08/circle.png" class="attachment-full size-full" alt="" loading="lazy" srcset="https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2020/08/circle.png 200w, https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2020/08/circle-150x150.png 150w" sizes="(max-width: 200px) 100vw, 200px" /></div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </section>
                     <section class="elementor-section elementor-top-section elementor-element elementor-element-5efece0a op-section elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="5efece0a" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                        <div class="elementor-container elementor-column-gap-default">
                           <div class="elementor-row">
                              <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-3bf8e8c5" data-id="3bf8e8c5" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                 <div class="elementor-column-wrap elementor-element-populated">
                                    <div class="elementor-widget-wrap">
                                       <div class="elementor-element elementor-element-1fa5932f elementor-widget elementor-widget-image" data-id="1fa5932f" data-element_type="widget" data-widget_type="image.default">
                                          <div class="elementor-widget-container">
                                             <div class="elementor-image"> <img width="400" height="360" src="https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2020/08/icon_preciese.png" class="attachment-full size-full" alt="" loading="lazy" srcset="https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2020/08/icon_preciese.png 400w, https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2020/08/icon_preciese-300x270.png 300w" sizes="(max-width: 400px) 100vw, 400px" /></div>
                                          </div>
                                       </div>
                                       <div class="elementor-element elementor-element-29d71208 elementor-widget elementor-widget-heading" data-id="29d71208" data-element_type="widget" data-widget_type="heading.default">
                                          <div class="elementor-widget-container">
                                             <div class="elementor-heading-title elementor-size-default">PIXEL PRECISE</div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-75748f10" data-id="75748f10" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                 <div class="elementor-column-wrap elementor-element-populated">
                                    <div class="elementor-widget-wrap">
                                       <div class="elementor-element elementor-element-42a1232c cocobasic-left-rigt elementor-widget__width-initial elementor-absolute elementor-widget elementor-widget-image" data-id="42a1232c" data-element_type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="image.default">
                                          <div class="elementor-widget-container">
                                             <div class="elementor-image"> <img width="310" height="70" src="https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2020/08/zigzag.png" class="attachment-full size-full" alt="" loading="lazy" srcset="https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2020/08/zigzag.png 310w, https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2020/08/zigzag-300x68.png 300w" sizes="(max-width: 310px) 100vw, 310px" /></div>
                                          </div>
                                       </div>
                                       <div class="elementor-element elementor-element-abf718c elementor-widget elementor-widget-image" data-id="abf718c" data-element_type="widget" data-widget_type="image.default">
                                          <div class="elementor-widget-container">
                                             <div class="elementor-image"> <img width="400" height="360" src="https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2020/08/icon_secure.png" class="attachment-full size-full" alt="" loading="lazy" srcset="https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2020/08/icon_secure.png 400w, https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2020/08/icon_secure-300x270.png 300w" sizes="(max-width: 400px) 100vw, 400px" /></div>
                                          </div>
                                       </div>
                                       <div class="elementor-element elementor-element-645fc856 elementor-widget elementor-widget-heading" data-id="645fc856" data-element_type="widget" data-widget_type="heading.default">
                                          <div class="elementor-widget-container">
                                             <div class="elementor-heading-title elementor-size-default">SECURE</div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-3785904d" data-id="3785904d" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                 <div class="elementor-column-wrap elementor-element-populated">
                                    <div class="elementor-widget-wrap">
                                       <div class="elementor-element elementor-element-e2c591c elementor-widget elementor-widget-image" data-id="e2c591c" data-element_type="widget" data-widget_type="image.default">
                                          <div class="elementor-widget-container">
                                             <div class="elementor-image"> <img width="400" height="360" src="https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2020/08/icon_responsive.png" class="attachment-full size-full" alt="" loading="lazy" srcset="https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2020/08/icon_responsive.png 400w, https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2020/08/icon_responsive-300x270.png 300w" sizes="(max-width: 400px) 100vw, 400px" /></div>
                                          </div>
                                       </div>
                                       <div class="elementor-element elementor-element-4a108d1e elementor-widget elementor-widget-heading" data-id="4a108d1e" data-element_type="widget" data-widget_type="heading.default">
                                          <div class="elementor-widget-container">
                                             <div class="elementor-heading-title elementor-size-default">RESPONSIVE</div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </section>
                     <section class="elementor-section elementor-top-section elementor-element elementor-element-4616d8f op-section elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="4616d8f" data-element_type="section" id="education" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                        <div class="elementor-container elementor-column-gap-default">
                           <div class="elementor-row">
                              <div class="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-483cd999" data-id="483cd999" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                 <div class="elementor-column-wrap elementor-element-populated">
                                    <div class="elementor-widget-wrap">
                                       <div class="elementor-element elementor-element-76b9110 elementor-widget elementor-widget-coco-timeline" data-id="76b9110" data-element_type="widget" data-widget_type="coco-timeline.default">
                                          <div class="elementor-widget-container">
                                             <ul class="timeline-holder">
                                                ${educations.map(
                                                    education => `
                                                    <li class="timeline-event">
                                                        <span class="timeline-circle"></span>
                                                        <div class="timeline-event-content">
                                                            <b title="Degree">${education.education.degree}</b> <br/> 
                                                            <span title="University/College">${education.education.university}</span><br/>
                                                            <span title="GPA">${education.education.gpa}</span><br/>
                                                        </div>
                                                        <div class="timeline-event-date" title="End date">
                                                            ${
                                                               education.education.end
                                                                  ? education.education.end
                                                                  : education.education.presentUniversity
                                                                  ? "Present"
                                                                  : ""
                                                            }
                                                        </div>
                                                    </li>
                                                    `
                                                ).join(`
`)}
                                             </ul>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-5cf8d351" data-id="5cf8d351" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                 <div class="elementor-column-wrap elementor-element-populated">
                                    <div class="elementor-widget-wrap">
                                       <div class="elementor-element elementor-element-1ff21d9b elementor-widget elementor-widget-heading" data-id="1ff21d9b" data-element_type="widget" data-widget_type="heading.default">
                                          <div class="elementor-widget-container">
                                             <h2 class="elementor-heading-title elementor-size-default">Education</h2>
                                          </div>
                                       </div>
                                       <div class="elementor-element elementor-element-705ff71b cocobasic-left-down-rigt-up elementor-widget__width-initial elementor-absolute elementor-widget elementor-widget-image" data-id="705ff71b" data-element_type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="image.default">
                                          <div class="elementor-widget-container">
                                             <div class="elementor-image"> <img width="214" height="164" src="https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2020/08/triangle.png" class="attachment-full size-full" alt="" loading="lazy" /></div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </section>
                     <section class="elementor-section elementor-top-section elementor-element elementor-element-46d2c91 op-section elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="46d2c91" data-element_type="section" id="facts" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                        <div class="elementor-container elementor-column-gap-default">
                           <div class="elementor-row">
                              <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-06271c5" data-id="06271c5" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                 <div class="elementor-column-wrap elementor-element-populated">
                                    <div class="elementor-widget-wrap">
                                       <div class="elementor-element elementor-element-3f38a91 elementor-widget elementor-widget-heading" data-id="3f38a91" data-element_type="widget" data-widget_type="heading.default">
                                          <div class="elementor-widget-container">
                                             <h2 class="elementor-heading-title elementor-size-default">Facts</h2>
                                          </div>
                                       </div>
                                       <div class="elementor-element elementor-element-971a1d5 cocobasic-left-down-rigt-up elementor-widget__width-initial elementor-absolute elementor-widget elementor-widget-image" data-id="971a1d5" data-element_type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="image.default">
                                          <div class="elementor-widget-container">
                                             <div class="elementor-image"> <img width="214" height="164" src="https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2020/08/triangle.png" class="attachment-full size-full" alt="" loading="lazy" /></div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-9cd6740" data-id="9cd6740" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                 <div class="elementor-column-wrap elementor-element-populated">
                                    <div class="elementor-widget-wrap">
                                       <div class="elementor-element elementor-element-866f96b elementor-widget elementor-widget-text-editor" data-id="866f96b" data-element_type="widget" data-widget_type="text-editor.default">
                                          <div class="elementor-widget-container">
                                             <div class="elementor-text-editor elementor-clearfix">
                                                <p>Dolor sit amet, consectetur adipiscing elit viverra tristique placerat in massa consectetur quisque nunc ac fames lorem ipsum dolormo</p>
                                             </div>
                                          </div>
                                       </div>
                                       <section class="elementor-section elementor-inner-section elementor-element elementor-element-3c96c5b elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="3c96c5b" data-element_type="section">
                                          <div class="elementor-container elementor-column-gap-default">
                                             <div class="elementor-row">
                                                <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-154ea2d" data-id="154ea2d" data-element_type="column">
                                                   <div class="elementor-column-wrap elementor-element-populated">
                                                      <div class="elementor-widget-wrap">
                                                         <div class="elementor-element elementor-element-923b4f2 elementor-view-default elementor-widget elementor-widget-icon" data-id="923b4f2" data-element_type="widget" data-widget_type="icon.default">
                                                            <div class="elementor-widget-container">
                                                               <div class="elementor-icon-wrapper">
                                                                  <div class="elementor-icon"> <i aria-hidden="true" class="fa fa-check"></i></div>
                                                               </div>
                                                            </div>
                                                         </div>
                                                         <div class="elementor-element elementor-element-87b2c09 elementor-widget elementor-widget-counter" data-id="87b2c09" data-element_type="widget" data-widget_type="counter.default">
                                                            <div class="elementor-widget-container">
                                                               <div class="elementor-counter">
                                                                  <div class="elementor-counter-number-wrapper"> <span class="elementor-counter-number-prefix"></span> <span class="elementor-counter-number" data-duration="2000" data-to-value="13" data-from-value="9" data-delimiter=",">9</span> <span class="elementor-counter-number-suffix"></span></div>
                                                                  <div class="elementor-counter-title">Cups of Coffee</div>
                                                               </div>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-8c3eaae" data-id="8c3eaae" data-element_type="column">
                                                   <div class="elementor-column-wrap elementor-element-populated">
                                                      <div class="elementor-widget-wrap">
                                                         <div class="elementor-element elementor-element-7eed9c5 elementor-view-default elementor-widget elementor-widget-icon" data-id="7eed9c5" data-element_type="widget" data-widget_type="icon.default">
                                                            <div class="elementor-widget-container">
                                                               <div class="elementor-icon-wrapper">
                                                                  <div class="elementor-icon"> <i aria-hidden="true" class="fa fa-check"></i></div>
                                                               </div>
                                                            </div>
                                                         </div>
                                                         <div class="elementor-element elementor-element-f40d9f2 elementor-widget elementor-widget-counter" data-id="f40d9f2" data-element_type="widget" data-widget_type="counter.default">
                                                            <div class="elementor-widget-container">
                                                               <div class="elementor-counter">
                                                                  <div class="elementor-counter-number-wrapper"> <span class="elementor-counter-number-prefix"></span> <span class="elementor-counter-number" data-duration="2000" data-to-value="250" data-from-value="200" data-delimiter=",">200</span> <span class="elementor-counter-number-suffix"></span></div>
                                                                  <div class="elementor-counter-title">GB Download</div>
                                                               </div>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </section>
                                       <section class="elementor-section elementor-inner-section elementor-element elementor-element-673b900 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="673b900" data-element_type="section">
                                          <div class="elementor-container elementor-column-gap-default">
                                             <div class="elementor-row">
                                                <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-c4dbc7e" data-id="c4dbc7e" data-element_type="column">
                                                   <div class="elementor-column-wrap elementor-element-populated">
                                                      <div class="elementor-widget-wrap">
                                                         <div class="elementor-element elementor-element-abe93a1 elementor-view-default elementor-widget elementor-widget-icon" data-id="abe93a1" data-element_type="widget" data-widget_type="icon.default">
                                                            <div class="elementor-widget-container">
                                                               <div class="elementor-icon-wrapper">
                                                                  <div class="elementor-icon"> <i aria-hidden="true" class="fa fa-check"></i></div>
                                                               </div>
                                                            </div>
                                                         </div>
                                                         <div class="elementor-element elementor-element-af5bd78 elementor-widget elementor-widget-counter" data-id="af5bd78" data-element_type="widget" data-widget_type="counter.default">
                                                            <div class="elementor-widget-container">
                                                               <div class="elementor-counter">
                                                                  <div class="elementor-counter-number-wrapper"> <span class="elementor-counter-number-prefix"></span> <span class="elementor-counter-number" data-duration="2000" data-to-value="3.3" data-from-value="2" data-delimiter=",">2</span> <span class="elementor-counter-number-suffix">K</span></div>
                                                                  <div class="elementor-counter-title">Lines of Code</div>
                                                               </div>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-3b6a4c7" data-id="3b6a4c7" data-element_type="column">
                                                   <div class="elementor-column-wrap elementor-element-populated">
                                                      <div class="elementor-widget-wrap">
                                                         <div class="elementor-element elementor-element-a32a5c6 elementor-view-default elementor-widget elementor-widget-icon" data-id="a32a5c6" data-element_type="widget" data-widget_type="icon.default">
                                                            <div class="elementor-widget-container">
                                                               <div class="elementor-icon-wrapper">
                                                                  <div class="elementor-icon"> <i aria-hidden="true" class="fa fa-check"></i></div>
                                                               </div>
                                                            </div>
                                                         </div>
                                                         <div class="elementor-element elementor-element-7311bfd elementor-widget elementor-widget-counter" data-id="7311bfd" data-element_type="widget" data-widget_type="counter.default">
                                                            <div class="elementor-widget-container">
                                                               <div class="elementor-counter">
                                                                  <div class="elementor-counter-number-wrapper"> <span class="elementor-counter-number-prefix"></span> <span class="elementor-counter-number" data-duration="2000" data-to-value="743" data-from-value="730" data-delimiter=",">730</span> <span class="elementor-counter-number-suffix"></span></div>
                                                                  <div class="elementor-counter-title">Photos  / Week</div>
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
                     </section>
                     <section class="elementor-section elementor-top-section elementor-element elementor-element-b93f393 op-section elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="b93f393" data-element_type="section" id="experience" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                        <div class="elementor-container elementor-column-gap-default">
                           <div class="elementor-row">
                              <div class="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-12ba158" data-id="12ba158" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                 <div class="elementor-column-wrap elementor-element-populated">
                                    <div class="elementor-widget-wrap">
                                       <div class="elementor-element elementor-element-ac823f1 elementor-widget elementor-widget-toggle" data-id="ac823f1" data-element_type="widget" data-widget_type="toggle.default">
                                          <div class="elementor-widget-container">
                                             <div class="elementor-toggle" role="tablist">
                                             ${experiences.map(
                                                experience => `
                                                <div class="elementor-toggle-item">
                                                   <div id="elementor-tab-title-1801" class="elementor-tab-title" data-tab="1" role="tab" aria-controls="elementor-tab-content-1801" aria-expanded="false"> 
													<span class="elementor-toggle-icon elementor-toggle-icon-right" aria-hidden="true"> 
														<span class="elementor-toggle-icon-closed"><i class="fa fa-caret-down"></i></span> 
														<span class="elementor-toggle-icon-opened"><i class="elementor-toggle-icon-opened fa fa-caret-up"></i></span> 
													</span> 
													<a href="" class="elementor-toggle-title" title="Role">${experience.experience.position}</a></div>
													<div id="elementor-tab-content-1801" class="elementor-tab-content elementor-clearfix" data-tab="1" role="tabpanel" aria-labelledby="elementor-tab-title-1801">
                                                      <p title="Company"><strong>${experience.experience.company}</strong></p>
													  <p><strong><span title="Start">${experience.experience.start}</span> &#8211; <span title="End">2014</span></strong></p>
                                                      <p title="Role Description">${experience.experience.desc}</p>
                                                   </div>
                                                </div>
                                             `).join(`
                                             `)}                     
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-fcc60c8" data-id="fcc60c8" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                 <div class="elementor-column-wrap elementor-element-populated">
                                    <div class="elementor-widget-wrap">
                                       <div class="elementor-element elementor-element-e119716 elementor-widget elementor-widget-heading" data-id="e119716" data-element_type="widget" data-widget_type="heading.default">
                                          <div class="elementor-widget-container">
                                             <h2 class="elementor-heading-title elementor-size-default">Experience</h2>
                                          </div>
                                       </div>
                                       <div class="elementor-element elementor-element-640cc2f cocobasic-up-down elementor-widget__width-initial elementor-absolute elementor-widget elementor-widget-image" data-id="640cc2f" data-element_type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="image.default">
                                          <div class="elementor-widget-container">
                                             <div class="elementor-image"> <img width="200" height="200" src="https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2020/08/circle.png" class="attachment-full size-full" alt="" loading="lazy" srcset="https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2020/08/circle.png 200w, https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2020/08/circle-150x150.png 150w" sizes="(max-width: 200px) 100vw, 200px" /></div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </section>
                     <section class="elementor-section elementor-top-section elementor-element elementor-element-da7ba6b op-section elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="da7ba6b" data-element_type="section" id="contact" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                        <div class="elementor-container elementor-column-gap-default">
                           <div class="elementor-row">
                              <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-78db0d70" data-id="78db0d70" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                 <div class="elementor-column-wrap elementor-element-populated">
                                    <div class="elementor-widget-wrap">
                                       <div class="elementor-element elementor-element-4cfc3491 elementor-widget elementor-widget-heading" data-id="4cfc3491" data-element_type="widget" data-widget_type="heading.default">
                                          <div class="elementor-widget-container">
                                             <h2 class="elementor-heading-title elementor-size-default">Contact</h2>
                                          </div>
                                       </div>
                                       <div class="elementor-element elementor-element-2a567e6 cocobasic-left-rigt elementor-widget__width-initial elementor-absolute elementor-widget elementor-widget-image" data-id="2a567e6" data-element_type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="image.default">
                                          <div class="elementor-widget-container">
                                             <div class="elementor-image"> <img width="310" height="70" src="https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2020/08/zigzag.png" class="attachment-full size-full" alt="" loading="lazy" srcset="https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2020/08/zigzag.png 310w, https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/uploads/2020/08/zigzag-300x68.png 300w" sizes="(max-width: 310px) 100vw, 310px" /></div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-359bfd64" data-id="359bfd64" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                 <div class="elementor-column-wrap elementor-element-populated">
                                    <div class="elementor-widget-wrap">
                                       <div class="elementor-element elementor-element-51c97412 elementor-widget elementor-widget-text-editor" data-id="51c97412" data-element_type="widget" data-widget_type="text-editor.default">
                                          <div class="elementor-widget-container">
                                             <div class="elementor-text-editor elementor-clearfix">
                                                <p>Dolor sit amet, consectetur adipiscing elit viverra tristique placerat in massa consectetur</p>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="elementor-element elementor-element-39c22072 elementor-widget elementor-widget-text-editor" data-id="39c22072" data-element_type="widget" data-widget_type="text-editor.default">
                                          <div class="elementor-widget-container">
                                             <div class="elementor-text-editor elementor-clearfix">
                                                <p>Faucibus sed tristique fames sed aliquet ultricies eget viverra arcu. Vitae faucibus diam consequat maecenas. Turpis metus sit diam purus leo in varius ac quam. Nunc amet tristique volutpat adipiscing vulputate phasellus. Volutpat faucibus praesent acolo.</p>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="elementor-element elementor-element-3cb74d82 elementor-widget elementor-widget-coco-contactform" data-id="3cb74d82" data-element_type="widget" data-widget_type="coco-contactform.default">
                                          <div class="elementor-widget-container">
                                             <div role="form" class="wpcf7" id="wpcf7-f336-p181-o1" lang="en-US" dir="ltr">
                                                <div class="screen-reader-response">
                                                   <p role="status" aria-live="polite" aria-atomic="true"></p>
                                                   <ul></ul>
                                                </div>
                                                <form action="/teoro-wp/demo-1/#wpcf7-f336-p181-o1" method="post" class="wpcf7-form init demo" novalidate="novalidate" data-status="init">
                                                   <div style="display: none;"> <input type="hidden" name="_wpcf7" value="336" /> <input type="hidden" name="_wpcf7_version" value="5.5.6" /> <input type="hidden" name="_wpcf7_locale" value="en_US" /> <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f336-p181-o1" /> <input type="hidden" name="_wpcf7_container_post" value="181" /> <input type="hidden" name="_wpcf7_posted_data_hash" value="" /></div>
                                                   <p class="relative"> <span class="wpcf7-form-control-wrap your-name"><input type="text" name="your-name" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" /></span> <span class="input-default-text">Name</span></p>
                                                   <p class="relative"> <span class="wpcf7-form-control-wrap your-email"><input type="email" name="your-email" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" /></span> <span class="input-default-text">Email</span></p>
                                                   <p class="relative"> <span class="wpcf7-form-control-wrap your-subject"><input type="text" name="your-subject" value="" size="40" class="wpcf7-form-control wpcf7-text" aria-invalid="false" /></span> <span class="input-default-text">Subject</span></p>
                                                   <p class="relative"> <span class="wpcf7-form-control-wrap your-message"><textarea name="your-message" cols="40" rows="10" class="wpcf7-form-control wpcf7-textarea" aria-invalid="false"></textarea></span> <span class="input-default-text">Message</span></p>
                                                   <p class="contact-submit-holder"><input type="submit" value="Send Message" class="wpcf7-form-control has-spinner wpcf7-submit" /></p>
                                                   <div class="wpcf7-response-output" aria-hidden="true"></div>
                                                </form>
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
      <footer class="footer center-relative">
         <div class="footer-content">
            <div data-elementor-type="page" data-elementor-id="479" class="elementor elementor-479" data-elementor-settings="[]">
               <div class="elementor-inner">
                  <div class="elementor-section-wrap">
                     <section class="elementor-section elementor-top-section elementor-element elementor-element-6ccd5ffe elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="6ccd5ffe" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                        <div class="elementor-container elementor-column-gap-default">
                           <div class="elementor-row">
                              <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-22899d50" data-id="22899d50" data-element_type="column">
                                 <div class="elementor-column-wrap elementor-element-populated">
                                    <div class="elementor-widget-wrap">
                                       <section class="elementor-section elementor-inner-section elementor-element elementor-element-30ee043c elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="30ee043c" data-element_type="section">
                                          <div class="elementor-container elementor-column-gap-default">
                                             <div class="elementor-row">
                                                <div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-768c551b" data-id="768c551b" data-element_type="column">
                                                   <div class="elementor-column-wrap elementor-element-populated">
                                                      <div class="elementor-widget-wrap">
                                                         <div class="elementor-element elementor-element-35526a elementor-widget__width-initial elementor-view-default elementor-widget elementor-widget-icon" data-id="35526a" data-element_type="widget" data-widget_type="icon.default">
                                                            <div class="elementor-widget-container">
                                                               <div class="elementor-icon-wrapper"> <a class="elementor-icon" href="#"> <i aria-hidden="true" class="fa fa-twitter"></i> </a></div>
                                                            </div>
                                                         </div>
                                                         <div class="elementor-element elementor-element-e55178 elementor-widget__width-initial elementor-view-default elementor-widget elementor-widget-icon" data-id="e55178" data-element_type="widget" data-widget_type="icon.default">
                                                            <div class="elementor-widget-container">
                                                               <div class="elementor-icon-wrapper"> <a class="elementor-icon" href="#"> <i aria-hidden="true" class="fa fa-facebook-square"></i> </a></div>
                                                            </div>
                                                         </div>
                                                         <div class="elementor-element elementor-element-312444eb elementor-widget__width-initial elementor-view-default elementor-widget elementor-widget-icon" data-id="312444eb" data-element_type="widget" data-widget_type="icon.default">
                                                            <div class="elementor-widget-container">
                                                               <div class="elementor-icon-wrapper"> <a class="elementor-icon" href="#"> <i aria-hidden="true" class="fa fa-dribbble"></i> </a></div>
                                                            </div>
                                                         </div>
                                                         <div class="elementor-element elementor-element-2089bfb8 elementor-widget__width-initial elementor-view-default elementor-widget elementor-widget-icon" data-id="2089bfb8" data-element_type="widget" data-widget_type="icon.default">
                                                            <div class="elementor-widget-container">
                                                               <div class="elementor-icon-wrapper"> <a class="elementor-icon" href="#"> <i aria-hidden="true" class="fa fa-rss"></i> </a></div>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </section>
                                       <div class="elementor-element elementor-element-6ef87128 elementor-widget elementor-widget-text-editor" data-id="6ef87128" data-element_type="widget" data-widget_type="text-editor.default">
                                          <div class="elementor-widget-container">
                                             <div class="elementor-text-editor elementor-clearfix"> © Mady by ${FullName} </div>
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
      </footer>
      <link rel='stylesheet' id='elementor-post-479-css'  href='https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/cache/autoptimize/css/autoptimize_single_c95b0d32aba80ca544fecae105a1d512.css' type='text/css' media='all' />
      <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
	  <script type='text/javascript' id='cocobasic-elementor-main-js-js-extra'>
		var ajax_var_portfolio_content = {"url":"https:\/\/demo.cocobasic.com\/teoro-wp\/demo-1\/wp-admin\/admin-ajax.php","nonce":"fab5baedcb"};
        var ajax_var_portfolio = {"url":"https:\/\/demo.cocobasic.com\/teoro-wp\/demo-1\/wp-admin\/admin-ajax.php","nonce":"6903b3c93c","total":"6"};
      </script> 
	  <script type='text/javascript' src='https://demo.cocobasic.com/teoro-wp/demo-1/wp-includes/js/dist/vendor/regenerator-runtime.min.js' id='regenerator-runtime-js'></script> 
	  <script type='text/javascript' src='https://demo.cocobasic.com/teoro-wp/demo-1/wp-includes/js/dist/vendor/wp-polyfill.min.js' id='wp-polyfill-js'></script> 
	  <script type='text/javascript' id='contact-form-7-js-extra'>
		var wpcf7 = {"api":{"root":"https:\/\/demo.cocobasic.com\/teoro-wp\/demo-1\/wp-json\/","namespace":"contact-form-7\/v1"}};
	  </script> 
	  <script type='text/javascript' id='cocobasic-main-js-extra'>
		var ajax_var = {"url":"https:\/\/demo.cocobasic.com\/teoro-wp\/demo-1\/wp-admin\/admin-ajax.php","nonce":"4cf2dc791a","posts_per_page_index":"10","total_index":"4","num_pages_index":"1","webUrl":"https:\/\/demo.cocobasic.com\/teoro-wp\/demo-1"};
	  </script> 
	  <script type='text/javascript' id='elementor-frontend-js-before'>
		var elementorFrontendConfig = {"environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":false},"i18n":{"shareOnFacebook":"Share on Facebook","shareOnTwitter":"Share on Twitter","pinIt":"Pin it","download":"Download","downloadImage":"Download image","fullscreen":"Fullscreen","zoom":"Zoom","share":"Share","playVideo":"Play Video","previous":"Previous","next":"Next","close":"Close"},"is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":768,"lg":1025,"xl":1440,"xxl":1600},"responsive":{"breakpoints":{"mobile":{"label":"Mobile","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobile Extra","value":880,"default_value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Tablet","value":1024,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet Extra","value":1200,"default_value":1200,"direction":"max","is_enabled":false},"laptop":{"label":"Laptop","value":1366,"default_value":1366,"direction":"max","is_enabled":false},"widescreen":{"label":"Widescreen","value":2400,"default_value":2400,"direction":"min","is_enabled":false}}},"version":"3.5.5","is_static":false,"experimentalFeatures":{"e_import_export":true,"e_hidden_wordpress_widgets":true,"landing-pages":true,"elements-color-picker":true,"favorite-widgets":true,"admin-top-bar":true},"urls":{"assets":"https:\/\/demo.cocobasic.com\/teoro-wp\/demo-1\/wp-content\/plugins\/elementor\/assets\/"},"settings":{"page":[],"editorPreferences":[]},"kit":{"global_image_lightbox":"yes","active_breakpoints":["viewport_mobile","viewport_tablet"],"lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description"},"post":{"id":181,"title":"Teoro%20%E2%80%93%20One%20Page%20CV%20Resume%20WordPress%20Theme","excerpt":"","featuredImage":false}};
	  </script> 
	  <script defer src="https://demo.cocobasic.com/teoro-wp/demo-1/wp-content/cache/autoptimize/js/autoptimize_89a8cef1fbcce7195f3f871fbf1a4932.js"></script>
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
