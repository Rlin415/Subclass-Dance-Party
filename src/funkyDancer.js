var FunkyDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('funkyDancer');
};

FunkyDancer.prototype = {
  constructor: FunkyDancer,
  __proto__: Dancer.prototype,
  step: function (timeBetweenSteps){
    Dancer.prototype.step.call(this, timeBetweenSteps);
    this.$node.toggleClass('rotate45Deg');
  }
};
