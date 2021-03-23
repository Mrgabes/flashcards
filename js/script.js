// $(document).ready(function() {
//   $(".container-2").click(function() {
//     $(".col").fadeToggle();
//     $(".col").fadeToggle();
//   })}
// $(document).ready(function() {
//   $("button").click(function() {
//     $("#green-showing").fadeToggle("black");
//     $("#green-hidden").fadeToggle();
//   });

//   $(document).ready(function() {
//     $(".clickable").click(function() {
//       $(".front").fadeToggle();
//       $(".back").fadeToggle();
//     });

    $(document).ready(function() {

        // this shows the back and hides the front
        $(".front1").click(function() {
          // this is what happens after you click on front1
          // 1. first we hide the front
          $(".front1").hide();
          // 2. then we show the back
          $(".back1").show();
        })

        // this hides the back and shows the front
       $(".back1").click(function() {
      //  this will hide back
         $(".back1").hide();
//        this will show the front
          $(".front1").show();
       })
    });


/* <div class="col">

.col.front1 {
  background: red;
} */

// $(document)
// .ready(
//   // do first thing
//   // do second thing

//   $("h1")
//     .click(
//       // do something with the h1 when it's clicked
//     )


// )




