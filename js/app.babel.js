import Polyfill       from 'classlist-polyfill';
import MojsPlayer     from 'mojs-player'
import Module         from './components/module';
import Ball           from './components/ball';
import Ball1          from './components/ball1';
import Ball2          from './components/ball2';
import Ball3          from './components/ball3';
import Ball4          from './components/ball4';
import COLORS         from './components/colors';
import C              from './components/constants';
import Dust           from './components/dust';

require('../css/main.postcss.css');
const CLASSES = require('../css/main.postcss.css.json');

require('../css/blocks/line.postcss.css');
const LINE_CLASSES = require('../css/blocks/line.postcss.css.json');

require('../css/blocks/scene.postcss.css');
const SCENE_CLASSES = require('../css/blocks/scene.postcss.css.json');

const LINE2_SHIFT = 8;
const LINE3_SHIFT = 12;
const LINE1_SHIFT = 45;

const LINE2_BOUNCE_DURATION = 2*C.LINE1_DURATION;
const LINE3_BOUNCE_DURATION = 2*C.LINE1_DURATION;


const COLLIDE_DURATION = .25 * C.LINE1_DURATION;
const BOUNCE_DURATION  = C.LINE1_DURATION - COLLIDE_DURATION;

const CIRCLE_RADIUS = 48;
const LINE_HEIGHT   = 176/2;

const opts = {
  shape:        'line',
  stroke:       COLORS.YELLOW,
  strokeWidth:  3,
  radius:       LINE_HEIGHT,
  left:         '50%', top: '50%',
  origin:       '0 50%',
  angle:        { [ 90 - LINE1_SHIFT ] : 90 },
  easing:       'cubic.in',
  isShowStart:  true,
  y:           -2*LINE_HEIGHT,
  isForce3d:    true
};

class Demo extends Module {
  /*
    Method for initial module's render.
    @private
  */
  _render () {
    // super._render();

    // this.el.classList.add( 'scene' );
    this.el = document.querySelector('#js-scene');
    opts.parent = this.el;

    const noise = mojs.easing.path('M0,100 C0,100 2.08241272,101.287388 3.78271484,102.328264 C5.35552883,99.9999999 7.00048828,95.208496 7.00048828,95.208496 L10.1762695,103.816964 L12.7734375,95.9547991 L19.3125,102.328264 L22.2539062,95.208496 L27.0786839,106.645089 L29.2555809,93.3549108 L32.0340385,103.816964 L35.3459816,94.6015626 L38.3783493,103.092634 L41.0513382,95.9547991 L43.7739944,106.645089 L45.6729927,96.8973214 L50,105.083147 L53.3504448,93.3549108 L57.7360497,103.816964 L60.8616066,95.9547991 L65.0345993,103.092634 L68.6997757,97.5106029 L71.6646194,102.03125 L75.5066986,96.5672433 L78.2949219,102.652344 L81.0313873,96.8973214 L84.0174408,102.328264 L86.0842667,97.7332592 L88.7289352,101.606306 L91.1429977,98.3533763 L94.3822556,101.287388 L97.0809174,98.7254467 L100,100');
    const collisionNoize = new mojs.Tween({
      duration: C.LINE1_DURATION,
      delay:    C.LINE1_DURATION,
      repeat:   1,
      onUpdate: ( ep, p ) => {
        let proc = noise(p);
        this.el.style[ 'transform' ] = `
          translateX(${ 50*proc }px)
          translateY(${ -50*proc }px)
        `;
      }
    });

    const BASE_SHIFT = 2.6*LINE_HEIGHT;

    const line = new mojs.Shape({
        ...opts,
        x:          BASE_SHIFT,
        duration:   C.LINE1_DURATION
      })
      .then({
        angle: 90 - LINE1_SHIFT,
        delay: 2*C.LINE1_DURATION,
        easing: 'cubic.out'
      });

    const ball1 = new Ball1({ parent: line.el });

    // line.el.parentNode.style[ 'backface-visibility' ] = 'hidden';
    // line.el.parentNode.style[ '-webkit-backface-visibility' ] = 'hidden';

    const bounceReturn = {
      angle:      90,
      duration:   BOUNCE_DURATION,
      easing:     'bounce.out'
    }

    const line2 = new mojs.Shape({
      ...opts,
      easing:       'cubic.out',
      x:            BASE_SHIFT - 2*CIRCLE_RADIUS,
      angle:        { 90 : 90 + LINE2_SHIFT },
      delay:        C.LINE1_DURATION,
      duration:     COLLIDE_DURATION,
    })
    .then(bounceReturn)
    .then({
      angle:      90 - LINE3_SHIFT,
      duration:   COLLIDE_DURATION,
      delay:      C.LINE1_DURATION,
      easing:     'cubic.out'
    })
    .then(bounceReturn);

    const ball2 = new Ball2({ parent: line2.el });

    const line3 = new mojs.Shape({
      ...opts,
      easing:       'cubic.out',
      x:            BASE_SHIFT - 4*CIRCLE_RADIUS,
      angle:        { 90 : 90 + LINE3_SHIFT },
      delay:        C.LINE1_DURATION,
      duration:     COLLIDE_DURATION,
    })
    .then(bounceReturn)
    .then({
      angle:      90 - LINE2_SHIFT,
      duration:   COLLIDE_DURATION,
      delay:      C.LINE1_DURATION,
      easing:     'cubic.out'
    })
    .then(bounceReturn);
    const ball3 = new Ball3({ parent: line3.el });

    const line4 = new mojs.Shape({
      ...opts,
      x:            BASE_SHIFT - 6*CIRCLE_RADIUS,
      angle:        { 90 : 90 + LINE1_SHIFT },
      easing:       'cubic.out',
      duration:     C.LINE1_DURATION,
      delay:        C.LINE1_DURATION,
    })
    .then({  angle: 90, easing: 'cubic.in', duration: C.LINE1_DURATION });
    // line4.el.classList.add( LINE_CLASSES.line );
    const ball4 = new Ball4({ parent: line4.el });

    const shadowOpts = {
      fill:         COLORS.BLACK,
      opacity:      .15,
      radiusX:      47,
      radiusY:      7,
      parent:       this.el,
      left:         '61%',
      top:          '90%',
      isShowStart:  true,
      easing:       'cubic.out',
      x:            { 0: -4*LINE3_SHIFT },
      delay:        C.LINE1_DURATION,
      duration:     COLLIDE_DURATION,
      isForce3d:    true
    }

    const shadowBounce = {
      ...bounceReturn,
      angle:      0,
      x:          0
    }
    
    const shadow2 = new mojs.Shape(shadowOpts)
      .then(shadowBounce)
      .then({
        ...shadowOpts,
        x:  { 0: 4*LINE3_SHIFT },
      })
      .then(shadowBounce);

    const shadow3Opts = {
      ...shadowOpts,
      left:         '37%',
    }
    const shadow3 = new mojs.Shape(shadow3Opts)
      .then(shadowBounce)
      .then({
        ...shadow3Opts,
        x:  { 0: 4*LINE3_SHIFT },
      })
      .then(shadowBounce);

    const shadow1Opts = {
      ...shadowOpts,
      left:       '85%',
      x:          { [3.75*LINE1_SHIFT] : 0 },
      duration:   C.LINE1_DURATION,
      easing:     'cubic.in',
      opacity:    {.03 : .15},
      delay:      0
    }

    const shadow1 = new mojs.Shape(shadow1Opts)
      .then({
        delay: 2 * C.LINE1_DURATION,
        x: 3.75*LINE1_SHIFT,
        opacity: .03,
        easing: 'cubic.out'
      });

    const shadow4 = new mojs.Shape({
      ...shadow1Opts,
      delay: C.LINE1_DURATION,
      left: '13%',
      x:   { 0 : -3.75*LINE1_SHIFT },
      easing: 'cubic.out',
      opacity:  {.15 : .03},
    })
      .then({
        delay: 0,
        x: 0,
        opacity: .15,
        easing: 'cubic.in'
      });

    const mainTimeline = new mojs.Timeline();

    mainTimeline.add(
      line, line2, line3, line4,
      ball1, ball2, ball3, ball4,
      shadow1, shadow2, shadow3, shadow4,
      new Dust({ delay: .5*C.LINE1_DURATION, right: '-120px' }),
      new Dust({ delay: 1.1*C.LINE1_DURATION, right: '70%' }),
      collisionNoize
      // new Dust({ delay: 2.5*C.LINE1_DURATION, right: '102%', direction: -1 }),
      // new Dust({ delay: 3.1*C.LINE1_DURATION, right: '-50px', direction: -1 }),
    )

    ;( new MojsPlayer({ add: mainTimeline }) )
      .el.style[ 'z-index' ] = 10;

  }
}

new Demo;

// if ( (typeof define === "function") && define.amd ) {
//   define(function () { return MojsPlayer; });
// }
// if ( (typeof module === "object") && (typeof module.exports === "object") ) {
//   module.exports = MojsPlayer;
// }

// let _global = ( typeof global !== 'undefined' ) ? global : window;
// _global.MojsPlayer = MojsPlayer;

export default Demo;