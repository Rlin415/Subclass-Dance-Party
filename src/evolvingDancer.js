var EvolvingDancer = function (top, left, timeBetweenSteps) {
  BlinkyDancer.apply(this, arguments);
};

EvolvingDancer.prototype = {
  constructor: EvolvingDancer,
  __proto__: BlinkyDancer.prototype,
  step: function (timeBetweenSteps) {
    BlinkyDancer.prototype.step.call(this, timeBetweenSteps);
    this.$node.toggleClass('transform');
  }
};
