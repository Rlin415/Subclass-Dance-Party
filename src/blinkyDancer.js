var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

BlinkyDancer.prototype = {
  constructor: BlinkyDancer,
  __proto__: Dancer.prototype,
  step: function(timeBetweenSteps){
    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this, timeBetweenSteps);
    // toggle() is a jQuery method to show/hide the <span> tag.
    this.$node.toggleClass('transparent');
  }
};
