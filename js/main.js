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

  });




//Lightbox Gallery

//Create DOM elements to be added
var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $video = $('<video controls src=""/>');



function appendImage() {
//append image within overlay
$overlay.append($image);

//append overlay dom element as a child of body
$('body').append($overlay);

//add click listener to images
$('#imageGallery img').on('click', function(event) {

  //Store current images link href attribute 
  var imgLocation = $(this).attr('src');

  //prevent default click action
  event.preventDefault();

  $image.attr('src', imgLocation);

  $overlay.show();
});

}



function appendVideo() {
//Video click event
$('#imageGallery video').on('click', function(event) {
    //prevent link taking you to a new page
    event.preventDefault();

    //remove image from body when clicked
    $image.remove();

    //get src attributes value
    var videoLocation = $(this).attr('src');

    //set src attributes value
    $video.attr('src', videoLocation);

    //append overlay to body
    $overlay.append($video);
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