

const Header = () => {
    const burger =   document.querySelector('.header__burger');
    const menu =  document.querySelector('.menu');
    const info = document.createElement('div');

    burger.addEventListener('click', function (event) {
        menu.classList.add("menu-active");
        info.classList.add("header__info", "info");
        info.innerHTML = "<a class='info_phone' href='#!'>+7(000) 123 45 65</a><div class='info_search '><input type='text' placeholder='Поиск' /><svg> <use xlink:href='/assets/img/sprite.svg#search'></use></svg><input type='submit'/></div>"
        menu.append(info);
        function activeInfo() {
            info.classList.add("info-active")
        }
        setTimeout(activeInfo, 200);
        document.querySelector("body").classList.add("lock");
    });

// --------------------------

    document.querySelector('.header__close').addEventListener('click', function (event) {
        menu.classList.remove("menu-active");
        menu.querySelector('.info').remove();
        info.classList.remove("info-active");
        document.querySelector('body').classList.remove("lock");
    });

// --------------------------

    window.addEventListener("scroll", function (event) {
        if (window.pageYOffset > 100) {
            document.querySelector(
                ".header"
            ).classList.add("responciveHeader");

        } else {
            document.querySelector(".header").classList.remove("responciveHeader");
        }
    });

// ---------------------------------------------
    window.onresize = function () {
        if (window.innerWidth >= 999) {
            if(menu.querySelector('.header__info')){
                menu.querySelector('.header__info').remove();
            }

            menu.classList.remove("menu-active");
            document.querySelector('.info').classList.remove("info-active");
            document.querySelector('body').classList.remove("lock");
        }
    }

};

document.addEventListener('DOMContentLoaded', function(){
    Header();
});




// $(document).ready(function (e) {

// $(".header__burger").on("click", function () {

//   $(".menu")
//     .addClass("menu-active")
//     .append(
//       $(
//         "<div class='header__info info'><a class='info_phone' href='#!'>+7(000) 123 45 65</a><div class='info_search '><input type='text' placeholder='Поиск' /><svg> <use xlink:href='/assets/img/sprite.svg#search'></use></svg><input type='submit'/></div></div>"
//       )
//     );

//     setTimeout(function () {
//       $(".info").addClass("info-active");
//     }, 200);

//   $("body").addClass("lock");
// });




// $(".header__close").on("click", function () {
// $(".menu")
//   .removeClass("menu-active")
//   .find(".header__info")
//   .remove();
//   $(".info").removeClass("info-active");
// $("body").removeClass("lock");
//   });

// });



// ----- header меняется в размерах и цвете
//    window.addEventListener("scroll", function (event) {
//      if (window.pageYOffset > 100) {
//        document.querySelector(
//          ".header"
//        ).classList.add("responciveHeader");

//      } else {
//        document.querySelector(".header").classList.remove("responciveHeader");
//      }
//    });


// //--- сворачивается открытый header при увеличении окна 768

// window.onresize = function () {
//   if (window.innerWidth >= 999) {
//     $(".menu").removeClass("menu-active").find(".header__info").remove();
//     $(".info").removeClass("info-active");
//     $("body").removeClass("lock");
// // alert("");
//   }

// };







