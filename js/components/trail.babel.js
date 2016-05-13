import Module from './module';
import C      from './constants';

class Trail extends Module {

  _vars () {
    const p = this._props;
    this.trailOpts = {
      fill:       'none',
      stroke:     'white',
      shape:      'arc',
      radiusY:    3,
      radiusX:    20,
      strokeDasharray:  '100%',
      strokeDashoffset: {'100%': '0%'},
      top:        '26%',
      left:       -40,
      angle:      205,
      delay:      p.delay,
      duration:   C.LINE1_DURATION/4,
      strokeWidth: { 3: 1 },
      isShowStart: true,
      easing:     'linear.none'
    }
    this.trail2Opts = {}

    this.trailReturn = {
      easing: 'linear.none',
      strokeDashoffset: '100%',
    }
  }

  _render () {
    super._render();

    this.trailOpts.parent = this.el;

    const trail1 = new mojs.Shape(this.trailOpts)
      .then({
        duration: C.LINE1_DURATION/5,
        ...this.trailReturn
      });

    const trail2 = new mojs.Shape({
      ...this.trailOpts,
      top: '47%',
      left: this.trailOpts.left + 5,
      angle: this.trailOpts.angle - 5,
      radiusX: 8,
      radiusY: 1.5,
    })
    .then({
      duration: C.LINE1_DURATION/6,
      ...this.trailReturn
    });

    this.timeline = new mojs.Timeline();
    this.timeline.add( trail1, trail2 );
  }
}

export default Trail;