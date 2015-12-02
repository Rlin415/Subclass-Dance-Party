var FunkyStepDancer = function(top, left, timeBetweenSteps) {
  FunkyDancer.call(this, top, left, timeBetweenSteps);
  this.stepped = false;
};

FunkyStepDancer.prototype = {
  constructor: FunkyStepDancer,
  __proto__: FunkyDancer.prototype,
  step: function(timeBetweenSteps) {
    FunkyDancer.prototype.step.call(this, timeBetweenSteps);
    var top = Number($(this.$node).css('top').slice(0, -2));
    var left = Number($(this.$node).css('left').slice(0, -2));

    if (this.stepped) {
      $(this.$node).css({
        top: top - 10,
        left: left - 10
      });
      this.stepped = false;
    } else {
      $(this.$node).css({
        top: top + 10,
        left: left + 10
      });
      this.stepped = true;
    }
  }
};
