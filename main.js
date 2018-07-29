// SETTINGS
let intervalDuration = 5000
let amountOfSlides = 3

// FUNCTIONALITY
let index = 0

setInterval( () => {
   index = (index + 1) % amountOfSlides

   let lastSlide = amountOfSlides - 1

   if (index >= 1) {
      $("[data-index='" + (index - 1) + "']").stop().removeClass("header__active")
      $("[data-index='" + index + "']").stop().addClass("header__active")
         
   // This resolved last iteration when carousel bugged on loop restart
   } else {
      $("[data-index='" + lastSlide + "']").stop().removeClass("header__active")
         $("[data-index='" + index + "']").stop().addClass("header__active")
   }

}, intervalDuration)

