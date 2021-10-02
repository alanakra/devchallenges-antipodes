$(document).ready(() => {

 $('.nav-responsive').hide();
 $('.close').hide();
 
 $('.menu').on('click', () => {
   $('main').toggle();
   $('.nav-responsive').toggle();
   $('.close').toggle();
   $('.menu-icon').toggle();
   $('footer').toggle();
 })
})