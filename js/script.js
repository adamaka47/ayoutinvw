"use strict";$(".license-slider").slick({slidesToShow:3,arrows:!1,dots:!1,responsive:[{breakpoint:481,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".btn-prev").on("click",function(){$(".license-slider").slick("slickPrev")}),$(".btn-next").on("click",function(){$(".license-slider").slick("slickNext")}),$('[data-fancy="license"]').fancybox({});