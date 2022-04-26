/*--- loader and nav start ---*/
$(document).ready(function () {
  // new wow.js
  new WOW().init();
  /// setting different screen
  var viewport_change = $(window).width((index, width) => {
      if (width < 992) {
          $(".navbar").addClass("scroll-background");

      }
      else {
          $(window).scroll(function () {
              var sc = $(window).scrollTop();
              if (sc > 300) {
                  $(".navbar").addClass("scroll-background");
              }
              else {
                  $('.navbar').removeClass("scroll-background");
              }
          });
      }
  })
});
/*LOADER*/
/*The '$(window).load(function ()' event is removed from jQuery 3.0. Instead , use "on" method*/
$(window).on('load', function () {
  $('.loading_container').fadeOut("slow");
});
  /*-- Components START--*/
  /*Navs*/
    var navs = {
      createNavEle: function () {
        var data = {
          option1: "ABOUT",
          option2: "TEAM",
          option3: "ROADMAP",
          option4: "RARITY",
          option5: "FAQ"
        };
        var el = `
        <div class="container-fluid nav-outter-wrapper b1w">
        <a class="navbar-brand" href="index.html">
            <img class="brand-logo" src="img/logo/logo_02c.png">
            <img class="scroll-logo" src="img/logo/logo_c.png">
        </a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
            data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item pr-3">
                  <a class="nav-link" href="#about">${data.option1}</a>
                </li>
                <li class="nav-item pr-3">
                  <a class="nav-link" href="#team">${data.option2}</a>
                </li>
                <li class="nav-item pr-3">
                  <a class="nav-link" href="#roadmap">${data.option3}</a>
                </li>
                <li class="nav-item pr-3">
                  <a class="nav-link" href="#rarity">${data.option4}</a>
                </li>
                <!--<li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" data-toggle="dropdown" aria-expand="true"
                    href="javascript:void(0);">${data.option4}</a>
                  <ul class="dropdown-menu">
                    <li class="nav-item">
                      <a class="nav-link text-secondary text-justify" href="member_pi.html">PI</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-secondary text-justify" href="member.html">STUDENTS</a>
                    </li>
                  </ul>
                </li>-->
                <li class="nav-item pr-3">
                    <a class="nav-link" href="#faq">${data.option5}</a>
                  </li>
                  <!--<li class="nav-item dropdown">
                  <a class="nav-link" href="research.html">${data.option6}</a>
                  <a class="nav-link dropdown-toggle" data-toggle="dropdown" aria-expand="true" href="javascript:void(0);">Research</a>
                  <ul class="dropdown-menu">
                    <li class="nav-item">
                      <a class="nav-link text-secondary text-justify" href="Neurobiology.html">Neurobiology</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-secondary text-justify" href="javascript:void(0);">iPSC</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-secondary text-justify" href="javascript:void(0);">Retinal Organoid</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-secondary text-justify" href="javascript:void(0);">RGC Regeneration</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-secondary text-justify" href="javascript:void(0);">Retinal Prosthesis</a>
                    </li>
                  </ul>-->
      
                </li>

                <!-- Social Networks Icons for future-->
                <!--  
                <li class="nav-item pt-1">
                <span class="social-media-icon line-icon"><a href="javascript:void(0);" target="_blank"><i class="fab fa-line"></i></a></span>
                </li>
                <li class="nav-item pt-1">
                    <span class="social-media-icon fb-icon"><a href="http://www.ach-studio.com//" target="_blank"><i class="fab fa-facebook-square"></i></a></span>
                </li>
                <li class="nav-item">
                    <div id="likebox-wrapper">
                        <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fjosieting090828&width=41&layout=box_count&action=like&size=small&show_faces=false&share=false&height=65&appId" width="41" height="41" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
                    </div>
                </li>
                <form class="form-inline i">
                  <input class="" type="search" placeholder="">
                </form>-->
            </ul>
        </div>

    </div>`;
        var $object = $(el);
        $("#index-nav").append($object);
        //return $object;
      }
    };
    $(function () {
      navs.createNavEle();
    });
    var footer = {
      createFooterEle:function(){
        var data = {
          research1: "Sensorimotor integration",
          research2: "Decision Making",
          research3: "Neural circuitry",
          research4: "Neural development",
          research5: "Cephalopod neuroethology",
          lab1: "RESEARCH",
          lab2: "PUBLICATIONS",
          lab3: "PUBLICATIONS",
          lab4: "PUBLICATIONS",
          lab5: "PUBLICATIONS"
        };
        var el = `<div class="container p-5">
        <div class="row">
          <!-- Footer Links -->
          <div class="container-fluid text-center text-md-left">
            <div class="row">
              <div class="col-md-6 mt-md-0 mt-3">
                <!-- Content -->
                <h5 class="text-uppercase text-white">ABOUT US</h5>
                <p class="underline d-none d-lg-block d-xl-block"></p>
                <div class="text-wrapper col-md-10 px-0">
                  <!-- <a href="javascript:void(0);" class="icon px-1 c3" target="_blank"><i
                      class="fab fa-2x fa-facebook-square"></i></a>
                  <a href="javascript:void(0);" class="icon px-1 c3" target="_blank"><i class="fab fa-2x fa-line"></i></a> -->
                  <p class="c3 text-justify s14 py-3">We are interested in all aspects of visual neuroscience, from cell biology to animal behavior.
                    There are two research fields in the lab, including retinal neurobiology and cephalopod neuroethology.
                    We welcome anyone interested in studying retina and cephalopod to join us.</p>
  
                </div>
              </div>
              <hr class="clearfix w-100 d-md-none pb-3">
              <div class="col-md-3 mb-md-0 mb-3">
                <!-- Links -->
                <h5 class="text-uppercase text-white">Research</h5>
  
                <ul class="list-unstyled">
                  <p class="underline d-none d-lg-block d-xl-block"></p>
                  <li>
                    <a class="s14" href="research.html">${data.research1}</a>
                  </li>
                  <li>
                    <a class="s14" href="research.html">${data.research2}</a>
                  </li>
                  <li>
                    <a class="s14" href="research.html">${data.research3}</a>
                  </li>
                  <li>
                    <a class="s14" href="research.html">${data.research4}</a>
                  </li>
                  <li>
                    <a class="s14" href="research.html">${data.research5}</a>
                  </li>
                </ul>
              </div>
              <div class="col-md-3 mb-md-0 mb-3">
                <!-- Links -->
                <h5 class="text-uppercase text-white">Lab Related</h5>
                <ul class="list-unstyled">
                  <p class="underline d-none d-lg-block d-xl-block"></p>
                  <li>
                    <a class="s14" href="lab.html">Lab</a>
                  </li>
                  <li>
                    <a class="s14" href="member.html">Members</a>
                  </li>
                  <li>
                    <a class="s14" href="news.html">News</a>
                  </li>
                  <li>
                    <a class="s14" href="courses.html">Courses</a>
                  </li>
                  <li>
                    <a class="s14" href="publications.html">Publications</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- Footer Links -->
        </div>
      </div>
      <!-- footer opyright -->
      <div id="copyright">
        <div class="container-fluid">
          <div class="copyright-wrapper row">
            <div class="copyright col-12">
              <p class="copyright mb-0">© 2022 Hanzi Cool. <!--<a
                  href="mailto:chronoschou1101@gmail.com">TERMS & CONDITION</a>--></p>
            </div>
          </div>
        </div>
      </div>
      <!-- //copyright -->`;
        var $object = $(el);
        $("#i-footer").append($object);
        //return $object;
      }
    };
    $(function () {
      footer.createFooterEle();
    });
  /*-- Components END--*/
  /* image hover*/
  $("figure").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );



    /* here stars scrolling icon */

      $(document).ready(function() {
        /*
          var defaults = {
          containerID: 'toTop', // fading element id
          containerHoverID: 'toTopHover', // fading element hover id
          scrollSpeed: 1200,
          easingType: 'linear' 
          };
        */
                  
        $().UItoTop({ easingType: 'easeOutQuart' });
                  
        });

     //here ends scrolling icon
     
  //for smooth scrolling
  /*scrolling script */
  /*scrolli to top */
    jQuery(document).ready(function($) {
      $(".scroll").click(function(event){   
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
      });
    });
/*scrolli to section */
$(function() {
  // This will select everything with the class smoothScroll
  // This should prevent problems with carousel, scrollspy, etc...
  $('.smoothScroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  });
});

 //scrolling script

// /*accordion*/
//     var acc = document.getElementsByClassName("accordion");
//     var i;
//     for (i = 0; i < acc.length; i++) {
//       acc[i].addEventListener("click", function () {
//         this.classList.toggle("active");
//         var panel = this.nextElementSibling;
//         if (panel.style.maxHeight) {
//           panel.style.maxHeight = null;
//         } else {
//           panel.style.maxHeight = panel.scrollHeight + "px";
//         }
//       });
//     }

//-------------------------------------//
// init Masonry

// var $grid = $('.grid').masonry({
//   itemSelector: 'none', // select none at first
//   columnWidth: '.grid__col-sizer',
//   gutter: '.grid__gutter-sizer',
//   percentPosition: true,
//   stagger: 30,
//   // nicer reveal transition
//   visibleStyle: { transform: 'translateY(0)', opacity: 1 },
//   hiddenStyle: { transform: 'translateY(100px)', opacity: 0 },
// });

// get Masonry instance
// var msnry = $grid.data('masonry');

// // initial items reveal
// $grid.imagesLoaded( function() {
//   $grid.removeClass('are-images-unloaded');
//   $grid.masonry( 'option', { itemSelector: '.grid__item' });
//   var $items = $grid.find('.grid__item');
//   $grid.masonry( 'appended', $items );
// });

//-------------------------------------//
// hack CodePen to load pens as pages

var nextPenSlugs = [
  '202252c2f5f192688dada252913ccf13',
  'a308f05af22690139e9a2bc655bfe3ee',
  '6c9ff23039157ee37b3ab982245eef28',
];

function getPenPath() {
  var slug = nextPenSlugs[ this.loadCount ];
  if ( slug ) {
    return 'https://s.codepen.io/desandro/debug/' + slug;
  }
}

//-------------------------------------//
// init Infinte Scroll

// $grid.infiniteScroll({
//   path: getPenPath,
//   append: '.grid__item',
//   outlayer: msnry,
//   status: '.page-load-status',
// });

//    /*Initialize imagesLoaded with jQuery,Detect if images have all been loaded.*/ 
//    $(function(){
//     $('#container').imagesLoaded()
//   .always( function( instance ) {
//     console.log('all images loaded');
//   })
//   .done( function( instance ) {
//     console.log('all images successfully loaded');
//   })
//   .fail( function() {
//     console.log('all images loaded, at least one is broken');
//   })
//   .progress( function( instance, image ) {
//     var result = image.isLoaded ? 'loaded' : 'broken';
//     console.log( 'image is ' + result + ' for ' + image.img.src );
//   });
// });
