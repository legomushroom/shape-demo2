import Trail  from './trail';
import C      from './constants';

class RightTrail extends Trail {

  _vars () {
    super._vars();
    this.trailOpts.strokeDashoffset = {'-100%': '0%'};
    this.trailOpts.left = '140%';
    this.trailOpts.angle = 170;
    this.trailOpts.top   = '31%';
    this.trailReturn.strokeDashoffset =  '-100%'
    // this.trailOpts = {
    //   fill:       'none',
    //   stroke:     'white',
    //   shape:      'arc',
    //   radiusY:    3,
    //   radiusX:    20,
    //   strokeDasharray:  '100%',
    //   strokeDashoffset: {'100%': '0%'},
    //   top:        '26%',
    //   left:       -40,
    //   angle:      205,
    //   delay:      p.delay,
    //   duration:   C.LINE1_DURATION/4,
    //   strokeWidth: { 3: 1 },
    //   isShowStart: true,
    //   easing:     'linear.none'
    // }
  }
}

export default RightTrail;