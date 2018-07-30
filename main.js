// SETTINGS
const intervalDuration = 5000
const amountOfSlides = 3

// FUNCTIONALITY
let index = 0

setInterval( () => {
   index = (index + 1) % amountOfSlides
   const lastSlide = amountOfSlides - 1
   const showNext = () => {
      $("[data-index='" + index + "']").stop().addClass("header__active")
   }

   if (index >= 1) {
      $("[data-index='" + (index - 1) + "']").stop().removeClass("header__active")
      showNext()
         
   // This resolved last iteration when carousel bugged on loop restart
   } else {
      $("[data-index='" + lastSlide + "']").stop().removeClass("header__active")
      showNext()
   }

}, intervalDuration)

