import Ball       from './ball';
// import Collision  from './collision';
import COLORS     from './colors';
import C          from './constants';

require('../../css/blocks/ball.postcss.css');
// let CLASSES = require('../../css/blocks/ball.postcss.css.json');

class Ball2 extends Ball {
  /*
    Method for initial module's render.
    @private
  */
  _render () {
    super._render();
    this.el.classList.add( 'ball--2' );
    this._addEyes();
  }
  /*
    Method to describe eyes motion.
    @private
  */
  _addEyes () {
    const EYE_DURATION = 100;
    const repeat = 2 * C.LINE1_DURATION/EYE_DURATION - 1;
    this.eyesTimeline = new mojs.Timeline({ repeat: repeat });
    this.timeline = new mojs.Timeline();

    const baseAngle = 160
    const opts = {
      parent:           this.face,
      radius:           8,
      fill:             'none',
      stroke:           COLORS.WHITE,
      strokeWidth:      4,
      // delay:         C.LINE1_DURATION,
      duration:         EYE_DURATION,
      easing:           'expo.out',
      isShowStart:      true,
      top:              '49%',
      strokeDasharray:  {'50%': '70%'},
      angle:            { [baseAngle]: 145 },
    }

    const returnOpts = {
      strokeDasharray:  '60%',
      angle:            baseAngle,
    }

    const eye1 = new mojs.Shape({
      ...opts,
      left:     '28%'
    }).then(returnOpts);

    const eye2 = new mojs.Shape({
      ...opts,
      left:     '76.25%'
    }).then(returnOpts);

    const mouth = new mojs.Shape({
      shape:        'zigzag',
      parent:       this.face,
      fill:         'none',
      stroke:       COLORS.BLACK,
      strokeWidth:  3,
      points:       5,
      radiusY:      4,
      radius:       10,
      // angle:       -45,
      isShowStart:  true,
      top:          '70%',
      left:         '52%',
      duration:     EYE_DURATION,
      scale:        { 1: 1.1 },
      isForce3d:    true
    }).then({ scale: 1 });

    const glareOpts = {
      parent:       this.face,
      fill:         COLORS.WHITE,
      radius:       2.5,
      opacity:      .85,
      left:         '25%',
      top:          '47%',
      duration:     EYE_DURATION/2,
      isShowStart:  true,
      scale:        { 1: 1.5 },
      x:            { 0: -2 },
      y:            { 0: -1 },
      isForce3d:    true
    }

    const glareReturnOpts = { scale: 1, x: 0, y: 0 }
    
    const glare1 = new mojs.Shape(glareOpts).then(glareReturnOpts);
    const glare2 = new mojs.Shape({
      ...glareOpts,
      radius:       2,
      left:         '72%',
      top:          '48%',
    }).then(glareReturnOpts);

    this.eyesTimeline.add( eye1, eye2, mouth, glare1, glare2 );
    this.timeline.add(
      this.eyesTimeline,
      // new Collision({ parent: this.el, delay: C.LINE1_DURATION, direction: -1 })
    )
  }
}

export default Ball2;