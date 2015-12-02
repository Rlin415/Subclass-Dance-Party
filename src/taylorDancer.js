var TaylorDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node.append("<img src='taylor.png' height='50px' width='50px'>");
  this.$node.removeClass('dancer');
  this.$node.addClass('taylorDancer');
};

TaylorDancer.prototype = {
  constructor: TaylorDancer,
  __proto__: FunkyDancer.prototype,
  step: function(timeBetweenSteps) {
    FunkyDancer.prototype.step.call(this, timeBetweenSteps);
  }
};
