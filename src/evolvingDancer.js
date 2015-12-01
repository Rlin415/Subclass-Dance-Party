var EvolvingDancer = function (top, left, timeBetweenSteps) {
  BlinkyDancer.apply(this, arguments);
};

EvolvingDancer.prototype = {
  step: function (timeBetweenSteps) {
    BlinkyDancer.prototype.step.call(this, timeBetweenSteps);
    this.$node.toggleClass('transform');
  }
};
