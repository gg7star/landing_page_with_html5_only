----------------------------
CONTENT OF THIS FILE
----------------------------

 * Theme Info
 * Pages Provided
 * Key Features
 * Customisation
 * Credits
 * Issues & bug reporting
 * Stay up-to-date


----------------------------
THEME INFO
----------------------------

Name: Snart
Version 1.0
Released: June 2013
Creator: http://themelize.me
Bootstrap version: 2.3.1


----------------------------
PAGES PROVIDED (9)
----------------------------

* Index/options page (index.htm)
* iPhone portrait with image (iphone-portrait-image.htm)
* iPad mini with image (ipad-mini-image.htm)
* iPad portrait with image (ipad-portrait-image.htm)
* iPhone portrait with slideshow (iphone-portrait-slideshow.htm)
* iPad mini with slideshow (ipad-mini-slideshow.htm)
* iPad portrait with slideshow (ipad-portrait-slideshow.htm)
* iPhone portrait with video-popup (iphone-portrait-video-popup.htm)
* iPad mini with video-popup (ipad-mini-video-popup.htm)
* iPad portrait with video-popup (ipad-portrait-video-popup.htm)

More to come very soon, please email info@themelize.me to request template variations.


--------------------------
KEY FEATURES
--------------------------

* Super flexible to suite your needs
* Stunning retina display via Retina JS (images & backgrounds)
* Fully responsive (wide, normal, narrow, mobile)
* 8 different coming soon page variations
* 3 different product displays (iPhone, iPad Mini, iPad, more coming soon…..)
* 3 different media displays (static image, video popup & slideshow)
* Easy to customise
* Built on Bootstrap 2.3.1
* Font Awesome icons
* jQuery Countdown plugin
* jQuery Flexslider plugin
* jQuery Magnific Popup plugin
* Simple & clean design
* Valid HTML5
* 2 preset colour skins
* 3 different backgrounds in 2 different colours, psd file included
* Google font (Open Sans)


--------------------------
CUSTOMISATION
--------------------------

1. Using Predefined Colour Skins & Backgrounds
----------------------------------------------------
The theme offers 2 predefined colour schemes (Blue which is default & wine) as examples for your own customisation as well as 3 predefined header background images for which the Photoshop file (.psd) is provided in the img/_assets folder.

Available colour classes (just add to the body class of the page ie. <body class="wine">):
1. blue
2. wine

Available background classes (just add class to the tag with the ID header  ie. <div id="header" class="tracks">):
1. lights
2. tracks
3. face

A jQuery "style switcher" widget is provide on all pages so you can see what the different colours & backgrounds look like.

NOTE: 
The "switcher" ID tag & "data-demo-" attributes on the body & header div are only required if you want the jQuery style switcher to be functional.
Quickest way to hide the colour switcher is to add #switcher { display: none; } to your CSS.


2. Adding Custom CSS Code, Colours & Backgrounds
----------------------------------------------------
Don't like our colours or backgrounds? Add your own!

Like all Themelize.me themes Snart offers and automatically loads a skeleton file called "custom-style.css" which should be used to override the theme structure, colours & media queries.
This file is found within the /css directory and is well commented to provide instruction.

NOTE: We highly recommend putting all your custom CSS code into this "custom-style.css" file to make future theme updates easy & simple without overwriting your own code.

For colour customisation examples see: css/theme-schemes.css file
For header background customisation the Photoshop file called backgrounds.psd is provided in img/_assets folder.


3. Product Image Overlay & Background Images Sizes
----------------------------------------------------
Snart keeps the product background & overlay image or slideshow separate to make them easy to update and customise. We've done all the CSS positioning & media queries for you so all you need to do is following our image size requirements for your own image overlays and nothing more.

* iPhone:    225px wide X 400px high
* iPad Mini: 310px wide X 410px high
* iPad:      320px wide X 420px high
This applies to static images & slideshows. See img/screenshots folder for examples.


* Header background Images: 1400px wide X 492px high 
This is only a guide you can use your own sizes. See img/backgrounds folder for examples.

 
4. Retina Images
----------------------------------------------------
Snart is retina (High Definition) ready and all images provided with the theme are also offered with a retina version.
To make your own images retina ready you just need to think double sized & appended @2x to the filename.

Here's an example using the iPad Mini image overlay:
* Standard definition size:     310px wide X 410px high
* High definition size:         620px wide X 820px high
* Standard definition filename: my-ipad-mini-image.jpg
* High definition filename:     my-ipad-mini-image@2x.jpg

For header background images:
* Standard definition size:     1400px wide X 492px high
* High definition size:         2800px wide X 984px high
* Standard definition filename: my-background-image.jpg
* High definition filename:     my-background-image@2x.jpg

Place both images in the same directory and the Retinajs plugin will automatically swap in the high definition version on device which support retina display.
NOTE: This is totally optional, if the plugin does not find a retina version of any images, the standard definition image is left.


5. Video Popups
----------------------------------------------------
Snart supports youTube & Vimeo video popups which are triggered when a users clicks on an image overlay. 
See all .htm files ending in "-video-popup.htm" for examples & the plugin documentation http://dimsemenov.com/plugins/magnific-popup/.


6. Slideshows
----------------------------------------------------
As well as static images & video popups Snart supports slideshow overlays using the Flexslider plugin. You need to follow the same image dimensions listed in points 2 & 3 below.
See all .htm files ending in "-slideshow.htm" for examples & the plugin documentation http://www.woothemes.com/flexslider/.


7. The Countdown Timer
----------------------------------------------------
The date the countdown timer counts down to can easily be customised the "data-countdown-date" attribute on the "count-down" div. Example format: 2014/02/09

The can optionally display some HTML once the countdown is complete as well:
1. On the 'id="count-down"' div add data-countdown-hide-oncomplete="true"
2. Within the "id="count-down"" div simply place another div with the class "count-down-complete" which will contain the HTML you wish to show when the countdown is complete.

NOTE: The count-down-complete HTML is only hidden with CSS so it's not secure to hide anything sensitive. 


--------------------------
CREDITS
--------------------------

* Product Images & 1 iPhone overlay: http://pixeden.com
* Original Header Background images: http://www.flickr.com/photos/50424679@N00/


--------------------------
ISSUES & BUG REPORTING
--------------------------

If you run into issues or find a bug which is not related to Bootstrap itself then please report the bug to us at info@themelize.me


--------------------------
STAY UP-TO-DATE
--------------------------
Join our mailing list at http://themelize.me to stay up-to-date with all our product launches & updates.
