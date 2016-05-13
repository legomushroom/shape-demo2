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
  }
}

export default RightTrail;