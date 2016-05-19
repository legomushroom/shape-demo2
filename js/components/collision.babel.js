import Module from './module';
import C      from './constants';

class Collision extends Module {

  _declareDefaults () {
    super._declareDefaults();
    this._defaults.direction = 1;
  }

  _render () {
    super._render();

    const direction = this._props.direction;

    const yShift = 70;
    const collisionOpts = {
      fill: 'white',
      y:    { 0: -yShift },
      parent: this.el,
      delay: this._props.delay,
      radius: 5,
      scale:  { 1: 0 },
      top: '50%',
      left: ( direction === 1 ) ? '100%' : '110%',
      duration:  300,
      isTimelineLess: true,
      isForce3d: true
    }

    const collision1 = new mojs.Shape(collisionOpts);

    const collision2 = new mojs.Shape({
      ...collisionOpts,
      y:    { 0: yShift },
      direction: -1
    });

    const collision3 = new mojs.Shape({
      ...collisionOpts,
      direction: -1,
      y:    { 0: yShift/1.5 },
      x:    { 0: 10 },
    });

    const starOpts = {
      parent: this.el,
      shape: 'cross',
      fill: 'none',
      stroke: 'white',
      strokeWidth: 3,
      direction: 1,
      left: collisionOpts.left,
      radius: {9: 0},
      y:    { 0: -yShift/5 },
      delay: this._props.delay + collisionOpts.duration/2,
      x:    'rand(-15, 15)',
    }

    const collision4 = new mojs.Shape( starOpts );

    const collision5 = new mojs.Shape({
      ...starOpts,
      top:    '50%',
      radius: {8: 0},
      y:      { 0: yShift/2 },
      x:      0
    });

    const collision6 = new mojs.Shape({
      ...starOpts,
      top:    '50%',
      radius: {9: 0},
      y:      { 0: yShift },
      x:      { 0: 10 },
      delay:  starOpts.delay - 25
    });

    this.timeline = new mojs.Timeline();
    this.timeline.add(
      collision1, collision2, collision3,
      collision4, collision5, collision6
    );
  }
}

export default Collision;