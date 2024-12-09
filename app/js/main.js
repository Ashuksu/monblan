$(function () {

   $('.product__filter-btn--list').on('click', function () {
      $('.product').addClass('product--list');
      $('.product__filter-btn--list').addClass('product__filter-btn--active');
      $('.product__filter-btn--large').removeClass('product__filter-btn--active');
   });

   $('.product__filter-btn--large').on('click', function () {
      $('.product').removeClass('product--list');
      $('.product__filter-btn--large').addClass('product__filter-btn--active');
      $('.product__filter-btn--list').removeClass('product__filter-btn--active');
   });

   // * --------------------------------------------------------

   // $('input, select').styler();

   $('input').datepicker(
      {
         // inline: true,
         // clearButton: true,




         language: {
            days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            today: 'Today',
            clear: 'Clear',
            dateFormat: 'mm-dd-yyyy',
            timeFormat: 'hh:ii aa',
            firstDay: 0


         }
      }
   )



   // $('input').data('datepicker')


   // * --------------------------------------------------------

   $(".product__item").addClass("wow flipInX");
   $(".header__logo").addClass("wow fadeInLeft");
   $(".header__box").addClass("wow fadeInRight");
   $(".product__filter-btn").addClass("wow fadeInLeftBig");
   $(".product__link").addClass("wow headShake");


   new WOW().init();

});
