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
      radius: {5: 0},
      top: '50%',
      left: ( direction === 1 ) ? '100%' : '110%',
      duration:  300
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

    const collision4 = new mojs.Shape({
      parent: this.el,
      shape: 'cross',
      fill: 'none',
      stroke: 'white',
      direction: 1,
      left: collisionOpts.left,
      radius: {8: 0},
      y:    { 0: -yShift/5 },
      delay: this._props.delay + collisionOpts.duration/2,
      x:    'rand(-15, 15)',
    });

    const collision5 = new mojs.Shape({
      parent: this.el,
      shape: 'cross',
      fill: 'none',
      stroke: 'white',
      direction: 1,
      left: collisionOpts.left,
      top:    '50%',
      radius: {7: 0},
      y:      { 0: yShift/2 },
      delay: this._props.delay + collisionOpts.duration/2,
      // x:    'rand(-15, 15)',
    });

    this.timeline = new mojs.Timeline();
    this.timeline.add(
      collision1, collision2, collision3,
      collision4, collision5
    );
  }
}

export default Collision;