







function animateFrom(elem, direction) {
    direction = direction | 1;
    
    var x = 0,
        y = direction * 100;
    if(elem.classList.contains("gs_reveal_fromLeft")) {
      x = -100;
      y = 0;
    } else if(elem.classList.contains("gs_reveal_fromRight")) {
      x = 100;
      y = 0;
    }
    gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
      duration: 1.25, 
      x: 0,
      y: 0, 
      autoAlpha: 1, 
      ease: "expo", 
      overwrite: "auto"
    });
  }
  
  function hide(elem) {
    gsap.set(elem, {autoAlpha: 0});
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
      hide(elem); // assure that the element is hidden when scrolled into view
      
      ScrollTrigger.create({
        trigger: elem,
        onEnter: function() { animateFrom(elem) }, 
        onEnterBack: function() { animateFrom(elem, -1) },
        onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
      });
    });
  });

  
  //menu
  window.onload = function(){
    const menuBtn = document.getElementsByClassName('menuBtn')[0];
    const menuT = document.getElementsByClassName('menuT')[0];
    const menu1 = document.getElementsByClassName('menu1')[0];
    const menu2 = document.getElementsByClassName('menu2')[0];
    const sMenuBg = document.getElementsByClassName('sMenuBg')[0];
    const sMenuUnit1 = document.getElementsByClassName('sMenuUnit1')[0];
    const sMenuUnit2 = document.getElementsByClassName('sMenuUnit2')[0];
    const sMenuUnit3 = document.getElementsByClassName('sMenuUnit3')[0];
    const sMenuUnit4 = document.getElementsByClassName('sMenuUnit4')[0];
    const sMenuUnit5 = document.getElementsByClassName('sMenuUnit5')[0];
    const sMenuUnit6 = document.getElementsByClassName('sMenuUnit6')[0];

    menuBtn.addEventListener('click', function(){
    menuT.classList.add('menuTgo');
    menu1.classList.add('menu1go');
    menu2.classList.add('menu2go');
    sMenuBg.classList.add('block');
    sMenuUnit1.classList.add('sMenuUnit1go');
    sMenuUnit2.classList.add('sMenuUnit2go');
    sMenuUnit3.classList.add('sMenuUnit3go');
    sMenuUnit4.classList.add('sMenuUnit4go');
    sMenuUnit5.classList.add('sMenuUnit5go');
    sMenuUnit6.classList.add('sMenuUnit6go');
    });

    sMenuUnit6.addEventListener('click', function(){
    sMenuBg.classList.remove('block');
    menuT.classList.remove('menuTgo');
    menu1.classList.remove('menu1go');
    menu2.classList.remove('menu2go');
    });
}



 

