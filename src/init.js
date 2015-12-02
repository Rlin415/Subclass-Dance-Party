$(document).ready(function(){
  window.dancers = [];
  window.taylor = {};

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    if (window.taylor.top && dancerMakerFunctionName === 'TaylorDancer') {
      alert('THERE CAN ONLY BE 1 TAYLOR!!');
      return;
    }

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    if (dancerMakerFunctionName === 'TaylorDancer') {
      dancer.$node.css({top: 200, left: 400});
      window.taylor.top = dancer.$node.css('top');
      window.taylor.left = dancer.$node.css('left');
    }

    if (window.taylor.top) {
      dancer.$node.css({'top': Number(window.taylor.top.slice(0, -2)) + Math.random() * 100});
      dancer.$node.css({'left': Number(window.taylor.left.slice(0, -2)) + Math.random() * 100});
    }

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.lineupButton').on('click', function(event) {
    var counter = 0;
    window.dancers.forEach(function(dancer) {
      dancer.lineup(counter);
      counter += 40;
    });
  });

});
