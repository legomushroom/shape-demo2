import Ball   from './ball';
import COLORS from './colors';
import C      from './constants';

require('../../css/blocks/ball.postcss.css');
// let CLASSES = require('../../css/blocks/ball.postcss.css.json');

class Ball2 extends Ball {
  /*
    Method for initial module's render.
    @private
  */
  _render () {
    super._render();
    this.el.classList.add( 'ball--1' );
    this._addEyes();
  }
  /*
    Method to describe eyes motion.
    @private
  */
  _addEyes () {
    const EYE_DURATION = 100;
    // const repeat = 2 * C.LINE1_DURATION/EYE_DURATION - 1;
    this.timeline = new mojs.Timeline();

    const opts = {
      parent:       this.face2,
      fill:         COLORS.BLACK,
      radius:       3,
      scale:        { 1: 2 },
      isShowStart:  true,
      top:          '49.5%',
      x:            { [-3] : 0 },
      y:            { [2] : 0 },
      easing:       'expo.in',
      duration:     C.LINE1_DURATION
    }

    const eye1 = new mojs.Shape({
      ...opts,
      left: '27.75%'
    }).then({
      delay: 2*C.LINE1_DURATION,
      x: -3,
      y:  2,
      scale: 1
    });

    const eye2 = new mojs.Shape({
      ...opts,
      left:         '77.85%',
      top:          '48.35%',
    }).then({
      delay: 2*C.LINE1_DURATION,
      x: -3,
      y:  2,
      scale: 1
    });

    // const lidOpts = {
    //   ...opts,
    //   parent:     this.face,
    //   shape:      'arc',
    //   fill:       COLORS.BLACK,
    //   stroke:     'none',
    //   radiusX:     {10 : 5},
    //   radiusY:     {8 : 4},
    //   // top:        '6%',
    //   left:       '28%',
    //   scale:      1,
    //   x:          0,
    //   y:          {0 : 6},
    //   angle:      180
    // }

    // const lid1 = new mojs.Shape( lidOpts );

    const mouthDuration = 50;
    const mouth = new mojs.Shape({
      fill:         COLORS.BLACK,
      // stroke:       COLORS.BLACK,
      // strokeWidth:  2,
      radiusX:      { 2: 8 },
      radiusY:      { 2: 11 },
      isShowStart:  true,
      parent:       this.el,
      left:         '50%',
      top:          '75%',
      duration:     mouthDuration,
      delay:        3*C.LINE1_DURATION,
      x:            { 0: -10 }
    }).then({
      radiusX:      2,
      radiusY:      2,
      x:           -8
    }).then({
      radiusX:      10,
      radiusY:      6,
      x:           -6
    }).then({
      radiusX:      2,
      radiusY:      2,
      // x:           -4
    }).then({
      radiusX:      8,
      radiusY:      12,
      // x:           -2
    }).then({
      radiusX:      2,
      radiusY:      2,
      // x:            0,
      isShowEnd:    false
    });

    const noise = mojs.easing.path('M0,100 L24.2114672,99.7029845 L27.0786839,106.645089 L29.2555809,93.3549108 L32.0340385,103.816964 L35.3459816,94.6015626 L38.3783493,103.092634 L41.0513382,95.9547991 L43.7739944,106.645089 L45.6729927,96.8973214 L50,105.083147 L53.3504448,93.3549108 L57.7360497,103.816964 L60.8616066,95.9547991 L65.0345993,103.092634 L68.6997757,97.5106029 L71.6646194,102.03125 L75.5066986,96.5672433 L78.2949219,102.652344 L81.0313873,96.8973214 L84.0174408,102.328264 L86.0842667,97.7332592 L88.7289352,101.606306 L91.1429977,98.3533763 L94.3822556,101.287388 L97.0809174,98.7254467 L100,100');

    const mouthNoize = new mojs.Tween({
      duration: 3*C.LINE1_DURATION,
      onUpdate: ( ep, p ) => {
        let proc = noise(p);
        this.face2.style[ 'transform' ] = `
          translateX(${ 25*proc }px)
          translateY(${ -25*proc }px)
        `;
        this.face.style[ 'transform' ] = `
          translateX(${ -15*proc }px)
          translateY(${ 15*proc }px)
        `;
      }
    });

    const mouthBg = new mojs.Shape({
      fill:       'white',
      shape:      'circle',
      top:        '74%',
      left:       '50%',
      // stroke:       COLORS.BLACK,
      // strokeWidth: 3,
      parent: this.face2,
      // isShowStart: true,
      // isShowEnd:   false,
      // radiusX:    {0: 20},
      radiusY:    { 0: 9.5 },
      easing:     'expo.out',
      radiusX:    20,
      rx:         5,
      duration: C.LINE1_DURATION
    }).then({
      delay: C.LINE1_DURATION,
      isShowEnd: false,
    });

    const mouth0 = new mojs.Shape({
      fill: 'none',
      shape: 'zigzag',
      angle: -45,
      top:      '76%',
      left:     '50%',
      stroke:   COLORS.BLACK,
      strokeWidth: 3,
      parent: this.face2,
      // isShowStart: true,
      radius:     10 ,
      points:      4,
      duration: C.LINE1_DURATION
    }).then({
      delay: C.LINE1_DURATION,
      isShowEnd: false,
    });

    this.timeline.add( eye1, eye2, mouth, mouth0, mouthNoize, mouthBg );
  }
}

export default Ball2;