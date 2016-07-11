// Run function once document has been loaded
  $(function(){
  		//home page
      $("#typed").typed({
        strings: ["^1000 Design and Development solutions."],
        typeSpeed: 0
      });

      //Contact page
      $("#contactText").typed({
      	strings: ["^1000 Lets work together.", "Contact Us today to get started!"],
      	typeSpeed: 0
      });

      //portfolio page
      $("#portfolio-intro").typed({
        strings: ["^1000 Have a look at my previous projects."],
        typedSpeed: 0
      });



  });



//// Scroll navbar effect
//$(window).scroll(function() {
//     if ($(document).scrollTop() > 550) {
//    $('header div').addClass('shrink');
//  } else {
//    $('header div').removeClass('shrink');
//  }
//});


//Lightbox Gallery

//Create DOM elements to be added
var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $video = $('<video controls src=""/>');
var $caption = $('<p class="overlay-caption"></p>');
var $external = $('<a href="#" target="_blank"><i class="fa fa-external-link fa-3x" aria-hidden="true"></i></a>');
var $github = $('<a href="#" target="_blank"><i class="fa fa-github overlay-github fa-3x" aria-hidden="true"></i></a>');
var $icons = $('<div></div>');


function appendImage() {
//append image within overlay
$overlay.append($image);
//append caption onto overlay underneath image
$overlay.append($caption);
//append overlay dom element as a child of body
$('body').append($overlay);

//add click listener to images
$('#imageGallery img').on('click', function(event) {

  //Store current images link href attribute 
  var imgLocation = $(this).attr('src');

  //hide any video or icons and only show image
  $video.hide();

  $image.show();

  $icons.hide();

  //prevent default click action
  event.preventDefault();

  //get image attribute value
  var captionText = $(this).attr('alt');

  //append value from alt attribute into the $caption 
  $caption.text(captionText);

  $image.attr('src', imgLocation);

  $overlay.show();
});

}

function appendVideo() {

  // // if overlay has image remove it
  // $overlay.children($image) ? $overlay.remove($image) : $overlay.append($image);

    //append overlay to body
    $overlay.append($video);

    //append icon links to icons div
    $icons.append($external);
    $icons.append($github);

    //append icons div and links to overlay
    $overlay.append($icons);

    //append caption under icons div
    $overlay.append($caption);


//Video click event
$('#imageGallery video').on('click', function(event) {

    //show video and icons
    $video.show();

    $icons.show();

    //get caption text from sibling element and store in a variable
     var captionText = event.target.parentNode.nextElementSibling.textContent;

     //store href value
     var projectLink = event.target.parentNode.getAttribute('href');


     //set github href value upon what the event.targets href value is
     if (projectLink === "http://cperry24.github.io/arcade-game/") {
        $github.attr('href', 'https://github.com/cperry24/arcade-game' )
     } else if (projectLink === "http://cperry24.github.io/interactive-map/") {
        $github.attr('href', 'https://github.com/cperry24/interactive-map');
     } else {
      $github.attr('href', 'https://github.com/cperry24/todo-app');
     }



     //update href value with event.targets href
    $external.attr('href', projectLink);

     //update text of caption
    $caption.text(captionText);

    //prevent link taking you to a new page
    event.preventDefault();

    $image.hide();
    //get src attributes value
    var videoLocation = $(this).attr('src');

    //set src attributes value
    $video.attr('src', videoLocation);

    $('body').append($overlay);

    $overlay.show();
});

}

//Call to enable overlay on images
appendImage();

//Call to enable overlay for videos
appendVideo();


//When overlay is clicked, hide the overlay
$overlay.on('click', function() {
  $(this).hide();
});





