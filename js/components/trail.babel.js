import Module from './module';
import C      from './constants';

class Trail extends Module {
  _declareOpts () {
    const p = this._props;
    this.trailOpts = {
      fill:       'none',
      stroke:     'white',
      shape:      'curve',
      radiusY:    3,
      radiusX:    25,
      strokeDasharray:  '100%',
      strokeDashoffset: {'100%': '0%'},
      top:        '26%',
      left:       -42,
      angle:      205,
      delay:      p.delay,
      duration:   C.LINE1_DURATION/4,
      strokeWidth: { 20: 7 },
      isShowStart: true,
      easing:     'linear.none',
      opacity:    .75
    }

    this.trailReturn = {
      easing: 'linear.none',
      strokeDashoffset: '100%',
    }
  }

  _declareOpts2 () {
    const p = this._props;

    this.trail2Opts = {
      ...this.trailOpts,
      top: '42%',
      left: this.trailOpts.left + 5,
      angle: this.trailOpts.angle - 3,
      radiusX: 8,
      radiusY: 1.5,
    }
  }

  _render () {
    super._render();

    this._declareOpts()
    this._declareOpts2()

    this.trailOpts.parent = this.el;
    this.trail2Opts.parent = this.el;

    const trail1 = new mojs.Shape(this.trailOpts)
      .then({
        duration: C.LINE1_DURATION/5,
        ...this.trailReturn
      });

    const trail2 = new mojs.Shape(this.trail2Opts)
    .then({
      duration: C.LINE1_DURATION/6,
      ...this.trailReturn
    });

    this.timeline = new mojs.Timeline();
    this.timeline.add( trail1, trail2 );
  }
}

export default Trail;